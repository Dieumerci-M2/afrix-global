import type { Metadata } from "next"
import { PageHero, Section, CtaBand } from "@/components/site"
import { ProjectGrid } from "@/components/projects/project-grid"

export const metadata: Metadata = {
  title: "Projects — Afrix Global",
  description: "A portfolio of client projects, student work, startups, and innovation prototypes built by our ecosystem.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Real projects, real impact"
        description="From client engagements to startups and prototypes — explore the work built by the Afrix Global ecosystem."
      />
      <Section>
        <ProjectGrid />
      </Section>
      <CtaBand
        title="Have a project in mind?"
        description="Partner with the talent and teams behind this work to build your next digital product."
        primary={{ href: "/contact", label: "Start Your Project" }}
        secondary={{ href: "/services", label: "Explore services" }}
      />
    </>
  )
}
