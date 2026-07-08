import { MapPin, Phone, Clock } from "lucide-react";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Conditions", href: "#conditions" },
  { label: "Research", href: "#research" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1F4548] px-6 py-16 text-bg lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg md:text-xl font-semibold">
              Rheumatology Consultants
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-neutral-300">
              Western Maryland&apos;s independent rheumatology and osteoporosis
              specialty practice, serving patients since 1994.
            </p>
          </div>

          <div>
            <p className="font-body text-sm md:text-base font-semibold uppercase tracking-wide text-bg/60">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring rounded font-body text-xs md:text-sm text-neutral-300 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-sm md:text-base font-semibold uppercase tracking-wide text-bg/60">
              Office
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <p className="font-body text-xs md:text-sm text-neutral-300">
                  346 Mill Street
                  <br />
                  Hagerstown, Maryland 21740
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <p className="font-body text-xs md:text-sm text-neutral-300">
                  301-791-6680
                  <br />
                  Fax: 301-714-1506
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-wide text-bg/60">
              Hours
            </p>
            <div className="mt-4 flex items-start gap-3">
              <Clock
                size={16}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-accent"
              />
              <p className="font-body text-xs md:text-sm text-neutral-300">
                Monday to Thursday
                <br />
                9:00 AM to 4:30 PM
                <br />
                Friday
                <br />
                9:00 AM to 12:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center text-center md:items-start md:text-left border-t border-bg/15 pt-6">
          <p className="font-body text-xs text-bg/55">
            © {new Date().getFullYear()} Rheumatology Consultants. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
