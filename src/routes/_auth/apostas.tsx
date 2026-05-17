import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MATCHES, TEAMS, GROUPS, STAGES, type Group, type Match } from "@/lib/data/matches";
import { getStageState, getUserBets, saveBet, subscribe } from "@/lib/store";
import { useSession } from "@/hooks/use-session";
import { Flag } from "@/components/Flag";
import { useEffect } from "react";

export const Route = createFileRoute("/_auth/apostas")({
  component: BetsPage,
});

const fmtBR = new Intl.DateTimeFormat("pt-BR", { weekday: "short", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });

function BetsPage() {
  const { user } = useSession();
  const [, force] = useState(0);
  useEffect(() => subscribe(() => force(x => x + 1)), []);
  const stageOpen = getStageState().open;
  const userBets = user ? getUserBets(user.id) : {};
  const [activeGroup, setActiveGroup] = useState<Group | "ALL">("ALL");

  const matchesByGroup = useMemo(() => {
    const map: Record<string, Match[]> = {};
    for (const m of MATCHES) {
      const g = TEAMS[m.home].group;
      (map[g] ||= []).push(m);
    }
    return map;
  }, []);

  if (!user) return null;
  const groupOpen = stageOpen.group ?? true;

  const visibleGroups = activeGroup === "ALL" ? (Object.keys(GROUPS) as Group[]) : [activeGroup];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-4xl">Fase de Grupos</h2>
          <p className="text-sm text-muted-foreground">Palpite o placar exato de cada jogo. Você pode editar enquanto a fase estiver aberta.</p>
        </div>
        <StageBadge open={groupOpen} />
      </div>

      <div className="mb-6 flex flex-wrap gap-1.5">
        <Chip active={activeGroup === "ALL"} onClick={() => setActiveGroup("ALL")}>Todos</Chip>
        {(Object.keys(GROUPS) as Group[]).map(g => (
          <Chip key={g} active={activeGroup === g} onClick={() => setActiveGroup(g)}>Grupo {g}</Chip>
        ))}
      </div>

      <div className="space-y-10">
        {visibleGroups.map(g => (
          <section key={g}>
            <header className="mb-3 flex items-center gap-3">
              <h3 className="font-display text-2xl">Grupo {g}</h3>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {GROUPS[g].map(t => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-1">
                    <Flag code={TEAMS[t].code} className="h-3 w-4.5" />
                    {TEAMS[t].name}
                  </span>
                ))}
              </div>
            </header>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {(matchesByGroup[g] || []).sort((a,b) => a.dateBR.localeCompare(b.dateBR)).map(m => (
                <MatchCard
                  key={m.id}
                  match={m}
                  bet={userBets[m.id]}
                  disabled={!groupOpen}
                  onSave={(h, a) => saveBet(user.id, m.id, h, a)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-card/50 p-5">
        <h3 className="font-display text-xl">Próximas Fases</h3>
        <p className="mt-1 text-sm text-muted-foreground">As próximas fases serão liberadas pelo administrador conforme a Copa avança.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {STAGES.filter(s => s.id !== "group").map(s => (
            <span key={s.id} className={`rounded-full border px-3 py-1 text-xs ${stageOpen[s.id] ? "border-primary text-primary" : "border-border text-muted-foreground"}`}>
              {s.label} {stageOpen[s.id] ? "· aberta" : "· bloqueada"}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}

function StageBadge({ open }: { open: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${open ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"}`}>
      <span className={`h-2 w-2 rounded-full ${open ? "bg-primary" : "bg-destructive"}`} />
      {open ? "Apostas abertas" : "Apostas encerradas"}
    </span>
  );
}

function Chip({ active, onClick, children }: { active?: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`rounded-full px-3 py-1.5 text-sm transition ${active ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"}`}>
      {children}
    </button>
  );
}

function MatchCard({ match, bet, disabled, onSave }: { match: Match; bet?: { homeScore: number; awayScore: number }; disabled?: boolean; onSave: (h: number, a: number) => void }) {
  const home = TEAMS[match.home];
  const away = TEAMS[match.away];
  const [h, setH] = useState<string>(bet ? String(bet.homeScore) : "");
  const [a, setA] = useState<string>(bet ? String(bet.awayScore) : "");
  const dirty = (h !== (bet ? String(bet.homeScore) : "")) || (a !== (bet ? String(bet.awayScore) : ""));
  const canSave = h !== "" && a !== "" && !disabled && dirty;

  function save() {
    const hn = Math.max(0, Math.min(20, parseInt(h, 10) || 0));
    const an = Math.max(0, Math.min(20, parseInt(a, 10) || 0));
    onSave(hn, an);
  }

  return (
    <article className="group rounded-xl border border-border bg-card p-4 transition hover:border-primary/40">
      <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>{fmtBR.format(new Date(match.dateBR))}</span>
        <span className="truncate pl-2 text-right">{match.venue}</span>
      </div>
      <div className="flex items-center gap-3">
        <TeamSide team={home} />
        <div className="flex items-center gap-1.5">
          <ScoreInput value={h} onChange={setH} disabled={disabled} />
          <span className="text-muted-foreground">×</span>
          <ScoreInput value={a} onChange={setA} disabled={disabled} />
        </div>
        <TeamSide team={away} reverse />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">
          {bet ? <>Seu palpite salvo: <b className="text-foreground">{bet.homeScore} × {bet.awayScore}</b></> : <span>Sem palpite ainda</span>}
        </span>
        <button onClick={save} disabled={!canSave}
          className="rounded-md bg-primary px-3 py-1 font-medium text-primary-foreground transition disabled:cursor-not-allowed disabled:opacity-40">
          {bet ? "Atualizar" : "Salvar"}
        </button>
      </div>
    </article>
  );
}

function TeamSide({ team, reverse }: { team: { name: string; code: string }; reverse?: boolean }) {
  return (
    <div className={`flex flex-1 items-center gap-2 ${reverse ? "flex-row-reverse text-right" : ""}`}>
      <Flag code={team.code} />
      <span className="truncate text-sm font-medium">{team.name}</span>
    </div>
  );
}

function ScoreInput({ value, onChange, disabled }: { value: string; onChange: (v: string) => void; disabled?: boolean }) {
  return (
    <input
      inputMode="numeric"
      value={value}
      disabled={disabled}
      onChange={e => onChange(e.target.value.replace(/[^0-9]/g, "").slice(0, 2))}
      className="h-10 w-12 rounded-md border border-border bg-input/40 text-center text-lg font-semibold outline-none focus:border-primary disabled:opacity-50"
      placeholder="-"
    />
  );
}
