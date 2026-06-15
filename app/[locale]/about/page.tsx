import type { Metadata } from "next"
import { PageHero, Section, SectionHeading, MediaZone, CtaBand, Eyebrow } from "@/components/site"
import { Target, Eye, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About — Afrix Global",
  description: "Our mission, vision, and what makes Afrix Global different. We don't only train talent. We deploy talent.",
}

const missionPoints = [
  "Train digital professionals.",
  "Create real-world opportunities.",
  "Build and support startups.",
  "Connect African talent globally.",
]

const differentiators = [
  "We don't only train talent. We deploy talent.",
  "We build startups.",
  "We execute real projects globally.",
]

const timeline = [
  { year: "2021", title: "The Beginning", desc: "Afrix Global launches its first digital talent bootcamp." },
  { year: "2022", title: "Talent 4 Startups", desc: "We begin connecting graduates to international startup projects." },
  { year: "2023", title: "Innovation Hub", desc: "Our physical and digital innovation ecosystem opens its doors." },
  { year: "2024", title: "Going Global", desc: "Talent deployed across 12 countries on real-world projects." },
]

const leaders = [
  { name: "Kwame Mensah", role: "Founder & CEO" },
  { name: "Aïcha Traoré", role: "Head of Programs" },
  { name: "David Achebe", role: "Director, Innovation Hub" },
  { name: "Lerato Khumalo", role: "Head of Partnerships" },
]

const impact = [
  { value: "5,000+", label: "Youth Trained" },
  { value: "40+", label: "Startups Launched" },
  { value: "12", label: "Countries Reached" },
  { value: "350+", label: "Projects Delivered" },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Afrix Global"
        title="An ecosystem for talent, innovation, and opportunity"
        description="We are building Africa's next generation of digital talent and startups — training, creating, and connecting people to global opportunities."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Our Mission</h2>
            </div>
            <ul className="mt-6 flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
              {missionPoints.map((p) => (
                <li key={p} className="bg-background p-5 text-base font-medium text-foreground">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <MediaZone src="/images/team.png" alt="Afrix Global leadership team" aspect="aspect-[4/3]" />
        </div>
      </Section>

      <Section className="bg-card/40">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MediaZone src="/images/community.png" alt="Afrix Global community event" aspect="aspect-[4/3]" className="lg:order-2" />
          <div className="lg:order-1">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Our Vision</h2>
            </div>
            <p className="mt-6 text-2xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-3xl">
              To become Africa&apos;s leading ecosystem for digital talent, innovation and opportunity creation.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">What makes us different</h2>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {differentiators.map((d, i) => (
            <div key={d} className="flex flex-col gap-6 bg-background p-8">
              <span className="font-mono text-sm text-primary">0{i + 1}</span>
              <p className="text-lg font-semibold leading-snug text-foreground text-balance">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/40">
        <SectionHeading eyebrow="Our Journey" title="From bootcamp to global ecosystem" />
        <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
          {timeline.map((t) => (
            <div key={t.year} className="grid gap-2 bg-background p-6 sm:grid-cols-[120px_1fr] sm:gap-8 sm:p-8">
              <span className="text-2xl font-bold tracking-tight text-primary">{t.year}</span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{t.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Leadership" title="The people building the ecosystem" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l) => (
            <div key={l.name}>
              <MediaZone src="/images/talent.png" alt={l.name} aspect="aspect-[4/5]" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{l.name}</h3>
              <p className="text-sm text-muted-foreground">{l.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/40">
        <Eyebrow>Our Impact</Eyebrow>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-4">
          {impact.map((m) => (
            <div key={m.label} className="bg-background p-8">
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{m.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Join the movement"
        description="Be part of Africa's next generation of digital talent and innovation."
        primary={{ href: "/programs", label: "Explore Programs" }}
        secondary={{ href: "/partners", label: "Partner with us" }}
      />
    </>
  )
}
