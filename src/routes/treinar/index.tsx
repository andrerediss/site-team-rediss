import { createFileRoute, Link } from "@tanstack/react-router";
import { Dumbbell, Flame, Users, ArrowRight, ChevronLeft } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/treinar/")({
  component: TreinarPage,
  head: () => ({
    meta: [
      { title: "Escolha seu Treino — André Rediss" },
      { name: "description", content: "Personal Trainer, Muay Thai individual ou em turma. Veja valores, localização e agende seu treino com André Rediss em Guaíba - RS." },
    ],
  }),
});

const services = [
  {
    to: "/treinar/personal",
    icon: Dumbbell,
    label: "Personal Trainer",
    desc: "Treino individualizado de musculação com método e acompanhamento completo.",
    tag: "Presencial",
  },
  {
    to: "/treinar/muaythai",
    icon: Flame,
    label: "Muay Thai Particular",
    desc: "Aula individual ou em dupla. Atenção 100% focada na sua evolução.",
    tag: "Individual / Dupla",
  },
  {
    to: "/treinar/turma",
    icon: Users,
    label: "Muay Thai Turma",
    desc: "Turma reduzida com até 5 alunos. Ambiente motivador e técnica sólida.",
    tag: "Turma",
  },
];

function TreinarPage() {
  const titleRef = useReveal<HTMLDivElement>();

  return (
    <main className="min-h-screen bg-background text-foreground" style={{ background: "var(--gradient-dark)" }}>
      <div className="px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Início
        </Link>
      </div>

      <div ref={titleRef} className="fade-up px-6 pb-4 pt-12 text-center">
        <span className="font-display text-xs uppercase tracking-[0.4em] text-primary">
          Team Rediss
        </span>
        <h1 className="mt-3 font-display text-4xl font-black uppercase leading-none sm:text-5xl">
          Escolha seu treino
        </h1>
        <p className="mt-4 text-muted-foreground">
          Selecione uma modalidade para ver valores, localização e agendar.
        </p>
      </div>

      <div className="mx-auto flex max-w-lg flex-col gap-4 px-6 py-12">
        {services.map((s, i) => (
          <ServiceCard key={s.to} {...s} delay={i * 80} />
        ))}
      </div>

      <footer className="border-t border-border/30 px-6 py-8 text-center text-xs uppercase tracking-widest text-muted-foreground/50">
        © André Rediss — CREF 040046-G/RS
      </footer>
    </main>
  );
}

function ServiceCard({
  to,
  icon: Icon,
  label,
  desc,
  tag,
  delay,
}: {
  to: string;
  icon: typeof Dumbbell;
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
