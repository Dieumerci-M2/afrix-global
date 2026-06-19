import type { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";

import {
  PageHero,
  Section,
  SectionHeading,
  MediaZone,
  CtaBand,
  ActionLink,
} from "@/components/site";

import {
  Code2,
  Smartphone,
  BrainCircuit,
  PenTool,
  Megaphone,
  Users,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Programs — Afrix Global",
  description:
    "The Baobab Program: industry-grade bootcamps in Web, Mobile, Data & AI, UI/UX, and Digital Marketing.",
};

export default async function ProgramsPage() {
  const t = await getScopedI18n("programs");

  const programs = [
    {
      icon: Code2,
      title: t("tracks.web.title"),
      desc: t("tracks.web.description"),
    },
    {
      icon: Smartphone,
      title: t("tracks.mobile.title"),
      desc: t("tracks.mobile.description"),
    },
    {
      icon: BrainCircuit,
      title: t("tracks.ai.title"),
      desc: t("tracks.ai.description"),
    },
    {
      icon: PenTool,
      title: t("tracks.design.title"),
      desc: t("tracks.design.description"),
    },
    {
      icon: Megaphone,
      title: t("tracks.marketing.title"),
      desc: t("tracks.marketing.description"),
    },
  ];

  const methodology = [
    {
      icon: GraduationCap,
      title: t("methodology.bootcamps.title"),
      desc: t("methodology.bootcamps.description"),
    },
    {
      icon: Users,
      title: t("methodology.mentorship.title"),
      desc: t("methodology.mentorship.description"),
    },
    {
      icon: Briefcase,
      title: t("methodology.projects.title"),
      desc: t("methodology.projects.description"),
    },
    {
      icon: Award,
      title: t("methodology.certification.title"),
      desc: t("methodology.certification.description"),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      >
        <ActionLink href="/contact">{t("hero.applyNow")}</ActionLink>

        <ActionLink href="/talent-4-startups" variant="outline">
          {t("hero.talent4Startups")}
        </ActionLink>
      </PageHero>

      <Section>
        <MediaZone
          src="/images/training.png"
          alt={t("imageAlt")}
          aspect="aspect-[16/9]"
        />
      </Section>

      <Section className="bg-card/40">
        <SectionHeading
          eyebrow={t("tracksSection.eyebrow")}
          title={t("tracksSection.title")}
        />

        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.title}
              className="flex flex-col gap-6 bg-background p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-border">
                <p.icon className="h-5 w-5 text-primary" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t("methodologySection.eyebrow")}
          title={t("methodologySection.title")}
        />

        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {methodology.map((m, i) => (
            <div
              key={m.title}
              className="flex flex-col gap-6 bg-background p-8"
            >
              <div className="flex items-center justify-between">
                <m.icon className="h-6 w-6 text-primary" />

                <span className="font-mono text-sm text-muted-foreground">
                  0{i + 1}
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {m.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{
          href: "/contact",
          label: t("cta.primary"),
        }}
        secondary={{
          href: "/projects",
          label: t("cta.secondary"),
        }}
      />
    </>
  );
}
