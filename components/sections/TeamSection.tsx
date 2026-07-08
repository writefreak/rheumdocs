"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  animate,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamCard from "../ui/team-card";

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const team: TeamMember[] = [
  { name: "Okechukwu Okoye, MD", title: "Medical Director", image: "/dr1.jpg" },
  {
    name: "Chinelo Okoye, FNP",
    title: "Nurse Practitioner",
    image: "/dr2.jpg",
  },
  {
    name: "Devin Traynor, PA-C",
    title: "Physician Assistant",
    image: "/dr3.jpg",
  },
  { name: "Nicole Pottorff", title: "Practice Management", image: "/dr4.jpg" },
  {
    name: "Richard Robinson, BSN, LPN, CCRC",
    title: "Clinical Trial Coordinator",
    image: "/dr5.jpg",
  },
  {
    name: "Katie Alvord, CRC",
    title: "Clinical Research Coordinator",
    image: "/dr7.jpg",
  },
  {
    name: "Jamie Demory, CRC",
    title: "Clinical Research Coordinator",
    image: "/dr2.jpg",
  },
  {
    name: "Kristin Triplett, HCT, CCRC",
    title: "Clinical Research Coordinator",
    image: "/dr8.jpg",
  },
];

const SPEED_PX_PER_SEC = 24;
const RESUME_DELAY_MS = 700;

export default function TeamSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isNudging, setIsNudging] = useState(false);
  const x = useMotionValue(0);

  const count = team.length;
  const isPlaying = !isHovering && !isDragging && !isNudging;

  // Measure one full set's width (we render the list twice for a seamless loop)
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.scrollWidth / 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Wrap x within one set's width, whether moved by autoplay, drag, or a nudge
  useEffect(() => {
    if (!trackWidth) return;
    const unsubscribe = x.on("change", (latest) => {
      if (latest <= -trackWidth) x.set(latest + trackWidth);
      else if (latest > 0) x.set(latest - trackWidth);
    });
    return unsubscribe;
  }, [x, trackWidth]);

  // Continuous slide, same technique as the Work section
  useAnimationFrame((_, delta) => {
    if (!isPlaying || !trackWidth) return;
    x.set(x.get() - (SPEED_PX_PER_SEC * delta) / 1000);
  });

  // Arrow buttons: smoothly animate to the next/previous card instead of
  // snapping via scrollIntoView. Pauses autoplay briefly, then resumes.
  const nudge = useCallback(
    (dir: -1 | 1) => {
      if (!trackWidth) return;
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
      setIsNudging(true);
      const cardWidth = trackWidth / count;
      const target = x.get() - dir * cardWidth;
      animate(x, target, {
        type: "spring",
        stiffness: 260,
        damping: 32,
        onComplete: () => {
          resumeTimeout.current = setTimeout(
            () => setIsNudging(false),
            RESUME_DELAY_MS,
          );
        },
      });
    },
    [count, trackWidth, x],
  );

  const cards = [...team, ...team];

  return (
    <section id="team" className="bg-bg-alt px-4 py-24 lg:px-14 lg:py-30">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
          >
            Meet Our Elite Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-lg font-body text-xs md:text-base leading-relaxed text-neutral-600"
          >
            With us you will receive advanced rheumatology care available
            because the physicians and staff are a part of the latest advances
            in care through extensive clinical study participation.
          </motion.p>
        </div>

        <div
          className="mt-14 overflow-hidden py-2"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragMomentum={false}
            onDragStart={() => {
              if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
              setIsDragging(true);
            }}
            onDragEnd={() => {
              resumeTimeout.current = setTimeout(
                () => setIsDragging(false),
                RESUME_DELAY_MS,
              );
            }}
            className="flex gap-5"
          >
            {cards.map((member, i) => (
              <motion.div
                key={`${member.name}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="w-[78%] shrink-0 sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Previous team member"
            className="flex md:h-12 md:w-12 h-9 w-9 items-center justify-center rounded-full bg-primary text-bg shadow-card transition-colors hover:bg-primary/10"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Next team member"
            className="flex md:h-12 md:w-12 h-9 w-9 items-center justify-center rounded-full bg-primary text-bg shadow-card transition-colors hover:bg-primary/10"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
