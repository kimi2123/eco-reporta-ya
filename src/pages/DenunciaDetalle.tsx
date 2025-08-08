import { useParams, Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { loadDenuncias } from "@/store/denuncias";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Map from "@/components/Map";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { slugForTipo } from "@/utils/categories";
const DenunciaDetalle = () => {
  const { id } = useParams();
  const d = loadDenuncias().find(x => x.id === id);
  const [mapToken, setMapToken] = useState("");
  const backTo = d ? `/categorias/${slugForTipo(d.tipo)}` : "/categorias";
  if (!d) {
    return (
      <main className="container mx-auto py-10">
        <Seo title="Denuncia no encontrada – EcoAlerta" />
        <p className="text-muted-foreground">No se encontró la denuncia.</p>
        <Link to="/categorias" className="text-primary underline">Volver</Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-10">
      <Seo title={`${d.tipo} – Informe de reporte`} description={d.descripcion} />
      <h1 className="text-4xl font-bold mb-6">Informe de reporte</h1>
      <Card>
        <CardHeader>
          <CardTitle>{d.tipo}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p><strong>Descripción:</strong> {d.descripcion}</p>
          <p className="text-sm text-muted-foreground"><strong>Fecha:</strong> {new Date(d.fecha).toLocaleDateString()} {d.ciudad && `– ${d.ciudad}`}</p>
          {typeof d.lat === 'number' && typeof d.lng === 'number' && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground"><strong>Ubicación:</strong> {d.lat.toFixed(5)}, {d.lng.toFixed(5)}</p>
              <div>
                <label className="text-sm mb-1 block">Token público de Mapbox (opcional)</label>
                <Input placeholder="pk.****************" value={mapToken} onChange={(e)=>setMapToken(e.target.value)} />
              </div>
              <Map token={mapToken} value={{ lat: d.lat, lng: d.lng }} draggable={false} />
            </div>
          )}
          {d.fotos && d.fotos.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {d.fotos.map((src,i)=> <img key={i} src={src} alt={`Evidencia ${i+1}`} className="w-full h-32 object-cover rounded-md" />)}
            </div>
          )}
          <Link to={backTo} className="text-primary underline">Volver al listado</Link>
        </CardContent>
      </Card>
    </main>
  );
};

export default DenunciaDetalle;
