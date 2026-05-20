interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={`mb-8 sm:mb-10 md:mb-12 ${align === "center" ? "text-center mx-auto max-w-2xl" : "text-left"}`}>
    {eyebrow && (
      <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-medium mb-2 sm:mb-3">{eyebrow}</p>
    )}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-sm sm:text-base md:text-lg">{subtitle}</p>}
  </div>
);

export default SectionHeader;
