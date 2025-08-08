import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Index from "./pages/Index";
import Categorias from "./pages/Categorias";
import Reporte from "./pages/Reporte";
import Denuncias from "./pages/Denuncias";
import DenunciaDetalle from "./pages/DenunciaDetalle";
import Sobre from "./pages/Sobre";
import CategoriaDetalle from "./pages/CategoriaDetalle";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HelmetProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categorias/:slug" element={<CategoriaDetalle />} />
            <Route path="/reporte" element={<Reporte />} />
            <Route path="/denuncias" element={<Denuncias />} />
            <Route path="/denuncia/:id" element={<DenunciaDetalle />} />
            <Route path="/sobre" element={<Sobre />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
