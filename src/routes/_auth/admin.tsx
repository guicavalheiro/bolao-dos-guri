import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSession } from "@/hooks/use-session";
import {
  getUsers,
  getBets,
  betsToCSV,
  downloadCSV,
  getStageState,
  setStageOpen,
  subscribe,
  type User,
  type Bet,
} from "@/lib/store";
import { STAGES } from "@/lib/data/matches";

export const Route = createFileRoute("/_auth/admin")({
  component: AdminPage,
});

function AdminPage() {
  const { user, ready } = useSession();

  const [users, setUsers] = useState<User[]>([]);
  const [bets, setBets] = useState<Bet[]>([]);
  const [loading, setLoading] = useState(true);
  const [, force] = useState(0);

  useEffect(() => subscribe(() => force((x) => x + 1)), []);

  useEffect(() => {
    async function loadAdminData() {
      try {
        setLoading(true);

        const [loadedUsers, loadedBets] = await Promise.all([
          getUsers(),
          getBets(),
        ]);

        setUsers(loadedUsers);
        setBets(loadedBets);
      } catch (error) {
        console.error("Erro ao carregar admin:", error);
      } finally {
        setLoading(false);
      }
    }

    if (user?.isAdmin) {
      loadAdminData();
    }
  }, [user]);

  if (!ready) return null;
  if (!user || !user.isAdmin) return <Navigate to="/apostas" />;

  const stageState = getStageState();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-10">
      <div>
        <h2 className="font-display text-4xl">Painel do Administrador</h2>
        <p className="text-sm text-muted-foreground">
          Gerencie usuários, baixe apostas e controle as fases da competição.
        </p>
      </div>

      <section className="rounded-xl border border-border bg-card p-5">
        <h3 className="font-display text-2xl">Fases da Competição</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Abra a próxima fase quando a anterior terminar.
        </p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {STAGES.map((s) => {
            const open = stageState.open[s.id] ?? false;

            return (
              <label
                key={s.id}
                className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-3"
              >
                <span className="font-medium">{s.label}</span>

                <button
                  type="button"
                  onClick={() => setStageOpen(s.id, !open)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    open ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      open ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </label>
            );
          })}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl">Apostas</h3>
            <p className="text-sm text-muted-foreground">
              {loading
                ? "Carregando dados..."
                : `${bets.length} palpites registrados de ${users.length} usuário(s).`}
            </p>
          </div>

          <button
            type="button"
            disabled={loading}
            onClick={() =>
              downloadCSV(
                `bolao-apostas-${new Date().toISOString().slice(0, 10)}.csv`,
                betsToCSV(bets, users)
              )
            }
            className="rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground shadow hover:opacity-90 disabled:opacity-50"
          >
            Baixar CSV (todos)
          </button>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 font-display text-2xl">Usuários</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr className="border-b border-border">
                <th className="py-2 pr-3">Nome</th>
                <th className="py-2 pr-3">E-mail</th>
                <th className="py-2 pr-3">Apostas</th>
                <th className="py-2 pr-3">Cadastro</th>
              </tr>
            </thead>

            <tbody>
              {!loading && users.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="py-6 text-center text-muted-foreground"
                  >
                    Nenhum usuário cadastrado ainda.
                  </td>
                </tr>
              )}

              {users.map((u) => {
                const count = bets.filter((b) => b.userId === u.id).length;

                return (
                  <tr
                    key={u.id}
                    className="border-b border-border/60 last:border-0"
                  >
                    <td className="py-3 pr-3 font-medium">
                      {u.name}

                      {u.isAdmin && (
                        <span className="ml-1 rounded bg-accent/20 px-1.5 py-0.5 text-[10px] uppercase text-accent">
                          admin
                        </span>
                      )}
                    </td>

                    <td className="py-3 pr-3 text-muted-foreground">
                      {u.email}
                    </td>

                    <td className="py-3 pr-3">{count}</td>

                    <td className="py-3 pr-3 text-muted-foreground">
                      {new Date(u.createdAt).toLocaleDateString("pt-BR")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}