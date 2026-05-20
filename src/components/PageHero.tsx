interface Props {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: Props) => (
  <section className="bg-secondary border-b border-border overflow-x-hidden">
    <div className="container-px mx-auto max-w-7xl py-12 sm:py-16 md:py-20 lg:py-24 text-center fade-in px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4">{title}</h1>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
