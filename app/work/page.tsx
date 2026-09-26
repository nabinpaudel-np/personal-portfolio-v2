import type { Metadata } from "next";
import WorkHero from "@/components/work/WorkHero";
import WebpointCase from "@/components/work/WebpointCase";
import TrainingpointCase from "@/components/work/TrainingpointCase";
import SipSocietyCase from "@/components/work/SipSocietyCase";
import FindMeUniCase from "@/components/work/FindMeUniCase";
import TeachingMentoring from "@/components/work/TeachingMentoring";
import Education from "@/components/work/Education";
import WorkBottomCTA from "@/components/work/WorkBottomCTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies across US SaaS, ventures (Sip Society, Trainingpoint, Find Me University), internship programs, and PM cohort instruction.",
};

export default function WorkPage() {
  return (
    <main className="w-full bg-surface">
      <WorkHero />
      <WebpointCase />
      <TrainingpointCase />
      <SipSocietyCase />
      <FindMeUniCase />
      <TeachingMentoring />
      <Education />
      <WorkBottomCTA />
    </main>
  );
}
