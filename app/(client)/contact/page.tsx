import PageHero from "@/components/shared/page-hero";
import ContactInfoMap from "@/components/contact/contact-info-map";
import OurLocation from "@/components/contact/our-location";

export default function ContactPage() {
  return (
    <main>
      <PageHero pageName="Contact Us" image="/exam-room.png" />
      <div className="flex flex-col gap-5 md:gap-7">
        <OurLocation />
        <ContactInfoMap />
      </div>
    </main>
  );
}
