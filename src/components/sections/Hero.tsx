import hero from "@/assets/ecoalerta-hero.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-12 md:py-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Aplicación para denunciar incidentes ambientales
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Informa sobre contaminación, incendios forestales, minería ilegal y más. Registra ubicación, fotos y fecha en minutos.
          </p>
          <div className="flex items-center gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/reporte">Denunciar ahora</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/categorias">Ver categorías</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          <img src={hero} alt="Ilustración EcoAlerta – ciudadanos reportando incidentes ambientales" className="relative rounded-xl shadow-elegant animate-float-slow" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
