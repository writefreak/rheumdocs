"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { Button } from "../ui/button";

const STATS = [
  { value: 40, suffix: "+", label: "Years", desc: "in practice, since 1985" },
  {
    value: 30,
    suffix: "+",
    label: "Years of Trials",
    desc: "phase II & III studies since 1995",
  },
  {
    value: 500,
    suffix: "K+",
    label: "Patients",
    desc: "across our tri-state service area",
  },
  {
    value: 10,
    suffix: "+",
    label: "Research Partners",
    desc: "pharmaceutical sponsors worked with",
  },
];

function Counter({
  target,
  suffix = "",
  duration = 1.6,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, target, duration, delay]);

  return (
    <p
      ref={ref}
      className="font-display text-2xl font-semibold text-primary md:text-4xl"
    >
      {count.toLocaleString()}
      {suffix}
    </p>
  );
}

export function StatGrid() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10">
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
          className="flex flex-col"
        >
          <Counter
            target={stat.value}
            suffix={stat.suffix}
            delay={0.1 + i * 0.1}
          />
          <p className="mt-1 font-body text-xs md:text-sm text-text-muted">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function ParallaxImage({ className }: { className: string }) {
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
        src="/heroimg.jpg"
        alt="Rheumatology Consultants exam room in Hagerstown, Maryland"
        style={{ y: imageY }}
        className="absolute left-0 -top-[15%] h-[130%] w-full object-cover"
      />
    </motion.div>
  );
}

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="bg-white px-4 py-10 lg:px-14"
    >
      <div className="mx-auto flex flex-col lg:hidden">
        {/* Text */}
        

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-5 font-body text-xs leading-relaxed text-muted sm:text-base"
        >
          Our mission is to provide excellent care aimed at improving the
          quality of life for patients affected by arthritis, lupus,
          osteoporosis, and other autoimmune diseases. We provide current
          standards of care as well as access to clinical trials that may
          present cutting edge treatments to an underserved population.
        </motion.p>

        
        {/* Stat grid */}
        <StatGrid />

        {/* CTA */}
        
      </div>

      {/*DESKTOP*/}
      
    </section>
  );
}
