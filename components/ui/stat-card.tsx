import { animate, useInView, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.1,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-panel px-5 py-5 transition-colors duration-300 hover:border-lime/50"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(159,230,48,0.16), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 shadow-[0_0_28px_-6px_rgba(159,230,48,0.5)] transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <p className="relative font-display text-2xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-lime sm:text-3xl">
        {count}
        {suffix}
      </p>
      <p className="relative mt-1 text-sm text-neutral-600 dark:text-white/55">
        {label}
      </p>
    </motion.div>
  );
}
