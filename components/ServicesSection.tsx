"use client";

import { motion } from "framer-motion";
import { Bone, Activity, ShieldCheck, HeartPulse, ClipboardList } from "lucide-react";

const conditions = [
  { icon: Bone, name: "Rheumatoid Arthritis" },
  { icon: Activity, name: "Osteoarthritis" },
  { icon: ShieldCheck, name: "Psoriatic Arthritis" },
  { icon: HeartPulse, name: "Psoriasis" },
  { icon: ClipboardList, name: "Polymyalgia Rheumatica" },
  { icon: Bone, name: "Ankylosing Spondylitis" },
  { icon: Activity, name: "Chronic Low Back Pain" },
  { icon: Bone, name: "Osteoporosis" },
  { icon: ShieldCheck, name: "Lupus" },
  { icon: HeartPulse, name: "Joint and Muscle Pain" },
];

export default function ServicesSection() {
  return (
    <section id="conditions" className="bg-bg px-6 py-24 lg:px-10 lg:py-30">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
          >
            Ten conditions our physicians treat every week.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 font-body text-lg leading-relaxed text-ink-muted"
          >
            Some patients arrive with a diagnosis already in hand. Others arrive
            with pain no one has been able to explain. Both are common in
            rheumatology, and both are what we do.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {conditions.map(({ icon: Icon, name }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 5) * 0.06 }}
              className="rounded-card border border-primary/10 bg-bg-alt p-6"
            >
              <Icon size={22} strokeWidth={1.75} className="text-primary" />
              <p className="mt-4 font-body text-sm font-semibold leading-snug text-ink">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
