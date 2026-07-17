"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PageHeroProps {
  pageName: string;
  description?: string;
  image?: string;
}

/**
 * Reusable page-title banner.
 * Fixed 300px height, background image with a soft primary-color overlay.
 * Background image parallaxes at a slower rate than scroll for depth.
 * Drop this at the top of any interior page: <PageHero pageName="About Us" description="..." />
 */
export default function PageHero({
  pageName,
  description,
  image = "/exam-room.png",
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Image drifts down slightly slower than the page scrolls past it,
  // giving the classic parallax "background is further away" feel.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300px] md:h-[350px] w-full overflow-hidden"
    >
      <motion.img
        src={image}
        alt={pageName}
        style={{ y }}
        className="absolute brightness-50 inset-0 h-[130%] w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#1f4548]/30 md:bg-[#1f4548]/40" />

      <div className="relative z-10 flex flex-col items-center gap-4 h-full  justify-center pt-40 md:pt-40 px-4 pb-8 md:px-12 md:pb-10">
        <h1 className="text-[26px] font-semibold leading-[1.08] text-bg sm:text-4xl lg:text-6xl">
          {pageName}
        </h1>{" "}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="mb-14 max-w-xl text-center font-body text-sm font-medium text-neutral-300 md:text-lg md:mb-20"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
