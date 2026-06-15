import type { Metadata } from "next"
import { PageHero, Section, SectionHeading, MediaZone, CtaBand, ActionLink } from "@/components/site"
import { Rocket, Code, Users, Network, Building, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Innovation Hub — Afrix Global",
  description: "A physical and digital ecosystem for innovation and startups. Turn ideas into scalable African startups.",
}

const activities = [
  { icon: Rocket, title: "Startup Incubation", desc: "From idea to launch with structured incubation and resources." },
  { icon: Code, title: "Hackathons", desc: "High-energy events where ideas become working prototypes." },
  { icon: Users, title: "Mentorship", desc: "Guidance from founders, operators, and industry experts." },
  { icon: Network, title: "Investor Networking", desc: "Connect with investors ready to back African innovation." },
  { icon: Building, title: "Coworking Space", desc: "A premium space designed for builders and collaboration." },
  { icon: Target, title: "Founder Support", desc: "Operational and strategic support at every stage of growth." },
]

export default function InnovationHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovation Hub"
        title="Where ideas become scalable African startups"
        description="A physical and digital ecosystem built for innovation — bringing together founders, talent, mentors, and investors under one roof."
      >
        <ActionLink href="/contact">Join the Hub</ActionLink>
      </PageHero>

      <Section>
        <MediaZone src="/images/innovation-hub.png" alt="Afrix Global Innovation Hub coworking space" aspect="aspect-[16/9]" />
      </Section>

      <Section className="bg-card/40">
        <SectionHeading eyebrow="What happens here" title="Everything founders need to build" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <div key={a.title} className="flex flex-col gap-6 bg-background p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-border">
                <a.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MediaZone src="/images/hackathon.png" alt="Hackathon event at the Innovation Hub" aspect="aspect-[4/3]" />
          <div>
            <SectionHeading
              eyebrow="The Goal"
              title="Turn ideas into scalable African startups"
              description="The Innovation Hub exists to compress the distance between an idea and a thriving company — providing the environment, network, and capital access founders need to scale beyond borders."
            />
            <ActionLink href="/contact" className="mt-8">
              Join the Hub
            </ActionLink>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Have an idea worth building?"
        description="Bring it to the Innovation Hub. We'll help you turn it into a startup that scales."
        primary={{ href: "/contact", label: "Join the Hub" }}
        secondary={{ href: "/projects", label: "See startups we've built" }}
      />
    </>
  )
}
