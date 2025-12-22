import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const phoneNumber = "+18199794539";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
          Street Food Premium
        </span>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-delay-1">
          <span className="text-foreground">SBS</span>{" "}
          <span className="text-gradient-gold italic">Delicious</span>
          <br />
          <span className="text-foreground">Crispy</span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
          Savourez l'excellence avec nos samousas croustillants et beignets dorés, 
          préparés avec passion selon des recettes authentiques.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
          <Button variant="cta" size="xl" asChild>
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              Commander Maintenant
            </a>
          </Button>
          
          <Button variant="goldOutline" size="xl" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Envoyer un Message
            </a>
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-10 flex flex-col items-center gap-2 text-muted-foreground pointer-events-none animate-bounce-soft">
          <span className="text-sm tracking-widest uppercase">Découvrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
