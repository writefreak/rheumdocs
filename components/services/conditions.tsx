"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react";
import { Button } from "../ui/button";

type Condition = {
  title: string;
  image: string;
  description: string;
  linkLabel: string;
};

const conditions: Condition[] = [
  {
    title: "Rheumatoid Arthritis",
    image:
      "https://images.unsplash.com/photo-1768839722722-b1b2cb93c71d?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Joint pain and swelling, morning stiffness lasting over an hour, fatigue, symmetrical joint involvement, low-grade fever.",
    linkLabel: "Rheumatoid arthritis care",
  },
  {
    title: "Osteoarthritis",
    image:
      "https://images.unsplash.com/photo-1769029262388-3ebd4e4e37d0?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Joint pain that worsens with activity, stiffness after rest, reduced range of motion, grinding sensation in the joint.",
    linkLabel: "Osteoarthritis care",
  },
  {
    title: "Psoriatic Arthritis",
    image:
      "https://images.unsplash.com/photo-1626524815950-559398d5abea?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Swollen fingers or toes, nail pitting, joint pain alongside skin plaques, lower back pain, eye inflammation.",
    linkLabel: "Psoriatic arthritis care",
  },
  {
    title: "Psoriasis",
    image:
      "https://images.unsplash.com/photo-1624625021373-9ffc038e9d3d?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Raised, scaly patches on the skin, itching or burning, dry cracked skin that may bleed, thickened or ridged nails.",
    linkLabel: "Psoriasis care",
  },
  {
    title: "Polymyalgia Rheumatica",
    image:
      "https://images.unsplash.com/photo-1587365403481-1120a2e0287f?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Aching and stiffness in the shoulders and hips, worse in the morning, fatigue, low-grade fever, unintended weight loss.",
    linkLabel: "Polymyalgia care",
  },
  {
    title: "Ankylosing Spondylitis",
    image:
      "https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Chronic lower back and hip pain, stiffness that improves with movement, fatigue, reduced spinal flexibility over time.",
    linkLabel: "Spondylitis care",
  },
  {
    title: "Chronic Low Back Pain",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Persistent aching or stiffness in the lower back, pain that radiates to the legs, muscle tightness, reduced mobility.",
    linkLabel: "Back pain care",
  },
  {
    title: "Osteoporosis",
    image:
      "https://images.unsplash.com/photo-1590049405811-dd8770d073f6?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Often silent until a fracture occurs, gradual height loss, stooped posture, back pain from a weakened or collapsed vertebra.",
    linkLabel: "Osteoporosis care",
  },
  {
    title: "Lupus",
    image:
      "https://images.unsplash.com/photo-1627738641656-aebd944716cb?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Joint pain and swelling, a facial rash, fatigue, sensitivity to sunlight, fever, and symptoms that flare and subside.",
    linkLabel: "Lupus care",
  },
  {
    title: "Joint and Muscle Pain",
    image:
      "https://images.unsplash.com/photo-1701826510629-051bb954fb8f?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Widespread aching, tenderness to touch, stiffness after inactivity, fatigue, pain that shifts between muscles and joints.",
    linkLabel: "Pain management care",
  },
  {
    title: "Gout",
    image:
      "https://images.unsplash.com/photo-1701826510629-051bb954fb8f?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Sudden, severe joint pain and swelling, often in the big toe, redness and warmth, attacks that flare then subside.",
    linkLabel: "Gout care",
  },
  {
    title: "Osteopenia",
    image:
      "https://images.unsplash.com/photo-1590049405811-dd8770d073f6?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Lower-than-normal bone density, usually no symptoms until a fracture occurs, often a precursor to osteoporosis.",
    linkLabel: "Osteopenia care",
  },
  {
    title: "Fibromyalgia",
    image:
      "https://images.unsplash.com/photo-1768839722722-b1b2cb93c71d?w=240&h=240&fit=crop&q=80&auto=format",
    description:
      "Widespread pain and tenderness, persistent fatigue, poor sleep quality, brain fog, pain that shifts across muscles and joints.",
    linkLabel: "Fibromyalgia care",
  },
];

const othersCondition: Condition = {
  title: "And Others",
  image: "",
  description:
    "Vasculitis, Sjögren's syndrome, scleroderma, Raynaud's phenomenon, reactive arthritis, sarcoidosis, and other rheumatic and autoimmune conditions.",
  linkLabel: "Other conditions",
};

const CARDS_PER_PAGE_DESKTOP = 3;

