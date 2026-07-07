"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "./Navbar";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 h-full w-full bg-bg px-4 py-8 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-semibold text-ink">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={onClose}
              className="focus-ring rounded-md p-2 text-ink"
            >
              <X size={26} strokeWidth={2} />
            </button>
          </div>

          <nav className="mt-10 flex flex-col items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index + 0.1, duration: 0.3 }}
                className="focus-ring rounded-md py-4 font-display text-lg font-medium text-bg/90 transition-colors hover:text-accent"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
