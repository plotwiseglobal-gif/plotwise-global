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
    'Properties — PlotWise Global',
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

          {/* Error or empty: show professional empty state */}
          {!isLoading && (isError || properties.length === 0) && (
            <div className="max-w-3xl mx-auto">
              {isError && import.meta.env.DEV && console.error('Properties fetch error:', error)}
              <div className="rounded-3xl border border-border bg-card p-10">
                <div className="text-center">
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mb-4" />
                    <h2 className="text-2xl font-semibold text-white">No property listings available yet.</h2>
                    <p className="text-gray-400 mt-2">Please check back later for updates.</p>
                  </div>
                </div>
              </div>
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
