"use client";

import { motion } from "framer-motion";
import {
  Syringe,
  ScanLine,
  Bone,
  Activity,
  FlaskConical,
  Microscope,
} from "lucide-react";

const offerings = [
  {
    icon: Syringe,
    title: "Infusion Suite",
    description:
      "Biologic and other infused therapies administered onsite by our clinical staff, monitored the entire visit.",
  },
  {
    icon: ScanLine,
    title: "Digital X-Rays",
    description:
      "Same-visit digital imaging for joint and spine evaluation, read directly by our physicians.",
  },
  {
    icon: Bone,
    title: "Bone Density Testing",
    description:
      "DEXA scanning to diagnose and track osteoporosis and osteopenia without a separate imaging referral.",
  },
  {
    icon: Activity,
    title: "Musculoskeletal Ultrasound",
    description:
      "Real-time ultrasound to guide joint injections and detect inflammation that X-rays alone can miss.",
  },
  {
    icon: FlaskConical,
    title: "Onsite Laboratory Services",
    description:
      "Bloodwork drawn and processed in-house, so treatment decisions do not wait on an outside lab.",
  },
  {
    icon: Microscope,
    title: "Clinical Research Trials",
    description:
      "Access to investigational treatments through our in-house Osteoporosis and Clinical Trial Research Center.",
  },
];

export default function PracticeOverviewSection() {
  return (
    <section id="services" className="bg-bg-alt px-6 py-24 lg:px-10 lg:py-30">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
        >
          Everything a rheumatology visit requires, handled in one building.
        </motion.h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-card bg-bg p-7 shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon size={24} strokeWidth={1.75} className="text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
