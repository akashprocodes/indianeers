import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { AffiliationsSection } from "@/components/home/AffiliationsSection";
import { ProjectHighlightsSection } from "@/components/home/ProjectHighlightsSection";
import { CourseJobSection } from "@/components/home/CourseJobSection";
import { ImpactMapSection } from "@/components/home/ImpactMapSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VisionSection } from "@/components/home/VisionSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ContactCtaSection } from "@/components/home/RemainingSections";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <AffiliationsSection />
      <ProjectHighlightsSection />
      <CourseJobSection />
      <ImpactMapSection />
      <TestimonialsSection />
      <VisionSection />
      <PartnersSection />
      <ContactCtaSection />
      
      {/* CSS overrides for 3D cards + animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .perspective-1000 { perspective: 1000px; }
      `}} />
    </div>
  );
}