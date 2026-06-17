import {
  CtaBand,
  MediaZone,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact — Afrix Global",
  description:
    "The measurable impact of the Afrix Global ecosystem: youth trained, jobs created, startups launched, and more.",
};

const metrics = [
  { value: "5,000+", label: "Youth Trained" },
  { value: "1,200+", label: "Jobs Created" },
  { value: "800+", label: "Freelancers Active" },
  { value: "350+", label: "Projects Delivered" },
  { value: "40+", label: "Startups Launched" },
  { value: "12", label: "Countries Reached" },
];

const journeys = [
  {
    name: "Tacite Wakilongo",
    role: "Frontend Developer",
    image: "/images/tacite.jpg",
    story: "Joined the network as a junior developer...",
  },
  {
    name: "Laurence Masika",
    role: "UI/UX Designer",
    image: "/images/laurence.jpg",
    story: "Built a portfolio through international projects...",
  },
  {
    name: "Merveille Balume",
    role: "Backend Engineer",
    image: "/images/merveille.jpg",
    story: "Collaborated with global teams...",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Measurable change across the continent"
        description="Our impact isn't theoretical. It's careers launched, startups built, and opportunity created at scale across Africa."
      />

      <Section>
        <SectionHeading
          eyebrow="By the numbers"
          title="The Afrix Global ecosystem in figures"
        />
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background p-8 sm:p-10">
              <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {m.value}
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/40">
        <MediaZone
          src="/images/impact.jpg"
          alt="Afrix Global community celebrating impact"
          aspect="aspect-[16/9]"
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Alumni Journeys"
          title="Stories behind the numbers"
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {journeys.map((j) => (
            <div key={j.name} className="flex flex-col gap-6 bg-background p-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
                <img
                  src={j.image}
                  alt={j.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {j.name}
                </h3>
                <p className="text-sm text-primary">{j.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {j.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Be part of the next milestone"
        description="Every number represents a life changed. Join us in building Africa's digital future."
        primary={{ href: "/programs", label: "Join a Program" }}
        secondary={{ href: "/partners", label: "Partner with us" }}
      />
    </>
  );
}
