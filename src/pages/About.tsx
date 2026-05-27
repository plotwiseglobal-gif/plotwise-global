import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Eye, Target } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import arnavImg from "@/assets/Arnav Gowda.png";
import tanmayImg from "@/assets/Tanmy sai.jpeg";

const About = () => {
  useSEO(
    "About — PlotWise Global",
    "Learn about PlotWise Global, a trusted global real estate firm helping clients buy, sell, and invest with confidence."
  );

  return (
    <>
      <PageHero
        title="About PlotWise Global"
        subtitle="A modern real estate firm built on trust, expertise, and global reach."
      />

      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container-px mx-auto max-w-5xl">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-12 sm:mb-20 px-4">
            PlotWise Global is a corporate real estate firm dedicated to helping individuals,
            families, and institutional investors navigate property markets worldwide. With
            decades of combined experience and a network spanning major cities, our advisors
            deliver bespoke solutions across buying, selling, investing, and managing real estate.
          </p>

          {/* Founders */}
          <SectionHeader eyebrow="Leadership" title="Meet Our Founders" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-3xl mx-auto">
            {[
              { name: "Arnav Gowda", role: "Co-Founder & CEO", img: arnavImg, bio: "With a young  interest for real estate from a young age, arnav drives PlotWise Global and its clients with experience, drive and execution" },
              { name: "Tanmay Sai", role: "Co-Founder & COO", img: tanmayImg, bio: "With years of experience in property management and financial advisory, Tanmay blends passionate real estate ROI with aftercare through drive and execution" },
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
        <div className="container-px mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          <article className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-8 lg:p-10">
            <Eye className="mb-4 text-gold sm:mb-5" size={24} />
            <h3 className="mb-3 font-display text-xl font-bold sm:text-2xl">Our Vision</h3>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              To be the most trusted real estate partner globally — empowering clients to make
              confident, informed property decisions wherever they live or invest.
            </p>
          </article>
          <article className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-8 lg:p-10">
            <Target className="mb-4 text-gold sm:mb-5" size={24} />
            <h3 className="mb-3 font-display text-xl font-bold sm:text-2xl">Our Mission</h3>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              To deliver transparent, expert real estate services backed by integrity, market
              insight, and a relentless commitment to client success.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
