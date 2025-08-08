import { Seo } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Flame, Pickaxe, Squirrel } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { slug: "contaminacion", title: "Contaminación", desc: "Derrames, emisiones y desechos.", icon: Factory },
  { slug: "incendio-forestal", title: "Incendios forestales", desc: "Fuego que amenaza bosques.", icon: Flame },
  { slug: "mineria-ilegal", title: "Minería ilegal", desc: "Actividades no autorizadas.", icon: Pickaxe },
  { slug: "vida-silvestre", title: "Vida silvestre", desc: "Caza furtiva y abuso a animales.", icon: Squirrel },
];

const Categorias = () => {
  return (
    <main className="container mx-auto py-10">
      <Seo title="Categorías – EcoAlerta" description="Categorías de incidentes ambientales para denunciar." />
      <h1 className="text-4xl font-bold mb-8">Categorías de incidentes ambientales</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ slug, title, desc, icon: Icon }) => (
          <Link key={slug} to={`/categorias/${slug}`} className="block focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg">
            <Card className="hover:shadow-elegant transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Icon className="text-primary" /> {title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{desc}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Categorias;
