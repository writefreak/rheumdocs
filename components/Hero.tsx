"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Stethoscope, Syringe } from "lucide-react";

const trustCards = [
  {
    icon: Award,
    label: "30 years of clinical research",
  },
  {
    icon: Stethoscope,
    label: "Board certified rheumatologists",
  },
  {
    icon: Syringe,
    label: "Onsite infusion and imaging",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Rheumatology Consultants exam room where patients receive infusion and osteoporosis care in Hagerstown, Maryland"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,69,72,0.82) 0%, rgba(31,69,72,0.62) 45%, rgba(31,69,72,0.85) 100%)",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-10 lg:pt-24"
      >
        <div className="max-w-3xl">
          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] text-bg sm:text-5xl lg:text-6xl"
          >
            Western Maryland&apos;s Rheumatology and Osteoporosis Specialists Since 1994.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl font-body text-lg leading-relaxed text-bg/85"
          >
            Rheumatology Consultants diagnoses and treats autoimmune and rheumatic
            disease for patients across the Tri-State area, with direct access to
            onsite clinical trials for those who have run out of other options.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Schedule an Appointment
              <ArrowRight size={16} strokeWidth={2.25} />
            </a>
            <a
              href="#services"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-bg/50 px-7 py-3.5 font-body text-sm font-semibold text-bg transition-colors hover:border-bg hover:bg-bg/10"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-16 grid gap-4 sm:grid-cols-3 lg:max-w-3xl"
        >
          {trustCards.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-card flex items-center gap-3 px-5 py-4 shadow-glass"
            >
              <Icon size={22} strokeWidth={2} className="shrink-0 text-accent" />
              <span className="font-body text-sm font-medium text-bg">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
