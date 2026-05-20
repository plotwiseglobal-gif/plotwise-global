import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const ServiceCTA = ({ 
  title = "Ready to Get Started?", 
  subtitle = "Take the first step towards your real estate goals with our expert team.",
  buttonText = "Contact Us",
  buttonLink = "/contact"
}: ServiceCTAProps) => {
  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-20">
      <div className="container-px mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
        <Button 
          asChild 
          className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServiceCTA;
