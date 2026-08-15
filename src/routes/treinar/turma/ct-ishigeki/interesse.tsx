import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, CheckCircle2, ChevronLeft } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/treinar/turma/ct-ishigeki/interesse")({
  component: InteresseCtIshigekiPage,
  head: () => ({
    meta: [
      { title: "Garantir Vaga — Muay Thai Turma — CT Ishigeki — André Rediss" },
      {
        name: "description",
        content:
          "Garanta sua vaga na nova turma de Muay Thai no CT Ishigeki, em Guaíba - RS. Início em setembro, terças e quintas às 20:30.",
      },
    ],
  }),
});

const interesseEndpoint = "https://n8n.marcaki.com/webhook/interesse/turma-ishigeki";

type SubmissionState = "idle" | "submitting" | "success" | "error";

function InteresseCtIshigekiPage() {
  const headerRef = useReveal<HTMLDivElement>();
  const [state, setState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      nome: String(formData.get("nome") ?? "").trim(),
      whatsapp: String(formData.get("whatsapp") ?? "").trim(),
      idade: Number(formData.get("idade")),
    };

    try {
      const response = await fetch(interesseEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as {
        message?: string;
        success?: boolean;
      } | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.message ?? "Não foi possível registrar sua pré-inscrição.");
      }

      setState("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Não foi possível registrar sua pré-inscrição.",
      );
      setState("error");
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="px-6 pt-8">
        <Link
          to="/treinar/turma/ct-ishigeki"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar para turma
        </Link>
      </div>

      <div ref={headerRef} className="fade-up mx-auto max-w-lg px-6 pb-8 pt-12 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
          <CalendarDays className="h-8 w-8" strokeWidth={1.5} />
        </div>
        <p className="mt-6 font-display text-xs uppercase tracking-[0.35em] text-primary">
          Turma confirmada · Início em setembro
        </p>
        <h1 className="mt-2 font-display text-4xl font-black uppercase leading-none sm:text-5xl">
          Garanta sua vaga
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Terças e quintas, 20:30, no CT Ishigeki. Vagas limitadas — preencha seus dados e
          entraremos em contato para confirmar sua matrícula.
        </p>
      </div>

      <section className="mx-auto max-w-lg px-6 pb-16">
        {state === "success" ? (
          <div className="border border-primary/40 border-l-2 border-l-primary bg-card px-6 py-10 text-center">
            <CheckCircle2 className="mx-auto h-11 w-11 text-primary" strokeWidth={1.5} />
            <h2 className="mt-5 font-display text-3xl font-black uppercase">
              Pré-inscrição registrada
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Você garantiu sua vaga na lista de pré-inscritos da turma do CT Ishigeki. Entraremos
              em contato para confirmar os detalhes da matrícula.
            </p>
            <Link
              to="/treinar/turma/ct-ishigeki"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary transition hover:text-foreground"
            >
              Voltar para a turma
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="border border-border/50 bg-card px-6 py-7 sm:px-8">
            <div className="flex items-start gap-3 border-b border-border/30 pb-6">
              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="font-display text-xl font-black uppercase">Pré-inscrição</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Preencha seus dados. Leva menos de um minuto.
                </p>
              </div>
            </div>

            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="text-sm font-medium">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  required
                  minLength={2}
                  autoComplete="name"
                  className="mt-2 h-11 w-full border border-input bg-background px-3 text-base outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="text-sm font-medium">
                  WhatsApp com DDD
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  className="mt-2 h-11 w-full border border-input bg-background px-3 text-base outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="(51) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="idade" className="text-sm font-medium">
                  Idade
                </label>
                <input
                  id="idade"
                  name="idade"
                  type="number"
                  required
                  min={1}
                  max={100}
                  inputMode="numeric"
                  className="mt-2 h-11 w-full border border-input bg-background px-3 text-base outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Ex.: 30"
                />
              </div>

              {state === "error" && (
                <p
                  className="border-l-2 border-destructive bg-destructive/10 px-3 py-2 text-sm text-destructive-foreground"
                  role="alert"
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "submitting"}
                className="group flex w-full items-center justify-between bg-primary px-5 py-4 font-display text-base font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-[oklch(0.595_0.225_27.5)] disabled:cursor-wait disabled:opacity-70"
              >
                {state === "submitting" ? "Registrando..." : "Garantir vaga"}
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        )}
      </section>

      <footer className="border-t border-border/30 px-6 py-8 text-center text-xs uppercase tracking-widest text-muted-foreground/50">
        © André Rediss — CREF 040046-G/RS
      </footer>
    </main>
  );
}
