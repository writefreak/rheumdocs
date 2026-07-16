"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

type Condition = {
  title: string;
  image: string;
  description: string;
  linkLabel: string;
};

// Featured first 5 items from the original list
const featuredConditions: Condition[] = [
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
        {/* Header section on top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-6 pb-12"
        >
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Our Consulting Services
            </h2>

            <p className="text-neutral-600 text-xs md:text-base leading-relaxed">
              We provide diagnosis and treatment of rheumatological diseases and
              other related disorders affecting bones, muscles, and joints,
              including:
            </p>
          </div>
        </motion.div>

        {/* Cards container */}
        <div className="flex flex-col">
          <div className="overflow-x-visible scroll-smooth py-2">
            {/* Flexbox container: horizontal scroll on mobile, flex-wrap centered on desktop */}
            <div className="flex md:grid grid-cols-3 flex-col lg:flex-wrap lg:justify-center gap-4 md:gap-5">
              {featuredConditions.map((item, i) => (
                <motion.div
                  key={item.title}
                  data-condition-card
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col justify-between shrink-0 snap-start rounded-2xl border border-primary/30 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="overflow-hidden rounded-full h-16 w-16 shrink-0 border border-primary/20">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <h3 className="mt-6 font-display md:text-xl font-semibold text-ink transition-colors duration-200 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-body text-xs md:text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-1 justify-end pt-7">
              <a
                href="/our-practice"
                className="underline text-xs md:text-sm text-primary"
              >
                <Button variant="primary">Explore Full Services</Button>
              </a>
              {/* <ArrowUpRight size={12} className="text-primary" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
