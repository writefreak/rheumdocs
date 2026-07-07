"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MissionSection() {
  return (
    <section id="mission" className="bg-bg px-6 py-24 lg:px-10 lg:py-30">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 flex flex-col lg:order-none">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 font-body text-xs leading-relaxed text-neutral-700 md:text-sm"
          >
            Our mission is to provide excellent care aimed at improving the
            quality of life for patients affected by arthritis, lupus,
            osteoporosis, and other autoimmune diseases. We provide current
            standards of care as well as access to clinical trials that may
            present cutting edge treatments to an underserved population. This
            commitment guides every decision we make, from diagnosis through
            long-term treatment. We remain dedicated to serving our patients
            with compassion, expertise, and integrity..
          </motion.p>

          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="focus-ring mt-8 inline-flex w-fit items-center rounded-2xl bg-primary px-6 py-3 font-body text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
          >
            Learn More About Us
            <ArrowRight size={16} strokeWidth={2.25} />
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="order-1 relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:order-none"
        >
          <img
            src="/doc.jpg"
            alt="Rheumatology Consultants exam room in Hagerstown, Maryland"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
