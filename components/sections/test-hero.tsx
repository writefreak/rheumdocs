"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

const buttons = [
  { text: "Schedule an Appointment", link: "/contact" },
  { text: "Explore Our Services", link: "/our-practice" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgImageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative h-[420px] md:h-screen overflow-hidden">
        <motion.img
          style={{ y: bgImageY }}
          src="/doctor2.jpg"
          alt="Rheumatology Consultants exam room where patients receive infusion and osteoporosis care in Hagerstown, Maryland"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-[#1f4548]/30 md:bg-[#1f4548]/40" />

        <div className="relative flex flex-col gap-5 items-center pt-16 md:pt-32 px-6 text-center">
          <h4 className="text-sm md:text-xl font-semibold text-neutral-200">
            Western Maryland's Trusted Rheumatology Care
          </h4>
          <h1 className="text-4xl md:text-6xl font-bold text-bg max-w-3xl">
            Rheumatology Consultants
          </h1>

          {/* <div className="md:pt-7 pt-5 grid grid-cols-1 md:grid-cols-2 gap-3">

          </div> */}
        </div>
      </div>

      <div>
        <motion.div
          style={{ y: cardY }}
          className="relative -mt-24 md:-mt-27 mx-auto max-w-6xl h-[200px] rounded-2xl bg-white"
        />
      </div>
    </div>
  );
};

export default Hero;
