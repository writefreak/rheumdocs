"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex md:h-screen h-[500px] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src="/doctor2.jpg"
          alt="..."
          style={{ y: imageY }}
          className="h-[140%] w-full object-cover brightness-50 absolute -top-[20%] left-0"
        />
        <div className="absolute inset-0 bg-[#1f4548]/30 md:bg-[#1f4548]/10" />
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

          <motion.div
            variants={item}
            className="mt-10 flex md:flex-row flex-col md:items-center gap-4"
          >
            <a href="/contact">
              <Button variant="accent">Schedule an Appointment</Button>
            </a>
            <a href="/our-practice">
              <Button variant="glass" icon={null}>
                Explore Our Services
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
