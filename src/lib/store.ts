import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "cavalheiro.dev@gmail.com";

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
}

export interface Bet {
  userId: string;
  matchId: string;
  homeScore: number;
  awayScore: number;
  updatedAt: string;
}

export interface StageState {
  open: Record<string, boolean>;
}

let sessionUser: User | null = null;

function toAppUser(user: any): User {
  const email = user.email ?? "";

  return {
    id: user.id,
    name: user.user_metadata?.name ?? user.user_metadata?.username ?? email,
    email,
    isAdmin: email.toLowerCase() === ADMIN_EMAIL,
    createdAt: user.created_at,
  };
}

function notify() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("bolao:change"));
  }
}

export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  const emailLc = email.trim().toLowerCase();

  const { data, error } = await supabase.auth.signUp({
    email: emailLc,
    password,
    options: {
      emailRedirectTo: window.location.origin,
      data: {
        name: name.trim(),
      },
    },
  });

  if (error) throw new Error(error.message);
  if (!data.user) throw new Error("Erro ao criar usuário");

  sessionUser = toAppUser(data.user);

  await upsertCurrentProfile(sessionUser);

  notify();

  return sessionUser;
}

export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  const emailLc = email.trim().toLowerCase();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: emailLc,
    password,
  });

  if (error) throw new Error("E-mail ou senha incorretos");
  if (!data.user) throw new Error("Erro ao fazer login");

  sessionUser = toAppUser(data.user);

  // Não trava o login se o profile der problema
  upsertCurrentProfile(sessionUser).catch((err) => {
    console.warn("Could not upsert profile after login:", err);
  });

  notify();

  return sessionUser;
}

export async function logoutUser() {
  sessionUser = null;

  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error("Erro no Supabase signOut:", error);
  }

  if (typeof window !== "undefined") {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("sb-")) {
        localStorage.removeItem(key);
      }
    });
  }

  notify();
}

export async function loadCurrentUser(): Promise<User | null> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  sessionUser = user ? toAppUser(user) : null;

  if (sessionUser) {
    upsertCurrentProfile(sessionUser).catch((err) => {
      console.warn("Could not upsert profile on load:", err);
    });
  }

  return sessionUser;
}

export function currentUser(): User | null {
  return sessionUser;
}

export function subscribe(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  const handler = () => cb();

  window.addEventListener("bolao:change", handler);

  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    sessionUser = session?.user ? toAppUser(session.user) : null;

    cb();
  });

  return () => {
    window.removeEventListener("bolao:change", handler);
    data.subscription.unsubscribe();
  };
}

async function upsertCurrentProfile(user: User) {
  const { error } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      is_admin: user.isAdmin,
      created_at: user.createdAt,
    },
    {
      onConflict: "id",
    }
  );

  if (error) {
    console.warn("Could not upsert profile:", error.message);
  }
}

const STAGE_KEY = "bolao_stage_state";

export function getStageState(): StageState {
  const raw = localStorage.getItem(STAGE_KEY);

  if (!raw) {
    return {
      open: {
        groups: true,
        round16: false,
        quarterfinals: false,
        semifinals: false,
        final: false,
      },
    };
  }

  return JSON.parse(raw);
}

export function setStageState(stageState: StageState) {
  localStorage.setItem(STAGE_KEY, JSON.stringify(stageState));
  notify();
}

export function setStageOpen(stageId: string, open: boolean) {
  const current = getStageState();

  const next = {
    ...current,
    open: {
      ...current.open,
      [stageId]: open,
    },
  };

  setStageState(next);
}

export async function saveBet(bet: Bet) {
  console.log("Entrou no saveBet:", bet);

  const { error } = await supabase
    .from("predictions")
    .upsert(
      {
        user_id: bet.userId,
        match_id: bet.matchId,
        home_score: bet.homeScore,
        away_score: bet.awayScore,
        updated_at: bet.updatedAt,
      },
      {
        onConflict: "user_id,match_id",
      }
    );

  console.log("Resposta Supabase saveBet:", {
    error,
  });

  if (error) {
    console.error("Erro Supabase saveBet:", error);
    throw error;
  }

  notify();
}

export async function getUserBets(
  userId: string
): Promise<Record<string, Bet>> {
  const { data, error } = await supabase
    .from("predictions")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;

  return Object.fromEntries(
    (data ?? []).map((b) => [
      b.match_id,
      {
        userId: b.user_id,
        matchId: b.match_id,
        homeScore: b.home_score,
        awayScore: b.away_score,
        updatedAt: b.updated_at,
      },
    ])
  );
}

export async function getUserBet(
  userId: string,
  matchId: string
): Promise<Bet | null> {
  const { data, error } = await supabase
    .from("predictions")
    .select("*")
    .eq("user_id", userId)
    .eq("match_id", matchId)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  return {
    userId: data.user_id,
    matchId: data.match_id,
    homeScore: data.home_score,
    awayScore: data.away_score,
    updatedAt: data.updated_at,
  };
}

export async function getBets(): Promise<Bet[]> {
  const { data, error } = await supabase
    .from("predictions")
    .select("*")
    .order("updated_at", { ascending: true });

  if (error) throw error;

  return (data ?? []).map((b) => ({
    userId: b.user_id,
    matchId: b.match_id,
    homeScore: b.home_score,
    awayScore: b.away_score,
    updatedAt: b.updated_at,
  }));
}

export async function getUsers(): Promise<User[]> {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw error;

  return (data ?? []).map((u) => ({
    id: u.id,
    name: u.name ?? u.email,
    email: u.email,
    isAdmin: u.is_admin,
    createdAt: u.created_at,
  }));
}

export function betsToCSV(bets: Bet[], users: User[]) {
  const header = [
    "user_id",
    "user_name",
    "email",
    "match_id",
    "home_score",
    "away_score",
    "updated_at",
  ];

  const rows = bets.map((b) => {
    const user = users.find((u) => u.id === b.userId);

    return [
      b.userId,
      user?.name ?? "",
      user?.email ?? "",
      b.matchId,
      b.homeScore,
      b.awayScore,
      b.updatedAt,
    ];
  });

  return [header, ...rows]
    .map((row) =>
      row.map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`).join(",")
    )
    .join("\n");
}

export function downloadCSV(filename: string, csv: string) {
  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}

export function clearBets() {
  console.warn("clearBets is disabled because bets are stored in Supabase.");
}

export interface SpecialPrediction {
  userId: string;
  category: string;
  prediction: string;
  updatedAt: string;
}

export async function saveSpecialPrediction(item: SpecialPrediction) {
  const { error } = await supabase.from("special_predictions").upsert(
    {
      user_id: item.userId,
      category: item.category,
      prediction: item.prediction,
      updated_at: item.updatedAt,
    },
    {
      onConflict: "user_id,category",
    }
  );

  if (error) throw error;

  notify();
}

export async function getUserSpecialPredictions(
  userId: string
): Promise<Record<string, SpecialPrediction>> {
  const { data, error } = await supabase
    .from("special_predictions")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;

  return Object.fromEntries(
    (data ?? []).map((item) => [
      item.category,
      {
        userId: item.user_id,
        category: item.category,
        prediction: item.prediction,
        updatedAt: item.updated_at,
      },
    ])
  );
}