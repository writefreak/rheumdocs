"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

function ParagraphCarousel({
  paragraphs,
  delayBase,
}: {
  paragraphs: string[];
  delayBase: number;
}) {
  const [index, setIndex] = useState(0);
  const hasMultiple = paragraphs.length > 1;

  const goTo = (dir: 1 | -1) => {
    setIndex((prev) =>
      Math.min(Math.max(prev + dir, 0), paragraphs.length - 1),
    );
  };

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, delay: index === 0 ? delayBase : 0 }}
          className="font-body text-xs leading-relaxed text-neutral-600 md:text-base"
        >
          {paragraphs[index]}
        </motion.p>
      </AnimatePresence>

      {hasMultiple && (
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(-1)}
            disabled={index === 0}
            aria-label="Previous paragraph"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 text-ink transition-colors duration-200 hover:bg-primary/10 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            disabled={index === paragraphs.length - 1}
            aria-label="Next paragraph"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 text-ink transition-colors duration-200 hover:bg-primary/10 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Reusable vertical timeline bar for stacked text sections. Each stop
 * reveals on scroll, staggered, with the connecting line drawing in behind
 * it. Pass any array of { label, title, body }, body can be a single
 * paragraph or an array of short paragraphs for easier reading — when
 * multiple paragraphs are passed, they render one at a time as a small
 * carousel with pagination buttons instead of all stacked together.
 */
export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative">
      {items.map((item, i) => {
        const paragraphs = Array.isArray(item.body) ? item.body : [item.body];

        return (
          <li key={item.label} className="relative pb-12 last:pb-0">
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

            <ParagraphCarousel
              paragraphs={paragraphs}
              delayBase={i * 0.15 + 0.1}
            />
          </li>
        );
      })}
    </ol>
  );
}
