import { Seo } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { exportCsv, loadDenuncias } from "@/store/denuncias";
import { useMemo, useState } from "react";

const Denuncias = () => {
  const [city, setCity] = useState("");
  const [year, setYear] = useState("");
  const all = loadDenuncias();

  const filtered = useMemo(() => {
    return all.filter(d => {
      const okCity = city ? (d.ciudad ?? "").toLowerCase().includes(city.toLowerCase()) : true;
      const okYear = year ? (d.fecha?.slice(0,4) === year) : true;
      return okCity && okYear;
    });
  }, [all, city, year]);

  return (
    <main className="container mx-auto py-10">
      <Seo title="Denuncias – EcoAlerta" description="Listado de denuncias con filtros por ciudad y año." />
      <h1 className="text-4xl font-bold mb-6">Denuncias</h1>

      <div className="flex flex-wrap gap-3 items-end mb-6">
        <div>
          <label className="text-sm block mb-1">Ciudad</label>
          <Input placeholder="Quito" value={city} onChange={(e)=>setCity(e.target.value)} />
        </div>
        <div>
          <label className="text-sm block mb-1">Año</label>
          <Input placeholder="2025" value={year} onChange={(e)=>setYear(e.target.value)} />
        </div>
        <Button variant="outline" onClick={()=>{ setCity(""); setYear(""); }}>Limpiar</Button>
        <Button variant="hero" onClick={()=>exportCsv(filtered)}>Exportar CSV</Button>
      </div>

      <div className="grid gap-4">
        {filtered.map((d)=> (
          <Card key={d.id} className="hover:shadow-elegant transition">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{d.tipo}</span>
                <span className="text-sm text-muted-foreground">{new Date(d.fecha).toLocaleDateString()}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{d.descripcion}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{d.ciudad ?? "Sin ciudad"}</span>
                <Link to={`/denuncia/${d.id}`} className="text-primary underline-offset-4 hover:underline">Ver detalle</Link>
              </div>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="text-muted-foreground">No hay denuncias registradas aún.</p>
        )}
      </div>
    </main>
  );
};

export default Denuncias;
