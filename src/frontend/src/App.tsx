import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import FeaturedCollections from "./components/FeaturedCollections";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import OurStory from "./components/OurStory";
import ShopPreview from "./components/ShopPreview";
import SizeGuide from "./components/SizeGuide";

const queryClient = new QueryClient();

function DriporaApp() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "oklch(0.09 0.006 240)",
        color: "oklch(0.84 0.006 240)",
      }}
    >
      <Nav />
      <main>
        <Hero />
        <FeaturedCollections />
        <OurStory />
        <ShopPreview />
        <SizeGuide />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DriporaApp />
    </QueryClientProvider>
  );
}
