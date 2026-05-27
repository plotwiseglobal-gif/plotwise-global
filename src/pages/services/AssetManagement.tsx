import { 
  Wrench, 
  Users, 
  DollarSign, 
  FileCheck, 
  TrendingUp, 
  Clipboard,
  Home
} from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCard";
import StepsSection from "@/components/StepsSection";
import SectionHeader from "@/components/SectionHeader";
import ServiceCTA from "@/components/ServiceCTA";
import { useSEO } from "@/hooks/useSEO";

const AssetManagement = () => {
  useSEO(
    "Asset Management — PlotWise Global",
    "Comprehensive property management services including maintenance, tenant management, and performance tracking."
  );

  const services = [
    {
      icon: Wrench,
      title: "Property Maintenance",
      description: "Regular maintenance and repairs to keep your property in optimal condition."
    },
    {
      icon: Users,
      title: "Tenant Management",
      description: "Complete tenant screening, onboarding, and relationship management services."
    },
    {
      icon: DollarSign,
      title: "Rent Collection",
      description: "Timely rent collection with automated reminders and secure payment processing."
    },
    {
      icon: FileCheck,
      title: "Legal Compliance",
      description: "Ensure all legal requirements and regulations are met for your properties."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Regular performance reports and analytics to maximize your property value."
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Onboard",
      description: "Property assessment and setup of management systems and processes."
    },
    {
      step: 2,
      title: "Manage",
      description: "Daily operations including tenant management, maintenance, and rent collection."
    },
    {
      step: 3,
      title: "Monitor",
      description: "Regular monitoring of property performance and market conditions."
    },
    {
      step: 4,
      title: "Grow",
      description: "Strategic improvements and optimizations to increase property value."
    }
  ];

  const whyChooseUs = [
    "Experienced property managers with local market expertise",
    "24/7 maintenance support and emergency response",
    "Transparent reporting and regular performance updates",
    "Cost-effective solutions with proven track record"
  ];

  return (
    <>
      <ServiceHero
        title="Asset Management"
        tagline="Professional property management services to maximize your rental income and property value."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
        ctaText="Get Started"
        ctaLink="/contact"
      />

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Management Services"
            title="Complete Property Care"
            subtitle="Comprehensive solutions to manage your real estate assets efficiently"
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
        title="Management Process"
        subtitle="Streamlined approach to effective property management"
        steps={steps}
      />

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Trust Us"
            title="Your Property, Our Priority"
            subtitle="Experience professional property management with proven results"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Home className="text-gold mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA
        title="Ready to Maximize Your Property Value?"
        subtitle="Let our expert team handle the complexities of property management while you enjoy the returns."
        buttonText="Request Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default AssetManagement;
