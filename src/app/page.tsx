import HeroBanner from "@/components/about/HeroBanner";
import PartnerSection from "@/components/about/PartnerSection";
import ProblemStatement from "@/components/about/ProblemStatement";
import Stats from "@/components/about/Stats";
import TeamSection from "@/components/about/TeamSection";
import TestimonialSection from "@/components/about/TestimonialSection";
import VideoSection from "@/components/about/VideoSection";

export default function About() {
  return (
    <main className="">
      <HeroBanner />
      <ProblemStatement />
      <Stats />
      <VideoSection />
      <TeamSection />
      <PartnerSection />
      <TestimonialSection />
    </main>
  );
}
