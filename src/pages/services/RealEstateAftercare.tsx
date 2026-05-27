import { 
  Headphones, 
  FileText, 
  Home, 
  Wrench, 
  Users, 
  Settings,
  Heart
} from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCard";
import StepsSection from "@/components/StepsSection";
import SectionHeader from "@/components/SectionHeader";
import ServiceCTA from "@/components/ServiceCTA";
import { useSEO } from "@/hooks/useSEO";

const RealEstateAftercare = () => {
  useSEO(
    "Real Estate Aftercare — PlotWise Global",
    "Comprehensive post-sale support including documentation help, interior assistance, and maintenance services."
  );

  const services = [
    {
      icon: Headphones,
      title: "Post-Sale Support",
      description: "Dedicated support team to assist with any queries or concerns after your property purchase."
    },
    {
      icon: FileText,
      title: "Documentation Help",
      description: "Complete assistance with all post-purchase documentation and legal formalities."
    },
    {
      icon: Home,
      title: "Interior Assistance",
      description: "Professional interior design and setup services to make your house a home."
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Regular maintenance and repair services to keep your property in perfect condition."
    },
    {
      icon: Users,
      title: "Tenant Setup",
      description: "Complete tenant onboarding and setup services for rental property owners."
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Purchase",
      description: "Immediate support begins right after your property purchase is completed."
    },
    {
      step: 2,
      title: "Setup",
      description: "Assistance with property setup, documentation, and initial requirements."
    },
    {
      step: 3,
      title: "Support",
      description: "Ongoing support for maintenance, tenant management, and property optimization."
    },
    {
      step: 4,
      title: "Maintain",
      description: "Regular maintenance and updates to ensure your property value continues to grow."
    }
  ];

  const whyChooseUs = [
    "Dedicated aftercare team available 24/7",
    "Comprehensive service network for all property needs",
    "Transparent pricing with no hidden charges",
    "Personalized attention for every client"
  ];

  return (
    <>
      <ServiceHero
        title="Real Estate Aftercare"
        tagline="Complete post-purchase support and maintenance services to ensure your property investment continues to grow."
        backgroundImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80"
        ctaText="Get Aftercare Support"
        ctaLink="/contact"
      />

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Aftercare Services"
            title="Beyond the Purchase"
            subtitle="Comprehensive support to protect and enhance your property investment"
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
        title="Aftercare Process"
        subtitle="Four-step approach to comprehensive property care"
        steps={steps}
      />

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Choose Our Aftercare"
            title="Your Property, Our Responsibility"
            subtitle="Experience peace of mind with our comprehensive aftercare services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Heart className="text-gold mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA
        title="Need Post-Purchase Support?"
        subtitle="Let our aftercare team ensure your property investment continues to deliver value and peace of mind."
        buttonText="Request Aftercare"
        buttonLink="/contact"
      />
    </>
  );
};

export default RealEstateAftercare;
