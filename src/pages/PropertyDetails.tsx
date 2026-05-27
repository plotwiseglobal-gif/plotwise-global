import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, BedDouble, Droplet, MapPin, Ruler, Sparkles } from 'lucide-react';
import PropertyCard from '@/components/property/PropertyCard';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { fetchFeaturedProperties, fetchPropertyBySlug } from '@/services/propertyService';
import { urlFor } from '@/sanity/imageUrl';
import { useSEO } from '@/hooks/useSEO';

const PropertyDetails = () => {
  const { slug } = useParams();

  const {
    data: property,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['property', slug],
    queryFn: () => fetchPropertyBySlug(slug),
    enabled: Boolean(slug),
  });

  const { data: featuredProperties = [] } = useQuery({
    queryKey: ['featured-properties'],
    queryFn: fetchFeaturedProperties,
    staleTime: 1000 * 60,
  });

  const relatedProperties = useMemo(
    () => featuredProperties.filter((item) => item.slug !== property?.slug).slice(0, 3),
    [featuredProperties, property?.slug]
  );

  const galleryImages = useMemo(() => {
    if (!property) return [];
    if (Array.isArray(property.galleryImages) && property.galleryImages.length > 0) {
      return property.galleryImages;
    }
    return property.featuredImage ? [property.featuredImage] : [];
  }, [property]);

  const seoDescription = useMemo(() => {
    if (!property || !Array.isArray(property.description)) return 'View full property details managed through Sanity Studio.';
    const firstBlock = property.description.find((block) => block._type === 'block');
    return firstBlock?.children?.[0]?.text || 'View full property details managed through Sanity Studio.';
  }, [property]);

  useSEO(
    property ? `${property.title} — PlotWise Global` : 'Property Details — PlotWise Global',
    seoDescription
  );

  if (isLoading) {
    return (
      <div className="container-px mx-auto max-w-7xl py-20">
        <div className="h-96 rounded-[2rem] bg-muted animate-pulse" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container-px mx-auto max-w-7xl py-20">
        <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-10 text-destructive">
          <h2 className="text-xl font-semibold mb-2">Unable to load this property</h2>
          <p>{error instanceof Error ? error.message : 'Please try again later.'}</p>
          <Link to="/properties" className="mt-4 inline-block text-sm text-gold underline">
            Back to property listings
          </Link>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container-px mx-auto max-w-7xl py-20">
        <div className="rounded-3xl border border-border bg-card p-10 text-center">
          <p className="text-muted-foreground">Property not found. Please confirm the URL or return to the listings page.</p>
          <Link to="/properties" className="mt-4 inline-block text-sm text-gold underline">
            Back to property listings
          </Link>
        </div>
      </div>
    );
  }

  const heroImageUrl = galleryImages.length > 0 ? urlFor(galleryImages[0]).width(1600).height(1000).auto('format').fit('max').url() : '';

  return (
    <>
      <PageHero title={property.title} subtitle={property.location} />

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} /> Back to Properties
          </Link>
          <span className="rounded-full bg-secondary px-3 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {property.propertyType || 'Property'}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.7fr_0.9fr]">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-[2rem] bg-muted">
              {heroImageUrl ? (
                <img src={heroImageUrl} alt={property.title} className="h-full w-full object-cover" loading="eager" />
              ) : (
                <div className="flex h-96 items-center justify-center text-muted-foreground">No image available</div>
              )}
            </div>

            {galleryImages.length > 1 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {galleryImages.slice(1, 5).map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-[1.5rem] bg-muted">
                    <img
                      src={urlFor(image).width(900).height(600).auto('format').fit('max').url()}
                      alt={`${property.title} gallery ${index + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 rounded-[2rem] bg-card p-6 shadow-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Price</p>
                  <p className="text-3xl font-semibold text-foreground">{typeof property.price === 'number' ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(property.price) : property.price}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl bg-secondary p-4 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Bedrooms</p>
                    <p className="mt-2 text-xl font-semibold text-foreground">{property.bedrooms ?? '-'}</p>
                  </div>
                  <div className="rounded-3xl bg-secondary p-4 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Bathrooms</p>
                    <p className="mt-2 text-xl font-semibold text-foreground">{property.bathrooms ?? '-'}</p>
                  </div>
                  <div className="rounded-3xl bg-secondary p-4 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Area</p>
                    <p className="mt-2 text-xl font-semibold text-foreground">{property.area ?? '-'} sqft</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={16} /> {property.location}
                </div>
                <div className="prose prose-neutral max-w-none text-foreground">
                  <PortableText value={property.description || []} />
                </div>
              </div>

              {Array.isArray(property.amenities) && property.amenities.length > 0 && (
                <div className="rounded-[2rem] border border-border bg-card p-8">
                  <div className="flex items-center gap-3 mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <Sparkles size={18} /> Amenities
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {property.amenities.map((item, index) => (
                      <div key={index} className="rounded-3xl border border-border bg-secondary px-4 py-3 text-sm text-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Property summary</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-between gap-2">
                  <span>Type</span>
                  <span className="font-medium text-foreground">{property.propertyType ?? 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>Published</span>
                  <span className="font-medium text-foreground">{property.publishedAt ? new Date(property.publishedAt).toLocaleDateString() : 'Pending'}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>Location</span>
                  <span className="font-medium text-foreground">{property.location}</span>
                </div>
              </div>
              <Button asChild className="w-full mt-8 bg-gold hover:bg-gold/90 text-gold-foreground">
                <Link to="/contact">Contact Agent</Link>
              </Button>
            </div>

            {relatedProperties.length > 0 && (
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Related properties</h3>
                <div className="grid gap-4">
                  {relatedProperties.map((related) => (
                    <PropertyCard key={related._id} {...related} />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;
