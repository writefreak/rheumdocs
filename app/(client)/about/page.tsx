"use client";

import PageHero from "@/components/shared/page-hero";
import Timeline from "@/components/about/timeline";
import Features from "@/components/about/features";
import TeamSection from "@/components/sections/TeamSection";
import TextCarousel, { CarouselSlide } from "@/components/ui/text-carousel";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const historySlides: CarouselSlide[] = [
  {
    label: "1985 – 1994",
    title: "A Private Rheumatology Practice",
    paragraph: [
      "Rheumatology Consultants was started in 1985 as a private rheumatology practice and in 1994 expanded to include comprehensive osteoporosis care.",
      "With the acquisition of a Hologic QDR 1000 DXA Scanner in 1994, The Osteoporosis Center was opened in Hagerstown. Because of the success of The Osteoporosis Center in Hagerstown we formed The Osteoporosis and Clinical Trials Center. To keep pace with technology we currently have a GE Lunar Prodigy DXA system.",
    ],
  },
  {
    label: "Since 1995",
    title: "Clinical Trial Research",
    paragraph: [
      "Since 1995 we have participated in many phase II and phase III clinical trials. To date our areas of study have focused on Ankylosing Spondylitis, Psoriatic Arthritis, Rheumatoid Arthritis, Systemic Lupus Erythematosus, Gout, Osteoarthritis, Osteoporosis in women and men, Osteopenia and Steroid Induced Osteoporosis.",
      "Clinical research organizations we have worked with include Kendle, MTRA, Parexel, PPD and Quintiles. Sponsors we have participated with include Abbott, AutoImmune, Boehringer Mannheim, Eli Lilly, G.D. Searle, Hoechst Marion Roussel, Hyal Pharmaceutical, NPS Allelix, Pfizer, Proctor & Gamble and Roche.",
    ],
  },
  {
    label: "September 2024",
    title: "Dr. Okoye Joins the Practice",
    paragraph: [
      "On September 9, 2024 we proudly welcomed Okechukwu Okoye, M.D. to join our practice. Dr. Okoye came to us from Prisma Health/University of South Carolina School of Medicine Columbia Rheumatology Fellowship Program.",
      "He is a dedicated professional who shares our commitment to providing the highest quality rheumatology and osteoporosis care to our patients. We believe that his expertise and dedication will be a great addition to our team and will help us continue to provide the best possible care to our patients.",
    ],
  },
  {
    label: "Today",
    title: "Comprehensive Osteoporosis Care",
    paragraph: [
      "Today, Rheumatology Consultants is the premier provider of rheumatologic and comprehensive osteoporosis care in Western Maryland. Our practice is unique in that we draw our patient population from a tri-state area (Maryland, Pennsylvania, and West Virginia) with a population of approximately 500,000 people. The area has a large elderly population, which is reflected in our rheumatology practice as a whole, where the patient ratio is approximately 2:1 female:male.",
      "We have been instrumental in developing and implementing strict quality control standards for all bone densitometry services provided in our center, with particular emphasis placed on ensuring accurate and precise baseline and follow-up scans. Our technologist is certified by The International Society for Clinical Densitometry (ISCD).",
    ],
  },
];

function ParallaxImage({ className }: { className: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      <motion.img
        src="/about.jpg"
        alt="Rheumatology Consultants exam room in Hagerstown, Maryland"
        style={{ y: imageY }}
        className="absolute left-0 -top-[15%] h-[130%] w-full object-cover"
      />
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        pageName="About Us"
        description="Rheumatology Consultants is the private practice of Okechukwu C. Okoye, M.D."
        // image="/exam-room.png"
      />

      <section className="bg-bg px-4 py-20 lg:px-14 lg:py-30 bg-white">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2">
          <ParallaxImage className="relative md:hidden aspect-[4/3] w-full overflow-hidden rounded-card shadow-sm" />
          <TextCarousel slides={historySlides} />
          <ParallaxImage className="relative hidden md:block aspect-[4/3] w-full overflow-hidden rounded-card shadow-sm" />
        </div>
        <div className="pt-10 flex flex-col md:pt-16">
          <Features />
          <TeamSection />
        </div>
      </section>
    </main>
  );
}
