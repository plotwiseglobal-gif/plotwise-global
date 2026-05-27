import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <article className="group flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:border-gold/60 hover:shadow-md sm:p-7 lg:p-8">
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-gold transition-colors group-hover:bg-gold/10 sm:h-16 sm:w-16">
      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
    </div>
    <h3 className="mb-3 font-display text-lg font-semibold sm:text-xl">{title}</h3>
    <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">{description}</p>
  </article>
);

export default ServiceCard;
