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
  getMatchResults,
  saveMatchResult,
  type User,
  type Bet,
} from "@/lib/store";

import { STAGES, MATCHES, TEAMS } from "@/lib/data/matches";

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

  useEffect(() => subscribe(() => force((x) => x + 1)), []);

  useEffect(() => {
    async function loadAdminData() {
      try {
        setLoading(true);

        const [loadedUsers, loadedBets, loadedResults] = await Promise.all([
          getUsers(),
          getBets(),
          getMatchResults(),
        ]);

        setUsers(loadedUsers);

        setBets(loadedBets);

        setResults(loadedResults);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (user?.isAdmin) {
      loadAdminData();
    }
  }, [user]);

  if (!ready) return null;

  if (!user || !user.isAdmin) {
    return <Navigate to="/apostas" />;
  }

  const stageState = getStageState();

  return (
    <main
      className="
mx-auto
max-w-6xl
space-y-10
px-4
py-8
"
    >
      <div>
        <h2
          className="
font-display
text-4xl
"
        >
          Painel Admin
        </h2>

        <p
          className="
text-sm
text-muted-foreground
"
        >
          Controle do bolão
        </p>
      </div>

      {/* fases */}

      <section
        className="
rounded-xl
border
bg-card
p-5
"
      >
        <h3
          className="
font-display
text-2xl
"
        >
          Fases
        </h3>

        <div
          className="
mt-4
grid
gap-2
sm:grid-cols-2
"
        >
          {STAGES.map((stage) => {
            const open = stageState.open[stage.id] ?? false;

            return (
              <label
                key={stage.id}
                className="
flex
items-center
justify-between
rounded-lg
border
p-4
"
              >
                <span>{stage.label}</span>

                <button
                  type="button"
                  onClick={() => setStageOpen(stage.id, !open)}
                  className={`
relative
inline-flex
h-6 w-11
rounded-full

${open ? "bg-primary" : "bg-muted"}

`}
                >
                  <span
                    className={`
inline-block
h-4 w-4
rounded-full
bg-white
transition

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

      <section
        className="
rounded-xl
border
bg-card
p-5
"
      >
        <div
          className="
flex
justify-between
"
        >
          <div>
            <h3
              className="
font-display
text-2xl
"
            >
              Apostas
            </h3>

            <p
              className="
text-sm
text-muted-foreground
"
            >
              {loading
                ? "Carregando"
                : `${bets.length}
apostas`}
            </p>
          </div>

          <button
            onClick={() =>
              downloadCSV(
                `apostas.csv`,

                betsToCSV(bets, users),
              )
            }
            className="
rounded-lg
bg-primary
px-4 py-2
text-white
"
          >
            CSV
          </button>
        </div>
      </section>

      {/* resultados */}

      <section
        className="
rounded-xl
border
bg-card
p-5
"
      >
        <h3
          className="
font-display
text-2xl
"
        >
          Resultados Oficiais
        </h3>

        <div
          className="
mt-5
space-y-4
"
        >
          {MATCHES.map((match) => {
            const existing = results.find((r) => r.match_id === match.id);

            const home = TEAMS[match.home];

            const away = TEAMS[match.away];

            return (
              <div
                key={match.id}
                className="
flex
items-center
justify-between
rounded-xl
border
p-4
"
              >
                <div>
                  <div
                    className="
font-medium
"
                  >
                    {home.name}
                    {" x "}
                    {away.name}
                  </div>

                  <div
                    className="
text-xs
text-muted-foreground
"
                  >
                    {match.id}
                  </div>
                </div>

                <div
                  className="
flex
gap-2
"
                >
                  <input
                    id={`h-${match.id}`}
                    defaultValue={existing?.home_score ?? ""}
                    type="number"
                    className="
w-14
rounded
border
p-2
"
                  />
                  ×
                  <input
                    id={`a-${match.id}`}
                    defaultValue={existing?.away_score ?? ""}
                    type="number"
                    className="
                    w-14
                    rounded
                    border
                    p-2
                    "
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
                    className="
                      rounded
                      bg-primary
                      px-3 py-2
                      text-white
                      "
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

      <section
        className="
        rounded-xl
        border
        bg-card
        p-5
        "
      >
        <h3
          className="
          font-display
          text-2xl
          mb-4
          "
        >
          Usuários
        </h3>

        <p>
          {users.length}
          registrados
        </p>
      </section>
    </main>
  );
}
