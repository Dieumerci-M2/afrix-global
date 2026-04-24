import type { Metadata } from "next";
import { BlogGrid } from "../../components/blog-grid";
import { PageHeader } from "../../components/page-header";

export const metadata: Metadata = {
  title: "Blog - Afrix Global",
  description:
    "Retrouvez nos articles, actualites et publications sur le numerique, la formation et l'innovation en Afrique.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="Notre Blog"
        description="Restez informé des dernières actualités, tendances et conseils du numérique et de la formation en Afrique."
      />
      <BlogGrid />
    </main>
  );
}
