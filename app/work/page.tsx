import WorkHero from "@/components/work/WorkHero";
import WebpointCase from "@/components/work/WebpointCase";
import TrainingpointCase from "@/components/work/TrainingpointCase";
import SipSocietyCase from "@/components/work/SipSocietyCase";
import FindMeUniCase from "@/components/work/FindMeUniCase";
import TeachingMentoring from "@/components/work/TeachingMentoring";
import Education from "@/components/work/Education";
import WorkBottomCTA from "@/components/work/WorkBottomCTA";

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