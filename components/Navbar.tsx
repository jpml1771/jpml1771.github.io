import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import logo from "@/assets/logo-redes-fluidos.png";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Redes y Fluidos SAS" 
            className="h-16 w-auto"
          />
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="ghost" onClick={() => scrollToSection("inicio")}>
                Inicio
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" onClick={() => scrollToSection("vision")}>
                Visión
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" onClick={() => scrollToSection("proyectos")}>
                Proyectos
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" onClick={() => scrollToSection("contacto")}>
                Contacto
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button 
          className="hidden md:inline-flex"
          onClick={() => scrollToSection("contacto")}
        >
          Contáctanos
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
