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
    <section id="research" className="text-bg">
      <div className="mx-auto">
        <div className="grid md:gap-12 gap-12 items-center lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="font-display text-primary text-2xl font-semibold leading-tight sm:text-3xl"
            >
              World Class <br className="md:hidden" /> Research Work
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 flex flex-col gap-8 font-body text-lg leading-relaxed text-bg/85"
            >
              <p className="text-xs md:text-sm text-neutral-700 md:max-w-xl">
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
