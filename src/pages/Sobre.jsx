import { Seo } from "@/components/Seo";
import { Mail, Shield, Users, MapPin, Camera, Clock, Target } from "lucide-react";

const Sobre = () => {
  return (
    <main className="container mx-auto py-10 space-y-12">
      <Seo 
        title="Sobre EcoAlerta – Plataforma de Denuncias Ambientales" 
        description="EcoAlerta es una plataforma ciudadana para reportar incidentes ambientales con geolocalización, evidencia fotográfica y seguimiento en tiempo real." 
      />
      
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Sobre EcoAlerta
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Una plataforma ciudadana que empodera a las comunidades para proteger el medio ambiente 
          a través de denuncias georeferenciadas y evidencia documentada.
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Target className="text-primary" />
            Nuestra Misión
          </h2>
          <p className="text-muted-foreground">
            Facilitar la participación ciudadana en la protección del medio ambiente mediante 
            una plataforma tecnológica que permita documentar, geolocalizar y dar seguimiento 
            a incidentes ambientales de manera eficiente y transparente.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="text-primary" />
            Nuestro Compromiso
          </h2>
          <p className="text-muted-foreground">
            Crear un Ecuador más sostenible donde cada ciudadano tenga las herramientas 
            necesarias para reportar y combatir problemas ambientales, promoviendo la 
            responsabilidad colectiva y la acción inmediata.
          </p>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">¿Cómo Funciona EcoAlerta?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Target className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">1. Identifica el Incidente</h3>
            <p className="text-muted-foreground">
              Selecciona el tipo de problema ambiental: contaminación, deforestación, 
              minería ilegal, afectación a vida silvestre, entre otros.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Camera className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">2. Documenta con Evidencia</h3>
            <p className="text-muted-foreground">
              Describe detalladamente lo ocurrido, adjunta fotografías como evidencia 
              y especifica la fecha del incidente para crear un registro completo.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">3. Geolocaliza Precisamente</h3>
            <p className="text-muted-foreground">
              Marca la ubicación exacta en el mapa interactivo o permite que el sistema 
              detecte automáticamente tu ubicación para coordenadas precisas.
            </p>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Características Principales</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-4 rounded-lg border text-center">
            <MapPin className="text-primary w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Geolocalización</h3>
            <p className="text-sm text-muted-foreground">
              Ubicación precisa con coordenadas GPS para cada denuncia
            </p>
          </div>

          <div className="bg-card p-4 rounded-lg border text-center">
            <Camera className="text-primary w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Evidencia Fotográfica</h3>
            <p className="text-sm text-muted-foreground">
              Hasta 4 imágenes por reporte para documentar el incidente
            </p>
          </div>

          <div className="bg-card p-4 rounded-lg border text-center">
            <Clock className="text-primary w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Tiempo Real</h3>
            <p className="text-sm text-muted-foreground">
              Reportes inmediatos con registro de fecha y hora exacta
            </p>
          </div>

          <div className="bg-card p-4 rounded-lg border text-center">
            <Users className="text-primary w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Participación Ciudadana</h3>
            <p className="text-sm text-muted-foreground">
              Plataforma abierta para toda la comunidad ecuatoriana
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de Incidentes */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Tipos de Incidentes que Puedes Reportar</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="font-medium">Contaminación de agua, aire o suelo</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="font-medium">Incendios forestales</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
            <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
            <span className="font-medium">Minería ilegal</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="font-medium">Afectación a vida silvestre</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="font-medium">Deforestación no autorizada</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="font-medium">Vertidos de desechos tóxicos</span>
          </div>
        </div>
      </section>

      {/* Impacto y Estadísticas */}
      <section className="bg-card p-8 rounded-lg border">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Impacto</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Gratuito y Accesible</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Disponible las 24 horas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">GPS</div>
            <div className="text-muted-foreground">Precisión Geográfica</div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">¿Tienes Preguntas?</h2>
        <p className="text-muted-foreground">
          Estamos aquí para ayudarte a proteger nuestro medio ambiente
        </p>
        <div className="flex items-center justify-center gap-2 text-lg">
          <Mail className="text-primary" />
          <a href="mailto:contacto@ecoalerta.ec" className="text-primary hover:underline">
            contacto@ecoalerta.ec
          </a>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
