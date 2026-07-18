"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
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

const CARDS_PER_PAGE = 3;
const totalPages = Math.ceil(offerings.length / CARDS_PER_PAGE);

export default function PracticeOverviewSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const active = activeIndex !== null ? offerings[activeIndex] : null;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const pageItems = offerings
    .map((offering, i) => ({ ...offering, index: i }))
    .slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const goToPage = (dir: 1 | -1) => {
    setPage((p) => Math.min(Math.max(p + dir, 0), totalPages - 1));
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden px-4 py-20 lg:px-14 lg:py-30"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          style={{ y: imageY }}
          src="/exam-room.png"
          alt=""
          className="h-[130%] w-full object-cover brightness-50"
        />
      </div>
      <div className="absolute inset-0 bg-[#1f4548]/30" />
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl font-display text-center text-3xl font-semibold leading-tight text-bg sm:text-4xl"
          >
            What Our <br className="md:hidden" /> Practice Offers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl font-body text-center text-xs md:text-base leading-relaxed text-neutral-300"
          >
            Rheumatology Consultants is the principal provider of rheumatologic
            and comprehensive osteoporosis care in Western Maryland. Click a
            card to view more details
          </motion.p>
        </div>

        {/* MOBILE: paginated column of 3 */}
        <div className="pt-7 pb-4 lg:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col gap-3"
            >
              {pageItems.map(({ icon: Icon, title, index }) => (
                <motion.button
                  type="button"
                  key={title}
                  layoutId={`offering-card-${index}`}
                  onClick={() => setActiveIndex(index)}
                  whileTap={{ scale: 0.98 }}
                  className="group flex flex-col gap-3 rounded-card border border-white/20 bg-[#fafafa]/10 px-5 py-5 text-left shadow-sm backdrop-blur-xl transition-shadow duration-300 ease-out hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bg backdrop-blur-md">
                    <Icon
                      size={22}
                      strokeWidth={1.75}
                      className="text-accent"
                    />
                  </div>
                  <h3 className="font-display text-bg text-[16px] font-semibold">
                    {title}
                  </h3>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => goToPage(-1)}
              disabled={page === 0}
              aria-label="Previous services"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-card backdrop-blur-xl transition-colors duration-200 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => goToPage(1)}
              disabled={page === totalPages - 1}
              aria-label="Next services"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-card backdrop-blur-xl transition-colors duration-200 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* DESKTOP: unchanged grid of all cards */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 pt-14 pb-6">
          {offerings.map(({ icon: Icon, title, description }, i) => (
            <motion.button
              type="button"
              key={title}
              layoutId={`offering-card-${i}`}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group appearance-none rounded-card border border-white/20 bg-[#fafafa]/10 p-7 text-left shadow-sm backdrop-blur-xl transition-shadow duration-300 ease-out hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg backdrop-blur-md">
                <Icon size={18} strokeWidth={1.75} className="text-accent" />
              </div>
              <h3 className="mt-5 font-display text-bg text-xl font-semibold">
                {title}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>

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
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
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
                className="relative w-full max-w-sm rounded-card bg-bg p-8 shadow-lg"
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
