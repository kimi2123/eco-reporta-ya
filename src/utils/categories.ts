export type Category = { slug: string; title: string; matchTipo: string };

export const categories: Category[] = [
  { slug: "contaminacion", title: "Contaminación", matchTipo: "Contaminación" },
  { slug: "incendio-forestal", title: "Incendios forestales", matchTipo: "Incendio forestal" },
  { slug: "mineria-ilegal", title: "Minería ilegal", matchTipo: "Minería ilegal" },
  { slug: "vida-silvestre", title: "Vida silvestre", matchTipo: "Vida silvestre" },
];

export const slugForTipo = (tipo: string): string => {
  const found = categories.find(
    (c) => c.matchTipo.toLowerCase() === (tipo ?? "").toLowerCase()
  );
  return found ? found.slug : "categorias";
};

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
