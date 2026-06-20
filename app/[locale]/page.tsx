import { Hero } from "@/components/home/hero";
import {
  ImpactMetrics,
  Ecosystem,
  ProgramsOverview,
  ServicesOverview,
  InnovationHubFeature,
  SuccessStories,
  PartnersStrip,
} from "@/components/home/sections";
import { CtaBand } from "@/components/site";
import { getScopedI18n } from "@/locales/server";

export default async function HomePage() {
  const t = await getScopedI18n("home.cta");
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <Ecosystem />
      <ProgramsOverview />
      <ServicesOverview />
      <InnovationHubFeature />
      <SuccessStories />
      <PartnersStrip />
      <CtaBand
        title={t("title")}
        description={t("description")}
        primary={{
          href: "/programs",
          label: t("primary"),
        }}
        secondary={{
          href: "/contact",
          label: t("secondary"),
        }}
      />
    </>
  );
}
