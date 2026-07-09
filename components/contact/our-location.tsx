"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function OurLocation() {
  return (
    <section className="bg-bg px-4 pt-20 lg:px-14 lg:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="font-display text-3xl font-semibold text-ink md:text-4xl"
        >
          Our Location
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-5 font-body text-xs leading-relaxed text-neutral-600 md:text-base"
        >
          We firmly believe that the location of our practice plays a
          significant role in our growth and success in clinical trial
          enrollment. Our presence in western Maryland is particularly exciting
          because we are able to offer state of the art technology and study
          participation opportunities to a historically under-served population
          to all points west including West Virginia and southern Pennsylvania.
        </motion.p>
      </div>
    </section>
  );
}
