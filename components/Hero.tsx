import { Button } from "@/components/ui/button";
import backgroundImage from "@/assets/fondo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center pt-16 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/60"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Redes y Fluidos SAS
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Más de 30 años de experiencia
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Especialistas en diseño e instalación de redes hidrosanitarias, gas e incendio para proyectos residenciales, comerciales e institucionales en Colombia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("proyectos")}
              className="text-base"
            >
              Ver Proyectos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contacto")}
              className="text-base"
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
