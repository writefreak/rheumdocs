"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  pageName: string;
  description?: string;
  image?: string;
}

/**
 * Reusable page-title banner — editorial split layout instead of a
 * full-bleed photo backdrop. Solid brand-color panel on the left with
 * title/description, optional image chip on the right (desktop only).
 * No scroll-based parallax — just a one-time reveal on mount.
 * Drop this at the top of any interior page: <PageHero pageName="About Us" description="..." />
 */
export default function PageHero({
  pageName,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#1f4548] pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-10 px-4 md:px-12">
        <div className="flex max-w-2xl flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-[26px] font-semibold leading-[1.08] text-bg sm:text-4xl lg:text-5xl"
          >
            {pageName}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ originX: 0 }}
            className="h-[3px] w-16 rounded-full bg-accent"
          />

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-lg font-body text-base font-medium text-neutral-300 sm:text-lg"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
