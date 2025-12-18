import { Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-display font-bold text-gradient-gold">
              Sbs Delicious Crispy
            </span>
            <p className="text-muted-foreground text-sm mt-2">
              Street Food Premium
            </p>
          </div>
          
          {/* Contact */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+33600000000" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+33 6 00 00 00 00</span>
            </a>
          </div>
          
          {/* Social */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sbs Delicious Crispy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
