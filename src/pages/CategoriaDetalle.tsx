import { useParams, Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { loadDenuncias } from "@/store/denuncias";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryBySlug } from "@/utils/categories";
import { Factory, Flame, Pickaxe, Squirrel } from "lucide-react";
import { useState } from "react";
import CategoryFilters, { type CategoryFilterValue } from "@/components/category/CategoryFilters";

const iconBySlug: Record<string, any> = {
  "contaminacion": Factory,
  "incendio-forestal": Flame,
  "mineria-ilegal": Pickaxe,
  "vida-silvestre": Squirrel,
};

const CategoriaDetalle = () => {
  const { slug } = useParams();
  const cat = getCategoryBySlug(String(slug));
  const all = loadDenuncias();
  const filtered = cat
    ? all.filter((d) => (d.tipo ?? "").toLowerCase() === cat.matchTipo.toLowerCase())
    : [];
  const [filters, setFilters] = useState<CategoryFilterValue>({});
  const visible = filtered.filter((d) => {
    const byCity = !filters.city || (d.ciudad ?? "").toLowerCase() === filters.city.toLowerCase();
    const byYear = !filters.year || new Date(d.fecha).getFullYear().toString() === filters.year;
    return byCity && byYear;
  });
  const Icon = iconBySlug[String(slug)] ?? Factory;

  return (
    <main className="container mx-auto py-10">
      <Seo title={`${cat?.title ?? "Categoría"} – EcoAlerta`} description={`Denuncias de ${cat?.title ?? "categoría"}.`} />

      <div className="flex flex-col items-center text-center mb-6">
        <Icon className="w-12 h-12 text-primary mb-2" />
        <h1 className="text-4xl font-bold">{cat?.title ?? "Categoría"}</h1>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Denuncias ({visible.length})</h2>

      <CategoryFilters data={filtered} value={filters} onChange={setFilters} />

      <div className="grid gap-4">
        {visible.map((d) => (
          <Link to={`/denuncia/${d.id}`} key={d.id} className="block">
            <Card className="hover:shadow-elegant transition">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{new Date(d.fecha).toLocaleDateString()}</p>
                <p className="font-semibold">{d.ciudad ?? "Sin ciudad"}</p>
                <p className="text-sm">{d.descripcion}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
        {visible.length === 0 && (
          <p className="text-muted-foreground">No hay denuncias registradas para esta categoría con los filtros actuales.</p>
        )}
      </div>

      <div className="mt-6">
        <Link to="/categorias" className="text-primary underline">Volver a categorías</Link>
      </div>
    </main>
  );
};

export default CategoriaDetalle;
