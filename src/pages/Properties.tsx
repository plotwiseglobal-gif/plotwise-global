import { useQuery } from '@tanstack/react-query';
import PageHero from '@/components/PageHero';
import PropertyCard from '@/components/property/PropertyCard';
import { fetchAllProperties } from '@/services/propertyService';
import { useSEO } from '@/hooks/useSEO';

const Properties = () => {
  const {
    data: properties = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['properties'],
    queryFn: fetchAllProperties,
    staleTime: 1000 * 60,
  });

  useSEO(
    'Properties — Plot Wise Global',
    'Browse all available properties managed through Sanity Studio with real-time updates and live pricing.'
  );

  return (
    <>
      <PageHero
        title="Properties"
        subtitle="Explore every published property listing managed directly from Sanity Studio."
      />

      <section className="py-20 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="h-[24rem] animate-pulse rounded-[1.75rem] bg-muted" />
              ))}
            </div>
          )}

          {isError && (
            <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-8 text-destructive">
              <h2 className="text-xl font-semibold mb-2">Unable to load properties</h2>
              <p>{error instanceof Error ? error.message : 'Please try again later.'}</p>
            </div>
          )}

          {!isLoading && !isError && properties.length === 0 && (
            <div className="rounded-3xl border border-border bg-card p-10 text-center text-muted-foreground">
              No published properties found. Add a property in Sanity Studio to populate this page.
            </div>
          )}

          {!isLoading && !isError && properties.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} {...property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Properties;
