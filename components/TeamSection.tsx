"use client";

import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  title: string;
  group: string;
}

const team: TeamMember[] = [
  { name: "Okechukwu Okoye, MD", title: "Medical Director", group: "Physician" },
  { name: "Chinelo Okoye, FNP", title: "Nurse Practitioner", group: "Management" },
  { name: "Devin Traynor, PA-C", title: "Physician Assistant", group: "Medical Staff" },
  { name: "Nicole Pottorff", title: "Practice Management", group: "Management" },
  {
    name: "Richard Robinson, BSN, LPN, CCRC",
    title: "Clinical Trial Coordinator",
    group: "Research",
  },
  { name: "Katie Alvord, CRC", title: "Clinical Research Coordinator", group: "Research" },
  { name: "Jamie Demory, CRC", title: "Clinical Research Coordinator", group: "Research" },
  {
    name: "Kristin Triplett, HCT, CCRC",
    title: "Clinical Research Coordinator",
    group: "Research",
  },
];

function initials(name: string) {
  const first = name.split(",")[0];
  const parts = first.split(" ").filter(Boolean);
  return parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function TeamSection() {
  return (
    <section id="team" className="bg-bg-alt px-6 py-24 lg:px-10 lg:py-30">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
        >
          The physicians and research staff who see you at every visit.
        </motion.h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
              className="rounded-card bg-bg p-6 shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-bg">
                {initials(member.name)}
              </div>
              <p className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                {member.name}
              </p>
              <p className="mt-1 font-body text-sm text-ink-muted">{member.title}</p>
              <p className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-primary">
                {member.group}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
