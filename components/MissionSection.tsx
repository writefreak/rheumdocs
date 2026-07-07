"use client";

import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section id="mission" className="bg-bg px-6 py-24 lg:px-10 lg:py-30">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
        >
          Principal rheumatologic care for Western Maryland, built as a specialist
          practice rather than a hospital department.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8 grid gap-6 font-body text-lg leading-relaxed text-ink/85 lg:grid-cols-2"
        >
          <p>
            Since 1994, Rheumatology Consultants has served as the region&apos;s
            principal provider of rheumatologic and osteoporosis care, treating
            patients from Hagerstown, Frederick, Chambersburg, and the surrounding
            Tri-State area. Dr. Okechukwu Okoye founded the practice on a simple
            premise: patients with autoimmune and rheumatic disease do better when
            diagnosis, treatment, imaging, and research access all happen under one
            roof, with the same physician following them the whole way through.
          </p>
          <p>
            That approach means a patient with rheumatoid arthritis can get a digital
            X-ray, start an infusion, and enroll in a clinical trial without a
            referral to another facility. It means osteoporosis is caught on a bone
            density scan performed down the hall, not scheduled weeks out at a
            hospital imaging center. Independence lets us make that call.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
