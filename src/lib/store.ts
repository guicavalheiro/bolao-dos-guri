import { supabase } from "@/lib/supabase";
import { MATCHES, TEAMS, type Stage } from "@/lib/data/matches";

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

export async function registerUser(name: string, email: string, password: string): Promise<User> {
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

export async function loginUser(email: string, password: string): Promise<User> {
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
    },
  );

  if (error) {
    console.warn("Could not upsert profile:", error.message);
  }
}

const STAGE_KEY = "bolao_stage_state";

const DEFAULT_STAGE_OPEN: Record<Stage, boolean> = {
  group: true,
  r32: false,
  r16: false,
  qf: false,
  sf: false,
  third: false,
  final: false,
};

const LEGACY_STAGE_KEYS: Record<string, Stage> = {
  groups: "group",
  round32: "r32",
  round16: "r16",
  quarterfinals: "qf",
  semifinals: "sf",
};

function normalizeStageOpen(raw: Record<string, boolean>): Record<Stage, boolean> {
  const result = { ...DEFAULT_STAGE_OPEN };

  for (const [key, value] of Object.entries(raw)) {
    const stageId = LEGACY_STAGE_KEYS[key] ?? key;

    if (stageId in DEFAULT_STAGE_OPEN) {
      result[stageId as Stage] = value;
    }
  }

  return result;
}

export function isStageOpen(stageId: Stage): boolean {
  return getStageState().open[stageId] ?? false;
}

export function getStageState(): StageState {
  const raw = localStorage.getItem(STAGE_KEY);

  if (!raw) {
    return { open: { ...DEFAULT_STAGE_OPEN } };
  }

  const parsed = JSON.parse(raw) as StageState;

  return {
    open: normalizeStageOpen(parsed.open ?? {}),
  };
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

  const { error } = await supabase.from("predictions").upsert(
    {
      user_id: bet.userId,
      match_id: bet.matchId,
      home_score: bet.homeScore,
      away_score: bet.awayScore,
      updated_at: bet.updatedAt,
    },
    {
      onConflict: "user_id,match_id",
    },
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

export async function getUserBets(userId: string): Promise<Record<string, Bet>> {
  const { data, error } = await supabase.from("predictions").select("*").eq("user_id", userId);

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
    ]),
  );
}

