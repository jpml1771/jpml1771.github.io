import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award, Users } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Visión Empresarial</h2>
          <p className="text-lg text-muted-foreground">
            Comprometidos con la excelencia y la innovación en cada proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Ofrecer soluciones integrales en redes hidrosanitarias, gas e incendio con los más altos estándares de calidad y seguridad.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle>Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Ser la empresa líder en Colombia reconocida por la calidad, innovación y compromiso en todos nuestros proyectos.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <CardTitle>Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Integridad, excelencia técnica, responsabilidad ambiental y compromiso con nuestros clientes.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;
