import { 
  TrendingUp, 
  Rocket, 
  Building, 
  Calculator, 
  Shield, 
  FileText,
  DollarSign
} from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCard";
import StepsSection from "@/components/StepsSection";
import SectionHeader from "@/components/SectionHeader";
import ServiceCTA from "@/components/ServiceCTA";
import { useSEO } from "@/hooks/useSEO";

const InvestmentDeals = () => {
  useSEO(
    "Investment Deals — PlotWise Global",
    "High ROI properties and pre-launch offers with comprehensive investment analysis and legal support."
  );

  const services = [
    {
      icon: TrendingUp,
      title: "High ROI Properties",
      description: "Carefully selected properties with proven track record of high returns on investment."
    },
    {
      icon: Rocket,
      title: "Pre-launch Offers",
      description: "Exclusive access to pre-launch properties with early-bird pricing and premium benefits."
    },
    {
      icon: Building,
      title: "Commercial Spaces",
      description: "Premium commercial properties in prime locations with high rental yield potential."
    },
    {
      icon: Calculator,
      title: "Rental Yield Analysis",
      description: "Detailed analysis of rental income potential and ROI calculations for informed decisions."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive risk evaluation and mitigation strategies for secure investments."
    },
    {
      icon: FileText,
      title: "Legal Support",
      description: "Complete legal assistance including documentation, due diligence, and regulatory compliance."
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Consult",
      description: "Initial consultation to understand your investment goals and risk appetite."
    },
    {
      step: 2,
      title: "Analyze",
      description: "Detailed market analysis and property evaluation with ROI projections."
    },
    {
      step: 3,
      title: "Invest",
      description: "Select and invest in suitable properties with complete documentation support."
    },
    {
      step: 4,
      title: "Earn Returns",
      description: "Monitor your investment and enjoy steady returns with our ongoing support."
    }
  ];

  const whyChooseUs = [
    "Expert market analysis with data-driven insights",
    "Access to exclusive pre-launch and off-market deals",
    "Transparent fee structure with no hidden costs",
    "Dedicated investment advisor for personalized guidance"
  ];

  return (
    <>
      <ServiceHero
        title="Investment Deals"
        tagline="Unlock high-return investment opportunities with expert guidance and comprehensive support."
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
        ctaText="Explore Deals"
        ctaLink="/services"
      />

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Investment Services"
            title="Smart Investment Solutions"
            subtitle="Maximize your returns with carefully curated investment opportunities"
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
        title="Investment Process"
        subtitle="Four simple steps to grow your wealth through real estate"
        steps={steps}
      />

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Invest With Us"
            title="Your Trusted Investment Partner"
            subtitle="Experience the difference with our expert investment services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <TrendingUp className="text-gold mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA
        title="Ready to Start Investing?"
        subtitle="Let our experts help you build a profitable real estate investment portfolio."
        buttonText="Book Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default InvestmentDeals;