export async function getUserBet(userId: string, matchId: string): Promise<Bet | null> {
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
    .map((row) => row.map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`).join(","))
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
    },
  );

  if (error) throw error;

  notify();
}

export async function getUserSpecialPredictions(
  userId: string,
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
    ]),
  );
}

export async function forgotPassword(email: string) {
  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });
}

/* ===========================
   GROUPS
=========================== */

export interface Group {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  createdAt: string;
  enableSpecialPredictions: boolean;
}

export async function createGroup(ownerId: string, name: string, description = "") {
  const { data, error } = await supabase
    .from("groups")
    .insert({
      owner_id: ownerId,
      name,
      description,
    })
    .select()
    .single();

  if (error) throw error;

  // dono entra automaticamente
  await supabase.from("group_members").insert({
    group_id: data.id,
    user_id: ownerId,
    role: "owner",
  });

  notify();

  return data;
}

export async function getGroups(): Promise<Group[]> {
  const { data, error } = await supabase.from("groups").select("*").order("created_at");

  if (error) throw error;

  return (data ?? []).map((g) => ({
    id: g.id,
    name: g.name,
    description: g.description,
    ownerId: g.owner_id,
    createdAt: g.created_at,
    enableSpecialPredictions: g.enable_special_predictions,
  }));
}

export async function getUserGroups(userId: string) {
  const { data, error } = await supabase
    .from("group_members")
    .select(
      `
        role,
        groups(*)
      `,
    )
    .eq("user_id", userId);

  if (error) throw error;

  return data;
}

export async function requestJoinGroup(groupId: string, userId: string) {
  const { error } = await supabase.from("group_join_requests").insert({
    group_id: groupId,
    user_id: userId,
  });

  if (error) throw error;

  notify();
}

export async function getPendingRequestsForOwner(ownerId: string) {
  const { data: ownerGroups, error: groupsError } = await supabase
    .from("groups")
    .select("id,name")
    .eq("owner_id", ownerId);

  if (groupsError) throw groupsError;

  const groupIds = (ownerGroups ?? []).map((group) => group.id);

  if (groupIds.length === 0) return [];

  const { data: requests, error: requestsError } = await supabase
    .from("group_join_requests")
    .select("*")
    .in("group_id", groupIds)
    .eq("status", "pending");

  if (requestsError) throw requestsError;

  const userIds = [...new Set((requests ?? []).map((req) => req.user_id))];

  const { data: profiles, error: profilesError } = await supabase
    .from("profiles")
    .select("id,name,email")
    .in("id", userIds);

  if (profilesError) throw profilesError;

  return (requests ?? []).map((req) => ({
    ...req,
    profile: profiles?.find((profile) => profile.id === req.user_id),
    group: ownerGroups?.find((group) => group.id === req.group_id),
  }));
}
export async function approveJoinRequest(requestId: number, groupId: string, userId: string) {
  const { error } = await supabase.from("group_members").insert({
    group_id: groupId,
    user_id: userId,
    role: "member",
  });

  if (error) throw error;

  await supabase
    .from("group_join_requests")
    .update({
      status: "approved",
    })
    .eq("id", requestId);

  notify();
}

export async function rejectJoinRequest(requestId: number) {
  await supabase
    .from("group_join_requests")
    .update({
      status: "rejected",
    })
    .eq("id", requestId);

  notify();
}

export async function getUserJoinRequests(userId: string) {
  const { data, error } = await supabase
    .from("group_join_requests")
    .select("*")
    .eq("user_id", userId)
    .eq("status", "pending");

  if (error) throw error;

  return data ?? [];
}

export async function getGroupById(groupId: string): Promise<Group | null> {
  const { data, error } = await supabase.from("groups").select("*").eq("id", groupId).maybeSingle();

  if (error) throw error;
  if (!data) return null;

  return {
    id: data.id,
    name: data.name,
    description: data.description,
    ownerId: data.owner_id,
    createdAt: data.created_at,
    enableSpecialPredictions: data.enable_special_predictions,
  };
}

export async function updateGroupSpecialPredictions(groupId: string, enabled: boolean) {
  const { error } = await supabase
    .from("groups")
    .update({
      enable_special_predictions: enabled,
    })
    .eq("id", groupId);

  if (error) throw error;

  notify();
}

export async function getGroupMembers(groupId: string) {
  const { data: members, error: membersError } = await supabase
    .from("group_members")
    .select("*")
    .eq("group_id", groupId);

  if (membersError) throw membersError;

  const userIds = [...new Set((members ?? []).map((m) => m.user_id))];

  if (userIds.length === 0) return [];

  const { data: profiles, error: profilesError } = await supabase
    .from("profiles")
    .select("id,name,email")
    .in("id", userIds);

  if (profilesError) throw profilesError;

  return (members ?? []).map((member) => ({
    ...member,
    profile: profiles?.find((profile) => profile.id === member.user_id),
  }));
}

export async function getGroupRanking(groupId: string) {
  const members = await getGroupMembers(groupId);

  const group = await getGroupById(groupId);

  const specialEnabled = group?.enableSpecialPredictions ?? true;

  const userIds = members.map((m) => m.user_id);

  const { data: predictions } = await supabase
    .from("predictions")
    .select("*")
    .in("user_id", userIds);

  const { data: results } = await supabase.from("match_results").select("*");

  const { data: specialPredictions } = await supabase

    .from("special_predictions")

    .select("*")

    .in("user_id", userIds);

  const { data: specialResults } = await supabase

    .from("special_results")

    .select("*");

  const ranking = members.map((member) => {
    let points = 0;
    let specialPoints = 0;

    const breakdown: any[] = [];

    function normalizeSpecialValue(value: string) {
      const clean = value?.trim().toLowerCase();

      const teamEntry = Object.entries(TEAMS).find(
        ([key, team]) =>
          key.toLowerCase() === clean ||
          team.code.toLowerCase() === clean ||
          team.name.toLowerCase() === clean,
      );

      return teamEntry ? teamEntry[1].code : clean;
    }

    predictions
      ?.filter((p) => p.user_id === member.user_id)

      .forEach((pred) => {
        const result = results?.find((r) => r.match_id === pred.match_id);

        if (!result) return;

        let gained = 0;

        const exact =
          pred.home_score === result.home_score && pred.away_score === result.away_score;

        const winnerPred = Math.sign(pred.home_score - pred.away_score);

        const winnerReal = Math.sign(result.home_score - result.away_score);

        if (exact) {
          gained = 10;
        } else if (winnerPred === winnerReal) {
          gained = 5;
        }

        points += gained;

        const match = MATCHES.find((m) => m.id === pred.match_id);

        breakdown.push({
          matchId: pred.match_id,

          stage: match?.stage,

          home: match ? TEAMS[match.home] : null,

          away: match ? TEAMS[match.away] : null,

          predicted: `${pred.home_score}x${pred.away_score}`,

          official: `${result.home_score}x${result.away_score}`,

          points: gained,

          reason: exact
            ? "Placar exato"
            : winnerPred === winnerReal
              ? "Resultado correto"
              : "Errou",

          type: "match",
        });
      });

    if (specialEnabled) {
      specialPredictions

        ?.filter(
          (s) =>
            s.user_id === member.user_id &&
            s.category !== "surprise_team" &&
            s.category !== "best_young_player",
        )

        .forEach((pred) => {
          const result = specialResults?.find((r) => r.category === pred.category);

          if (!result) return;

          let gained = 0;

          if (normalizeSpecialValue(pred.prediction) === normalizeSpecialValue(result.result)) {
            switch (pred.category) {
              case "champion":
                gained = 25;
                break;

              case "runner_up":
                gained = 25;
                break;

              case "third_place":
                gained = 15;
                break;

              case "golden_boot":
                gained = 15;
                break;

              case "golden_ball":
                gained = 15;
                break;

              case "golden_glove":
                gained = 15;
                break;

              /*
              case "best_young_player":
                gained = 10;
                break;

              case "surprise_team":
                gained = 10;
                break;
              */

              default:
                gained = 0;
            }
          }

          specialPoints += gained;

          breakdown.push({
            matchId: `Especial`,

            predicted: pred.prediction,

            official: result.result,

            points: gained,

            reason: pred.category,
          });
        });
    }
    return {
      ...member,

      points: points + specialPoints,

      normalPoints: points,

      specialPoints,

      breakdown,
    };
  });

  return ranking.sort((a, b) => b.points - a.points);
}

export async function getMatchResults() {
  const { data, error } = await supabase.from("match_results").select("*");

  if (error) throw error;

  return data ?? [];
}

export async function saveMatchResult(matchId: string, home: number, away: number) {
  const { error } = await supabase.from("match_results").upsert(
    {
      match_id: matchId,
      home_score: home,
      away_score: away,
    },
    {
      onConflict: "match_id",
    },
  );

  if (error) throw error;
}

export async function getSpecialResults() {
  const { data, error } = await supabase.from("special_results").select("*");

  if (error) throw error;

  return data ?? [];
}

export async function saveSpecialResult(category: string, result: string) {
  const { error } = await supabase
    .from("special_results")
    .upsert({ category, result }, { onConflict: "category" });

  if (error) throw error;
}
