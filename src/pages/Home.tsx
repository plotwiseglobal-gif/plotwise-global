import { Link } from "react-router-dom";
import { Home as HomeIcon, Building2, TrendingUp, KeyRound, ArrowRight, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import HeroSlider from "@/components/HeroSlider";
import SectionHeader from "@/components/SectionHeader";
import PropertyCard from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { useTestimonials } from "@/hooks/useSanityData";
import LoadingUI from "@/components/LoadingUI";
import EmptyState from "@/components/EmptyState";
import { useSEO } from "@/hooks/useSEO";
import { fetchFeaturedProperties } from "@/services/propertyService";

const features = [
  { icon: HomeIcon, title: "Buy Property", desc: "Discover curated homes that match your lifestyle, budget, and long-term goals." },
  { icon: Building2, title: "Sell Property", desc: "Maximize your sale price with strategic marketing and expert negotiation." },
  { icon: TrendingUp, title: "Investment Consulting", desc: "Data-driven advice to grow and protect your real estate portfolio." },
  { icon: KeyRound, title: "Property Management", desc: "End-to-end management — tenants, maintenance, and reporting handled." },
];

const Home = () => {
  const { testimonials } = useTestimonials();
  const { data: featuredProperties = [], isLoading } = useQuery({
    queryKey: ['featured-properties'],
    queryFn: fetchFeaturedProperties,
    staleTime: 1000 * 60,
  });

  useSEO(
    "PlotWise Global — Trusted Real Estate Solutions Worldwide",
    "Buy, sell, invest, and manage premium properties with PlotWise Global, your trusted global real estate partner."
  );

  return (
    <>
      <HeroSlider />

      {/* Features */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What we do"
            title="Real Estate Solutions, End to End"
            subtitle="From your first home to a global investment portfolio, we deliver clarity, expertise, and results."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f) => (
              <article
                key={f.title}
                className="group flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-all duration-300 hover:border-gold/60 hover:shadow-md sm:p-6 lg:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-gold transition-colors group-hover:bg-gold/10 sm:h-14 sm:w-14">
                  <f.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-3 font-display text-base font-semibold sm:text-lg lg:text-xl">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured listings"
            title="Properties You'll Love"
            subtitle="A handpicked selection of premium homes available worldwide."
          />
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="h-[24rem] rounded-[1.75rem] bg-muted animate-pulse" />
              ))}
            </div>
          ) : featuredProperties.length === 0 ? (
            <div className="max-w-3xl mx-auto">
              <EmptyState title="No property listings available yet." subtitle="Please check back later for updates." />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {featuredProperties.map((p) => (
                <PropertyCard key={p._id} {...p} />
              ))}
            </div>
          )}
          <div className="text-center mt-8 sm:mt-12">
            <Button asChild variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
              <Link to="/properties">View All Listings <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Client stories"
            title="Trusted by Buyers & Investors"
          />
          {testimonials && testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {testimonials.slice(0, 3).map((t) => (
                <div key={t._id} className="bg-card border border-border p-6 sm:p-8">
                  <div className="flex gap-0.5 mb-4 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-foreground/85 leading-relaxed mb-6 text-sm">"{t.message}"</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    {t.role && (
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto mt-6">
              <EmptyState title="No testimonials available yet." subtitle="Please check back later for client stories." />
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16 md:py-20">
        <div className="container-px mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
            Get in Touch With Our Experts
          </h2>
          <p className="text-white/70 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Whether you're buying, selling, or investing — our advisors are ready to help.
          </p>
          <Button asChild className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
