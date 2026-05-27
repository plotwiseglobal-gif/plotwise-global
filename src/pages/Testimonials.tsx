import PageHero from "@/components/PageHero";
import { Star, Quote } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useTestimonials } from "@/hooks/useSanityData";
import LoadingUI from "@/components/LoadingUI";
import EmptyState from "@/components/EmptyState";

const Testimonials = () => {
  const { testimonials, loading, error } = useTestimonials();
  
  useSEO("Testimonials — PlotWise Global", "Real reviews from buyers, sellers, and investors who trust PlotWise Global.");

  if (loading) {
    return (
      <>
        <PageHero title="What Our Clients Say" subtitle="Real stories from buyers, sellers, and investors around the world." />
        <section className="py-20">
          <div className="container-px mx-auto max-w-7xl">
            <LoadingUI message="Loading testimonials..." />
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <PageHero title="What Our Clients Say" subtitle="Real stories from buyers, sellers, and investors around the world." />
        <section className="py-20">
          <div className="container-px mx-auto max-w-7xl">
            <EmptyState title="No testimonials available yet." subtitle="Please check back later for client stories." />
          </div>
        </section>
      </>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <>
        <PageHero title="What Our Clients Say" subtitle="Real stories from buyers, sellers, and investors around the world." />
        <section className="py-20">
          <div className="container-px mx-auto max-w-7xl">
            <EmptyState title="No testimonials available yet." subtitle="Please check back later for client stories." />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="What Our Clients Say" subtitle="Real stories from buyers, sellers, and investors around the world." />
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t._id} className="bg-card border border-border p-8 relative">
                <Quote className="absolute top-6 right-6 text-gold/20" size={32} />
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
        </div>
      </section>
    </>
  );
};

export default Testimonials;
