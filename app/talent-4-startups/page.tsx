import type { Metadata } from "next"
import { PageHero, Section, SectionHeading, MediaZone, CtaBand, ActionLink } from "@/components/site"
import { Search, FileCheck, Rocket, TrendingUp, Globe, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Talent 4 Startups — Afrix Global",
  description: "Connecting African talent with startup opportunities and international projects.",
}

const steps = [
  { icon: Search, title: "We Match", desc: "We pair vetted African talent with startups and projects that fit their skills." },
  { icon: FileCheck, title: "We Onboard", desc: "Talent is project-ready from day one, with support throughout the engagement." },
  { icon: Rocket, title: "We Deploy", desc: "Talent delivers real work on international projects, building global track records." },
]

const talentBenefits = [
  "Access to international projects and clients",
  "Competitive global compensation",
  "Mentorship and continuous upskilling",
  "A portfolio of real-world work",
]

const startupBenefits = [
  "Vetted, project-ready digital talent",
  "Faster hiring at competitive rates",
  "Flexible engagement models",
  "A reliable partner for scaling teams",
]

const stories = [
  { quote: "We scaled our engineering team in weeks with talent that delivered from day one.", name: "Lina Costa", role: "CTO, FinFlow (Lisbon)" },
  { quote: "Talent 4 Startups connected me to clients I could never have reached alone.", name: "Ibrahim Sow", role: "Backend Engineer, Accra" },
]

export default function Talent4StartupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Talent 4 Startups"
        title="Connecting African talent with global startup opportunities"
        description="A network that links the continent's best digital talent to startups and international projects — creating opportunity on both sides."
      >
        <ActionLink href="/contact">Join Talent 4 Startups</ActionLink>
        <ActionLink href="/services" variant="outline">
          Hire talent
        </ActionLink>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="How It Works" title="From talent to deployment in three steps" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-col gap-6 bg-background p-8">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-border">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/40">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MediaZone src="/images/talent.png" alt="African freelance developer working remotely" aspect="aspect-[4/3]" />
          <div className="grid gap-8">
            <div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">For Talent</h3>
              </div>
              <ul className="mt-4 flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
                {talentBenefits.map((b) => (
                  <li key={b} className="bg-background p-4 text-sm text-foreground">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">For Startups</h3>
              </div>
              <ul className="mt-4 flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
                {startupBenefits.map((b) => (
                  <li key={b} className="bg-background p-4 text-sm text-foreground">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Success Stories" title="Partnerships that deliver" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {stories.map((s) => (
            <figure key={s.name} className="flex flex-col justify-between gap-8 bg-background p-8">
              <blockquote className="text-lg leading-relaxed text-foreground text-pretty">&ldquo;{s.quote}&rdquo;</blockquote>
              <figcaption>
                <p className="text-sm font-semibold text-foreground">{s.name}</p>
                <p className="text-sm text-muted-foreground">{s.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Build your global career — or your global team"
        description="Join the Talent 4 Startups network and connect to opportunity, wherever it is."
        primary={{ href: "/contact", label: "Join Talent 4 Startups" }}
        secondary={{ href: "/projects", label: "See the work" }}
      />
    </>
  )
}
