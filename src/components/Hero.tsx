import { Search, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Encuentra el <span className="text-secondary">tutor perfecto</span> para aprender cualquier cosa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Conecta con instructores locales verificados. Desde cerámica hasta matemáticas, 
            encuentra clases presenciales y virtuales adaptadas a ti.
          </p>
          
          {/* Search bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-3xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="¿Qué quieres aprender? (ej: cerámica, guitarra, matemáticas...)"
                  className="pl-12 h-14 text-lg border-0 bg-transparent text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="¿Dónde? (ej: Madrid, Barcelona...)"
                  className="pl-12 h-14 text-lg border-0 bg-transparent text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button className="h-14 px-8 text-lg bg-gradient-cta hover:shadow-glow transition-all duration-smooth">
                Buscar
              </Button>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">✓</span>
              </div>
              <span>Tutores verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-secondary text-secondary" />
              <span>4.8/5 valoración promedio</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <span>Pagos seguros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;