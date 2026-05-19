import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSession } from "@/hooks/use-session";
import {
  getGroupById,
  getGroupMembers,
  getGroupRanking,
  updateGroupSpecialPredictions,
  type Group,
} from "@/lib/store";
import { Flag } from "@/components/Flag";

export const Route = createFileRoute("/_auth/groups/$groupId")({
  component: GroupDetailsPage,
});

function GroupDetailsPage() {
  const { groupId } = Route.useParams();

  const [group, setGroup] = useState<Group | null>(null);

  const [members, setMembers] = useState<any[]>([]);

  const [ranking, setRanking] = useState<any[]>([]);

  const [openBreakdown, setOpenBreakdown] = useState<Record<string, boolean>>({});

  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  const { user } = useSession();

  const currentUserIsOwner = user?.id === group?.ownerId;

  useEffect(() => {
    loadGroup().catch(console.error);
  }, [groupId]);

  async function loadGroup() {
    const data = await getGroupById(groupId);

    const users = await getGroupMembers(groupId);

    const rank = await getGroupRanking(groupId);

    setGroup(data);
    setMembers(users);
    setRanking(rank);
  }

  const specialLabels: Record<string, string> = {
    champion: "Campeão",
    runner_up: "2º colocado",
    third_place: "3º colocado",
    golden_boot: "Chuteira de Ouro",
    golden_ball: "Bola de Ouro",
    golden_glove: "Luva de Ouro",
    best_young_player: "Melhor jogador jovem",
    surprise_team: "Seleção surpresa",
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <Link
        to="/groups"
        className="
                    inline-flex items-center gap-2
                    rounded-lg border border-border
                    bg-card/50 px-4 py-2 text-sm
                    text-muted-foreground transition
                    hover:bg-card hover:text-foreground"
      >
        ← Voltar aos grupos
      </Link>

      <div>
        <h1 className="font-display text-5xl">{group?.name || "Carregando..."}</h1>

        <p className="mt-2 text-muted-foreground">{group?.description}</p>

        <section className="rounded-2xl border bg-card p-6">
          <h2 className="text-2xl font-semibold">Configurações do grupo</h2>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-border p-4">
            <div>
              <div className="font-medium">Apostas especiais</div>

              <p className="text-sm text-muted-foreground">
                Define se apostas especiais valem neste grupo.
              </p>
            </div>

            <button
              type="button"
              disabled={!currentUserIsOwner}
              onClick={async () => {
                if (!group) return;

                await updateGroupSpecialPredictions(group.id, !group.enableSpecialPredictions);

                await loadGroup();
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                group?.enableSpecialPredictions
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              } disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {group?.enableSpecialPredictions ? "Ativadas" : "Desativadas"}
            </button>
          </div>
        </section>
      </div>

      <section className="rounded-2xl border bg-card p-6">
        <h2 className="text-2xl font-semibold">Regras de pontuação</h2>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-border p-4">
            <div className="text-lg font-semibold text-primary">+10 pts</div>
            <p className="text-sm text-muted-foreground">Placar exato.</p>
          </div>

          <div className="rounded-xl border border-border p-4">
            <div className="text-lg font-semibold text-primary">+5 pts</div>
            <p className="text-sm text-muted-foreground">Resultado correto: vencedor ou empate.</p>
          </div>

          <div className="rounded-xl border border-border p-4">
            <div className="text-lg font-semibold text-primary">Especiais</div>
            <p className="text-sm text-muted-foreground">
              {group?.enableSpecialPredictions ? "Valem neste grupo." : "Não valem neste grupo."}
            </p>
          </div>
        </div>
      </section>
      <section className="rounded-2xl border bg-card p-6">
        <h2 className="text-2xl font-semibold">🏆 Ranking</h2>

        <div className="mt-5 space-y-3">
          {ranking.length === 0 && <p className="text-muted-foreground">Ainda sem pontuação</p>}

          {ranking.map((member: any, index: number) => (
            <div
              key={member.user_id}
              className="
                                flex items-center
                                justify-between
                                rounded-xl
                                border
                                p-4
                                "
            >
              <div className="flex gap-3">
                <div
                  className="
                                    flex h-8 w-8
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-primary/10
                                    text-primary
                                    "
                >
                  {index + 1}º
                </div>

                <div>
                  <div className="font-medium">{member.profile?.name}</div>

                  <div
                    className="
                                        text-sm
                                        text-muted-foreground
                                        "
                  >
                    {member.role === "owner" ? "Dono" : "Participante"}

                    <div
                      className="
                        mt-2
                        space-y-1
                        text-xs
                        text-muted-foreground
                        "
                    >
                      {member.breakdown?.length > 0 && (
                        <div className="mt-3">
                          <button
                            type="button"
                            onClick={() => setSelectedMember(member)}
                            className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
                          >
                            Ver histórico de palpites
                          </button>

                          {/* {openBreakdown[member.user_id] && (
                            <div
                              className="
mt-3
space-y-2
rounded-lg
border
border-border
bg-background/40
p-3
"
                            >
                              {member.breakdown.map((b: any) => (
                                <div
                                  key={b.matchId}
                                  className="
flex
flex-col
gap-2
rounded-md
border-b
border-border/40
pb-2
text-xs

md:flex-row
md:items-center
md:justify-between
"
                                >
                                  <div
                                    className="
flex
items-center
gap-2
font-medium
text-sm
"
                                  >
                                    {b.home?.code && (
                                      <Flag code={b.home.code} className="h-4 w-6" />
                                    )}

                                    {b.away?.code && (
                                      <Flag code={b.away.code} className="h-4 w-6" />
                                    )}
                                  </div>

                                  <span>
                                    Palpite:
                                    <b className="ml-1">{b.predicted}</b>
                                  </span>

                                  <span>
                                    Oficial:
                                    <b className="ml-1">{b.official}</b>
                                  </span>

                                  <span
                                    className="
text-muted-foreground
"
                                  >
                                    {b.reason}
                                  </span>

                                  <span
                                    className="
font-semibold
text-primary
"
                                  >
                                    +{b.points} pts
                                  </span>
                                </div>
                              ))}
                            </div>
                          )} */}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
                                text-lg
                                font-semibold
                                text-primary
                                "
              >
                {member.points}
                pts
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border bg-card p-6">
        <h2 className="text-2xl font-semibold">Participantes</h2>

        <div className="mt-5 space-y-3">
          {members.length === 0 && <p className="text-muted-foreground">Nenhum participante</p>}

          {members.map((member: any) => (
            <div
              key={member.profile?.id}
              className="
                                flex items-center
                                justify-between
                                rounded-xl
                                border border-border
                                p-4
                            "
            >
              <div>
                <div className="font-medium">
                  {member.role === "owner" ? "👑 " : "⚽ "}

                  {member.profile?.name}
                </div>

                <div
                  className="
                                    text-sm
                                    text-muted-foreground"
                >
                  {member.profile?.email}
                </div>
              </div>

              <span
                className="
                                rounded-full
                                bg-primary/10
                                px-3 py-1
                                text-xs
                                text-primary"
              >
                {member.role === "owner" ? "Dono" : "Participante"}
              </span>
            </div>
          ))}
        </div>
      </section>
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
          <aside className="h-full w-full max-w-md overflow-y-auto border-l border-border bg-background p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Histórico de palpites</h2>

                <p className="text-sm text-muted-foreground">{selectedMember.profile?.name}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="rounded-md border border-border px-3 py-1 text-sm text-muted-foreground hover:bg-muted"
              >
                Fechar
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {selectedMember.breakdown?.map((b: any) => (
                <div
                  key={`${b.matchId}-${b.reason}`}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-medium">
                      {b.type === "match" ? (
                        <>
                          {b.home?.code && <Flag code={b.home.code} className="h-4 w-6" />}
                          <span>vs</span>
                          {b.away?.code && <Flag code={b.away.code} className="h-4 w-6" />}
                        </>
                      ) : (
                        <span>{specialLabels[b.reason] ?? "Especial"}</span>
                      )}
                    </div>

                    <span className="font-semibold text-primary">+{b.points} pts</span>
                  </div>

                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      Palpite: <b className="text-foreground">{b.predicted}</b>
                    </p>
                    <p>
                      Oficial: <b className="text-foreground">{b.official}</b>
                    </p>
                    {/* <p>{b.reason}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
