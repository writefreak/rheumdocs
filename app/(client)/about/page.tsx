"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/shared/page-hero";
import Timeline from "@/components/about/timeline";

const historyItems = [
  {
    label: "1985 – 1994",
    title: "A Private Rheumatology Practice",
    body: [
      "Rheumatology Consultants was started in 1985 as a private rheumatology practice and in 1994 expanded to include comprehensive osteoporosis care.",
      "With the acquisition of a Hologic QDR 1000 DXA Scanner in 1994, The Osteoporosis Center was opened in Hagerstown. Because of the success of The Osteoporosis Center in Hagerstown we formed The Osteoporosis and Clinical Trials Center. To keep pace with technology we currently have a GE Lunar Prodigy DXA system.",
    ],
  },
  {
    label: "Since 1995",
    title: "Clinical Trial Research",
    body: [
      "Since 1995 we have participated in many phase II and phase III clinical trials. To date our areas of study have focused on Ankylosing Spondylitis, Psoriatic Arthritis, Rheumatoid Arthritis, Systemic Lupus Erythematosus, Gout, Osteoarthritis, Osteoporosis in women and men, Osteopenia and Steroid Induced Osteoporosis.",
      "Clinical research organizations we have worked with include Kendle, MTRA, Parexel, PPD and Quintiles. Sponsors we have participated with include Abbott, AutoImmune, Boehringer Mannheim, Eli Lilly, G.D. Searle, Hoechst Marion Roussel, Hyal Pharmaceutical, NPS Allelix, Pfizer, Proctor & Gamble and Roche.",
    ],
  },
  {
    label: "September 2024",
    title: "Dr. Okoye Joins the Practice",
    body: [
      "On September 9, 2024 we proudly welcomed Okechukwu Okoye, M.D. to join our practice. Dr. Okoye came to us from Prisma Health/University of South Carolina School of Medicine Columbia Rheumatology Fellowship Program.",
      "He is a dedicated professional who shares our commitment to providing the highest quality rheumatology and osteoporosis care to our patients. We believe that his expertise and dedication will be a great addition to our team and will help us continue to provide the best possible care to our patients.",
    ],
  },
  {
    label: "Today",
    title: "Comprehensive Osteoporosis Care",
    body: [
      "Today, Rheumatology Consultants is the premier provider of rheumatologic and comprehensive osteoporosis care in Western Maryland. Our practice is unique in that we draw our patient population from a tri-state area (Maryland, Pennsylvania, and West Virginia) with a population of approximately 500,000 people. The area has a large elderly population, which is reflected in our rheumatology practice as a whole, where the patient ratio is approximately 2:1 female:male.",
      "We have been instrumental in developing and implementing strict quality control standards for all bone densitometry services provided in our center, with particular emphasis placed on ensuring accurate and precise baseline and follow-up scans. Our technologist is certified by The International Society for Clinical Densitometry (ISCD).",
    ],
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero pageName="About Us" image="/exam-room.jpg" />

      <section className="bg-bg px-6 py-24 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="mb-14 max-w-2xl font-display text-2xl font-semibold text-ink sm:text-3xl md:mb-20"
          >
            Rheumatology Consultants is the private practice of Okechukwu C.
            Okoye, M.D.
          </motion.p>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LHS — timeline */}
            <div className="order-2 lg:order-1">
              <Timeline items={historyItems} />
            </div>

            {/* RHS — two images, sticky on desktop so they stay in view while the timeline scrolls */}
            <div className="order-1 flex flex-col gap-6 lg:order-2 lg:sticky lg:top-28 lg:h-fit lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/76f7b520-d4a0-445c-b8d1-3b3b1f3af6a4/IMG_0121.jpg"
                  alt="Staff member at the front desk of Rheumatology Consultants"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/385c1852-a5ce-4a8e-87b7-698611f282f9/IMG_9984.jpg"
                  alt="Patient receiving a DXA bone density scan"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/*
            --- Our Facilities section (holding for later) ---
            Site copy for reference when this is built out:

            DXA Scanners
            GE/Lunar Prodigy Advance

            X-Rays & Ultrasound
            X-ray facility available on-site utilizing Gendex-Del and Digital Fuji CR equipment.
            Onsite ultrasound utilizing Sonosite M-MSK
            Progressive Radiology

            Infusion Services
            Individualized administration of the latest I.V. medicines for rheumatologic
            conditions and osteoporosis.

          <section className="mt-20 border-t border-primary/10 pt-14 md:mt-28 md:pt-20">
            <h2 className="mb-8 font-display text-2xl font-semibold text-ink md:text-3xl">
              Our Facilities
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h4 className="mb-2 font-display text-base font-semibold text-ink md:text-lg">
                  DXA Scanners
                </h4>
                <p className="font-body text-xs text-neutral-600 md:text-base">
                  GE/Lunar Prodigy Advance
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-display text-base font-semibold text-ink md:text-lg">
                  X-Rays & Ultrasound
                </h4>
                <p className="font-body text-xs text-neutral-600 md:text-base">
                  X-ray facility available on-site utilizing Gendex-Del and Digital Fuji CR
                  equipment. Onsite ultrasound utilizing Sonosite M-MSK. Progressive Radiology.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-display text-base font-semibold text-ink md:text-lg">
                  Infusion Services
                </h4>
                <p className="font-body text-xs text-neutral-600 md:text-base">
                  Individualized administration of the latest I.V. medicines for rheumatologic
                  conditions and osteoporosis.
                </p>
              </div>
            </div>
          </section>
          */}
        </div>
      </section>
    </main>
  );
}
