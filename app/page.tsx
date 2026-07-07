import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import PracticeOverviewSection from "@/components/PracticeOverviewSection";
import ServicesSection from "@/components/ServicesSection";
import ResearchSection from "@/components/ResearchSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MissionSection />
        <PracticeOverviewSection />
        <ServicesSection />
        <ResearchSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
