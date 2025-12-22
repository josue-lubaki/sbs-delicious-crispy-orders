import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const phoneNumber = "+18199794539";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 animate-fade-in-slow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">
            SBS Delicious Crispy
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">Message</span>
          </a>
          
          <a 
            href={`tel:${phoneNumber}`} 
            className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">Commander</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
