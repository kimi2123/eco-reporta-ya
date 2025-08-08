import { Link, NavLink } from "react-router-dom";
import { Bell, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`;

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <TreePine className="text-primary" />
          <span>EcoAlerta</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>Inicio</NavLink>
          <NavLink to="/categorias" className={navLinkClass}>Categorías</NavLink>
          <NavLink to="/sobre" className={navLinkClass}>Sobre</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="hero" className="hidden sm:inline-flex">
            <Link to="/reporte">
              <Bell />
              Denunciar ahora
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
