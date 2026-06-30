import { Header } from "@/components/shared/Header";
import { VideoHero } from "@/components/palma/VideoHero";
import { BrandStory } from "@/components/palma/BrandStory";
import { Ingredients } from "@/components/palma/Ingredients";
import { ProductShowcase } from "@/components/palma/ProductShowcase";
import { USPSection } from "@/components/palma/USPSection";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <VideoHero />
        <BrandStory />
        <Ingredients />
        <ProductShowcase />
        <USPSection />
      </main>
      <Footer />
    </>
  );
}
