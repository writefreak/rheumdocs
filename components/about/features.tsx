"use client";

import { motion } from "framer-motion";
import { Bone, Scan, Syringe } from "lucide-react";

const FEATURES = [
  {
    title: "DXA Scanners",
    icon: Bone,
    description:
      "GE/Lunar Prodigy Advance dual-energy X-ray absorptiometry system, used on-site to measure bone mineral density and assess fracture risk for osteoporosis and related conditions.",
    image:
      "https://d2i9320pexmd8f.cloudfront.net/hologic-horizon-dxa15323703091532370309_resized.jpg",
  },
  {
    title: "Design & Production",
    icon: Scan,
    description:
      "X-ray facility available on-site utilizing Gendex-Del and Digital Fuji CR equipment, Onsite ultrasound utilizing Sonosite M-MSK Progressive Radiology",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&crop",
  },
  {
    title: "Infusion Services",
    icon: Syringe,
    description:
      "Individualized administration of the latest I.V. medicines for rheumatologic conditions and osteoporosis.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Features() {
  return (
    <section>
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="pb-7 font-display text-primary text-2xl font-semibold md:text-4xl"
      >
        Our Facilities
      </motion.h3>

      <div className="md:grid md:grid-cols-3 md:gap-5 md:overflow-visible flex overflow-x-auto snap-x snap-mandatory gap-4 py-4 -my-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FEATURES.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col shrink-0 snap-start rounded-2xl border border-primary/30 bg-white p-6 md:p-7 shadow-md transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-md min-h-[180px] md:h-full w-72 md:w-auto"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute -right-6 -top-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#a36b2b]/20">
                  <Icon
                    className="h-10 w-10 text-[#a36b2b] transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.75}
                  />
                </div>
              </div>

              <div className="pt-10">
                <h3 className="font-display text-sm md:text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-xs md:text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
