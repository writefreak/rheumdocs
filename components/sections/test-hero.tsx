"use client";

import { useRef, useState, useCallback } from "react";
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
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  const imgRefCallback = useCallback((node: HTMLImageElement | null) => {
    if (node && node.complete) {
      setImgLoaded(true);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex items-center overflow-hidden bg-white isolate py-6 md:py-0 md:h-screen lg:h-screen xl:h-auto xl:py-0 2xl:h-[1000px]"
    >
      {/* Background for Mobile and Tablet only (< lg) */}
      <div className="absolute inset-0 -z-10 lg:hidden">
        <img
          src="/bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
      </div>

      {/* Full image background layer active on Normal Desktop and larger (lg+) */}
      <div className="hidden lg:block absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src="/doctor2.jpg"
          alt=""
          style={{ y: imageY }}
          className="h-[130%] w-full object-cover absolute -top-[15%] left-0 object-right"
        />
        {/* Subtle gradient overlay to keep readable text contrast on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-3/4 lg:w-2/3 xl:w-1/2" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pt-28 pb-20 lg:grid-cols-12 lg:gap-14 lg:px-14 lg:pt-36 xl:pt-44 xl:h-auto xl:pb-32 2xl:max-w-[1700px] 2xl:gap-12 2xl:px-16 2xl:pt-0 2xl:pb-0 min-[1920px]:max-w-[2250px] min-[1920px]:gap-16">
        {/* Text column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col gap-7 lg:col-span-8 xl:col-span-6 2xl:col-span-6 min-[1920px]:col-span-5 lg:max-w-none"
        >
          <motion.h1
            variants={item}
            className="font-display text-[22px] md:w-full w-64 text-primary font-semibold leading-[1.08] md:text-5xl xl:w-full 2xl:text-[64px] min-[1920px]:text-[72px]"
          >
            Western Maryland's Trusted rheumatology and osteoporosis care since
            1994.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[10px] md:text-sm font-body md:max-w-sm xl:text-base text-neutral-700 2xl:text-lg min-[1920px]:text-xl lg:max-w-lg"
          >
            Board certified rheumatologists providing compassionate,
            comprehensive care for arthritis, autoimmune conditions, and bone
            health with onsite infusion and imaging.
          </motion.p>
        </motion.div>

        {/* Foreground Image Card container (Hidden on Desktop lg+ since photo is now section background) */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-[420px] lg:hidden">
          <motion.img
            ref={imgRefCallback}
            src="/doctor2.jpg"
            alt="..."
            onLoad={() => setImgLoaded(true)}
            initial="hidden"
            animate={imgLoaded ? "visible" : "hidden"}
            variants={imageVariants}
            style={{ y: imageY }}
            className="h-[130%] w-full object-cover absolute -top-[15%] left-0"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: imgLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-[#1f4548]/10"
          />
        </div>
      </div>
    </section>
  );
}
