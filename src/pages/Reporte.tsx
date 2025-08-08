import { Seo } from "@/components/Seo";
import ReportForm from "@/components/report/ReportForm";

const Reporte = () => {
  return (
    <main>
      <Seo title="Crear denuncia – EcoAlerta" description="Formulario para crear una denuncia ambiental con ubicación, fecha y fotos." />
      <ReportForm />
    </main>
  );
};

export default Reporte;
