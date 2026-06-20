import type { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";

import {
  PageHero,
  Section,
  SectionHeading,
  MediaZone,
  CtaBand,
  Eyebrow,
} from "@/components/site";

import { Target, Eye, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Afrix Global",
  description: "Our mission, vision, and what makes Afrix Global different.",
};

export default async function AboutPage() {
  const t = await getScopedI18n("about");

  const missionIndexes = [0, 1, 2, 3] as const;
  const differentiatorIndexes = [0, 1, 2] as const;
  const timelineIndexes = [0, 1, 2, 3] as const;
  const leaderIndexes = [0, 1, 2, 3] as const;
  const impactIndexes = [0, 1, 2, 3] as const;

  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      {/* MISSION */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {t("mission.title")}
              </h2>
            </div>

            <ul className="mt-6 flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
              {missionIndexes.map((index) => (
                <li
                  key={index}
                  className="bg-background p-5 text-base font-medium text-foreground"
                >
                  {t(`mission.points.${index}`)}
                </li>
              ))}
            </ul>
          </div>

          <MediaZone
            src="/images/about1.jpg"
            alt={t("mission.imageAlt")}
            aspect="aspect-[4/3]"
          />
        </div>
      </Section>

      {/* VISION */}
      <Section className="bg-card/40">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MediaZone
            src="/images/vision.jpg"
            alt={t("vision.imageAlt")}
            aspect="aspect-[4/3]"
            className="lg:order-2"
          />

          <div className="lg:order-1">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {t("vision.title")}
              </h2>
            </div>

            <p className="mt-6 text-2xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-3xl">
              {t("vision.description")}
            </p>
          </div>
        </div>
      </Section>

      {/* DIFFERENTIATORS */}
      <Section>
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("differentiators.title")}
          </h2>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {differentiatorIndexes.map((index) => (
            <div key={index} className="flex flex-col gap-6 bg-background p-8">
              <span className="font-mono text-sm text-primary">
                0{index + 1}
              </span>
              <p className="text-lg font-semibold leading-snug text-foreground text-balance">
                {t(`differentiators.items.${index}`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section className="bg-card/40">
        <SectionHeading
          eyebrow={t("timeline.eyebrow")}
          title={t("timeline.title")}
        />

        <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
          {timelineIndexes.map((index) => (
            <div
              key={index}
              className="grid gap-2 bg-background p-6 sm:grid-cols-[120px_1fr] sm:gap-8 sm:p-8"
            >
              <span className="text-2xl font-bold tracking-tight text-primary">
                {t(`timeline.items.${index}.year`)}
              </span>

              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {t(`timeline.items.${index}.title`)}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {t(`timeline.items.${index}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* IMPACT */}
      <Section className="bg-card/40">
        <Eyebrow>{t("impact.eyebrow")}</Eyebrow>

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-4">
          {impactIndexes.map((index) => (
            <div key={index} className="bg-background p-8">
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {t(`impact.metrics.${index}.value`)}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {t(`impact.metrics.${index}.label`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CtaBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{
          href: "/programs",
          label: t("cta.primary"),
        }}
        secondary={{
          href: "/partners",
          label: t("cta.secondary"),
        }}
      />
    </>
  );
}
