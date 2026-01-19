import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { PainPoints } from "@/app/components/PainPoints";
import { Features } from "@/app/components/Features";
import { AppPreview } from "@/app/components/AppPreview";
import { WhoItsFor } from "@/app/components/WhoItsFor";
import { FinalCTA } from "@/app/components/FinalCTA";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Header />
      <Hero />
      <PainPoints />
      <Features />
      <AppPreview />
      <WhoItsFor />
      <FinalCTA />
      <Footer />
    </div>
  );
}
