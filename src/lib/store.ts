// Front-end only store using localStorage.
// Simple SHA-256 password hashing (browser-side; obviously not real security — front-end only requirement).

const ADMIN_EMAIL = "cavalheiro.dev@gmail.com";

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
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
  open: Record<string, boolean>; // stageId -> open for betting
}

const K_USERS = "bolao:users";
const K_BETS = "bolao:bets";
const K_SESSION = "bolao:session";
const K_STAGES = "bolao:stages";

function read<T>(k: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) as T : fallback; }
  catch { return fallback; }
}
function write<T>(k: string, v: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(k, JSON.stringify(v));
  window.dispatchEvent(new CustomEvent("bolao:change", { detail: k }));
}

export async function hashPassword(p: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(p));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

export function getUsers(): User[] { return read<User[]>(K_USERS, []); }
export function setUsers(u: User[]) { write(K_USERS, u); }

export async function registerUser(name: string, email: string, password: string): Promise<User> {
  const users = getUsers();
  const emailLc = email.trim().toLowerCase();
  if (users.some(u => u.email === emailLc)) throw new Error("E-mail já cadastrado");
  const user: User = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: emailLc,
    passwordHash: await hashPassword(password),
    isAdmin: emailLc === ADMIN_EMAIL,
    createdAt: new Date().toISOString(),
  };
  setUsers([...users, user]);
  setSession(user.id);
  return user;
}

export async function loginUser(email: string, password: string): Promise<User> {
  const users = getUsers();
  const emailLc = email.trim().toLowerCase();
  const hash = await hashPassword(password);
  const user = users.find(u => u.email === emailLc && u.passwordHash === hash);
  if (!user) throw new Error("E-mail ou senha incorretos");
  setSession(user.id);
  return user;
}

export function setSession(userId: string | null) {
  if (typeof window === "undefined") return;
  if (userId) localStorage.setItem(K_SESSION, userId); else localStorage.removeItem(K_SESSION);
  window.dispatchEvent(new CustomEvent("bolao:change", { detail: K_SESSION }));
}
export function currentUser(): User | null {
  if (typeof window === "undefined") return null;
  const id = localStorage.getItem(K_SESSION);
  if (!id) return null;
  return getUsers().find(u => u.id === id) ?? null;
}

export function deleteUser(userId: string) {
  setUsers(getUsers().filter(u => u.id !== userId));
  setBets(getBets().filter(b => b.userId !== userId));
}

export function getBets(): Bet[] { return read<Bet[]>(K_BETS, []); }
export function setBets(b: Bet[]) { write(K_BETS, b); }
export function getUserBets(userId: string): Record<string, Bet> {
  const map: Record<string, Bet> = {};
  for (const b of getBets()) if (b.userId === userId) map[b.matchId] = b;
  return map;
}
export function saveBet(userId: string, matchId: string, homeScore: number, awayScore: number) {
  const bets = getBets().filter(b => !(b.userId === userId && b.matchId === matchId));
  bets.push({ userId, matchId, homeScore, awayScore, updatedAt: new Date().toISOString() });
  setBets(bets);
}

export function getStageState(): StageState {
  return read<StageState>(K_STAGES, { open: { group: true } });
}
export function setStageOpen(stageId: string, open: boolean) {
  const s = getStageState();
  s.open[stageId] = open;
  write(K_STAGES, s);
}

export function subscribe(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = () => cb();
  window.addEventListener("bolao:change", handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener("bolao:change", handler);
    window.removeEventListener("storage", handler);
  };
}

export function exportBetsCSV(): string {
  const users = getUsers();
  const bets = getBets();
  const rows = [["user_id","user_name","user_email","match_id","home_score","away_score","updated_at"]];
  for (const b of bets) {
    const u = users.find(x => x.id === b.userId);
    rows.push([b.userId, u?.name ?? "", u?.email ?? "", b.matchId, String(b.homeScore), String(b.awayScore), b.updatedAt]);
  }
  return rows.map(r => r.map(c => /[",\n]/.test(c) ? `"${c.replace(/"/g,'""')}"` : c).join(",")).join("\n");
}

export function exportUserBetsCSV(userId: string): string {
  const u = getUsers().find(x => x.id === userId);
  const bets = getBets().filter(b => b.userId === userId);
  const rows = [["user_id","user_name","user_email","match_id","home_score","away_score","updated_at"]];
  for (const b of bets) rows.push([b.userId, u?.name ?? "", u?.email ?? "", b.matchId, String(b.homeScore), String(b.awayScore), b.updatedAt]);
  return rows.map(r => r.map(c => /[",\n]/.test(c) ? `"${c.replace(/"/g,'""')}"` : c).join(",")).join("\n");
}

export function downloadCSV(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}
