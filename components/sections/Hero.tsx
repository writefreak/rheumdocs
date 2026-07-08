"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Stethoscope, Syringe } from "lucide-react";
import { Button } from "../ui/button";

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
    <section
      id="top"
      className="relative flex md:h-screen h-[500px] items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/doctor2.jpg"
          alt="Rheumatology Consultants exam room where patients receive infusion and osteoporosis care in Hagerstown, Maryland"
          className="object-cover brightness-50 w-full h-full"
        />
        <div className="absolute inset-0 bg-[#1f4548]/30 md:bg-[#1f4548]/20" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 lg:px-14 lg:pt-28"
      >
        <div className="max-w-3xl">
          <motion.h1
            variants={item}
            className="font-display text-[26px] font-semibold leading-[1.08] text-bg sm:text-4xl lg:text-6xl"
          >
            Western Maryland's Trusted rheumatology and osteoporosis care since
            1994.
          </motion.h1>

          {/* <motion.p
            variants={item}
            className="mt-6 max-w-xl font-body text-xs md:text-sm leading-relaxed text-bg/85"
          >
            Rheumatology Consultants diagnoses and treats autoimmune and
            rheumatic disease for patients across the Tri-State area, with
            direct access to onsite clinical trials for those who have run out
            of other options.
          </motion.p> */}

          <motion.div
            variants={item}
            className="mt-10 flex md:flex-row flex-col md:items-center gap-4"
          >
            <a href="/contact">
              <Button variant="accent">Schedule an Appointment</Button>
            </a>
            <a href="/services">
              <Button variant="glass" icon={null}>
                Explore Our Services
                {/* <ArrowRight size={16} strokeWidth={2.25} /> */}
              </Button>
            </a>
          </motion.div>
        </div>

        {/* <motion.div
          variants={item}
          className="mt-16 grid gap-4 sm:grid-cols-3 lg:max-w-3xl"
        >
          {trustCards.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-card flex items-center gap-3 px-5 py-4 shadow-glass"
            >
              <Icon
                size={22}
                strokeWidth={2}
                className="shrink-0 text-accent"
              />
              <span className="font-body text-sm font-medium text-bg">
                {label}
              </span>
            </div>
          ))}
        </motion.div> */}
      </motion.div>
    </section>
  );
}
