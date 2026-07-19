"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";

type Condition = {
  title: string;
  description: string;
};

// Featured first 5 items from the original list
const featuredConditions: Condition[] = [
  {
    title: "Rheumatoid Arthritis",
    description:
      "Joint pain and swelling, morning stiffness lasting over an hour, fatigue, symmetrical joint involvement, low-grade fever.",
  },
  {
    title: "Osteoarthritis",
    description:
      "Joint pain that worsens with activity, stiffness after rest, reduced range of motion, grinding sensation in the joint.",
  },
  {
    title: "Psoriatic Arthritis",
    description:
      "Swollen fingers or toes, nail pitting, joint pain alongside skin plaques, lower back pain, eye inflammation.",
  },
];

export default function ConditionsCarouselSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="conditions"
      className="bg-bg px-4 py-24 lg:px-14 lg:py-30 bg-white border-b border-b-gray-200"
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        {/* Header section on top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-6 pb-12"
        >
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-display text-primary text-center text-3xl font-semibold leading-tight sm:text-4xl">
              Our Consulting Services
            </h2>

            <p className="text-neutral-600 text-center text-xs md:text-base leading-relaxed">
              We provide diagnosis and treatment of rheumatological diseases and
              other related disorders affecting bones, muscles, and joints,
              including:
            </p>
          </div>
        </motion.div>

        {/* List */}
        <div className="flex flex-col md:max-w-5xl w-full">
          {featuredConditions.map((condition, i) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group border-t last:border-b cursor-default border-primary/30"
            >
              <div className="flex items-center justify-between py-7 md:py-8 gap-8">
                {/* Left */}
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
                  <h3
                    className={`font-display text-base md:text-xl font-semibold transition-all duration-500 ${
                      hovered === i
                        ? "text-primary translate-x-1"
                        : hovered !== null
                          ? "text-ink/30"
                          : "text-ink"
                    }`}
                  >
                    {condition.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <motion.div
                animate={{
                  height: hovered === i ? "auto" : 0,
                  opacity: hovered === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-7 font-body text-xs md:text-sm text-ink-muted max-w-xl pl-8 md:pl-16 leading-relaxed">
                  {condition.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-1 pt-7 md:px-14 justify-end w-full">
          <a
            href="/our-practice"
            className="underline text-xs md:text-sm text-primary"
          >
            <Button>Explore Full Services</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
