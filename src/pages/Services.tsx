import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useSEO } from "@/hooks/useSEO";
import { fetchFeaturedProperties } from "@/services/propertyService";

const Services = () => {
  const { data: featuredProperties = [], isLoading } = useQuery({
    queryKey: ['featured-properties'],
    queryFn: fetchFeaturedProperties,
    staleTime: 1000 * 60,
  });

  useSEO(
    "Services & Listings — PlotWise Global",
    "Browse premium property listings worldwide with PlotWise Global. Filter by price, location, and property type."
  );

  return (
    <>
      <PageHero
        title="Services & Listings"
        subtitle="Explore curated properties and find the right fit for your goals."
      />

      <section className="py-12 border-b border-border bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <Input placeholder="Max price (USD)" className="h-11" />
            <Select>
              <SelectTrigger className="h-11"><SelectValue placeholder="Location" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ae">UAE</SelectItem>
                <SelectItem value="sg">Singapore</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-11"><SelectValue placeholder="Property Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
            <Button className="h-11 bg-gold hover:bg-gold/90 text-gold-foreground">
              <Search size={16} className="mr-2" /> Search
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="h-[24rem] rounded-[1.75rem] bg-muted animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((p) => (
                <PropertyCard key={p._id} {...p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
