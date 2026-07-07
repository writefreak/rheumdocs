"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, CalendarCheck, ArrowRight } from "lucide-react";
import MobileNav from "./MobileNav";

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Patient Forms", href: "#forms" },
  { label: "Contact Us", href: "#contact" },
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
          scrolled ? "bg-bg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="h-14 md:h-18 pb-1">
              <img
                src={scrolled ? "/rheumvar.png" : "/rheumwhite.png"}
                alt=""
                className="object-cover h-full w-full"
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`focus-ring rounded font-body text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-ink hover:text-primary"
                      : "text-[#f8f5ef]/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

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
