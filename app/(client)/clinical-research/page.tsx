"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/shared/page-hero";

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

export default function ClinicalTrialResearchPage() {
  return (
    <main>
      <PageHero
        pageName="Clinical Trial Research Opportunities"
        image="/exam-room.png"
        description="Participate in groundbreaking rheumatology studies and
            help shape the future of treatment — right here in Hagerstown."
      />

      {/* Diagnoses — numbered list, sticky image */}
      <section className="bg-bg px-4 py-20 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="order-2 lg:order-1"
            >
              <h2 className="mb-3 font-display text-xl font-semibold text-ink md:text-2xl">
                We work with the following diagnosis:
              </h2>

              <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
                {CONDITIONS.map((condition, i) => (
                  <li
                    key={condition}
                    className="flex items-center gap-5 py-2 font-body text-xs text-ink md:text-sm"
                  >
                    <span className="font-display text-xs text-primary/60 md:text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {condition}
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative order-1 aspect-[3/4] w-full overflow-hidden rounded-2xl lg:order-2 lg:sticky lg:top-28 lg:h-fit"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/abd32dfa-6dfa-4268-a173-af22afbead34/IMG_0049+%281%29.jpg"
                alt="A patient smiling with her physician and a clinical research coordinator during a consultation"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Practice statement — image + text, exact source copy (Klein & Associates renamed to Rheumatology Consultants) */}
          <div className="mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-20 md:mt-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/ef5c89a1-e567-4005-b75d-b01866cf4483/IMG_0087.jpg"
                alt="A man donating blood while smiling, with a nurse talking to him in a medical room"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="order-2"
            >
              <h3 className="mb-3 font-display text-xl font-semibold text-ink md:text-2xl">
                Rheumatology Consultants Clinical Trials
              </h3>

              <p className="mt-6 font-body text-sm leading-relaxed text-ink-muted md:text-base">
                In the heart of Hagerstown, Maryland, Rheumatology Consultants
                stands as a beacon of innovation in the field of rheumatology.
                With a steadfast commitment to pushing boundaries, Rheumatology
                Consultants takes a bold step forward as a principal
                investigator in transformative clinical trials focusing on
                rheumatologic diseases. Through rigorous research and
                cutting-edge methodologies, we're unraveling new paths to better
                treatments and improved quality of life for patients. By
                participating in these pioneering trials, you become an active
                partner in the pursuit of medical progress. Rheumatology
                Consultants' passion for improving patient outcomes shines
                through, as we combine clinical excellence with groundbreaking
                research right here in our community. Embrace the future of
                rheumatologic care with Rheumatology Consultants and unlock a
                world of possibilities.
              </p>
            </motion.div>
          </div>

          {/* Application Instructions — exact source heading + line, sits right above the contact form */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="mt-20 md:mt-28"
          >
            <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              Application Instructions
            </h3>
            <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-ink-muted md:text-base">
              If you feel one, or several of these studies may apply to you or a
              family member, please use the contact form below and we will be in
              touch!
            </p>
          </motion.div> */}

          {/* TODO: Sponsor marquee goes here — source order:
              Bristol Myers Squibb, UCB, Novartis, Organogenesis, Novo Nordisk,
              Roche/Genentech, Gilead, AbbVie, Eli Lilly, Idorsia,
              Janssen/Johnson & Johnson. Continuous horizontal drift, same
              technique as the Work section carousel, pausing on hover/drag.
              Build as its own <SponsorMarquee /> component. */}

          {/* TODO: Contact section goes here — reuse existing <ContactSection />
              directly beneath the marquee. */}
        </div>
      </section>
    </main>
  );
}
