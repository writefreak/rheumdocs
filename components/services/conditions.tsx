"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

const CARDS_PER_PAGE_DESKTOP = 3;

export default function Conditions() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(conditions.length / CARDS_PER_PAGE_DESKTOP);

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

  const paginatedDesktopConditions = conditions.slice(
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
              {conditions.map((item, i) => (
                <motion.div
                  key={item.title}
                  data-condition-card
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group relative w-[78vw] shrink-0 snap-start rounded-2xl border border-primary/30 bg-white p-5 shadow-md transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-md sm:w-80 md:p-7"
                >
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Paginated Grid */}
          <div className="hidden lg:block lg:w-full">
            <div className="grid grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {paginatedDesktopConditions.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group relative rounded-2xl border border-primary/30 bg-white p-7 shadow-md transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-md"
                  >
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
                  </motion.div>
                ))}
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
    </section>
  );
}
