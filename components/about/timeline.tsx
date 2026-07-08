"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  label: string;
  title: string;
  body: string | string[];
  /** Mobile only — renders inline above this stop's text, right after the previous stop. Ignored on lg+, where images live in the sticky RHS column instead. */
  image?: { src: string; alt: string };
}

interface TimelineProps {
  items: TimelineItem[];
}

/**
 * Reusable vertical timeline bar for stacked text sections. Each stop
 * reveals on scroll, staggered, with the connecting line drawing in behind
 * it. Pass any array of { label, title, body }, body can be a single
 * paragraph or an array of short paragraphs for easier reading.
 */
export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative">
      {items.map((item, i) => {
        const paragraphs = Array.isArray(item.body) ? item.body : [item.body];

        return (
          <li key={item.label} className="relative pb-12 last:pb-0 md:pl-10">
            {i !== items.length - 1 && (
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ transformOrigin: "top" }}
                className="absolute left-[5px] top-3 h-full w-px bg-primary/20 md:left-[7px]"
                aria-hidden
              />
            )}

            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full bg-accent md:h-[15px] md:w-[15px]"
              aria-hidden
            />

            {item.image && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:hidden"
              >
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.05 }}
              className="mb-3 font-display text-xl font-semibold text-ink md:text-2xl"
            >
              {item.title}
            </motion.h3>

            {paragraphs.map((p, pi) => (
              <motion.p
                key={pi}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15 + 0.1 + pi * 0.05,
                }}
                className="font-body text-xs leading-relaxed text-neutral-600 md:text-base"
              >
                {p}
              </motion.p>
            ))}
          </li>
        );
      })}
    </ol>
  );
}
