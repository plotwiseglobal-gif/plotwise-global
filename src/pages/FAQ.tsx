import PageHero from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

const FAQ = () => {
  useSEO("FAQ — PlotWise Global", "Answers to common questions about buying, selling, investing, and managing property with PlotWise Global.");
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know before working with us." />
      <section className="py-20">
        <div className="container-px mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display font-semibold text-base hover:text-gold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQ;
