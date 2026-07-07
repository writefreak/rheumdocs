"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Syringe,
  ScanLine,
  Bone,
  Activity,
  FlaskConical,
  Microscope,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const offerings = [
  {
    icon: Syringe,
    title: "Infusion Suite",
    description:
      "Biologic and other infused therapies administered onsite by our clinical staff, monitored the entire visit.",
  },
  {
    icon: ScanLine,
    title: "Digital X-Rays",
    description:
      "Same-visit digital imaging for joint and spine evaluation, read directly by our physicians.",
  },
  {
    icon: Bone,
    title: "Bone Density Testing",
    description:
      "DEXA scanning to diagnose and track osteoporosis and osteopenia without a separate imaging referral.",
  },
  {
    icon: Activity,
    title: "Musculoskeletal Ultrasound",
    description:
      "Real-time ultrasound to guide joint injections and detect inflammation that X-rays alone can miss.",
  },
  {
    icon: FlaskConical,
    title: "Onsite Laboratory Services",
    description:
      "Bloodwork drawn and processed in-house, so treatment decisions do not wait on an outside lab.",
  },
  {
    icon: Microscope,
    title: "Clinical Research Trials",
    description:
      "Access to investigational treatments through our in-house Osteoporosis and Clinical Trial Research Center.",
  },
];

// Tailwind's sm and lg breakpoints, mirrored here so pagination math
// matches how many cards are actually visible at once.
const BREAKPOINTS = { sm: 640, lg: 1024 };

function getPerView(width: number) {
  if (width >= BREAKPOINTS.lg) return 3;
  if (width >= BREAKPOINTS.sm) return 2;
  return 1;
}

// Smaller gap on mobile so cards don't feel like they're floating in
// a sea of the section background; roomier on desktop.
function getGap(width: number) {
  if (width >= BREAKPOINTS.lg) return 24;
  if (width >= BREAKPOINTS.sm) return 20;
  return 12;
}

// Mobile keeps its original fixed card width (with the next card
// peeking in at the edge) rather than filling the full row — only
// tablet/desktop compute an exact-fill width.
const MOBILE_CARD_WIDTH = 260;

export default function PracticeOverviewSection() {
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);
  const [gap, setGap] = useState(24);
  const [cardWidth, setCardWidth] = useState(320);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const nextPerView = getPerView(width);
      const nextGap = getGap(width);
      setPerView(nextPerView);
      setGap(nextGap);

      if (nextPerView === 3) {
        // Mobile: width scales with the viewport (capped) so the next
        // card visibly peeks in — a fixed 260px was nearly full-width
        // on narrow phones and looked like a single static card.
        const containerWidth = viewportRef.current?.clientWidth ?? 0;
        const scaled =
          containerWidth > 0 ? containerWidth * 0.74 : MOBILE_CARD_WIDTH;
        setCardWidth(Math.min(MOBILE_CARD_WIDTH, scaled));
      } else {
        // Tablet/desktop: derive card width from the visible viewport
        // itself, not a fixed px value, so `perView` cards always fill
        // the row exactly — no leftover strip of section background.
        const containerWidth = viewportRef.current?.clientWidth ?? 0;
        if (containerWidth > 0) {
          const totalGap = nextGap * (nextPerView - 1);
          setCardWidth((containerWidth - totalGap) / nextPerView);
        }
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pageCount = Math.ceil(offerings.length / perView);

  useEffect(() => {
    // Keep the current page in range if perView changes on resize.
    setPage((prev) => Math.min(prev, pageCount - 1));
  }, [pageCount]);

  const goTo = (nextPage: number) => {
    if (nextPage < 0 || nextPage > pageCount - 1) return;
    setPage(nextPage);
  };

  const step = cardWidth + gap;
  const offsetX = -(page * perView * step);

  return (
    <section id="services" className="bg-bg-alt px-4 py-24 lg:px-14 lg:py-30">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
        >
          What we offer
        </motion.h2>

        <div ref={viewportRef} className="relative mt-14 overflow-hidden">
          <motion.div
            animate={{ x: offsetX }}
            transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex"
            style={{ gap: `${gap}px` }}
          >
            {offerings.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                style={{ width: cardWidth, flex: `0 0 ${cardWidth}px` }}
                className="rounded-card bg-bg p-5 shadow-card sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon size={24} strokeWidth={1.75} className="text-primary" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                  {description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 sm:mt-10">
          {/* Mobile: dots on the left, arrows grouped on the right */}
          <div className="flex items-center flex-col gap-7 sm:hidden">
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === page ? "w-6 bg-primary" : "w-2 bg-[#1f4548]/20"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 0}
                aria-label="Previous services"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg text-ink shadow-card transition-opacity disabled:opacity-30"
              >
                <ChevronLeft size={20} strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                disabled={page === pageCount - 1}
                aria-label="Next services"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg text-ink shadow-card transition-opacity disabled:opacity-30"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Tablet/desktop: original centered arrow-dots-arrow row */}
          <div className="hidden items-center justify-center gap-5 sm:flex">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              aria-label="Previous services"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg text-ink shadow-card transition-opacity disabled:opacity-30"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === page ? "w-6 bg-primary" : "w-2 bg-ink/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(page + 1)}
              disabled={page === pageCount - 1}
              aria-label="Next services"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg text-ink shadow-card transition-opacity disabled:opacity-30"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
