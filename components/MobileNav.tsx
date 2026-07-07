"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, CalendarCheck } from "lucide-react";
import { navLinks } from "./Navbar";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/40 lg:hidden"
            aria-hidden="true"
          />

          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed right-0 top-0 z-50 h-full w-[82%] max-w-sm bg-[#1F4548] px-8 py-8 shadow-glass lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-bg">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={onClose}
                className="focus-ring rounded-md p-2 text-bg"
              >
                <X size={26} strokeWidth={2} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index + 0.1, duration: 0.3 }}
                  className="focus-ring rounded-md border-b border-bg/10 py-4 font-body text-base font-medium text-bg/90 transition-colors hover:text-accent"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              onClick={onClose}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.3 }}
              className="focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-body text-sm font-semibold text-ink"
            >
              <CalendarCheck size={16} strokeWidth={2.25} />
              Schedule an Appointment
            </motion.a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
