import PageHero from "@/components/shared/page-hero";
import ContactInfoMap from "@/components/contact/contact-info-map";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <main>
      <PageHero pageName="Contact Us" image="/exam-room.png" />
      <ContactInfoMap />
      <ContactSection />
    </main>
  );
}
