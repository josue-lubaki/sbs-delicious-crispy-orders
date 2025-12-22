import samousaImg from "@/assets/samousa.png";
import beignetsImg from "@/assets/beignets.png";
import springRollsImg from "@/assets/spring-rolls.png";

interface MenuItem {
  name: string;
  description: string;
  image: string;
  highlight?: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Samousas",
    description: "Nos samousas croustillants, fourrés d'une garniture savoureuse aux épices subtiles. Un voyage gustatif à chaque bouchée.",
    image: samousaImg,
    highlight: "Best-seller",
  },
  {
    name: "Beignets",
    description: "Beignets dorés et moelleux, préparés selon notre recette secrète. Une explosion de saveurs qui fondent en bouche.",
    image: beignetsImg,
    highlight: "Signature",
  },
  {
    name: "Spring Rolls",
    description: "Spring rolls dorés et croustillants, garnis de poulet tendre et de vermicelles fondants, pour une bouchée savoureuse et réconfortante.",
    image: springRollsImg,
    highlight: "Signature",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-delay-1">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Nos Spécialités
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            <span className="text-foreground">Le</span>{" "}
            <span className="text-gradient-gold italic">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mt-6" />
        </div>
        
        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <div 
              key={item.name}
              className="group relative bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 animate-fade-in-delay-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Highlight Badge */}
              {item.highlight && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-gold text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  {item.highlight}
                </div>
              )}
              
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {item.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                {/* Decorative line */}
                <div className="mt-6 w-16 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
