import SectionHeader from "@/components/SectionHeader";
import { ChevronRight } from "lucide-react";

interface Step {
  step: number;
  title: string;
  description: string;
}

interface StepsSectionProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  layout?: "horizontal" | "vertical";
}

const StepsSection = ({ 
  title = "How It Works", 
  subtitle, 
  steps, 
  layout = "horizontal" 
}: StepsSectionProps) => {
  const isHorizontal = layout === "horizontal";

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader title={title} subtitle={subtitle} />
        
        <div className={`grid ${
          isHorizontal 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        } gap-6 sm:gap-8`}>
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className="relative text-center group animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gold text-gold-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform">
                {step.step}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              
              {isHorizontal && index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 right-0 w-16 -translate-y-1/2 items-center justify-center">
                  <div className="h-0.5 w-6 bg-gold/30" />
                  <ChevronRight className="text-gold/50" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
