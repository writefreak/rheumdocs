// ResearchSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ImgageSlider from "../ui/img-slider";
import { Button } from "../ui/button";

const researchImages = [
  {
    src: "/rh1.jpg",
    alt: "The APEX psoriatic arthritis clinical study",
  },
  {
    src: "/rh2.jpg",
    alt: "The ALLEGORY lupus research study",
  },

  {
    src: "/rh4.jpg",
    alt: "Project Baseline rheumatoid arthritis study",
  },
  {
    src: "/rh5.jpg",
    alt: "Project Baseline rheumatoid arthritis study",
  },
  {
    src: "/rh6.jpg",
    alt: "Project Baseline rheumatoid arthritis study",
  },
  {
    src: "/rh7.jpg",
    alt: "Project Baseline rheumatoid arthritis study",
  },
  {
    src: "/rh8.jpg",
    alt: "Project Baseline rheumatoid arthritis study",
  },
  {
    src: "/rh9.jpg",
    alt: "Project Baseline rheumatoid arthritis study",
  },
  {
    src: "/rh10.jpg",
    alt: "Project Baseline rheumatoid arthritis study",
  },
];

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="bg-primary px-4 py-24 text-bg lg:px-14 lg:py-30"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid md:gap-12 gap-12 items-center lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="font-display text-3xl font-semibold leading-tight sm:text-4xl"
            >
              World Class Research Work
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 flex flex-col gap-8 font-body text-lg leading-relaxed text-bg/85"
            >
              <p className="text-xs md:text-base text-neutral-300 max-w-xl">
                The Osteoporosis and Clinical Trial Research Center is a local
                facility where World-class research work focuses on the
                development of investigational products and devices for treating
                patients with arthritis and rheumatic disorders. The center was
                founded in 1994 and has conducted clinical trials for drug
                companies such as Pfizer, Lilly, and Amgen, and brought our
                local community access to life-bettering treatments such as
                Humira, Enbrel, and Xeljanz to name a few. If you are interested
                in participating in arthritis or osteoporosis research trials
                please contact us.
              </p>
              <a href="#contact">
                <Button variant="accent">Schedule an Appointment</Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <ImgageSlider images={researchImages} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
