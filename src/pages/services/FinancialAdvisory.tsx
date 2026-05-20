import { 
  HandHeart, 
  Calculator, 
  TrendingUp, 
  FileText, 
  Shield, 
  PieChart,
  DollarSign
} from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCard";
import StepsSection from "@/components/StepsSection";
import SectionHeader from "@/components/SectionHeader";
import ServiceCTA from "@/components/ServiceCTA";
import { useSEO } from "@/hooks/useSEO";

const FinancialAdvisory = () => {
  useSEO(
    "Financial Advisory — Plot Wise Global",
    "Expert financial advisory services including loan assistance, EMI planning, and investment planning for real estate."
  );

  const services = [
    {
      icon: HandHeart,
      title: "Loan Assistance",
      description: "Complete guidance through the loan application process with multiple bank partnerships."
    },
    {
      icon: Calculator,
      title: "EMI Planning",
      description: "Strategic EMI planning to ensure comfortable repayment within your budget."
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Long-term investment strategies to maximize returns from your real estate portfolio."
    },
    {
      icon: FileText,
      title: "Tax Benefits Guidance",
      description: "Expert advice on tax benefits and deductions available for real estate investments."
    },
    {
      icon: Shield,
      title: "Risk Analysis",
      description: "Comprehensive risk assessment to protect your investment and financial interests."
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Consult",
      description: "Initial financial assessment and goal setting with our expert advisors."
    },
    {
      step: 2,
      title: "Plan",
      description: "Create a customized financial plan tailored to your specific needs and objectives."
    },
    {
      step: 3,
      title: "Execute",
      description: "Implement the financial strategy with continuous support and guidance."
    },
    {
      step: 4,
      title: "Optimize",
      description: "Regular review and optimization of your financial plan for maximum benefits."
    }
  ];

  const whyChooseUs = [
    "Certified financial advisors with real estate expertise",
    "Transparent fee structure with no hidden charges",
    "Personalized solutions based on your financial goals",
    "Ongoing support throughout your investment journey"
  ];

  return (
    <>
      <ServiceHero
        title="Financial Advisory"
        tagline="Expert financial guidance to make informed real estate decisions and maximize your investment potential."
        backgroundImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80"
        ctaText="Get Financial Advice"
        ctaLink="/contact"
      />

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Financial Services"
            title="Smart Financial Solutions"
            subtitle="Comprehensive financial advisory services for real estate success"
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
        title="Advisory Process"
        subtitle="Four-step approach to financial success in real estate"
        steps={steps}
      />

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Trust Our Advisors"
            title="Your Financial Growth Partner"
            subtitle="Experience professional financial guidance with proven results"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <DollarSign className="text-gold mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA
        title="Ready to Optimize Your Finances?"
        subtitle="Let our expert financial advisors help you make smart real estate investment decisions."
        buttonText="Book Financial Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default FinancialAdvisory;
