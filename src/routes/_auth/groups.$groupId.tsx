import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
    getGroupById,
    getGroupMembers,
    getGroupRanking,
    type Group,
} from "@/lib/store";

export const Route =
    createFileRoute("/_auth/groups/$groupId")({
        component: GroupDetailsPage,
    });

function GroupDetailsPage() {
    const { groupId } = Route.useParams();

    const [group, setGroup] =
        useState<Group | null>(null);

    const [members, setMembers] =
        useState<any[]>([]);

    const [ranking, setRanking] =
        useState<any[]>([]);

    useEffect(() => { loadGroup().catch(console.error); }, [groupId]);

    async function loadGroup() {

        const data =
            await getGroupById(groupId);

        const users =
            await getGroupMembers(groupId);

        const rank =
            await getGroupRanking(groupId);

        setGroup(data);
        setMembers(users);
        setRanking(rank);

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
                    hover:bg-card hover:text-foreground"
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

                <div className="mt-5 space-y-3">

                    {members.length === 0 && (

                        <p className="text-muted-foreground">
                            Nenhum participante
                        </p>

                    )}

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

                                    {member.role === "owner"
                                        ? "👑 "
                                        : "⚽ "}

                                    {member.profile?.name}

                                </div>

                                <div className="
                                    text-sm
                                    text-muted-foreground"
                                >
                                    {member.profile?.email}
                                </div>

                            </div>

                            <span className="
                                rounded-full
                                bg-primary/10
                                px-3 py-1
                                text-xs
                                text-primary"
                            >

                                {member.role === "owner"
                                    ? "Dono"
                                    : "Participante"}

                            </span>

                        </div>

                    ))}

                </div>

            </section>


            <section className="rounded-2xl border bg-card p-6">

                <h2 className="text-2xl font-semibold">
                    🏆 Ranking
                </h2>

                <div className="mt-5 space-y-3">

                    {ranking.length === 0 && (

                        <p className="text-muted-foreground">
                            Ainda sem pontuação
                        </p>

                    )}

                    {ranking.map(
                        (member: any, index: number) => (

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

                                    <div className="
                                    flex h-8 w-8
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-primary/10
                                    text-primary
                                    ">

                                        {index + 1}º

                                    </div>

                                    <div>

                                        <div className="font-medium">

                                            {member.profile?.name}

                                        </div>

                                        <div className="
                                        text-sm
                                        text-muted-foreground
                                        ">

                                            {member.role === "owner"
                                                ? "Dono"
                                                : "Participante"}

                                        </div>

                                    </div>

                                </div>


                                <div className="
                                text-lg
                                font-semibold
                                text-primary
                                ">

                                    {member.points}
                                    pts

                                </div>

                            </div>

                        ))}

                </div>

            </section>

        </main>
    );
}