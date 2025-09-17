import TutorCard from "./TutorCard";
import { Button } from "@/components/ui/button";

const featuredTutors = [
  {
    name: "María González",
    rating: 4.9,
    reviewCount: 127,
    specialties: ["Cerámica", "Escultura", "Pintura"],
    location: "Madrid Centro",
    price: 25,
    experience: "8 años enseñando",
    responseTime: "2 horas",
    isVerified: true,
    isOnline: true,
  },
  {
    name: "Carlos Ruiz",
    rating: 4.8,
    reviewCount: 89,
    specialties: ["Guitarra", "Piano", "Composición"],
    location: "Barcelona", 
    price: 30,
    experience: "12 años enseñando",
    responseTime: "1 hora",
    isVerified: true,
    isOnline: false,
  },
  {
    name: "Ana Martínez",
    rating: 5.0,
    reviewCount: 156,
    specialties: ["Matemáticas", "Física", "Química"],
    location: "Valencia",
    price: 22,
    experience: "6 años enseñando", 
    responseTime: "30 min",
    isVerified: true,
    isOnline: true,
  },
  {
    name: "Diego López",
    rating: 4.7,
    reviewCount: 73,
    specialties: ["Patinaje", "Skateboard", "Longboard"],
    location: "Sevilla",
    price: 20,
    experience: "5 años enseñando",
    responseTime: "3 horas", 
    isVerified: true,
    isOnline: false,
  },
  {
    name: "Laura Sánchez",
    rating: 4.9,
    reviewCount: 112,
    specialties: ["Inglés", "Francés", "Conversación"],
    location: "Bilbao",
    price: 28,
    experience: "10 años enseñando",
    responseTime: "1 hora",
    isVerified: true,
    isOnline: true,
  },
  {
    name: "Roberto García",
    rating: 4.8,
    reviewCount: 95,
    specialties: ["Programación", "Python", "JavaScript"],
    location: "Málaga",
    price: 35,
    experience: "7 años enseñando",
    responseTime: "2 horas",
    isVerified: true,
    isOnline: true,
  },
];

const FeaturedTutors = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Tutores destacados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre a nuestros instructores mejor valorados, verificados y listos 
            para ayudarte a alcanzar tus objetivos de aprendizaje.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredTutors.map((tutor) => (
            <TutorCard key={tutor.name} {...tutor} />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-cta hover:shadow-glow transition-all duration-smooth px-8 py-3 text-lg"
          >
            Ver todos los tutores
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTutors;