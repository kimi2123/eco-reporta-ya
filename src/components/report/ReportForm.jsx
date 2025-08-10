import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Map from "@/components/Map";
import { addDenuncia } from "@/store/denuncias";
import { toast } from "@/hooks/use-toast";

const tipos = [
  "Contaminación",
  "Incendio forestal",
  "Minería ilegal",
  "Vida silvestre",
];

const ReportForm = () => {
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [mapToken, setMapToken] = useState("");
  const [coords, setCoords] = useState(undefined);
  const [fotos, setFotos] = useState([]);

  const handleFotos = async (files) => {
    if (!files) return;
    const arr = [];
    for (const f of Array.from(files).slice(0,4)) {
      arr.push(await fToDataUrl(f));
    }
    setFotos(arr);
  };

  const fToDataUrl = (f) => new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(String(reader.result));
    reader.onerror = () => rej();
    reader.readAsDataURL(f);
  });

  const submit = (e) => {
    e.preventDefault();
    if (!tipo || !descripcion || !fecha) {
      toast({ title: "Faltan campos", description: "Completa tipo, descripción y fecha." });
      return;
    }
    const created = addDenuncia({ tipo, descripcion, fecha, ciudad, lat: coords?.lat, lng: coords?.lng, fotos });
    toast({ title: "Denuncia enviada", description: `Código ${created.id.slice(0,8)}...` });
    setTipo(""); setDescripcion(""); setFecha(""); setCiudad(""); setCoords(undefined); setFotos([]);
  };

  return (
    <section className="container mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="bg-card p-6 rounded-xl border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Formulario de denuncia</h2>

          <label className="text-sm mb-1 block">Tipo de incidente</label>
          <select value={tipo} onChange={(e)=>setTipo(e.target.value)} className="w-full h-10 px-3 rounded-md border bg-background mb-4">
            <option value="">— Selecciona —</option>
            {tipos.map(t => <option key={t} value={t}>{t}</option>)}
          </select>

          <label className="text-sm mb-1 block">Descripción clara del incidente</label>
          <Textarea value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} placeholder="Describe lo ocurrido con detalles" className="mb-4" />

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm mb-1 block">Fecha del incidente</label>
              <Input type="date" value={fecha} onChange={(e)=>setFecha(e.target.value)} />
            </div>
            <div>
              <label className="text-sm mb-1 block">Ciudad (opcional)</label>
              <Input value={ciudad} onChange={(e)=>setCiudad(e.target.value)} placeholder="Quito, Guayaquil..." />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm mb-1 block">Evidencia fotográfica (hasta 4)</label>
            <Input type="file" accept="image/*" multiple onChange={(e)=>handleFotos(e.target.files)} />
            {fotos.length > 0 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {fotos.map((src,i)=>(<img key={i} src={src} alt={`Foto ${i+1}`} className="w-full h-20 object-cover rounded-md" />))}
              </div>
            )}
          </div>

          <Button type="submit" variant="hero" className="w-full">Enviar</Button>
        </form>

        <div className="bg-card p-6 rounded-xl border shadow-sm">
          <h3 className="font-semibold mb-2">Ubicación en mapa</h3>
          <div className="mb-3">
            <label className="text-sm mb-1 block">Token público de Mapbox (opcional)</label>
            <Input placeholder="pk.****************" value={mapToken} onChange={(e)=>setMapToken(e.target.value)} />
          </div>
          <Map token={mapToken} value={coords} onChange={setCoords} />
          {coords && (
            <p className="text-xs text-muted-foreground mt-2">Coordenadas: {coords.lat.toFixed(5)}, {coords.lng.toFixed(5)}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReportForm;
