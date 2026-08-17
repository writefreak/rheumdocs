"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "#",
    children: [
      { label: "Our Practice", href: "/our-practice" },
      { label: "Clinical Trial Research", href: "/clinical-research" },
    ],
  },
  { label: "Patient Forms", href: "/patient-forms" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!sheetOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSheetOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [sheetOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 md:bg-white md:border-b border-ink/10 transition-shadow duration-300">
        {/* Desktop Header Layout */}
        <div className="hidden lg:block">
          {/* Top Bar: Centered Portrait Logo (Smoothly hides on scroll) */}
          <AnimatePresence>
            {!scrolled && (
              <motion.div
                initial={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden md:border-b 2xl:px-10 2xl:py-5 border-ink/5 flex items-center"
              >
                <div className="max-w-7xl 2xl:py-2 2xl:max-w-full px-8 flex justify-start pt-2">
                  <Link href="/">
                    <img
                      src="/rheumlogo.jpg"
                      alt="Rheumdocs Logo"
                      className="h-30 w-auto object-cover"
                    />
                  </Link>
                </div>

                <div>
                  <h2 className="font-display text-4xl text-primary font-semibold">
                    Rheumatology <br />
                    Consultants
                  </h2>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Bar: Links + Action Buttons */}
          <div className="mx-auto 2xl:max-w-full 2xl:px-16 max-w-7xl px-8 flex items-center justify-between h-14 transition-all duration-300">
            <nav className="flex items-center gap-8 h-full">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  link.children?.some((child) => child.href === pathname);

                if (link.children) {
                  return (
                    <div
                      key={link.label}
                      className="relative group h-full flex items-center"
                    >
                      <button
                        type="button"
                        className={`flex items-center gap-1 font-body text-sm 2xl:text-base font-medium transition-colors hover:text-primary ${
                          isActive ? "text-primary font-semibold" : "text-ink"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className="transition-transform group-hover:rotate-180"
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="rounded-xl border border-ink/10 bg-white py-2 shadow-lg">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-ink/5 hover:text-primary ${
                                pathname === child.href
                                  ? "text-primary font-medium"
                                  : "text-ink"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative flex items-center h-full font-body text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary font-semibold" : "text-ink"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a href="/contact">
                <span className="focus-ring inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 font-body text-sm font-medium text-white transition-opacity hover:opacity-90">
                  Schedule Appointment
                  <ArrowRight size={14} />
                </span>
              </a>

              <button
                type="button"
                onClick={() => setSheetOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={sheetOpen}
                aria-label="Open menu"
                className="focus-ring md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink/15 text-ink transition-colors hover:bg-ink/5"
              >
                <Menu size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View Header - Completely Untouched */}
        <div className="block lg:hidden px-3 pt-3 sm:px-5 sm:pt-4">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-white px-4 py-3 shadow-sm sm:px-5">
              <Link href="/">
                <h2 className="font-display text-[17px] leading-tight text-ink whitespace-nowrap">
                  Rheumatology <br className="md:hidden" /> Consultants
                </h2>
              </Link>

              <div className="flex md:hidden items-center gap-2">
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  onClick={() => setMobileOpen(true)}
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink"
                >
                  <Menu size={18} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer - Untouched */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
