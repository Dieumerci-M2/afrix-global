import type { Metadata } from "next";
import { PageHeader } from "../../components/page-header";
import { ServicesDetail } from "../../components/services-detail";
export const metadata: Metadata = {
  title: "Nos Services - Afrix Global",
  description:
    "Decouvrez nos services de developpement web, mobile, marketing digital, consultation informatique et communication visuelle.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Nos Services"
        description="Nous proposons une gamme complète de services numériques pour accompagner entreprises et particuliers dans leur transformation digitale."
      />
      <ServicesDetail />
    </main>
  );
}
