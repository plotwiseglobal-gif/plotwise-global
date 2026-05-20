import { 
  CheckCircle, 
  MapPin, 
  DollarSign, 
  Search, 
  Home, 
  GraduationCap,
  Calendar
} from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCard";
import StepsSection from "@/components/StepsSection";
import SectionHeader from "@/components/SectionHeader";
import ServiceCTA from "@/components/ServiceCTA";
import { useSEO } from "@/hooks/useSEO";

const FindPgRentals = () => {
  useSEO(
    "Find PG & Rentals — Plot Wise Global",
    "Discover verified PG and rental properties with budget-friendly options and easy booking process."
  );

  const services = [
    {
      icon: CheckCircle,
      title: "Verified Listings",
      description: "All properties are thoroughly verified to ensure authenticity and quality standards."
    },
    {
      icon: DollarSign,
      title: "Budget Friendly Options",
      description: "Find affordable rental options that fit your budget without compromising on quality."
    },
    {
      icon: MapPin,
      title: "Location-Based Search",
      description: "Search for PGs and rentals in your preferred areas with advanced filtering."
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Simple and hassle-free booking process with instant confirmation."
    },
    {
      icon: Home,
      title: "Owner Verified",
      description: "Direct verification with property owners to ensure transparency and trust."
    },
    {
      icon: GraduationCap,
      title: "Student Friendly",
      description: "Special packages and accommodations designed for students and young professionals."
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Search",
      description: "Browse through our extensive database of verified PG and rental properties."
    },
    {
      step: 2,
      title: "Select",
      description: "Choose the perfect property that matches your requirements and budget."
    },
    {
      step: 3,
      title: "Visit",
      description: "Schedule a visit to see the property and meet the owner in person."
    },
    {
      step: 4,
      title: "Move In",
      description: "Complete the paperwork and move into your new home with ease."
    }
  ];

  const whyChooseUs = [
    "100% verified properties with genuine listings",
    "Transparent pricing with no hidden charges",
    "Dedicated support throughout the rental process",
    "Quick response time and efficient service"
  ];

  return (
    <>
      <ServiceHero
        title="Find PG & Rentals"
        tagline="Discover verified, budget-friendly PG and rental properties with hassle-free booking process."
        backgroundImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80"
        ctaText="Browse Properties"
        ctaLink="/services"
      />

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Services"
            title="Complete Rental Solutions"
            subtitle="Everything you need to find the perfect PG or rental property"
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
        title="How It Works"
        subtitle="Simple 4-step process to find your perfect rental"
        steps={steps}
      />

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="The Trusted Choice for Rentals"
            subtitle="Experience the difference with our comprehensive rental services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-gold mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA
        title="Ready to Find Your Perfect Rental?"
        subtitle="Let our experts help you discover the ideal PG or rental property that meets your needs."
        buttonText="Start Searching"
        buttonLink="/services"
      />
    </>
  );
};

export default FindPgRentals;
