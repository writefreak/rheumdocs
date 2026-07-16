"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

const STATS = [
  { value: "40+", label: "Years", desc: "in practice, since 1985" },
  {
    value: "30+",
    label: "Years of Trials",
    desc: "phase II & III studies since 1995",
  },
  {
    value: "500K+",
    label: "Patients",
    desc: "across our tri-state service area",
  },
  {
    value: "10+",
    label: "Research Partners",
    desc: "pharmaceutical sponsors worked with",
  },
];

function StatGrid() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4">
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
          className="flex flex-col bg-[#fafafa] rounded-2xl shadow-sm p-4"
        >
          <p className="mt-4 font-display text-lg font-semibold text-primary sm:text-xl">
            {stat.value} {stat.label}
          </p>
          <p className="mt-1 font-body text-xs md:text-sm text-text-muted">
            {stat.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="bg-bg px-6 py-20 sm:py-24 lg:px-10 lg:py-36 bg-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col lg:hidden">
        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base"
        >
          Our mission is to provide excellent care aimed at improving the
          quality of life for patients affected by arthritis, lupus,
          osteoporosis, and other autoimmune diseases. We provide current
          standards of care as well as access to clinical trials that may
          present cutting edge treatments to an underserved population.
        </motion.p>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-sm"
        >
          <img
            src="/doc.jpg"
            alt="Rheumatology Consultants exam room in Hagerstown, Maryland"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Stat grid */}
        <StatGrid />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="focus-ring mt-10 flex w-fit items-center gap-2 rounded-[var(--radius-card)] font-[family-name:var(--font-body)] text-sm font-semibold transition-transform hover:scale-[1.02]"
        >
          <Button variant="primary">Learn More About Us</Button>
        </motion.div>
      </div>

      {/*DESKTOP*/}
      <div className="mx-auto hidden max-w-6xl gap-16 lg:grid lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-square w-full overflow-hidden rounded-card shadow-sm"
        >
          <img
            src="/doc.jpg"
            alt="Rheumatology Consultants exam room in Hagerstown, Maryland"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold leading-tight text-[var(--color-primary)]"
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-5 font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--color-text-muted)]"
          >
            Our mission is to provide excellent care aimed at improving the
            quality of life for patients affected by arthritis, lupus,
            osteoporosis, and other autoimmune diseases. We provide current
            standards of care as well as access to clinical trials that may
            present cutting edge treatments to an underserved population.
          </motion.p>

          <StatGrid />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="focus-ring mt-10 flex w-fit items-center gap-2 rounded-[var(--radius-card)] font-[family-name:var(--font-body)] text-sm font-semibold transition-transform hover:scale-[1.02]"
          >
            <Button variant="primary" className="bg-accent">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
