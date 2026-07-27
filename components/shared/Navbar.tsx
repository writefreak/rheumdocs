"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, CalendarCheck, ArrowRight, X } from "lucide-react";
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

const flatLinks = navLinks.flatMap((link) =>
  link.children
    ? link.children.map((child) => ({ label: child.label, href: child.href }))
    : [{ label: link.label, href: link.href }],
);

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
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-28 min-[1920px]:px-40">
        <div className="mx-auto max-w-7xl md:max-w-5xl min-[1920px]:max-w-[92rem]">
          <div className="flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-white px-4 py-3 md:py-4 shadow-sm sm:px-5 lg:px-6 min-[1920px]:px-10 min-[1920px]:py-6">
            <Link href="/">
              <h2 className="font-display text-[17px] leading-tight lg:text-3xl min-[1920px]:text-5xl text-ink whitespace-nowrap">
                Rheumatology <br className="md:hidden" />  Consultants
              </h2>
            </Link>

            <div className="hidden lg:flex items-center gap-4 min-[1920px]:gap-8">
              <a href="/contact">
                <span className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 font-body text-sm font-medium text-white transition-opacity hover:opacity-90 min-[1920px]:px-10 min-[1920px]:py-5 min-[1920px]:text-lg">
                  <CalendarCheck size={16} className="min-[1920px]:w-6 min-[1920px]:h-6" strokeWidth={2} />
                  Schedule
                </span>
              </a>

              <button
                type="button"
                onClick={() => setSheetOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={sheetOpen}
                aria-label="Open menu"
                className="focus-ring inline-flex h-10 w-10 min-[1920px]:h-14 min-[1920px]:w-14 items-center justify-center rounded-lg border border-ink/15 text-ink transition-colors hover:bg-ink/5"
              >
                <Menu size={18} className="min-[1920px]:w-7 min-[1920px]:h-7" strokeWidth={2} />
              </button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
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
      </header>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-[60] hidden lg:block transition-opacity duration-300 ${
          sheetOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          onClick={() => setSheetOpen(false)}
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        />

        <div
          className={`absolute inset-0 flex flex-col bg-white transition-transform duration-300 ease-out ${
            sheetOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="mx-auto flex w-full max-w-7xl min-[1920px]:max-w-[92rem] items-center justify-between px-8 pt-8 min-[1920px]:px-24 min-[1920px]:pt-16">
            <h2 className="font-display text-4xl min-[1920px]:text-6xl text-ink">
              Rheumatology <br className="md:hidden" /> Consultants
            </h2>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setSheetOpen(false)}
              className="inline-flex h-10 w-10 min-[1920px]:h-14 min-[1920px]:w-14 items-center justify-center rounded-lg  text-ink transition-colors hover:bg-ink/5"
            >
              <X size={20} className="min-[1920px]:w-7 min-[1920px]:h-7" strokeWidth={2} />
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-7xl min-[1920px]:max-w-[92rem] flex-1 flex-col justify-center px-8 min-[1920px]:px-24">
            <div className="flex flex-col divide-y divide-ink/10">
              {flatLinks.map((link) => (
               <a 
                  key={link.href}
                  href={link.href}
                  onClick={() => setSheetOpen(false)}
                  className={`group flex items-center justify-between py-6 min-[1920px]:py-10 font-display text-2xl min-[1920px]:text-4xl text-ink transition-colors hover:text-primary ${
                    link.href === pathname ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                  <ArrowRight
                    size={28}
                    className="min-[1920px]:w-9 min-[1920px]:h-9 opacity-0 transition-opacity group-hover:opacity-100"
                    strokeWidth={1.5}
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