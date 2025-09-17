import { Music, Palette, Trophy, BookOpen, Globe, Laptop, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const categoryColors = {
  music: "bg-category-music/10 text-category-music",
  arts: "bg-category-arts/10 text-category-arts", 
  sports: "bg-category-sports/10 text-category-sports",
  academic: "bg-category-academic/10 text-category-academic",
  languages: "bg-category-languages/10 text-category-languages",
  tech: "bg-category-tech/10 text-category-tech",
  meditation: "bg-category-meditation/10 text-category-meditation"
};

const categoryTextColors = {
  music: "text-category-music",
  arts: "text-category-arts",
  sports: "text-category-sports", 
  academic: "text-category-academic",
  languages: "text-category-languages",
  tech: "text-category-tech",
  meditation: "text-category-meditation"
};

const categories = [
  {
    name: "Música",
    icon: Music,
    color: "music",
    count: "245+ tutores",
    examples: "Guitarra, Piano, Canto, Batería"
  },
  {
    name: "Artes & Manualidades", 
    icon: Palette,
    color: "arts",
    count: "189+ tutores",
    examples: "Cerámica, Pintura, Escultura, Costura"
  },
  {
    name: "Deportes",
    icon: Trophy, 
    color: "sports",
    count: "156+ tutores",
    examples: "Patinaje, Tenis, Yoga, Natación"
  },
  {
    name: "Académico",
    icon: BookOpen,
    color: "academic", 
    count: "312+ tutores",
    examples: "Matemáticas, Física, Historia, Literatura"
  },
  {
    name: "Idiomas",
    icon: Globe,
    color: "languages",
    count: "201+ tutores", 
    examples: "Inglés, Francés, Alemán, Italiano"
  },
  {
    name: "Tecnología",
    icon: Laptop,
    color: "tech",
    count: "134+ tutores",
    examples: "Programación, Diseño, Excel, Photoshop"
  },
  {
    name: "Meditación",
    icon: Brain,
    color: "meditation",
    count: "87+ tutores", 
    examples: "Mindfulness, Yoga, Relajación, Respiración"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explora por categorías</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre tutores expertos en cada área. Cada instructor ha sido verificado 
            para garantizar la mejor experiencia de aprendizaje.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="group cursor-pointer hover:shadow-lg transition-all duration-smooth border-0 bg-gradient-card hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-2xl ${categoryColors[category.color as keyof typeof categoryColors]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-smooth`}>
                    <Icon className={`w-8 h-8 ${categoryTextColors[category.color as keyof typeof categoryTextColors]}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className={`font-medium ${categoryTextColors[category.color as keyof typeof categoryTextColors]} mb-2`}>
                    {category.count}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {category.examples}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;