"use client";

import { motion } from "framer-motion";
import { FlaskConical, Award, FileText } from "lucide-react";

const partners = ["Pfizer", "Eli Lilly", "Amgen"];
const treatments = ["Humira", "Enbrel", "Xeljanz"];

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="bg-primary px-6 py-24 text-bg lg:px-10 lg:py-30"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
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
              className="mt-6 space-y-5 font-body text-lg leading-relaxed text-bg/85"
            >
              <p className="text-xs md:text-base text-neutral-300">
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
              {/* <p>
                Patients enrolled in an active trial get access to treatments
                years before general availability, along with the closer
                monitoring a trial protocol requires. Our research coordinators
                manage every study onsite, so participation never means a
                separate facility or a separate care team.
              </p> */}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="glass-card space-y-8 p-8"
          >
            <div>
              <div className="flex items-center gap-2 text-accent">
                <Award size={20} strokeWidth={2} />
                <span className="font-body text-sm font-semibold uppercase tracking-wide">
                  Since 1994
                </span>
              </div>
              <p className="mt-2 font-body text-sm text-bg/80">
                Three decades of continuous clinical trial operation from a
                single Hagerstown location.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-accent">
                <FlaskConical size={20} strokeWidth={2} />
                <span className="font-body text-sm font-semibold uppercase tracking-wide">
                  Research Partners
                </span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {partners.map((partner) => (
                  <li
                    key={partner}
                    className="rounded-full border border-bg/25 px-4 py-1.5 font-body text-sm text-bg/90"
                  >
                    {partner}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-accent">
                <FileText size={20} strokeWidth={2} />
                <span className="font-body text-sm font-semibold uppercase tracking-wide">
                  Treatments Studied Here
                </span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {treatments.map((treatment) => (
                  <li
                    key={treatment}
                    className="rounded-full border border-bg/25 px-4 py-1.5 font-body text-sm text-bg/90"
                  >
                    {treatment}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
