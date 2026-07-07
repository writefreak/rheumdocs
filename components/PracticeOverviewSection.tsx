"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Syringe,
  ScanLine,
  Bone,
  Activity,
  FlaskConical,
  Microscope,
  X,
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

export default function PracticeOverviewSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const active = activeIndex !== null ? offerings[activeIndex] : null;

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-offering-card]");
    const step = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-bg-alt px-4 py-24 lg:px-14 lg:py-30">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
          >
            What Our <br className="md:hidden" /> Practice Offers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl font-body text-xs md:text-base leading-relaxed text-neutral-600"
          >
            Rheumatology Consultants is the principal provider of rheumatologic{" "}
            <br className="md:block hidden" /> and comprehensive osteoporosis
            care in Western Maryland
          </motion.p>
        </div>

        <div
          ref={scrollerRef}
          className="pt-7 pb-4 md:pt-14 md:pb-6 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-3 py-2 sm:gap-4">
            {offerings.map(({ icon: Icon, title, description }, i) => (
              <motion.button
                type="button"
                data-offering-card
                key={title}
                layoutId={`offering-card-${i}`}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="group w-[78vw] shrink-0 snap-start appearance-none rounded-card bg-bg md:p-7 p-5 text-left shadow-card transition-shadow duration-300 ease-out hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:w-80"
              >
                <div className="flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#1f4548]/10">
                  <Icon size={18} strokeWidth={1.75} className="text-primary" />
                </div>
                <h3 className="mt-5 font-display text-lg md:text-xl font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 line-clamp-3 font-body text-xs md:text-sm leading-relaxed text-ink-muted">
                  {description}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="flex pt-5 justify-end items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous services"
            className="flex md:h-12 md:w-12 h-9 w-9 items-center justify-center rounded-full bg-primary text-bg shadow-card transition-colors duration-200 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next services"
            className="flex h-9 w-9 md:h-12 md:w-12  items-center justify-center rounded-full bg-primary text-bg shadow-card transition-colors duration-200 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Full offering dialog */}
      <AnimatePresence>
        {active && activeIndex !== null && (
          <>
            <motion.div
              key="offering-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setActiveIndex(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div
                layoutId={`offering-card-${activeIndex}`}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 36,
                  mass: 0.7,
                }}
                className="relative w-full max-w-lg rounded-card bg-bg p-8 shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors duration-200 hover:bg-ink/5 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1f4548]/10">
                    <active.icon
                      size={28}
                      strokeWidth={1.75}
                      className="text-primary"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                    {active.title}
                  </h3>

                  <p className="mt-4 text-balance font-body text-base leading-relaxed text-ink-muted">
                    {active.description}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
