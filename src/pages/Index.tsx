import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedTutors from "@/components/FeaturedTutors";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Clock, Award, HeartHandshake } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryGrid />
      <FeaturedTutors />
      
      {/* Why Choose ClassTuu Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegir SKILO?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hemos creado la plataforma más segura y confiable para conectar 
              estudiantes con los mejores tutores locales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Tutores verificados",
                description: "Todos nuestros instructores pasan por un riguroso proceso de verificación antes de unirse."
              },
              {
                icon: Clock,
                title: "Respuesta rápida",
                description: "Los tutores responden en promedio en menos de 2 horas. ¡Empieza a aprender hoy!"
              },
              {
                icon: Award,
                title: "Calidad garantizada",
                description: "Solo trabajamos with los mejores. Rating promedio de 4.8/5 estrellas."
              },
              {
                icon: HeartHandshake,
                title: "Soporte completo",
                description: "Te acompañamos en todo el proceso, desde la búsqueda hasta el seguimiento de clases."
              }
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6 text-center border-0 bg-gradient-card">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para empezar a aprender?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya han encontrado su tutor ideal en SKILO.
            ¡Tu próxima clase te está esperando!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3">
              Encontrar tutor
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              Conviértete en tutor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold">SKILO</span>
              </div>
              <p className="text-background/80 mb-4">
                La plataforma líder para encontrar tutores locales verificados.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categorías</h4>
              <ul className="space-y-2 text-background/80">
                <li>Música</li>
                <li>Artes y Manualidades</li>
                <li>Deportes</li>
                <li>Académico</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-background/80">
                <li>Centro de ayuda</li>
                <li>¿Cómo funciona?</li>
                <li>Contacto</li>
                <li>Seguridad</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-background/80">
                <li>Términos de uso</li>
                <li>Política de privacidad</li>
                <li>Cookie policy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 SKILO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;