import type { Metadata } from "next"
import { PageHero, Section, SectionHeading, CtaBand } from "@/components/site"

export const metadata: Metadata = {
  title: "Partners — Afrix Global",
  description: "Partner with Afrix Global to support Africa's digital transformation.",
}

const partnerGroups = [
  {
    title: "Digital Africa",
    desc: "Continental partners advancing digital infrastructure and inclusion.",
    names: ["Digital Africa", "AfriTech Alliance", "ConnectAfrica"],
  },
  {
    title: "NGOs",
    desc: "Mission-driven organizations creating opportunity at scale.",
    names: ["OpportunityNGO", "FutureYouth", "BuildAfrica"],
  },
  {
    title: "Tech Companies",
    desc: "Industry leaders providing tools, projects, and pathways to talent.",
    names: ["TechCorp", "CloudNine", "DevStack"],
  },
  {
    title: "Institutions",
    desc: "Universities and bodies aligned on education and innovation.",
    names: ["Pan-African University", "InnovateInstitute", "EduGlobal"],
  },
  {
    title: "Foundations",
    desc: "Funders investing in Africa's next generation of builders.",
    names: ["FutureFund", "ImpactFoundation", "GrowthCapital"],
  },
]

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Together, we accelerate Africa's digital transformation"
        description="We partner with organizations that share our belief in African talent — from foundations and NGOs to tech companies and institutions."
      />

      <Section>
        <SectionHeading eyebrow="Our Network" title="The organizations behind the ecosystem" />
        <div className="mt-10 flex flex-col gap-6">
          {partnerGroups.map((group) => (
            <div key={group.title} className="rounded-sm border border-border bg-card p-8">
              <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-12">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.desc}</p>
                </div>
                <div className="grid grid-cols-1 gap-px self-start overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
                  {group.names.map((n) => (
                    <div key={n} className="flex items-center justify-center bg-background p-6">
                      <span className="text-sm font-semibold tracking-tight text-muted-foreground">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Become a partner"
        description="Support Africa's digital transformation. Let's build the future of talent and innovation together."
        primary={{ href: "/contact", label: "Become a Partner" }}
        secondary={{ href: "/impact", label: "See our impact" }}
      />
    </>
  )
}
