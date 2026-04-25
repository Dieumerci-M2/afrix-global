import type { Metadata } from "next";
import { FormationsList } from "../../components/formations-list";
import { PageHeader } from "../../components/page-header";

export const metadata: Metadata = {
  title: "Nos Formations - Afrix Global",
  description:
    "Explorez nos formations en developpement web, mobile, marketing digital et plus encore. Des programmes pratiques pour booster votre carriere.",
};

export default function FormationsPage() {
  return (
    <main>
      <PageHeader
        title="Nos Formations"
        description="Des programmes de formation pratiques et complets, conçus pour vous doter des compétences les plus recherchées du marché numérique."
      />
      <FormationsList />
    </main>
  );
}
