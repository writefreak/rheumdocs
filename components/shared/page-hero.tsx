import Image from "next/image";

interface PageHeroProps {
  pageName: string;
  image?: string;
}

import { motion } from "framer-motion";

/**
 * Reusable page-title banner.
 * Fixed 300px height, background image with a soft primary-color overlay.
 * Drop this at the top of any interior page: <PageHero pageName="About Us" />
 */
export default function PageHero({ pageName }: PageHeroProps) {
  return (
    <section className="relative h-[200px] md:h-[350px] w-full overflow-hidden">
      <img
        src="/exam-room.png"
        alt={pageName}
        className="absolute brightness-50 inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#1f4548]/30 md:bg-[#1f4548]/40" />

      {/* <div className="relative z-10 flex flex-col h-full items-end px-4 pb-8 md:px-12 md:pb-10"> */}
      <div className="relative z-10 flex flex-col gap-4 h-full items-start justify-center  pt-20 md:pt-40 px-4 pb-8 md:px-12 md:pb-10">
        <h1 className="text-[26px] font-semibold leading-[1.08] text-bg sm:text-4xl lg:text-6xl">
          {pageName}
        </h1>{" "}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-lg font-body text-xl font-medium text-neutral-300 sm:text-xl md:mb-20"
        >
          Rheumatology Consultants is the private practice{" "}
          <br className="hidden md:block" /> of Okechukwu C. Okoye, M.D.
        </motion.p>
      </div>
    </section>
  );
}
