import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSession } from "@/hooks/use-session";
import {
  createGroup,
  getUserGroups,
  getPendingRequestsForOwner,
  approveJoinRequest,
  rejectJoinRequest,
} from "@/lib/store";

export const Route = createFileRoute("/_auth/groups")({
  component: GroupsPage,
});

function GroupsPage() {
  const { user } = useSession();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [myGroups, setMyGroups] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pendingRequests, setPendingRequests] = useState<any[]>([]);
  const [invite, setInvite] = useState("");

  if (pathname !== "/groups") {
    return <Outlet />;
  }

  async function refresh() {
    if (!user) return;

    setMyGroups(await getUserGroups(user.id));
    setPendingRequests(await getPendingRequestsForOwner(user.id));
  }

  useEffect(() => {
    refresh();
  }, [user]);

  if (!user) return null;

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-8">
      <div>
        <h1 className="font-display text-4xl">Grupos</h1>
        <p className="text-sm text-muted-foreground">
          Crie grupos, participe dos bolões dos seus amigos e acompanhe o ranking.
        </p>
      </div>

      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="font-display text-2xl">Criar grupo</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Crie um grupo para competir com seus amigos.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_1.5fr_auto]">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do grupo"
            className="rounded-xl border border-border bg-background/40 px-4 py-3 outline-none focus:border-primary"
          />

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            className="rounded-xl border border-border bg-background/40 px-4 py-3 outline-none focus:border-primary"
          />

          <button
            disabled={!name.trim()}
            onClick={async () => {
              await createGroup(user.id, name.trim(), description.trim());

              setName("");
              setDescription("");

              refresh();
            }}
            className="rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Criar grupo
          </button>
        </div>
      </section>

      <section
        className="
rounded-2xl
border
border-border
bg-card
p-6
"
      >
        <h2
          className="
font-display
text-2xl
"
        >
          Entrar por convite
        </h2>

        <p
          className="
mt-1
text-sm
text-muted-foreground
"
        >
          Cole um link recebido.
        </p>

        <div
          className="
mt-5
flex
gap-3
"
        >
          <input
            value={invite}
            onChange={(e) => setInvite(e.target.value)}
            placeholder="
https://...
"
            className="
flex-1
rounded-lg
border
border-border
bg-background
px-4 py-2
"
          />

          <button
            onClick={() => {
              const groupId = invite.split("/").pop();

              if (!groupId) return;

              window.location.href = `/groups/${groupId}`;
            }}
            className="
rounded-lg
bg-primary
px-4 py-2
text-primary-foreground
"
          >
            Entrar
          </button>
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="font-display text-3xl">Meus grupos</h2>
          <p className="text-sm text-muted-foreground">Grupos em que você já participa.</p>
        </div>

        {myGroups.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card/50 p-6 text-sm text-muted-foreground">
            Você ainda não participa de nenhum grupo.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {myGroups.map((item: any) => (
              <GroupCard
                key={item.groups.id}
                name={item.groups.name}
                description={item.groups.description}
                badge={item.role === "owner" ? "Dono" : "Participante"}
                actionLabel="Abrir grupo"
                to="/groups/$groupId"
                params={{ groupId: item.groups.id }}
              />
            ))}
          </div>
        )}
      </section>
      <section>
        <div className="mb-4">
          <h2 className="font-display text-3xl">Solicitações pendentes</h2>
          <p className="text-sm text-muted-foreground">
            Aprove ou recuse pedidos para entrar nos seus grupos.
          </p>
        </div>

        {pendingRequests.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card/50 p-6 text-sm text-muted-foreground">
            Nenhuma solicitação pendente.
          </div>
        ) : (
          <div className="grid gap-4">
            {pendingRequests.map((req: any) => (
              <div key={req.id} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{req.profile?.name || "Usuário"}</h3>

                    <p className="text-sm text-muted-foreground">{req.profile?.email}</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={async () => {
                        await approveJoinRequest(req.id, req.group_id, req.user_id);

                        refresh();
                      }}
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                    >
                      Aprovar
                    </button>

                    <button
                      onClick={async () => {
                        await rejectJoinRequest(req.id);
                        refresh();
                      }}
                      className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted"
                    >
                      Recusar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* <section>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Solicite entrada em grupos criados por outros participantes.
          </p>
        </div>

        {availableGroups.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card/50 p-6 text-sm text-muted-foreground">
            Nenhum grupo disponível para solicitar entrada.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {availableGroups.map((group) => {
              const alreadyRequested = requestedGroupIds.includes(group.id);

              return (
                <GroupCard
                  key={group.id}
                  name={group.name}
                  description={group.description}
                  badge={alreadyRequested ? "Solicitado" : "Disponível"}
                  actionLabel={alreadyRequested ? "Aguardando aprovação" : "Pedir entrada"}
                  disabled={alreadyRequested}
                  onAction={async () => {
                    if (alreadyRequested) return;

                    await requestJoinGroup(group.id, user.id);
                    alert("Solicitação enviada");
                    refresh();
                  }}
                />
              );
            })}
          </div>
        )}
      </section> */}
    </main>
  );
}

function GroupCard({
  name,
  description,
  badge,
  actionLabel,
  onAction,
  disabled = false,
  to,
  params,
}: {
  name: string;
  description?: string;
  badge: string;
  actionLabel: string;
  onAction?: () => void;
  disabled?: boolean;
  to?: "/groups/$groupId";
  params?: { groupId: string };
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>

          <p className="mt-1 text-sm text-muted-foreground">{description || "Sem descrição."}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            disabled ? "bg-muted text-muted-foreground" : "bg-primary/15 text-primary"
          }`}
        >
          {badge}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs text-muted-foreground">Ranking em breve</span>

        {to && params ? (
          <Link
            to="/groups/$groupId"
            params={{ groupId: params.groupId }}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            {actionLabel}
          </Link>
        ) : (
          <button
            type="button"
            disabled={!onAction || disabled}
            onClick={onAction}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:opacity-70"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </article>
  );
}
