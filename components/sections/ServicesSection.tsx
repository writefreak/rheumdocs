"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

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

export default function ConditionsCarouselSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-condition-card]");
    const step = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section id="conditions" className="bg-bg px-4 py-24 lg:px-14 lg:py-30">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
          {/* Left sidebar: heading, CTA, nav arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center lg:min-h-[420px]"
          >
            <div className="flex flex-col gap-4 md:pb-4">
              <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Our Consulting Services
              </h2>

              <p className="text-neutral-600 text-xs md:text-base">
                We provide diagnosis and treatment of rheumatological diseases
                and other related disorders affecting bones, muscles, and
                joints, including:
              </p>
            </div>

            <a href="#" className="hidden md:block">
              <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-bg transition-colors duration-200 hover:bg-ink hover:text-bg">
                Explore Our Services
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </a>
          </motion.div>

          {/* Right: slidable cards + nav (nav lives OUTSIDE the scroller) */}
          <div className="flex min-w-0 flex-col">
            <div
              ref={scrollerRef}
              className="overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory py-2 [-webkit-overflow-scrolling:touch] scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex gap-4 md:gap-5">
                {conditions.map((item, i) => (
                  <motion.div
                    key={item.title}
                    data-condition-card
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="w-[78vw] shrink-0 snap-start rounded-2xl border border-primary/30 bg-[#0f2829]/5 shadow-sm md:p-7 p-5 sm:w-80"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hidden items-center justify-end gap-3 pt-8 lg:flex">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous condition"
                className="flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary text-bg transition-colors duration-200 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <ChevronLeft size={16} strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next condition"
                className="flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary text-bg transition-colors duration-200 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <ChevronRight size={16} strokeWidth={1.6} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 lg:hidden">
            {" "}
            {/* Mobile nav arrows, below the cards */}
            <a href="#">
              <button className=" inline-flex w-fit items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-xs font-medium text-bg transition-colors duration-200 hover:bg-ink hover:text-bg">
                Explore Services
                <ChevronRight size={16} strokeWidth={2} />
              </button>
            </a>
            <div className="flex items-center gap-3 lg:hidden justify-end">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous condition"
                className="flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary text-bg transition-colors duration-200 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <ChevronLeft size={16} strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next condition"
                className="flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary text-bg transition-colors duration-200 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <ChevronRight size={16} strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
