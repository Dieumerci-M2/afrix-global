import { Section, SectionHeading, ActionLink, MediaZone, Eyebrow } from "@/components/site"
import {
  GraduationCap,
  Rocket,
  Briefcase,
  Code2,
  Smartphone,
  BrainCircuit,
  PenTool,
  Megaphone,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"

/* ---------- Impact Metrics ---------- */
const metrics = [
  { value: "5,000+", label: "Youth Trained" },
  { value: "1,200+", label: "Jobs Created" },
  { value: "800+", label: "Freelancers Active" },
  { value: "350+", label: "Projects Delivered" },
  { value: "40+", label: "Startups Launched" },
  { value: "12", label: "Countries Reached" },
]

export function ImpactMetrics() {
  return (
    <Section className="bg-card/40">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
        {metrics.map((m) => (
          <div key={m.label} className="bg-background p-6 sm:p-8">
            <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{m.value}</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ---------- Ecosystem Overview ---------- */
const pillars = [
  { icon: GraduationCap, title: "We Train", desc: "Industry-grade bootcamps that build job-ready digital professionals." },
  { icon: Rocket, title: "We Create", desc: "We build startups and execute real projects with global impact." },
  { icon: Briefcase, title: "We Connect", desc: "We deploy talent on international projects and opportunities." },
]

export function Ecosystem() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="The Ecosystem"
            title="We don't only train talent. We deploy talent."
            description="Afrix Global connects every layer of the digital economy — from training and creation to real deployment on international projects."
          />
          <div className="mt-8 flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4 bg-background p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <MediaZone
          src="/images/ecosystem.png"
          alt="African startup founder presenting to a team in an innovation hub"
          aspect="aspect-[4/5]"
        />
      </div>
    </Section>
  )
}

/* ---------- Programs Overview ---------- */
const programs = [
  { icon: Code2, title: "Web Development" },
  { icon: Smartphone, title: "Mobile Development" },
  { icon: BrainCircuit, title: "Data & AI" },
  { icon: PenTool, title: "UI/UX Design" },
  { icon: Megaphone, title: "Digital Marketing" },
]

export function ProgramsOverview() {
  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Baobab Program"
          title="Career-defining digital programs"
          description="Master the skills the global market demands through hands-on, project-based learning."
        />
        <ActionLink href="/programs" variant="outline">
          View all programs
        </ActionLink>
      </div>
      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {programs.map((p) => (
          <Link
            key={p.title}
            href="/programs"
            className="group flex flex-col justify-between gap-8 bg-background p-6 transition-colors hover:bg-card"
          >
            <p.icon className="h-6 w-6 text-primary" />
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">{p.title}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}

/* ---------- Services Overview ---------- */
const services = [
  { title: "Digital Development", desc: "Websites, mobile apps, platforms, and custom software." },
  { title: "Digital Marketing", desc: "Social media, campaigns, and growth strategy." },
  { title: "Design & Communication", desc: "Branding, graphic design, UI/UX, and content." },
  { title: "Custom Solutions", desc: "Internal systems, NGO solutions, and enterprise platforms." },
]

export function ServicesOverview() {
  return (
    <Section className="bg-card/40">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <MediaZone src="/images/services.png" alt="African UI/UX designer working across dual monitors" aspect="aspect-[4/3]" />
        <div>
          <SectionHeading
            eyebrow="Services"
            title="Digital execution powered by African talent"
            description="We deliver world-class digital services to organizations across the globe."
          />
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-6">
                <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <ActionLink href="/services" className="mt-8">
            Start Your Project
          </ActionLink>
        </div>
      </div>
    </Section>
  )
}

/* ---------- Innovation Hub ---------- */
export function InnovationHubFeature() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-sm border border-border">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <Eyebrow>Innovation Hub</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Where ideas become scalable African startups
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A physical and digital ecosystem for innovation — incubation, hackathons, mentorship, investor networking,
              and coworking.
            </p>
            <ActionLink href="/innovation-hub" className="mt-8 w-fit">
              Join the Hub
            </ActionLink>
          </div>
          <div className="relative min-h-64 lg:min-h-full">
            <MediaZone
              src="/images/innovation-hub.png"
              alt="Modern African innovation hub and coworking space"
              aspect="h-full"
              className="rounded-none border-0 border-l border-border"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ---------- Featured Projects ---------- */
const featured = [
  { title: "PanAfri Pay", category: "Startup Project", image: "/images/projects.png" },
  { title: "AgriConnect Platform", category: "Client Project", image: "/images/services.png" },
  { title: "EduReach Mobile", category: "Student Project", image: "/images/training.png" },
]

export function FeaturedProjects() {
  return (
    <Section className="bg-card/40">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Featured Work" title="Projects built by our ecosystem" />
        <ActionLink href="/projects" variant="outline">
          View portfolio
        </ActionLink>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featured.map((p) => (
          <Link key={p.title} href="/projects" className="group">
            <MediaZone src={p.image} alt={p.title} aspect="aspect-[4/3]" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-primary">{p.category}</p>
                <h3 className="mt-1 text-base font-semibold text-foreground">{p.title}</h3>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}

/* ---------- Success Stories ---------- */
const stories = [
  {
    quote:
      "Afrix Global didn't just teach me to code — they placed me on an international project within months of graduating.",
    name: "Amara Okeke",
    role: "Full-Stack Developer, Lagos",
  },
  {
    quote: "The Innovation Hub gave my startup the mentorship and network we needed to raise our first round.",
    name: "Thabo Molefe",
    role: "Founder, PanAfri Pay",
  },
  {
    quote: "As a freelancer in the Talent 4 Startups network, I now work with clients across three continents.",
    name: "Fatima Diallo",
    role: "Product Designer, Dakar",
  },
]

export function SuccessStories() {
  return (
    <Section>
      <SectionHeading eyebrow="Success Stories" title="Real journeys, real outcomes" />
      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {stories.map((s) => (
          <figure key={s.name} className="flex flex-col justify-between gap-8 bg-background p-8">
            <blockquote className="text-base leading-relaxed text-foreground text-pretty">
              &ldquo;{s.quote}&rdquo;
            </blockquote>
            <figcaption>
              <p className="text-sm font-semibold text-foreground">{s.name}</p>
              <p className="text-sm text-muted-foreground">{s.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}

/* ---------- Partners ---------- */
const partners = ["Digital Africa", "TechCorp", "FutureFund", "InnovateNGO", "GlobalReach", "BuildAfrica"]

export function PartnersStrip() {
  return (
    <Section className="bg-card/40">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Trusted by organizations advancing Africa&apos;s digital future
      </p>
      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((p) => (
          <div key={p} className="flex items-center justify-center bg-background p-6">
            <span className="text-sm font-semibold tracking-tight text-muted-foreground">{p}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