export default function Conditions() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeItem, setActiveItem] = useState<Condition | null>(null);

  const allCards = [...conditions, othersCondition];
  const totalPages = Math.ceil(allCards.length / CARDS_PER_PAGE_DESKTOP);

  const checkScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-condition-card]");
    const step = (card?.offsetWidth ?? 320) + 16;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  const handleDesktopNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleDesktopPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginatedDesktopConditions = allCards.slice(
    currentPage * CARDS_PER_PAGE_DESKTOP,
    (currentPage + 1) * CARDS_PER_PAGE_DESKTOP,
  );

  return (
    <section id="conditions" className="pb-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex min-w-0 flex-col">
          {/* Mobile Scroller */}
          <div
            ref={scrollerRef}
            onScroll={checkScroll}
            className="block overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory py-2 -my-2 [-webkit-overflow-scrolling:touch] scrollbar-none [&::-webkit-scrollbar]:hidden lg:hidden"
          >
            <div className="flex gap-4 md:gap-5 py-2 -my-2">
              {allCards.map((item, i) => {
                const isOthers = item.title === "And Others";
                return (
                  <motion.button
                    type="button"
                    key={item.title}
                    data-condition-card
                    onClick={() => setActiveItem(item)}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className={`group relative w-[78vw] shrink-0 snap-start rounded-2xl border p-5 text-left shadow-md transition-all duration-300 ease-out hover:shadow-md sm:w-80 md:p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                      isOthers
                        ? "border border-primary/40 bg-primary/5 hover:border-primary/60 flex items-center justify-center"
                        : "border-primary/30 bg-white hover:border-primary/50"
                    }`}
                  >
                    {isOthers ? (
                      <div className="flex flex-col gap-2">
                        <h3 className="font-display text-xl font-semibold text-primary">
                          And Others
                        </h3>
                        <p className=" font-body text-xs md:text-sm leading-relaxed text-ink-muted">
                          Vasculitis, Sjögren's syndrome, scleroderma, Raynaud's
                          phenomenon, reactive arthritis, sarcoidosis, and other
                          rheumatic and autoimmune conditions.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full overflow-hidden">
                            <img
                              src={item.image}
                              alt=""
                              className="h-full w-full object-cover opacity-60"
                            />
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundColor: "#31696e",
                                mixBlendMode: "multiply",
                              }}
                            />
                          </div>
                        </div>

                        <div className="pt-10">
                          <h3 className="font-display text-sm font-semibold text-ink transition-colors duration-200 group-hover:text-primary">
                            {item.title}
                          </h3>
                          <p className="mt-3 font-body text-xs md:text-sm leading-relaxed text-ink-muted">
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Desktop Paginated Grid */}
          <div className="hidden lg:block lg:w-full">
            <div className="grid grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {paginatedDesktopConditions.map((item, i) => {
                  const isOthers = item.title === "And Others";
                  return (
                    <motion.button
                      type="button"
                      key={item.title}
                      onClick={() => setActiveItem(item)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -4 }}
                      className={`group relative rounded-2xl border p-7 text-left shadow-md transition-all duration-300 ease-out hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        isOthers
                          ? "border border-primary/40 bg-primary/5 hover:border-primary/60 flex items-center justify-center"
                          : "border-primary/30 bg-white hover:border-primary/50"
                      }`}
                    >
                      {isOthers ? (
                        <div className="flex flex-col gap-2">
                          <h3 className="font-display text-xl font-semibold text-primary">
                            And Others
                          </h3>
                          <p className=" font-body text-xs md:text-sm leading-relaxed text-ink-muted">
                            Vasculitis, Sjögren's syndrome, scleroderma,
                            Raynaud's phenomenon, reactive arthritis,
                            sarcoidosis, and other rheumatic and autoimmune
                            conditions.
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full overflow-hidden">
                              <img
                                src={item.image}
                                alt=""
                                className="h-full w-full object-cover opacity-60"
                              />
                              <div
                                className="absolute inset-0"
                                style={{
                                  backgroundColor: "#31696e",
                                  mixBlendMode: "multiply",
                                }}
                              />
                            </div>
                          </div>

                          <div className="pt-10">
                            <h3 className="font-display text-xl font-semibold text-ink transition-colors duration-200 group-hover:text-primary">
                              {item.title}
                            </h3>
                            <p className="mt-3 font-body text-xs md:text-sm leading-relaxed text-ink-muted">
                              {item.description}
                            </p>
                          </div>
                        </>
                      )}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls: Mobile */}
          <div className="mt-6 flex items-center justify-end gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollLeft}
              aria-label="Previous condition"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-bg transition-all duration-200 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft size={16} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canScrollRight}
              aria-label="Next condition"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-bg transition-all duration-200 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight size={16} strokeWidth={1.6} />
            </button>
          </div>

          {/* Navigation Controls: Desktop */}
          <div className="mt-8 hidden items-center justify-end gap-3 lg:flex">
            <button
              type="button"
              onClick={handleDesktopPrev}
              disabled={currentPage === 0}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-bg transition-all duration-200 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft size={18} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={handleDesktopNext}
              disabled={currentPage >= totalPages - 1}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-bg transition-all duration-200 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight size={18} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>

      {/* Condition Detail Dialog */}
      <AnimatePresence>
        {activeItem && (
          <>
            <motion.div
              key="condition-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 36,
                  mass: 0.7,
                }}
                className="relative w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors duration-200 hover:bg-ink/5 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                <h3 className="font-display text-2xl font-semibold text-ink">
                  {activeItem.title}
                </h3>

                <p className="mt-4 text-balance font-body text-xs md:text-sm leading-relaxed text-ink-muted">
                  {activeItem.description}
                </p>

                <p className="mt-3 font-body text-xs md:text-sm leading-relaxed text-ink-muted">
                  We diagnose and treat this condition onsite, combining
                  in-house imaging, lab work, and a treatment plan tailored to
                  you.
                </p>

                <a href="/contact" className="mt-6 inline-block">
                  <Button variant="primary">Schedule an Appointment</Button>
                </a>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
