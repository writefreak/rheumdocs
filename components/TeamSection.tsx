"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamCard from "./team-card";

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Okechukwu Okoye, MD",
    title: "Medical Director",
    image: "/dr1.jpg",
  },
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
  {
    name: "Nicole Pottorff",
    title: "Practice Management",
    image: "/dr4.jpg",
  },
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

const AUTO_SCROLL_INTERVAL = 3500;

export default function TeamSection() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const userTookOverRef = useRef(false);

  const count = team.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const goNext = useCallback(() => goTo(index + 1), [index, goTo]);
  const goPrev = useCallback(() => goTo(index - 1), [index, goTo]);

  // Self-scrolling autoplay. Stops for good the moment the user takes
  // over (arrow click or a manual drag/swipe on the track), matching
  // "control in case of impatience" rather than fighting the user's
  // own scrolling.
  useEffect(() => {
    if (userTookOverRef.current || count <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [count, index]);

  // Scroll the track so the current index is in view. Uses the
  // browser's own scrollIntoView instead of hand-computed pixel math,
  // so it's correct on first paint and at every breakpoint.
  useEffect(() => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }, [index]);

  const takeOver = () => {
    userTookOverRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleArrowClick = (dir: -1 | 1) => {
    takeOver();
    if (dir === 1) goNext();
    else goPrev();
  };

  return (
    <section id="team" className="bg-bg-alt px-6 py-24 lg:px-10 lg:py-30">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
          >
            The physicians and research staff who see you at every visit.
          </motion.h2>

          {/* <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => handleArrowClick(-1)}
              aria-label="Previous team member"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-bg text-ink shadow-card transition-colors hover:bg-primary/10"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => handleArrowClick(1)}
              aria-label="Next team member"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-bg text-ink shadow-card transition-colors hover:bg-primary/10"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div> */}
        </div>

        <div
          ref={trackRef}
          onPointerDown={takeOver}
          onTouchStart={takeOver}
          onWheel={takeOver}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="w-[78%] h-full shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* Mobile-only controls, since the header row hides them below sm */}
        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => handleArrowClick(-1)}
            aria-label="Previous team member"
            className="flex md:h-12 md:w-12 h-9 w-9 items-center justify-center rounded-full bg-primary text-bg shadow-card transition-colors hover:bg-primary/10"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => handleArrowClick(1)}
            aria-label="Next team member"
            className="flex md:h-12 md:w-12 h-9 w-9  items-center justify-center rounded-full bg-primary text-bg shadow-card transition-colors hover:bg-primary/10"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
