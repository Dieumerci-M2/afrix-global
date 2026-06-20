import {
  ActionLink,
  CtaBand,
  MediaZone,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site";
import {
  Building2,
  Code2,
  Globe2,
  HeartHandshake,
  Landmark,
  Megaphone,
  Palette,
  Settings,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Afrix Global",
  description:
    "Digital execution powered by African talent: development, marketing, design, and custom solutions.",
};

const serviceGroups = [
  {
    icon: Code2,
    title: "Digital Development",
    items: ["Websites", "Mobile Apps", "Platforms", "Custom Software"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    items: ["Social Media Management", "Digital Campaigns", "Growth Strategy"],
  },
  {
    icon: Palette,
    title: "Design & Communication",
    items: ["Branding", "Graphic Design", "UI/UX Design", "Digital Content"],
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    items: [
      "Internal Systems",
      "NGO Solutions",
      "Enterprise Platforms",
      "Digital Transformation",
    ],
  },
];

const clients = [
  { icon: HeartHandshake, label: "NGOs" },
  { icon: Building2, label: "Companies" },
  { icon: Landmark, label: "Governments" },
  { icon: Globe2, label: "International Organizations" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital execution powered by African talent"
        description="We deliver world-class digital products and services to organizations worldwide — built by the talent we train and deploy."
      >
        <ActionLink href="/contact">Start Your Project</ActionLink>
      </PageHero>

      <Section>
        <MediaZone
          src="/images/services.jpg"
          alt="Afrix Global designers and developers at work"
          aspect="aspect-[16/9]"
        />
      </Section>

      <Section className="bg-card/40">
        <SectionHeading
          eyebrow="What we do"
          title="Full-service digital execution"
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {serviceGroups.map((g) => (
            <div key={g.title} className="bg-background p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-border">
                <g.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-border px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Who we serve"
          title="Trusted by organizations of every kind"
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center gap-4 bg-background p-10 text-center"
            >
              <c.icon className="h-7 w-7 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Let's build something exceptional"
        description="From websites to enterprise platforms, our team delivers digital execution that moves your organization forward."
        primary={{ href: "/contact", label: "Start Your Project" }}
        secondary={{ href: "/projects", label: "View our work" }}
      />
    </>
  );
}
