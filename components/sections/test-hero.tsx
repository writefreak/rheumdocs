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
      className="relative flex md:h-screen h-auto items-center overflow-hidden bg-white isolate"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-28 pb-20 lg:grid-cols-2 lg:gap-14 lg:px-14 lg:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col gap-7"
        >
          <motion.h1
            variants={item}
            className="font-display text-[26px] text-primary font-semibold leading-[1.08] md:text-5xl"
          >
            Western Maryland's Trusted rheumatology and osteoporosis care since
            1994.
          </motion.h1>

          <motion.p className="text-[10px] md:text-sm font-body md:max-w-sm text-neutral-700">
            Board certified rheumatologists providing compassionate,
            comprehensive care for arthritis, autoimmune conditions,{" "}
            <br className="md:hidden" />
            and bone health with onsite infusion and imaging.
          </motion.p>

          <motion.div
            variants={item}
            className="md:pt-10 pt-2 flex md:flex-row flex-col md:items-center gap-4"
          >
            <a href="/contact">
              <Button variant="primary">Schedule an Appointment</Button>
            </a>
            {/* <a href="/our-practice">
              <Button variant="accent" icon={null}>
                Explore Our Services
              </Button>
            </a> */}
          </motion.div>
        </motion.div>

        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-[420px]">
          <motion.img
            src="/doctor2.jpg"
            alt="..."
            style={{ y: imageY }}
            className="h-[130%] w-full object-cover absolute -top-[15%] left-0"
          />
          <div className="absolute inset-0 bg-[#1f4548]/10" />
        </div>
      </div>
    </section>
  );
}
