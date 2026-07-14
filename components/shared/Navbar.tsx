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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-bg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="">
              {/* <img
                src={scrolled ? "/rheumvar.png" : "/rheumwhite.png"}
                alt=""
                className="object-cover h-full w-full"
              /> */}

              <h2
                className={
                  scrolled
                    ? "font-display text-primary text-lg md:text-xl"
                    : "text-bg text-lg md:text-xl"
                }
              >
                Rheumatology Consultants
              </h2>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
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
                      className={`focus-ring flex items-center gap-1 rounded font-body text-sm font-medium transition-colors ${
                        link.children.some((child) => child.href === pathname)
                          ? "underline underline-offset-4"
                          : ""
                      } ${
                        scrolled
                          ? "text-neutral-900 hover:text-primary"
                          : "text-[#f8f5ef]/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        strokeWidth={2}
                        className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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
                    className={`focus-ring rounded font-body text-sm font-medium transition-colors ${
                      link.href === pathname
                        ? "underline underline-offset-4"
                        : ""
                    } ${
                      scrolled
                        ? "text-neutral-900 hover:text-primary"
                        : "text-[#f8f5ef]/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ),
              )}
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
