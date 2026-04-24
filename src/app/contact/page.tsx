import type { Metadata } from "next";
import { ContactForm } from "../../components/contact-form";
import { PageHeader } from "../../components/page-header";

export const metadata: Metadata = {
  title: "Contact - Afrix Global",
  description:
    "Contactez Afrix Global pour toute question, demande de formation ou collaboration. Nous sommes a votre ecoute.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contactez Nous"
        description="Vous avez une question, un projet ou souhaitez rejoindre nos formations ? N'hesitez pas a nous ecrire."
      />
      <ContactForm />
    </main>
  );
}
