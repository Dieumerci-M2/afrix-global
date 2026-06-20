import type { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";
import {
  PageHero,
  Section,
  SectionHeading,
  MediaZone,
  CtaBand,
} from "@/components/site";

export const metadata: Metadata = {
  title: "Impact — Afrix Global",
  description:
    "The measurable impact of the Afrix Global ecosystem: youth trained, jobs created, startups launched, and more.",
};

export default async function ImpactPage() {
  const t = await getScopedI18n("impact");

  const metricIndexes = [0, 1, 2, 3, 4, 5] as const;
  const journeyIndexes = [0, 1, 2] as const;

  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      {/* METRICS */}
      <Section>
        <SectionHeading
          eyebrow={t("metrics.eyebrow")}
          title={t("metrics.title")}
        />
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {metricIndexes.map((index) => (
            <div key={index} className="bg-background p-8 sm:p-10">
              <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {t(`metrics.items.${index}.value`)}
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {t(`metrics.items.${index}.label`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* COMMUNITY IMAGE */}
      <Section className="bg-card/40">
        <MediaZone
          src="/images/community.png"
          alt={t("community.alt")}
          aspect="aspect-[16/9]"
        />
      </Section>

      {/* ALUMNI JOURNEYS */}
      <Section>
        <SectionHeading
          eyebrow={t("journeys.eyebrow")}
          title={t("journeys.title")}
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {journeyIndexes.map((index) => {
            const name = t(`journeys.items.${index}.name`);
            return (
              <div
                key={index}
                className="flex flex-col gap-6 bg-background p-8"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
                  <img
                    src="/images/talent.png"
                    alt={name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {name}
                  </h3>
                  <p className="text-sm text-primary">
                    {t(`journeys.items.${index}.role`)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(`journeys.items.${index}.story`)}
                  </p>
                </div>
              </div>
            );
          })}
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
