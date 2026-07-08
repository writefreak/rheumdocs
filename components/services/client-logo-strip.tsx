"use client";

import { motion } from "framer-motion";

const LOGOS = [
  "/log1.png",
  "/log2.png",
  "/log3.png",
  "/log4.png",
  "/log5.png",
  "/log6.png",
  "/log7.png",
  "/log8.png",
];

export function ClientLogoStrip() {
  return (
    <section className="w-full overflow-hidden bg-white py-10 md:py-14">
      <div className="relative">
        {/* Edge fades so logos don't hard-cut at the viewport edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        <motion.div
          className="flex w-max items-center gap-12 md:gap-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Render the set twice back-to-back so the -50% loop point
              is seamless (each half is identical, so the loop never
              shows a gap or jump). */}
          {[...LOGOS, ...LOGOS].map((src, i) => (
            <div key={i} className="relative h-12 w-auto shrink-0 md:h-16">
              <img
                src={src}
                alt=""
                draggable={false}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
