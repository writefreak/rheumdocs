"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselSlide {
  label?: string;
  title: string;
  paragraph: string | string[];
}

interface TextCarouselProps {
  slides: CarouselSlide[];
  className?: string;
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
}

export default function TextCarousel({
  slides,
  className = "",
  activeIndex,
  onActiveChange,
}: TextCarouselProps) {
  const [internalActive, setInternalActive] = useState(0);
  const isControlled = activeIndex !== undefined;
  const active = isControlled ? activeIndex : internalActive;

  if (!slides || slides.length === 0) return null;

  const goTo = (index: number) => {
    const next = (index + slides.length) % slides.length;
    if (onActiveChange) onActiveChange(next);
    if (!isControlled) setInternalActive(next);
  };

  const current = slides[active];
  const paragraphs = Array.isArray(current.paragraph)
    ? current.paragraph
    : [current.paragraph];

  return (
    <div className={`w-full max-w-2xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="min-h-[260px] sm:min-h-[200px]"
        >
          {/* {current.label && (
            <span className="block text-sm font-medium tracking-wide text-slate-400">
              {current.label}
            </span>
          )} */}

          <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-primary">
            {current.title}
          </h3>

          <div className="mt-4 flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-xs md:text-sm leading-relaxed text-gray-700"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => goTo(active - 1)}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => goTo(active + 1)}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
