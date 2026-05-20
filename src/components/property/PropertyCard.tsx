import { Link } from 'react-router-dom';
import { BedDouble, Droplet, MapPin, Ruler } from 'lucide-react';
import { urlFor } from '@/sanity/imageUrl';

type Props = {
  title: string;
  price: number | string;
  location: string;
  featuredImage?: unknown;
  slug?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  propertyType?: string;
};

const fallbackImage =
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80';

const formatPrice = (price: number | string) => {
  if (typeof price === 'number') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  }
  return price;
};

const getImageUrl = (image?: unknown) => {
  if (!image) return fallbackImage;
  try {
    return urlFor(image).width(1200).height(900).auto('format').fit('max').url();
  } catch {
    return fallbackImage;
  }
};

const PropertyCard = ({ title, price, location, featuredImage, slug, bedrooms, bathrooms, area, propertyType }: Props) => {
  const cardBody = (
    <>
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={getImageUrl(featuredImage)}
          alt={`${title} in ${location}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {propertyType && <span className="rounded-full bg-secondary px-2 py-1 font-semibold">{propertyType}</span>}
          {bedrooms !== undefined && (
            <span className="inline-flex items-center gap-1">
              <BedDouble size={14} /> {bedrooms}
            </span>
          )}
          {bathrooms !== undefined && (
            <span className="inline-flex items-center gap-1">
              <Droplet size={14} /> {bathrooms}
            </span>
          )}
          {area !== undefined && (
            <span className="inline-flex items-center gap-1">
              <Ruler size={14} /> {area} sqft
            </span>
          )}
        </div>
        <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-2">{title}</h3>
        <p className="text-gold font-semibold text-base sm:text-lg mb-2">{formatPrice(price)}</p>
        <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
          <MapPin size={12} /> {location}
        </p>
      </div>
    </>
  );

  return slug ? (
    <Link
      to={`/property/${slug}`}
      className="group block overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
      {cardBody}
    </Link>
  ) : (
    <article className="group overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm">
      {cardBody}
    </article>
  );
};

export default PropertyCard;
