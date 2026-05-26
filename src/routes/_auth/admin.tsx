import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSession } from "@/hooks/use-session";
import { STAGES, MATCHES, TEAMS } from "@/lib/data/matches";
import { PLAYERS } from "@/lib/data/players";
import {
  getUsers,
  getBets,
  betsToCSV,
  downloadCSV,
  getStageState,
  setStageOpen,
  subscribe,
  getMatchResults,
  saveMatchResult,
  getSpecialResults,
  saveSpecialResult,
  type User,
  type Bet,
} from "@/lib/store";

export const Route = createFileRoute("/_auth/admin")({
  component: AdminPage,
});

function AdminPage() {
  const { user, ready } = useSession();

  const [users, setUsers] = useState<User[]>([]);

  const [bets, setBets] = useState<Bet[]>([]);

  const [results, setResults] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [, force] = useState(0);

  const [specialResults, setSpecialResults] = useState<any[]>([]);

  const TEAM_SPECIALS = ["champion", "runner_up", "third_place", "surprise_team"];

  useEffect(() => subscribe(() => force((x) => x + 1)), []);

  async function loadAdminData() {
    try {
      setLoading(true);

      const [loadedUsers, loadedBets, loadedResults, loadedSpecials] = await Promise.all([
        getUsers(),
        getBets(),
        getMatchResults(),
        getSpecialResults(),
      ]);

      setUsers(loadedUsers);

      setBets(loadedBets);

      setResults(loadedResults);

      setSpecialResults(loadedSpecials);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user?.isAdmin) {
      loadAdminData();
    }
  }, [user]);

  if (!ready) return null;

  if (!user || !user.isAdmin) {
    return <Navigate to="/apostas" />;
  }

  const stageState = getStageState();

  const SPECIALS = [
    {
      id: "champion",
      label: "Campeão",
    },

    {
      id: "runner_up",
      label: "2º colocado",
    },

    {
      id: "third_place",
      label: "3º colocado",
    },

    {
      id: "golden_boot",
      label: "Chuteira de Ouro",
    },

    {
      id: "golden_ball",
      label: "Bola de Ouro",
    },

    {
      id: "golden_glove",
      label: "Luva de Ouro",
    },

    // {
    //   id: "best_young_player",
    //   label: "Melhor jogador jovem",
    // },

    // {
    //   id: "surprise_team",
    //   label: "Seleção surpresa",
    // },
  ];

  type PlayerSpecialCategory = "golden_boot" | "golden_ball" | "golden_glove" | "best_young_player";

  const PLAYER_SPECIALS: PlayerSpecialCategory[] = [
    "golden_boot",
    "golden_ball",
    "golden_glove",
    "best_young_player",
  ];

  const PLAYER_SPECIAL_FILTERS: Record<PlayerSpecialCategory, string[]> = {
    golden_boot: ["FW", "MF", "DF"],
    golden_ball: ["GK", "DF", "MF", "FW"],
    golden_glove: ["GK"],
    best_young_player: ["GK", "DF", "MF", "FW"],
  };

  function getPlayersForCategory(category: PlayerSpecialCategory) {
    let players = PLAYERS.filter((p) => PLAYER_SPECIAL_FILTERS[category].includes(p.position));

    if (category === "best_young_player") {
      players = players.filter((p) => p.age === null || p.age <= 21);
    }

    return players;
  }

  async function saveAllResults() {
    try {
      const matchInputs = document.querySelectorAll<HTMLInputElement>("[data-match-result-input]");

      const matchMap = new Map<string, { home?: number; away?: number }>();

      matchInputs.forEach((input) => {
        const matchId = input.dataset.matchId;
        const side = input.dataset.side;

        if (!matchId || !side) return;

        const value = Number(input.value);

        if (!matchMap.has(matchId)) {
          matchMap.set(matchId, {});
        }

        const current = matchMap.get(matchId)!;

        if (side === "home") current.home = value;
        if (side === "away") current.away = value;
      });

      for (const [matchId, score] of matchMap.entries()) {
        if (
          score.home === undefined ||
          score.away === undefined ||
          Number.isNaN(score.home) ||
          Number.isNaN(score.away)
        ) {
          continue;
        }

        await saveMatchResult(matchId, score.home, score.away);
      }

      const specialInputs = document.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
        "[data-special-result-input]",
      );

      for (const input of specialInputs) {
        const category = input.dataset.category;

        if (!category || !input.value) continue;

        await saveSpecialResult(category, input.value);
      }

      await loadAdminData();

      alert("Tudo salvo com sucesso");
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar tudo. Veja o console.");
    }
  }

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-8">
      <div>
        <h2 className="font-display text-4xl">Painel Admin</h2>

        <p className="text-sm text-muted-foreground">Controle do bolão</p>
      </div>

      {/* fases */}

      <section className="rounded-xl border bg-card p-5">
        <h3 className="font-display text-2xl">Fases</h3>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {STAGES.map((stage) => {
            const open = stageState.open[stage.id] ?? false;

            return (
              <label
                key={stage.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <span>{stage.label}</span>

                <button
                  type="button"
                  onClick={() => setStageOpen(stage.id, !open)}
                  className={`relative inline-flex h-6 w-11 rounded-full 
                    ${open ? "bg-primary" : "bg-muted"}
                  `}
                >
                  <span
                    className={`inline-block h-4 w-4 rounded-full bg-white transition
                      ${open ? "translate-x-6" : "translate-x-1"}
                    `}
                  />
                </button>
              </label>
            );
          })}
        </div>
      </section>

      {/* export csv */}

      <section className="rounded-xl border bg-card p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="font-display text-2xl">Apostas</h3>

            <p className="text-sm text-muted-foreground">
              {loading
                ? "Carregando"
                : `${bets.length}
                apostas`}
            </p>
          </div>

          <button
            onClick={() => downloadCSV(`apostas.csv`, betsToCSV(bets, users))}
            className="rounded-lg bg-primary px-4 py-2 text-white"
          >
            CSV
          </button>
        </div>
      </section>

      {/* resultados */}

      <section className="rounded-xl border bg-card p-5">
        <h3 className="font-display text-2xl ">Resultados Oficiais</h3>

        <div className="mt-5 space-y-4">
          {MATCHES.map((match) => {
            const existing = results.find((r) => r.match_id === match.id);

            const home = TEAMS[match.home];

            const away = TEAMS[match.away];

            return (
              <div
                key={match.id}
                className="flex items-center justify-between rounded-xl border p-4"
              >
                <div>
                  <div className="font-medium">
                    {home.name}
                    {" x "}
                    {away.name}
                  </div>

                  <div className="text-xs text-muted-foreground">{match.id}</div>
                </div>

                <div className="flex gap-2">
                  <input
                    data-match-result-input
                    data-match-id={match.id}
                    data-side="home"
                    id={`h-${match.id}`}
                    defaultValue={existing?.home_score ?? ""}
                    type="number"
                    className="w-14 rounded border p-2"
                  />
                  ×
                  <input
                    data-match-result-input
                    data-match-id={match.id}
                    data-side="away"
                    id={`a-${match.id}`}
                    defaultValue={existing?.away_score ?? ""}
                    type="number"
                    className="w-14 rounded border p-2"
                  />
                  <button
                    onClick={async () => {
                      const homeInput = document.getElementById(
                        `h-${match.id}`,
                      ) as HTMLInputElement;

                      const awayInput = document.getElementById(
                        `a-${match.id}`,
                      ) as HTMLInputElement;

                      const h = Number(homeInput.value);

                      const a = Number(awayInput.value);

                      await saveMatchResult(match.id, h, a);

                      const updated = await getMatchResults();

                      setResults(updated);

                      alert("Salvo");
                    }}
                    className="rounded bg-primary px-3 py-2 text-white"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            );
          })}

          <button
            type="button"
            onClick={saveAllResults}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Salvar tudo
          </button>
        </div>
      </section>

      <section className="rounded-xl border bg-card p-5">
        <h3 className="font-display text-2xl">Resultados especiais</h3>

        <div className="mt-5 space-y-4">
          {SPECIALS.map((item) => {
            const current = specialResults.find((s) => s.category === item.id);

            return (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-xl border p-4"
              >
                <div>
                  <b>{item.label}</b>
                </div>

                <div className="flex gap-2">
                  {TEAM_SPECIALS.includes(item.id) ? (
                    <select
                      data-special-result-input
                      data-category={item.id}
                      id={`special-${item.id}`}
                      defaultValue={current?.result ?? ""}
                      className="rounded border border-border bg-input/40 px-3 py-2 text-foreground outline-none focus:border-primary"
                    >
                      <option value="" className="bg-background text-foreground">
                        Escolha
                      </option>

                      {Object.entries(TEAMS)
                        .sort(([, a], [, b]) => a.name.localeCompare(b.name, "pt-BR"))
                        .map(([, team]) => (
                          <option
                            key={team.code}
                            value={team.code}
                            className="bg-background text-foreground"
                          >
                            {team.name}
                          </option>
                        ))}
                    </select>
                  ) : PLAYER_SPECIALS.includes(item.id as PlayerSpecialCategory) ? (
                    <select
                      data-special-result-input
                      data-category={item.id}
                      id={`special-${item.id}`}
                      defaultValue={current?.result ?? ""}
                      className="rounded border border-border bg-input/40 px-3 py-2 text-foreground outline-none focus:border-primary"
                    >
                      <option value="" className="bg-background text-foreground">
                        Escolha
                      </option>

                      {getPlayersForCategory(item.id as PlayerSpecialCategory)
                        .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
                        .map((player) => (
                          <option
                            key={player.id}
                            value={player.id}
                            className="bg-background text-foreground"
                          >
                            {player.name}
                          </option>
                        ))}
                    </select>
                  ) : (
                    <input
                      data-special-result-input
                      data-category={item.id}
                      id={`special-${item.id}`}
                      defaultValue={current?.result ?? ""}
                      className="rounded border border-border bg-input/40 px-3 py-2 text-foreground outline-none focus:border-primary"
                    />
                  )}

                  <button
                    onClick={async () => {
                      const inputElement = document.getElementById(`special-${item.id}`);

                      if (
                        !(inputElement instanceof HTMLInputElement) &&
                        !(inputElement instanceof HTMLSelectElement)
                      ) {
                        return;
                      }

                      await saveSpecialResult(item.id, inputElement.value);

                      const updated = await getSpecialResults();

                      setSpecialResults(updated);

                      alert("Salvo");
                    }}
                    className="rounded bg-primary px-3 py-2 text-white"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* usuários */}

      <section className="rounded-xl border bg-card p-5">
        <h3 className="font-display text-2xl mb-4">Usuários</h3>

        <p>
          {users.length}
          registrados
        </p>
      </section>
    </main>
  );
}
