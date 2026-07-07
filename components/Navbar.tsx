"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, CalendarCheck } from "lucide-react";
import MobileNav from "./MobileNav";

export const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Conditions", href: "#conditions" },
  { label: "Research", href: "#research" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-md shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="#top"
              className={`font-display text-xl font-semibold tracking-tight transition-colors ${
                scrolled ? "text-primary" : "text-bg"
              }`}
            >
              Rheumatology Consultants
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`focus-ring rounded font-body text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-ink hover:text-primary"
                      : "text-bg/90 hover:text-bg"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a
                href="#contact"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-body text-sm font-semibold text-bg transition-colors hover:bg-primary-dark"
              >
                <CalendarCheck size={16} strokeWidth={2.25} />
                Schedule an Appointment
              </a>
            </div>

            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              className={`focus-ring rounded-md p-2 lg:hidden ${
                scrolled ? "text-primary" : "text-bg"
              }`}
            >
              <Menu size={28} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
