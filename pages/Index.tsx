import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Redes y Fluidos SAS - Expertos en Redes Hidrosanitarias en Colombia</title>
        <meta 
          name="description" 
          content="Redes y Fluidos SAS, empresa colombiana con más de 30 años de experiencia en diseño e instalación de redes hidrosanitarias, gas e incendio para proyectos residenciales, comerciales e institucionales." 
        />
        <meta name="keywords" content="redes hidrosanitarias, instalación gas, sistemas incendio, Colombia, Bogotá, proyectos residenciales, proyectos comerciales" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Vision />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
