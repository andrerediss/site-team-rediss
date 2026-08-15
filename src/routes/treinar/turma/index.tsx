import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, Flame, Users } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/treinar/turma/")({
  component: TurmaEscolhaPage,
  head: () => ({
    meta: [
      { title: "Muay Thai Turma — André Rediss" },
      {
        name: "description",
        content:
          "Duas opções de turma de Muay Thai em Guaíba - RS: Studio Top Fitness e a nova turma no CT Ishigeki, com início em setembro.",
      },
    ],
  }),
});

const turmas = [
  {
    to: "/treinar/turma/studio-top-fitness",
    icon: Users,
    label: "Studio Top Fitness",
    desc: "Turma reduzida com até 5 alunos. R$100/mês.",
    tag: "Em formação",
  },
  {
    to: "/treinar/turma/ct-ishigeki",
    icon: Flame,
    label: "CT Ishigeki",
    desc: "Nova turma — terças e quintas, 20:30. Início em setembro.",
    tag: "Início em setembro",
  },
];

function TurmaEscolhaPage() {
  const titleRef = useReveal<HTMLDivElement>();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="px-6 pt-8">
        <Link
          to="/treinar"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar
        </Link>
      </div>

      <div ref={titleRef} className="fade-up px-6 pb-4 pt-10 text-center">
        <span className="font-display text-xs uppercase tracking-[0.4em] text-primary">
          Muay Thai
        </span>
        <h1 className="mt-3 font-display text-4xl font-black uppercase leading-none sm:text-5xl">
          Escolha sua turma
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Turmas reduzidas, técnica sólida e ambiente motivador. Veja horário, local e valores de
          cada opção.
        </p>
      </div>

      <div className="mx-auto flex max-w-lg flex-col gap-4 px-6 py-12">
        {turmas.map((t, i) => (
          <TurmaCard key={t.to} {...t} delay={i * 80} />
        ))}
      </div>

      <footer className="border-t border-border/30 px-6 py-8 text-center text-xs uppercase tracking-widest text-muted-foreground/50">
        © André Rediss — CREF 040046-G/RS
      </footer>
    </main>
  );
}

function TurmaCard({
  to,
  icon: Icon,
  label,
  desc,
  tag,
  delay,
}: {
  to: string;
  icon: typeof Users;
  label: string;
  desc: string;
  tag: string;
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      <Link
        to={to}
        className="group flex items-center justify-between gap-4 border border-border/50 border-t-2 border-t-primary bg-card px-6 py-6 transition hover:bg-[oklch(0.11_0_0)] hover:border-primary/60"
      >
        <div className="flex items-start gap-4">
          <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" strokeWidth={1.5} />
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-display text-xl font-black uppercase tracking-wide">
                {label}
              </span>
              <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                {tag}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
      </Link>
    </div>
  );
}
