import { AboutContent } from "../../components/about-content";
import { PageHeader } from "../../components/page-header";

export const metadata = {
  title: "A Propos - Afrix Global",
  description:
    "Decouvrez Afrix Global, notre mission, notre vision et nos valeurs pour transformer l'education numerique en Afrique.",
};

export default function AproposPage() {
  return (
    <>
      <PageHeader
        title=" À Propos de Nous"
        description="Découvrez notre histoire et notre vision pour révolutionner l’éducation numérique en Afrique avec des solutions innovantes."
      />
      <AboutContent />
    </>
  );
}
