import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  const phoneNumber = "+1 (819) 979-4539"; // À remplacer par le vrai numéro
  const phoneNumberClean = phoneNumber.replace(/\s/g, '').replace(/[()]/g, ''); // Format: +18199794539
  const whatsappUrl = `https://wa.me/${phoneNumberClean.replace(/\+/g, '')}`; // Format: https://wa.me/18199794539
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-delay-2">
          {/* Header */}
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Envie de Craquer ?
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="text-foreground">Passez Votre</span>{" "}
            <span className="text-gradient-gold italic">Commande</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Appelez-nous directement pour commander vos samousas et beignets. 
            Préparation fraîche garantie, sur commande uniquement.
          </p>
          
          {/* Phone CTA */}
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card mb-12 animate-fade-in-delay-3">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center animate-pulse-gold">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">Appelez-nous au</p>
            
            <a 
              href={`tel:${phoneNumberClean}`}
              className="font-display text-3xl md:text-5xl font-bold text-gradient-gold hover:opacity-80 transition-opacity"
            >
              {phoneNumber}
            </a>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="cta" size="xl" asChild>
                <a href={`tel:${phoneNumberClean}`} className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  Appeler Maintenant
                </a>
              </Button>
              
              <Button variant="goldOutline" size="xl" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Envoyer un Message
                </a>
              </Button>
            </div>
          </div>
          
          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-secondary/50 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground mb-1">Horaires</h4>
                <p className="text-muted-foreground text-sm">
                  Du Lundi au Samedi<br />
                  10h00 - 20h00
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground mb-1">Livraison</h4>
                <p className="text-muted-foreground text-sm">
                  Retrait sur place<br />
                  Livraison possible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
