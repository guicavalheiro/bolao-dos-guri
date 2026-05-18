import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getGroupById, type Group } from "@/lib/store";

export const Route =
  createFileRoute("/_auth/groups/$groupId")({
    component: GroupDetailsPage,
  });

function GroupDetailsPage() {
  const { groupId } = Route.useParams();

  const [group, setGroup] =
    useState<Group | null>(null);

  useEffect(() => { loadGroup().catch(console.error); }, [groupId]);
  
  async function loadGroup() {
    const data =
      await getGroupById(groupId);

    setGroup(data);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">

      <Link
        to="/groups"
        className="
        inline-flex items-center gap-2
        rounded-lg border border-border
        bg-card/50 px-4 py-2 text-sm
        text-muted-foreground transition
        hover:bg-card hover:text-foreground
      "
      >
        ← Voltar aos grupos
      </Link>


      <div>

        <h1 className="font-display text-5xl">
          {group?.name || "Carregando..."}
        </h1>

        <p className="mt-2 text-muted-foreground">
          {group?.description}
        </p>

      </div>


      <section className="rounded-2xl border bg-card p-6">

        <h2 className="text-2xl font-semibold">
          Participantes
        </h2>

        <p className="mt-2 text-muted-foreground">
          Em breve
        </p>

      </section>


      <section className="rounded-2xl border bg-card p-6">

        <h2 className="text-2xl font-semibold">
          Ranking
        </h2>

        <p className="mt-2 text-muted-foreground">
          Em breve
        </p>

      </section>

    </main>
  );
}