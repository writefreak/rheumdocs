"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/shared/page-hero";
import ContactSection from "@/components/sections/ContactSection";
import ContactClinic from "@/components/sections/contact-clinic";
import { ClientLogoStrip } from "@/components/services/client-logo-strip";
import TextCarousel, { CarouselSlide } from "@/components/ui/text-carousel";
import ResearchSection from "@/components/sections/ResearchSection";

const CONDITIONS = [
  "Rheumatoid arthritis",
  "Lupus",
  "Osteoarthritis",
  "Osteoporosis",
  "Gout",
  "Psoriatic Arthritis",
  "Sjogren's syndrome",
  "Giant cell arteritis",
  "Polymyalgia rheumatica (PMR)",
  "Ankylosing spondylitis (AS)",
];

const SLIDES: CarouselSlide[] = [
  {
    title: "We work with the following:",
    paragraph: CONDITIONS.map((condition) => `•  ${condition}`),
  },
  {
    title: "Rheumatology Consultants Clinical Trials",
    paragraph: [
      "In the heart of Hagerstown, Maryland, Rheumatology Consultants stands as a beacon of innovation in the field of rheumatology. With a steadfast commitment to pushing boundaries, Rheumatology Consultants takes a bold step forward as a principal investigator in transformative clinical trials focusing on rheumatologic diseases. Through rigorous research and cutting-edge methodologies, we're unraveling new paths to better treatments and improved quality of life for patients. By participating in these pioneering trials, you become an active partner in the pursuit of medical progress. Rheumatology Consultants' passion for improving patient outcomes shines through, as we combine clinical excellence with groundbreaking research right here in our community. Embrace the future of rheumatologic care with Rheumatology Consultants and unlock a world of possibilities.",
    ],
  },
];

const SLIDE_IMAGES = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/abd32dfa-6dfa-4268-a173-af22afbead34/IMG_0049+%281%29.jpg",
    alt: "A patient smiling with her physician and a clinical research coordinator during a consultation",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/ef5c89a1-e567-4005-b75d-b01866cf4483/IMG_0087.jpg",
    alt: "A man donating blood while smiling, with a nurse talking to him in a medical room",
  },
];

export default function ClinicalTrialResearchPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeImage = SLIDE_IMAGES[activeSlide];

  return (
    <main>
      <PageHero
        pageName="Clinical Trial Research Opportunities"
        // image="/exam-room.png"
        description="Participate in groundbreaking rheumatology studies and
            help shape the future of treatment right here in Hagerstown."
      />
      {/* Diagnoses + practice statement, combined into one text carousel; image always on the right */}
      <section className="bg-bg px-4 py-20 lg:px-14  bg-white lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:order-2"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="order-2 lg:order-1"
            >
              <TextCarousel
                slides={SLIDES}
                activeIndex={activeSlide}
                onActiveChange={setActiveSlide}
              />
            </motion.div>
          </div>
          <div className="pt-16">
            <ResearchSection />
          </div>
        </div>
      </section>
      <div className="pt-5 pb-4 border-t border-t-gray-100 bg-white md:pt-14 flex flex-col gap-4 px-4 md:px-14">
        <h3 className="font-display text-2xl font-semibold leading-tight text-primary sm:text-4xl pb-3">
          Our Proud Sponsors
        </h3>
      </div>
      <div className="md:pb-10 border-b border-b-gray-100 bg-white pb-5">
        <ClientLogoStrip />
      </div>{" "}
      <ContactClinic />
    </main>
  );
}
