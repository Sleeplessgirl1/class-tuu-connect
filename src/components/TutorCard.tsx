import { Star, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TutorCardProps {
  name: string;
  avatar?: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  location: string;
  price: number;
  experience: string;
  responseTime: string;
  isVerified?: boolean;
  isOnline?: boolean;
}

const TutorCard = ({
  name,
  avatar,
  rating,
  reviewCount,
  specialties,
  location,
  price,
  experience,
  responseTime,
  isVerified = false,
  isOnline = false
}: TutorCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-smooth border-0 bg-gradient-card hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            <Avatar className="w-16 h-16">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            {isOnline && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white"></div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg truncate">{name}</h3>
              {isVerified && (
                <CheckCircle className="w-5 h-5 text-success fill-success/20" />
              )}
            </div>
            
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="font-medium">{rating}</span>
              <span className="text-muted-foreground">({reviewCount} reseñas)</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
              <span>•</span>
              <Clock className="w-4 h-4" />
              <span>Responde en {responseTime}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {specialties.slice(0, 3).map((specialty) => (
              <Badge key={specialty} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
            {specialties.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{specialties.length - 3} más
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-primary">
                €{price}<span className="text-sm font-normal text-muted-foreground">/hora</span>
              </div>
              <div className="text-sm text-muted-foreground">{experience}</div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Ver perfil
              </Button>
              <Button size="sm" className="bg-gradient-cta hover:shadow-glow transition-all duration-smooth">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TutorCard;