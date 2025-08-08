import { Seo } from "@/components/Seo";
import { Mail } from "lucide-react";

const Sobre = () => {
  return (
    <main className="container mx-auto py-10">
      <Seo title="Sobre – EcoAlerta" description="Guía, alcance y contacto del proyecto EcoAlerta." />
      <h1 className="text-4xl font-bold mb-6">Cómo funciona EcoAlerta</h1>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Selecciona el tipo de incidente.</li>
        <li>Describe lo ocurrido y sube evidencia.</li>
        <li>Marca la ubicación para coordenadas precisas.</li>
      </ul>
      <div className="mt-6 flex items-center gap-2 text-sm">
        <Mail className="text-primary" /> contacto@ecoalerta.ec
      </div>
    </main>
  );
};

export default Sobre;
