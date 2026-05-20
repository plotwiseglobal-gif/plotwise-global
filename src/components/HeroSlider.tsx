import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HERO_SLIDES } from "@/data/site";

const HeroSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[78vh] min-h-[400px] sm:min-h-[480px] md:min-h-[520px] w-full overflow-hidden">
      {HERO_SLIDES.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Premium real estate property ${idx + 1}`}
            className="h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center container-px px-4 sm:px-6">
        <div className="max-w-3xl text-white fade-up px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight mb-4 sm:mb-5">
            Find Your Perfect Property
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 mb-6 sm:mb-8 font-light">
            Trusted Real Estate Solutions Worldwide
          </p>
          <Button asChild className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base">
            <Link to="/properties">Explore Listings</Link>
          </Button>
        </div>
      </div>

          </section>
  );
};

export default HeroSlider;
