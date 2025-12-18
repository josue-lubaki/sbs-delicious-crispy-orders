import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 animate-fade-in-delay-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-display font-bold text-gradient-gold">
              SBS Delicious Crispy
            </span>
            <p className="text-muted-foreground text-sm mt-2">
              Street Food Premium
            </p>
          </div>
          
          {/* Social */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/sbs_delicious_crispy_/" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SBS Delicious Crispy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
