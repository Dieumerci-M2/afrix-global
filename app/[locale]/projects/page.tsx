import type { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";

import { PageHero, Section, CtaBand } from "@/components/site";

import { ProjectGrid } from "@/components/projects/project-grid";

export const metadata: Metadata = {
  title: "Projects — Afrix Global",
  description:
    "A portfolio of client projects, student work, startups, and innovation prototypes built by our ecosystem.",
};

export default async function ProjectsPage() {
  const t = await getScopedI18n("projects");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <Section>
        <ProjectGrid />
      </Section>

      <CtaBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{
          href: "/contact",
          label: t("cta.primary"),
        }}
        secondary={{
          href: "/services",
          label: t("cta.secondary"),
        }}
      />
    </>
  );
}
