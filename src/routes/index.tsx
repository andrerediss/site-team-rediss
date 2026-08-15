import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Dumbbell, Flame, Laptop, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { useReveal } from "@/hooks/use-reveal";
import { useEffect } from "react";

const WHATSAPP = "https://wa.me/5551989225787";
const INSTAGRAM = "https://instagram.com/andrerediss";

function calcYears(birthYear: number, startAge: number): number {
  const today = new Date();
  const birthdayThisYear = new Date(today.getFullYear(), 3, 6);
  return today.getFullYear() - birthYear - startAge - (today < birthdayThisYear ? 1 : 0);
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "André Rediss — Personal Trainer & Muay Thai Coach em Guaíba" },
      {
        name: "description",
        content:
          "Personal Trainer e Treinador de Muay Thai em Guaíba e região. Mais de 27 anos de Artes Marciais. Especialista em Musculação e Estética Corporal. Treino com método e resultado real.",
      },
      {
        name: "keywords",
        content:
          "personal trainer Guaíba, personal trainer Porto Alegre, personal trainer Rio Grande do Sul, personal trainer online, Muay Thai Guaíba, musculação Guaíba, treino funcional Guaíba, emagrecimento Guaíba, hipertrofia, definição muscular, estética corporal, bodybuilding, condicionamento físico, perda de peso, ganho de massa muscular, treino para emagrecer, treino para mulheres, treino para homens, saúde e bem estar, qualidade de vida, performance esportiva, lutas Guaíba, artes marciais Guaíba, defesa pessoal, Muay Thai iniciante, kickboxing, treino de luta, academia de lutas, arte marcial para adultos, arte marcial para crianças, educação física, pós-graduação bodybuilding, professor de lutas, treinador profissional, André Rediss, Team Rediss, treino online, academia Porto Alegre Sul",
      },
      { name: "author", content: "André Rediss" },
      { name: "geo.region", content: "BR-RS" },
      { name: "geo.placename", content: "Guaíba, Rio Grande do Sul" },
      { property: "og:title", content: "André Rediss — Personal Trainer & Muay Thai Coach" },
      {
        property: "og:description",
        content:
          "Muay Thai com quem viveu o esporte. Musculação com quem estudou a fundo. Performance, saúde e estética em Guaíba e região.",
      },
      { property: "og:image", content: "https://andrerediss.com/logo.png" },
      { property: "og:url", content: "https://andrerediss.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "André Rediss — Personal Trainer & Muay Thai Coach" },
      {
        name: "twitter:description",
        content: "Muay Thai com quem viveu o esporte. Musculação com quem estudou a fundo.",
      },
      { name: "twitter:image", content: "https://andrerediss.com/logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://andrerediss.com" }],
  }),
});

function Index() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("pageview", {
        page_path: "/",
        page_title: "André Rediss — Personal Trainer & Muay Thai Coach",
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Bio />
      <Services />
      <CTAFooter />
      <WebDevPromo />
      <FooterBar />
    </main>
  );
}

function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20"
      style={{ background: "var(--gradient-dark)" }}
    >
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Instagram @andrerediss"
        className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-primary sm:right-8 sm:top-8"
      >
        <Instagram className="h-4 w-4" />
        @andrerediss
      </a>

      <div className="flex flex-col items-center text-center">
        <h1 className="sr-only">André Rediss — Personal Trainer & Muay Thai Coach</h1>
        <p className="mb-6 font-display text-sm font-black uppercase tracking-[0.4em] text-white/80">
          Team Rediss
        </p>
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-[#0f0f0f] p-3 shadow-[0_20px_60px_-15px_rgba(204,20,20,0.35)] ring-1 ring-primary/20">
          <img
            src={logo}
            alt="André Rediss — Personal Trainer & Muay Thai Coach"
            width={360}
            height={360}
            className="block h-auto w-[240px] rounded-2xl sm:w-[300px] md:w-[340px]"
          />
        </div>
        <p className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground sm:text-base">
          Personal Trainer
          <br />
          Muay Thai Coach
        </p>
        <div className="mt-6 h-[3px] w-24 bg-primary" />
        <Link
          to="/treinar"
          className="group mt-12 inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-[oklch(0.595_0.225_27.5)]"
        >
          Quero Treinar
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground/60">
        Brasil
      </div>
    </section>
  );
}

function Bio() {
  const ref = useReveal<HTMLDivElement>();
  const yearsOfPractice = calcYears(1989, 10);

  return (
    <section className="border-t border-border/50 px-6 py-24 sm:py-32">
      <div ref={ref} className="fade-up mx-auto max-w-2xl text-center">
        <span className="font-display text-sm uppercase tracking-[0.4em] text-primary">Sobre</span>
        <p className="mt-6 font-display text-2xl font-bold uppercase leading-snug sm:text-3xl md:text-4xl">
          Mais de {yearsOfPractice} anos de Artes Marciais. Especialista em Musculação e Estética
          Corporal.
        </p>
        <p className="mt-6 text-base text-muted-foreground sm:text-lg">
          Fui atleta. Treinei atletas e formei professores. Hoje treino pessoas que buscam a sua
          melhor versão, dentro e fora do tatame.
        </p>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Profissional de Educação Física, pós-graduado em Bodybuilding e Estética Corporal pelos
          melhores professores do Brasil.
        </p>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Muay Thai com quem viveu o esporte. Musculação com quem estudou a fundo. Se você busca
          performance, saúde ou estética, você está no lugar certo.
        </p>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Atendo presencialmente em Guaíba — RS e região metropolitana de Porto Alegre, com opção de
          acompanhamento 100% online para todo o Brasil.
        </p>
      </div>
    </section>
  );
}

function Services() {
  const ref = useReveal<HTMLDivElement>();
  const yearsOfPractice = calcYears(1989, 10);

  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      desc: "Musculação com método. Treino individualizado, foco em resultados mensuráveis.",
    },
    {
      icon: Flame,
      title: "Muay Thai",
      desc: `Mais de ${yearsOfPractice} anos de experiência. Do iniciante ao competidor.`,
    },
    {
      icon: Laptop,
      title: "Acompanhamento Online",
      desc: "Treino e orientação onde você estiver.",
    },
  ];

  return (
    <section className="border-t border-border/50 bg-[oklch(0.04_0_0)] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div ref={ref} className="fade-up mb-14 text-center">
          <span className="font-display text-sm uppercase tracking-[0.4em] text-primary">
            Serviços
          </span>
          <h2 className="mt-3 font-display text-4xl font-black uppercase sm:text-5xl">
            Treine com quem entrega resultado
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
        <p className="mt-5 text-lg opacity-90 sm:text-xl">Entre em contato e comece agora.</p>
        <Link
          to="/treinar"
          className="mt-10 inline-flex items-center gap-3 bg-white px-6 py-4 font-display text-base font-bold uppercase tracking-wide text-primary transition hover:bg-white/90"
        >
          Ver planos e valores
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

function WebDevPromo() {
  return (
    <section className="border-t border-border/20 bg-background px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-muted-foreground/60 sm:text-left">
          Gostou desta página?{" "}
          <span className="text-muted-foreground">
            Criamos sites personalizados para profissionais e negócios.
          </span>
        </p>
        <a
          href="https://wa.me/5551989225787?text=Olá%20André,%20gostei%20da%20sua%20página%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20criar%20o%20meu%20site."
          target="_blank"
          rel="noreferrer noopener"
          className="shrink-0 inline-flex items-center gap-2 border border-border/40 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground/60 transition hover:border-border hover:text-muted-foreground"
        >
          Solicitar orçamento
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
