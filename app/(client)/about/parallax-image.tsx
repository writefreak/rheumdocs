"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({ className }: { className: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      <motion.img
        src="/about.jpg"
        alt="Rheumatology Consultants exam room in Hagerstown, Maryland"
        style={{ y: imageY }}
        className="absolute left-0 -top-[15%] h-[130%] w-full object-cover"
      />
    </motion.div>
  );
}
