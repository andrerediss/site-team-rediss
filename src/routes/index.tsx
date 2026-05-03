import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Dumbbell, Flame, Laptop, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "André Rediss — Personal Trainer & Muay Thai Coach" },
      {
        name: "description",
        content:
          "André Rediss — Personal Trainer e Treinador de Muay Thai. 27 anos de experiência. Treino com método, foco em resultado real.",
      },
      { property: "og:title", content: "André Rediss — Personal Trainer & Muay Thai Coach" },
      {
        property: "og:description",
        content:
          "27 anos de Muay Thai. Árbitro profissional. Musculação e estética corporal. Treino com ciência, sem enrolação.",
      },
    ],
  }),
});

const WHATSAPP = "https://wa.me/5551989225787";
const INSTAGRAM = "https://instagram.com/andrerediss";

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Bio />
      <Services />
      <CTAFooter />
      <FooterBar />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20"
      style={{ background: "var(--gradient-dark)" }}>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Instagram @andrerediss"
        className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-primary sm:right-8 sm:top-8"
      >
        <Instagram className="h-4 w-4" />
        <span className="hidden sm:inline">@andrerediss</span>
      </a>

      <div className="flex flex-col items-center text-center">
        <h1 className="sr-only">André Rediss — Personal Trainer & Muay Thai Coach</h1>
        <img
          src={logo}
          alt="André Rediss — Personal Trainer & Muay Thai Coach"
          width={520}
          height={520}
          className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] drop-shadow-[0_8px_40px_rgba(204,20,20,0.25)]"
        />
        <p className="-mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground sm:text-base">
          Personal Trainer <span className="text-primary">•</span> Muay Thai Coach
        </p>
        <div className="mt-6 h-[3px] w-24 bg-primary" />

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer noopener"
          className="group mt-12 inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-[oklch(0.595_0.225_27.5)]"
        >
          Quero Treinar
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground/60">
        Brasil
      </div>
    </section>
  );
}

function Bio() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-t border-border/50 px-6 py-24 sm:py-32">
      <div ref={ref} className="fade-up mx-auto max-w-2xl text-center">
        <span className="font-display text-sm uppercase tracking-[0.4em] text-primary">Sobre</span>
        <p className="mt-6 font-display text-2xl font-bold uppercase leading-snug sm:text-3xl md:text-4xl">
          27 anos de Muay Thai. Árbitro profissional. Especialização em Musculação e Estética Corporal.
        </p>
        <p className="mt-6 text-base text-muted-foreground sm:text-lg">
          Treino com ciência, sem enrolação — para quem quer resultado real.
        </p>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    desc: "Musculação com método. Treino individualizado, foco em resultados mensuráveis.",
  },
  {
    icon: Flame,
    title: "Muay Thai",
    desc: "27 anos de experiência. Do iniciante ao competidor.",
  },
  {
    icon: Laptop,
    title: "Acompanhamento Online",
    desc: "Treino e orientação onde você estiver.",
  },
];

function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-t border-border/50 bg-[oklch(0.04_0_0)] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div ref={ref} className="fade-up mb-14 text-center">
          <span className="font-display text-sm uppercase tracking-[0.4em] text-primary">Serviços</span>
          <h2 className="mt-3 font-display text-4xl font-black uppercase sm:text-5xl">
            Como eu treino você
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: typeof Dumbbell;
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="fade-up group relative border-t-2 border-primary bg-card p-8 transition hover:bg-[oklch(0.11_0_0)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
      <h3 className="mt-6 font-display text-2xl font-black uppercase tracking-wide">{title}</h3>
      <p className="mt-3 text-muted-foreground">{desc}</p>
    </div>
  );
}

function CTAFooter() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-primary px-6 py-24 sm:py-28">
      <div ref={ref} className="fade-up mx-auto max-w-3xl text-center text-primary-foreground">
        <h2 className="font-display text-5xl font-black uppercase leading-none sm:text-6xl md:text-7xl">
          Pronto para evoluir?
        </h2>
        <p className="mt-5 text-lg opacity-90 sm:text-xl">
          Entre em contato e comece agora.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-10 inline-flex items-center gap-3 bg-white px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-primary transition hover:bg-white/90"
        >
          Falar no WhatsApp
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function FooterBar() {
  return (
    <footer className="border-t border-border/50 bg-background px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>© André Rediss</p>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 transition hover:text-primary"
        >
          <Instagram className="h-4 w-4" />
          @andrerediss
        </a>
      </div>
    </footer>
  );
}
