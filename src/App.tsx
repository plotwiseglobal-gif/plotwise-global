import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Properties = lazy(() => import("./pages/Properties"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));
const FindPgRentals = lazy(() => import("./pages/services/FindPgRentals"));
const InvestmentDeals = lazy(() => import("./pages/services/InvestmentDeals"));
const AssetManagement = lazy(() => import("./pages/services/AssetManagement"));
const MarketingBuilders = lazy(() => import("./pages/services/MarketingBuilders"));
const FinancialAdvisory = lazy(() => import("./pages/services/FinancialAdvisory"));
const RealEstateAftercare = lazy(() => import("./pages/services/RealEstateAftercare"));
const PremiumDemo = lazy(() => import("./pages/PremiumDemo"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ErrorBoundary>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/find-pg-rentals" element={<FindPgRentals />} />
                <Route path="/services/investment-deals" element={<InvestmentDeals />} />
                <Route path="/services/asset-management" element={<AssetManagement />} />
                <Route path="/services/marketing-builders" element={<MarketingBuilders />} />
                <Route path="/services/financial-advisory" element={<FinancialAdvisory />} />
                <Route path="/services/real-estate-aftercare" element={<RealEstateAftercare />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/property/:slug" element={<PropertyDetails />} />
                <Route path="/listings" element={<Navigate to="/properties" replace />} />
              </Route>
              <Route path="/premium-demo" element={<PremiumDemo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </TooltipProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
