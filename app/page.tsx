import Hero from "@/components/home/Hero";
import Receipts from "@/components/home/Receipts";
import WhatIDo from "@/components/home/WhatIDo";
import ServicesPreview from "@/components/home/ServicesPreview";
import SelectedWork from "@/components/home/SelectedWork";
import CareerTimeline from "@/components/home/CareerTimeline";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="w-full bg-surface">
      <Hero />
      <Receipts />
      <WhatIDo />
      <ServicesPreview />
      <SelectedWork />
      <CareerTimeline />
      <FinalCTA />
    </main>
  );
}
