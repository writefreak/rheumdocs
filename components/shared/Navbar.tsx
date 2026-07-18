"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, CalendarCheck, ArrowRight, ChevronDown } from "lucide-react";
import MobileNav from "./MobileNav";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
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
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <div className="mx-auto max-w-7xl md:max-w-5xl">
          <div className="flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-white px-4 py-3 shadow-sm sm:px-5 lg:px-6">
            <Link href="/">
              <h2 className="font-display text-sm md:text-lg text-ink whitespace-nowrap">
                Rheumatology Consultants
              </h2>
            </Link>

            <div className="hidden lg:flex items-center gap-7">
              <nav className="flex items-center gap-5">
                {navLinks.map((link) =>
                  link.children ? (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <a
                        href={link.href}
                        className={`focus-ring flex items-center gap-1 rounded font-body text-sm font-medium text-neutral-900 transition-colors hover:text-primary ${
                          link.children.some((child) => child.href === pathname)
                            ? "underline underline-offset-4"
                            : ""
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          strokeWidth={2}
                          className={`transition-transform text-ink ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </a>

                      {servicesOpen && (
                        <div className="absolute left-0 top-full pt-3">
                          <div className="w-56 rounded-xl border border-ink/10 bg-bg py-2 shadow-card">
                            {link.children.map((child) => (
                              <a
                                key={child.href}
                                href={child.href}
                                className={`block px-4 py-2.5 font-body text-sm text-ink-muted transition-colors hover:bg-primary/5 hover:text-ink ${
                                  child.href === pathname
                                    ? "underline underline-offset-4"
                                    : ""
                                }`}
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`focus-ring rounded font-body text-sm font-medium text-neutral-900 transition-colors hover:text-primary ${
                        link.href === pathname
                          ? "underline underline-offset-4"
                          : ""
                      }`}
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </nav>

              <a href="/contact">
                <span className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 font-body text-sm font-medium text-white transition-opacity hover:opacity-90">
                  <CalendarCheck size={16} strokeWidth={2} />
                  Schedule
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                aria-label="Open navigation menu"
                onClick={() => setMobileOpen(true)}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink/15 text-ink"
              >
                <Menu size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
