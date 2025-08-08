import { Seo } from "@/components/Seo";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <main>
      <Seo title="EcoAlerta – Denuncias Ambientales" description="Reporta incidentes ambientales con ubicación, fotos y fecha." />
      <Hero />
      <section className="py-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-card p-6 rounded-xl border shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Cómo funciona EcoAlerta</h2>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Selecciona el tipo de incidente.</li>
              <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Describe claramente lo ocurrido.</li>
              <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Marca la ubicación y sube evidencia.</li>
            </ol>
            <Button asChild size="lg" variant="hero" className="mt-6">
              <Link to="/reporte">Crear denuncia</Link>
            </Button>
          </div>
          <div className="rounded-xl border p-6 bg-gradient-primary text-primary-foreground shadow-elegant">
            <h3 className="text-xl font-semibold mb-2">Transparencia y acceso</h3>
            <p className="opacity-95">Las denuncias se listan públicamente y pueden filtrarse por ciudad y año para facilitar el análisis ciudadano.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
