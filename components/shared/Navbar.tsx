"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, CalendarCheck, ArrowRight, ChevronDown, X } from "lucide-react";
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

  // Lock body scroll + close on Escape while the sheet is open
  useEffect(() => {
    if (!servicesOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <div className="mx-auto max-w-7xl md:max-w-5xl">
          <div className="flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-white px-4 py-3 shadow-sm sm:px-5 lg:px-6">
            <Link href="/">
              <h2 className="font-display text-[17px] leading-tight md:text-4xl text-ink whitespace-nowrap">
                Rheumatology <br /> Consultants
              </h2>
            </Link>

            <div className="hidden lg:flex items-center gap-7">
              <nav className="flex items-center gap-5">
                {navLinks.map((link) =>
                  link.children ? (
                    <button
                      key={link.href}
                      type="button"
                      onClick={() => setServicesOpen(true)}
                      aria-haspopup="dialog"
                      aria-expanded={servicesOpen}
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
                        className={`text-ink transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    
                    <a  key={link.href}
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

      {/* Fullscreen services sheet — desktop only */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Services"
        className={`fixed inset-0 z-[60] hidden lg:block transition-opacity duration-300 ${
          servicesOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          onClick={() => setServicesOpen(false)}
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        />

        <div
          className={`absolute inset-0 flex flex-col bg-bg transition-transform duration-300 ease-out ${
            servicesOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 pt-8">
            <h2 className="font-display text-4xl text-ink">
              Rheumatology <br /> Consultants
            </h2>
            <button
              type="button"
              aria-label="Close services menu"
              onClick={() => setServicesOpen(false)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink transition-colors hover:bg-ink/5"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-8">
            <p className="font-body text-sm font-medium uppercase tracking-wide text-ink-muted">
              Services
            </p>
            <div className="mt-6 flex flex-col divide-y divide-ink/10">
              {navLinks
                .find((link) => link.children)
                ?.children?.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    onClick={() => setServicesOpen(false)}
                    className={`group flex items-center justify-between py-6 font-display text-4xl text-ink transition-colors hover:text-primary ${
                      child.href === pathname ? "text-primary" : ""
                    }`}
                  >
                    {child.label}
                    <ArrowRight
                      size={28}
                      strokeWidth={1.5}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}