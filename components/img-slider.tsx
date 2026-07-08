// ImageSlider.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideImage = {
  src: string;
  alt: string;
};

const AUTO_SLIDE_INTERVAL = 4500;
const SWIPE_THRESHOLD = 60;

export default function ImgageSlider({ images }: { images: SlideImage[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  const handleManualNav = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + images.length) % images.length);
    restartTimer();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      handleManualNav(1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      handleManualNav(-1);
    }
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-bg/5 sm:h-[380px] lg:h-[440px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            dragSnapToOrigin
            onDragEnd={handleDragEnd}
            className="absolute inset-0 flex cursor-grab items-center justify-center active:cursor-grabbing"
          >
            <img
              src={images[index].src}
              alt={images[index].alt}
              draggable={false}
              className="h-full w-full select-none object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
                restartTimer();
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-bg/25"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => handleManualNav(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-bg/25 text-bg transition-colors duration-200 hover:bg-bg/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <ChevronLeft size={16} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => handleManualNav(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-bg/25 text-bg transition-colors duration-200 hover:bg-bg/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <ChevronRight size={16} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
}
