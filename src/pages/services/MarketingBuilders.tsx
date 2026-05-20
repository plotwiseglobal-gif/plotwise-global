import { 
  Monitor, 
  Users, 
  Share2, 
  Search, 
  Palette, 
  Megaphone,
  Target
} from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCard";
import StepsSection from "@/components/StepsSection";
import SectionHeader from "@/components/SectionHeader";
import ServiceCTA from "@/components/ServiceCTA";
import { useSEO } from "@/hooks/useSEO";

const MarketingBuilders = () => {
  useSEO(
    "Marketing for Builders — Plot Wise Global",
    "Comprehensive marketing solutions for builders including digital marketing, lead generation, and branding strategies."
  );

  const services = [
    {
      icon: Monitor,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing campaigns across all online platforms to maximize your reach."
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Targeted lead generation strategies to connect with qualified buyers and investors."
    },
    {
      icon: Share2,
      title: "Social Media Campaigns",
      description: "Engaging social media campaigns to build brand awareness and drive property sales."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization to ensure your properties rank high in relevant searches."
    },
    {
      icon: Palette,
      title: "Branding Strategy",
      description: "Complete branding solutions to establish your developer identity in the market."
    },
    {
      icon: Megaphone,
      title: "Listing Promotions",
      description: "Strategic promotion of your property listings across multiple channels and platforms."
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Plan",
      description: "Develop a comprehensive marketing strategy tailored to your target audience and properties."
    },
    {
      step: 2,
      title: "Promote",
      description: "Execute multi-channel marketing campaigns to maximize visibility and engagement."
    },
    {
      step: 3,
      title: "Capture Leads",
      description: "Generate and qualify leads through various marketing touchpoints and campaigns."
    },
    {
      step: 4,
      title: "Convert",
      description: "Nurture leads and convert them into successful property sales and investments."
    }
  ];

  const whyChooseUs = [
    "Specialized expertise in real estate marketing for builders",
    "Data-driven approach with measurable results",
    "Creative team with proven track record",
    "Comprehensive reporting and analytics"
  ];

  return (
    <>
      <ServiceHero
        title="Marketing for Builders"
        tagline="Strategic marketing solutions to help builders reach qualified buyers and maximize property sales."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
        ctaText="Start Marketing"
        ctaLink="/contact"
      />

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Marketing Services"
            title="Builder Marketing Solutions"
            subtitle="Complete marketing ecosystem designed for real estate developers"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <StepsSection
        title="Marketing Process"
        subtitle="Four-step approach to successful property marketing"
        steps={steps}
      />

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Partner With Us"
            title="Your Marketing Success Partner"
            subtitle="Experience the difference with our specialized builder marketing services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Target className="text-gold mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA
        title="Ready to Boost Your Property Sales?"
        subtitle="Let our marketing experts create a customized strategy to help you reach your sales targets."
        buttonText="Get Marketing Plan"
        buttonLink="/contact"
      />
    </>
  );
};

export default MarketingBuilders;
