import type { Metadata } from "next";
import { PageHeader } from "../../components/page-header";
import { FormationsList } from "../../components/formations-list";

export const metadata: Metadata = {
  title: "Nos Formations - Afrix Global",
  description:
    "Explorez nos formations en developpement web, mobile, marketing digital et plus encore. Des programmes pratiques pour booster votre carriere.",
};

export default function FormationsPage() {
  return (
    <main>
      <PageHeader
        title="Nos"
        highlight="Formations"
        highlightColor="text-afrix-yellow"
        description="Des programmes de formation pratiques et complets, conçus pour vous doter des compétences les plus recherchées du marché numérique."
      />
      <FormationsList />
    </main>
  );
}
