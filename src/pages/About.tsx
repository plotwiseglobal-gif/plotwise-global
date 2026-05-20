import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Eye, Target } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const About = () => {
  useSEO(
    "About — Plot Wise Global",
    "Learn about Plot Wise Global, a trusted global real estate firm helping clients buy, sell, and invest with confidence."
  );

  return (
    <>
      <PageHero
        title="About Plot Wise Global"
        subtitle="A modern real estate firm built on trust, expertise, and global reach."
      />

      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container-px mx-auto max-w-5xl">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-12 sm:mb-20 px-4">
            Plot Wise Global is a corporate real estate firm dedicated to helping individuals,
            families, and institutional investors navigate property markets worldwide. With
            decades of combined experience and a network spanning major cities, our advisors
            deliver bespoke solutions across buying, selling, investing, and managing real estate.
          </p>

          {/* Founders */}
          <SectionHeader eyebrow="Leadership" title="Meet Our Founders" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-3xl mx-auto">
            {[
              { name: "Jonathan Wells", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80", bio: "Two decades of global real estate leadership across three continents." },
              { name: "Anika Sharma", role: "Co-Founder & COO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80", bio: "Operations and investment strategy expert with a focus on premium markets." },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <div className="aspect-[3/4] overflow-hidden bg-muted mb-4 sm:mb-5 border border-border">
                  <img src={p.img} alt={`${p.name}, ${p.role}`} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-display font-semibold text-lg sm:text-xl">{p.name}</h3>
                <p className="text-gold text-sm font-medium mb-2">{p.role}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container-px mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-card border border-border p-6 sm:p-8 lg:p-10">
            <Eye className="text-gold mb-4 sm:mb-5" size={24} />
            <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted real estate partner globally — empowering clients to make
              confident, informed property decisions wherever they live or invest.
            </p>
          </div>
          <div className="bg-card border border-border p-6 sm:p-8 lg:p-10">
            <Target className="text-gold mb-4 sm:mb-5" size={24} />
            <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver transparent, expert real estate services backed by integrity, market
              insight, and a relentless commitment to client success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
