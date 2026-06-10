import type { Metadata } from "next"
import { PageHero, Section, SectionHeading, MediaZone, CtaBand, ActionLink } from "@/components/site"
import { Code2, Smartphone, BrainCircuit, PenTool, Megaphone, Users, GraduationCap, Briefcase, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Programs — Afrix Global",
  description: "The Baobab Program: industry-grade bootcamps in Web, Mobile, Data & AI, UI/UX, and Digital Marketing.",
}

const programs = [
  { icon: Code2, title: "Web Development", desc: "Build production-ready web applications with modern frameworks and best practices." },
  { icon: Smartphone, title: "Mobile Development", desc: "Ship cross-platform mobile apps that users love, from concept to app store." },
  { icon: BrainCircuit, title: "Data & AI", desc: "Turn data into intelligence with machine learning, analytics, and AI tooling." },
  { icon: PenTool, title: "UI/UX Design", desc: "Design intuitive, beautiful digital products grounded in user research." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Drive growth through performance marketing, content, and brand strategy." },
]

const methodology = [
  { icon: GraduationCap, title: "Bootcamps", desc: "Intensive, immersive learning led by industry practitioners." },
  { icon: Users, title: "Mentorship", desc: "One-on-one guidance from experienced professionals." },
  { icon: Briefcase, title: "Real Projects", desc: "Work on live international projects, not just exercises." },
  { icon: Award, title: "Certification", desc: "Earn credentials recognized by global employers." },
]

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Baobab Program"
        title="Career-defining digital programs built for the global market"
        description="The Baobab Program trains African talent through intensive, project-based learning — then deploys them on real international work. Like the baobab tree, we build deep roots and lasting growth."
      >
        <ActionLink href="/contact">Apply Now</ActionLink>
        <ActionLink href="/talent-4-startups" variant="outline">
          Talent 4 Startups
        </ActionLink>
      </PageHero>

      <Section>
        <MediaZone src="/images/training.png" alt="Students learning during an Afrix Global bootcamp" aspect="aspect-[16/9]" />
      </Section>

      <Section className="bg-card/40">
        <SectionHeading eyebrow="Tracks" title="Five career tracks. Endless opportunity." />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div key={p.title} className="flex flex-col gap-6 bg-background p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-border">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Methodology" title="How we build job-ready talent" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {methodology.map((m, i) => (
            <div key={m.title} className="flex flex-col gap-6 bg-background p-8">
              <div className="flex items-center justify-between">
                <m.icon className="h-6 w-6 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Your career starts here"
        description="Applications for the next Baobab cohort are open. Train with the best, deploy on real projects, and launch your global career."
        primary={{ href: "/contact", label: "Apply Now" }}
        secondary={{ href: "/projects", label: "See student work" }}
      />
    </>
  )
}
