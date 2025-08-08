import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
};

export const Seo = ({ title, description, canonical }: SeoProps) => {
  const metaDescription = description ?? "EcoAlerta: plataforma para reportar denuncias ambientales con ubicación, fotos y filtros por ciudad y año.";
  const canonicalUrl = canonical ?? window.location.href;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
    </Helmet>
  );
};
