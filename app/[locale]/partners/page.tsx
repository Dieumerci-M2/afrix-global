import type { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";
import { PageHero, Section, SectionHeading, CtaBand } from "@/components/site";

export const metadata: Metadata = {
  title: "Partners — Afrix Global",
  description:
    "Partner with Afrix Global to support Africa's digital transformation.",
};

export default async function PartnersPage() {
  const t = await getScopedI18n("partners");

  const partnerGroups = [
    {
      title: t("groups.digitalAfrica.title"),
      desc: t("groups.digitalAfrica.description"),
      names: ["Digital Africa", "AfriTech Alliance", "ConnectAfrica"],
    },
    {
      title: t("groups.ngos.title"),
      desc: t("groups.ngos.description"),
      names: ["OpportunityNGO", "FutureYouth", "BuildAfrica"],
    },
    {
      title: t("groups.techCompanies.title"),
      desc: t("groups.techCompanies.description"),
      names: ["TechCorp", "CloudNine", "DevStack"],
    },
    {
      title: t("groups.institutions.title"),
      desc: t("groups.institutions.description"),
      names: ["Pan-African University", "InnovateInstitute", "EduGlobal"],
    },
    {
      title: t("groups.foundations.title"),
      desc: t("groups.foundations.description"),
      names: ["FutureFund", "ImpactFoundation", "GrowthCapital"],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <Section>
        <SectionHeading
          eyebrow={t("network.eyebrow")}
          title={t("network.title")}
        />

        <div className="mt-10 flex flex-col gap-6">
          {partnerGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-sm border border-border bg-card p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-12">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {group.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-px self-start overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
                  {group.names.map((name) => (
                    <div
                      key={name}
                      className="flex items-center justify-center bg-background p-6"
                    >
                      <span className="text-sm font-semibold tracking-tight text-muted-foreground">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
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
          href: "/impact",
          label: t("cta.secondary"),
        }}
      />
    </>
  );
}
