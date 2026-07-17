import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import PracticeOverviewSection from "@/components/sections/PracticeOverviewSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ResearchSection from "@/components/sections/ResearchSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/shared/Footer";
import TestHero from "@/components/sections/test-hero";
import MissionSection from "@/components/sections/MissionSection";

export default function Home() {
  return (
    <main>
      <TestHero />
      {/* <Hero /> */}
      <MissionSection />
      <PracticeOverviewSection />
      <ServicesSection />
      {/* <ResearchSection /> */}
      {/* <TeamSection /> */}
      <ContactSection />
    </main>
  );
}
