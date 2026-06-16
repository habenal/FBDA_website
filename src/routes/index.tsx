import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Leaf,
  Factory,
  Coins,
  Users,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  Lightbulb,
  HandHeart,
  Target,
  UsersRound,
  Building2,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import teamBinyam from "@/assets/team-binyam.jpg";
import teamDaniel from "@/assets/team-daniel.jpg";
import teamKalayu from "@/assets/team-kalayu.jpg";
import teamSamuel from "@/assets/team-samuel.jpg";
import { Reveal } from "@/components/Reveal";
import { useSectionTransition } from "@/components/useSectionTransition";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Future Bridge Development Action — Bridging the Divide" },
      {
        name: "description",
        content:
          "Future Bridge Development Action is an Ethiopian non-profit building resilient, climate-smart communities through inclusive value chains, financial inclusion and sustainable livelihoods.",
      },
      { property: "og:title", content: "Future Bridge Development Action" },
      {
        property: "og:description",
        content:
          "Bridging the divide — empowering smallholder farmers, MSMEs, women and youth across Ethiopia.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Values", href: "#values" },
  { label: "Objectives", href: "#objectives" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const values = [
  {
    icon: HandHeart,
    title: "Humanity",
    body: "Prioritizing dignity, inclusion, and community well-being in every program and partnership.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    body: "Promoting ethical, data-driven decisions with accountability and openness at every level.",
  },
  {
    icon: Sprout,
    title: "Sustainable Empowerment",
    body: "Strengthening communities through long-term economic opportunities, resilience, and self-reliance.",
  },
  {
    icon: Lightbulb,
    title: "Locally-Led Innovation",
    body: "Advancing practical solutions driven by local knowledge, collaboration, and community leadership.",
  },
];

const objectives = [
  {
    icon: Target,
    title: "General Objectives",
    body: "Promote inclusive and sustainable development by strengthening climate resilience, improving food security, conserving natural resources, reducing environmental waste, and encouraging peaceful community engagement.",
  },
  {
    icon: UsersRound,
    title: "Our Targets",
    body: "Support smallholder farmers, MSMEs, women, youth, and persons with disabilities by creating opportunities for economic growth, capacity building, financial inclusion, and sustainable livelihoods.",
  },
  {
    icon: Sprout,
    title: "Priority Beneficiaries",
    body: "Focus on climate-vulnerable communities, underserved rural populations, women- and youth-led enterprises, and value chain actors within sectors such as agriculture, livestock, leather, coffee, and cotton.",
  },
  {
    icon: Building2,
    title: "Secondary Stakeholders",
    body: "Work closely with government institutions, private-sector actors, cooperatives, financial institutions, research organizations, and development partners to strengthen sustainable and inclusive development efforts.",
  },
];

const pillars = [
  {
    icon: Leaf,
    title: "Climate Resilience & Environmental Sustainability",
    body: "Building resilient communities through climate-smart solutions, environmental protection, sustainable resource management, and long-term food security initiatives.",
  },
  {
    icon: Factory,
    title: "Industrial Development & Digital Transformation",
    body: "Promoting sustainable industrial growth through innovation, digitalization, quality improvement, recycling practices, and safer, more competitive value chains.",
  },
  {
    icon: Coins,
    title: "Rural Finance, Market Access & Job Creation",
    body: "Strengthening economic opportunities by improving financial inclusion, market access, entrepreneurship, and sustainable livelihood creation for communities.",
  },
  {
    icon: Users,
    title: "Women, Youth & Disability Inclusion",
    body: "Empowering women, youth, and persons with disabilities through equal opportunities, skills development, leadership, and inclusive participation in society.",
  },
  {
    icon: HeartHandshake,
    title: "Humanitarian Response & Community Recovery",
    body: "Supporting vulnerable communities with humanitarian assistance, recovery programs, and resilience-building efforts during and after crises and disasters.",
  },
];

const team = [
  {
    name: "Binyam Kassa",
    role: "Executive Director",
    img: teamBinyam,
    bio: "Ethiopian Development Economist with over 15 years of experience in agricultural development, climate adaptation and private-sector growth. He has led programs with GIZ, the World Bank, SNV and Solidaridad Network across dairy, coffee, leather and cotton value chains.",
  },
  {
    name: "Daniel Tesfaye",
    role: "Head of Programs",
    img: teamDaniel,
    bio: "Project Manager and Leather & Agribusiness Specialist with 15+ years in donor-funded development. He managed a €4.1M EU and World Bank program introducing chrome-free tanning, supporting 46 SMEs and training over 1,500 workers.",
  },
  {
    name: "Kalayu Gebru",
    role: "Business Development & Partnership Lead",
    img: teamKalayu,
    bio: "Co-Founder with 18+ years in sustainable development, textile manufacturing and industrial engineering. He has worked with H&M Group and UNDP, managing €1.9M+ in donor-funded projects and advising 30+ MSMEs.",
  },
  {
    name: "Samuel Abebe",
    role: "Environmental & Industrial Sectors Lead",
    img: teamSamuel,
    bio: "Co-Founder and sustainability consultant with 15+ years in textile, garment and industrial development. He has managed €2.75M+ in projects with JICA, GIZ and Solidaridad focused on ESG standards and cleaner production.",
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 40" className="h-9 w-14" aria-hidden="true">
        <path
          d="M2 34 C 22 6, 42 6, 62 22"
          fill="none"
          stroke="var(--brand-green)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M8 36 C 26 16, 44 16, 60 28"
          fill="none"
          stroke="var(--brand-yellow)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <div className="leading-none">
        <span className="block text-base font-extrabold tracking-tight text-brand-green-dark">
          FUTURE BRIDGE
        </span>
        <span className="block text-[0.6rem] font-semibold tracking-[0.25em] text-brand-amber">
          DEVELOPMENT ACTION
        </span>
      </div>
    </div>
  );
}

function Index() {
  const [active, setActive] = useState("#home");
  const { overlay, handleAnchorClick } = useSectionTransition();

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background" onClick={handleAnchorClick}>
      {overlay}
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => {
              const isActive = active === n.href;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-sm font-medium transition-colors hover:text-brand-green-dark after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-brand-green after:transition-all after:duration-300 ${
                    isActive
                      ? "text-brand-green-dark after:w-full"
                      : "text-muted-foreground after:w-0 hover:after:w-full"
                  }`}
                >
                  {n.label}
                </a>
              );
            })}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <img
          src={hero}
          alt="Ethiopian smallholder farmers working in green highland fields at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/90 via-brand-green-dark/70 to-brand-amber/40" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-40">
          <span className="inline-block rounded-full bg-accent/90 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">
            Agenda 2026
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
            Bridging the Divide for resilient, self-sustaining communities
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            Future Bridge Development Action is an Ethiopian non-profit connecting vulnerable
            communities with sustainable economic opportunities, innovation and inclusive,
            climate-smart development.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-background px-7 py-3 text-sm font-semibold text-brand-green-dark shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Discover our work
            </a>
            <a
              href="#impact"
              className="rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Pillars of impact
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <Reveal>
        <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-amber">
                About us
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
                Connecting communities to lasting opportunity
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Future Bridge Development Action is an Ethiopian non-profit organization focused
                  on building resilient, self-sustaining, and climate-smart communities. Guided by
                  its mission of "Bridging the Divide," the organization connects vulnerable
                  communities with sustainable economic opportunities, innovation and inclusive
                  development.
                </p>
                <p>
                  FBDA supports smallholder farmers, MSMEs, women, youth and underserved groups by
                  promoting sustainable livelihoods, climate resilience, financial inclusion and
                  market access — creating long-term social and economic impact through practical,
                  community-driven solutions.
                </p>
                <p>
                  We operate across agriculture, livestock, leather, coffee, cotton and green
                  industrial development, collaborating with government, private-sector partners,
                  cooperatives and development organizations to strengthen inclusive growth in
                  Ethiopia.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">Vision</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  To create a world where inclusive and climate-smart value chains empower
                  resilient, self-sustaining and prosperous communities.
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-brand p-8 text-primary-foreground shadow-soft">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Mission</h3>
                </div>
                <p className="mt-3 text-primary-foreground/90">
                  To drive sustainable economic growth by empowering smallholder producers, workers
                  and MSMEs through inclusive value chains, localized innovation, financial
                  inclusion and climate-smart development practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Values */}
      <Reveal>
        <section id="values" className="bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-amber">
                Core values
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
                The principles that guide every partnership
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Objectives */}
      <Reveal>
        <section id="objectives" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-amber">
              Strategic objectives
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
              Where we focus our energy
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {objectives.map((o) => (
              <div
                key={o.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-brand-amber">
                  <o.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Pillars */}
      <Reveal>
        <section id="impact" className="bg-brand-green-dark py-20 text-primary-foreground md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
                Pillars of impact
              </p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Five pillars driving sustainable change
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur transition-colors hover:bg-primary-foreground/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow text-brand-green-dark">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Team */}
      <Reveal>
        <section id="team" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-amber">
              Meet the team
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
              Experienced leaders, deep local roots
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {team.map((m) => (
              <article
                key={m.name}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative bg-secondary/60 sm:w-2/5">
                    <img
                      src={m.img}
                      alt={`Portrait of ${m.name}`}
                      loading="lazy"
                      className="h-64 w-full object-cover object-top sm:h-full"
                    />
                  </div>
                  <div className="p-6 sm:w-3/5">
                    <h3 className="text-lg font-extrabold text-foreground">{m.name}</h3>
                    <p className="text-sm font-semibold text-brand-green">{m.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Closing CTA */}
      <Reveal>
        <section className="bg-secondary/50 py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
              We at Future Bridge Development Action
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              We believe every community deserves the opportunity to grow, succeed and build a
              better future. By working together with communities and partners, we aim to create
              lasting change, protect natural resources and build hope for future generations.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-brand-green-dark text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold">Contact us</h2>
              <p className="mt-3 max-w-md text-primary-foreground/80">
                Reach out to partner with us or learn more about our programs across Ethiopia.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+251912038304"
                className="flex items-center gap-3 hover:text-brand-yellow"
              >
                <Phone className="h-5 w-5 text-brand-yellow" /> +251 912 038 304
              </a>
              <a
                href="mailto:info@futurebridgeda.org"
                className="flex items-center gap-3 hover:text-brand-yellow"
              >
                <Mail className="h-5 w-5 text-brand-yellow" /> info@futurebridgeda.org
              </a>
              <a
                href="https://www.futurebridgeda.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-brand-yellow"
              >
                <Globe className="h-5 w-5 text-brand-yellow" /> www.futurebridgeda.com
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/70 sm:flex-row">
            <span className="font-bold tracking-tight">FUTURE BRIDGE DEVELOPMENT ACTION</span>
            <span>
              © {new Date().getFullYear()} Future Bridge Development Action. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
