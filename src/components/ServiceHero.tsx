import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  title: string;
  tagline: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const ServiceHero = ({ 
  title, 
  tagline, 
  backgroundImage, 
  ctaText = "Get Started", 
  ctaLink = "/contact" 
}: ServiceHeroProps) => {
  const backgroundStyle = backgroundImage 
    ? { 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : {};

  return (
    <section 
      className={`relative min-h-[60vh] flex items-center justify-center text-center overflow-x-hidden ${
        backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-br from-primary to-primary/80'
      }`}
      style={backgroundStyle}
    >
      <div className="container-px mx-auto max-w-4xl px-4 py-20">
        <div className="animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            {tagline}
          </p>
          <Button 
            asChild 
            className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
          >
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
