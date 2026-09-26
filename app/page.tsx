import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Receipts from "@/components/home/Receipts";
import WhatIDo from "@/components/home/WhatIDo";
import ServicesPreview from "@/components/home/ServicesPreview";
import SelectedWork from "@/components/home/SelectedWork";
import CareerTimeline from "@/components/home/CareerTimeline";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Technical PM, Builder & Educator",
  description:
    "Project management is the core engine. Software architecture, business building, growth funnels, and team operations make me useful far beyond a status updater.",
};

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
