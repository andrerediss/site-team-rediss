import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, ChevronLeft, Clock3, Flame, MapPin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/treinar/turma/ct-ishigeki/")({
  component: TurmaCtIshigekiPage,
  head: () => ({
    meta: [
      { title: "Muay Thai Turma — CT Ishigeki — André Rediss" },
      {
        name: "description",
        content:
          "Nova turma de Muay Thai no CT Ishigeki, em Guaíba - RS. Aulas às terças e quintas, 20:30. R$149/mês. Turma em breve — entre na lista de espera.",
      },
    ],
  }),
});

function TurmaCtIshigekiPage() {
  const heroRef = useReveal<HTMLDivElement>();
  const valorRef = useReveal<HTMLDivElement>();
  const horarioRef = useReveal<HTMLDivElement>();
  const localRef = useReveal<HTMLDivElement>();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="px-6 pt-8">
        <Link
          to="/treinar/turma"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar
        </Link>
      </div>

      <div ref={heroRef} className="fade-up px-6 pb-2 pt-10 text-center">
        <Flame className="mx-auto h-10 w-10 text-primary" strokeWidth={1.5} />
        <h1 className="mt-4 font-display text-4xl font-black uppercase leading-none sm:text-5xl">
          Muay Thai Turma
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Nova turma no CT Ishigeki. Técnica sólida, ambiente motivador e acompanhamento do
          Professor André Rediss.
        </p>
        <div className="mt-4 inline-flex flex-wrap justify-center gap-2">
          <span className="rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Em breve
          </span>
          <span className="rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Lista de espera aberta
          </span>
        </div>
      </div>

      <section className="mx-auto max-w-lg px-6 pb-6 pt-12">
        <div ref={valorRef} className="fade-up">
          <span className="font-display text-xs uppercase tracking-[0.4em] text-primary">
            Mensalidade
          </span>
          <h2 className="mt-2 font-display text-2xl font-black uppercase">Valor do plano</h2>
          <div className="mt-6 border border-border/50 bg-card px-8 py-10 text-center">
            <p className="font-display text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Turma — por aluno
            </p>
            <p className="mt-4 font-display text-6xl leading-none font-black text-primary">R$149</p>
            <p className="mt-2 text-sm text-muted-foreground">por mês</p>
            <div className="mt-6 space-y-2 border-t border-border/30 pt-6 text-left">
              {[
                "Aulas às terças e quintas, 20:30",
                "Técnica de Muay Thai do zero ao avançado",
                "Condicionamento físico incluso",
                "Acompanhamento do Professor André Rediss",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 font-bold text-primary">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground/60">
            Valor cobrado mensalmente · CREF 040046-G/RS
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-lg px-6 py-6">
        <div
          ref={horarioRef}
          className="fade-up border border-border/50 border-l-2 border-l-primary bg-card px-6 py-6"
        >
          <div className="flex items-start gap-3">
            <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
                Horário
              </span>
              <h3 className="mt-1 font-display text-lg font-black uppercase">
                Terças e quintas — 20:30
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                As aulas ainda não começaram. Avisamos a data de início pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-lg px-6 py-6">
        <div
          ref={localRef}
          className="fade-up border border-border/50 border-l-2 border-l-primary bg-card px-6 py-6"
        >
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
                Local
              </span>
              <h3 className="mt-1 font-display text-lg font-black uppercase">CT Ishigeki</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Rua Santa Catarina, 472
                <br />
                Guaíba — RS
              </p>
              <a
                href="https://maps.google.com/?q=Rua+Santa+Catarina,+472,+Guaíba,+RS"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground/60 transition hover:text-primary"
              >
                Ver no mapa →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-lg px-6 pb-16 pt-4">
        <Link
          to="/treinar/turma/ct-ishigeki/interesse"
          className="group flex w-full items-center justify-between bg-primary px-6 py-5 font-display text-base font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-[oklch(0.595_0.225_27.5)]"
        >
          <span className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5" />
            Entrar na lista de espera
          </span>
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
        <p className="mt-3 text-center text-xs text-muted-foreground/50">
          Turma em breve · vagas limitadas
        </p>
      </section>

      <footer className="border-t border-border/30 px-6 py-8 text-center text-xs uppercase tracking-widest text-muted-foreground/50">
        © André Rediss — CREF 040046-G/RS
      </footer>
    </main>
  );
}
