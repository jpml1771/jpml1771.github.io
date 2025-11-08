import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Building2, Home, School } from "lucide-react";

const Projects = () => {
  const ongoingProjects = [
    {
      title: "Conjunto Residencial Los Sauces",
      type: "Residencial",
      description: "Instalación de redes hidrosanitarias y gas para 120 unidades residenciales",
      status: "En ejecución - 65%",
      icon: Home
    },
    {
      title: "Centro Comercial Plaza Central",
      type: "Comercial",
      description: "Sistema completo de redes de incendio y gas para complejo comercial",
      status: "En ejecución - 40%",
      icon: Building2
    },
    {
      title: "Universidad Nacional - Campus Norte",
      type: "Institucional",
      description: "Modernización de redes hidrosanitarias en edificio de laboratorios",
      status: "En ejecución - 80%",
      icon: School
    }
  ];

  const completedProjects = [
    {
      title: "Torres del Parque Empresarial",
      type: "Comercial",
      description: "Instalación completa de redes para 3 torres corporativas",
      year: "2024",
      icon: Building2
    },
    {
      title: "Urbanización Villa Verde",
      type: "Residencial",
      description: "Redes hidrosanitarias y gas para 200 viviendas",
      year: "2023",
      icon: Home
    },
    {
      title: "Hospital San Rafael",
      type: "Institucional",
      description: "Sistema de redes especializadas para área de urgencias",
      year: "2023",
      icon: School
    },
    {
      title: "Edificio Residencial Mirador",
      type: "Residencial",
      description: "Instalación de redes y sistema de incendio",
      year: "2022",
      icon: Home
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Proyectos</h2>
          <p className="text-lg text-muted-foreground">
            Experiencia comprobada en proyectos de diferentes escalas y sectores
          </p>
        </div>

        <Tabs defaultValue="ongoing" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="ongoing">En Ejecución</TabsTrigger>
            <TabsTrigger value="completed">Ejecutados</TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="secondary">{project.type}</Badge>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge className="bg-accent">{project.status}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <Badge variant="outline">{project.type}</Badge>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Completado en {project.year}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
