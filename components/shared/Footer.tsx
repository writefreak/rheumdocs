import { MapPin, Phone, Clock } from "lucide-react";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Conditions", href: "#conditions" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2829] px-6 py-16 text-bg lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex md:flex-row flex-col gap-10 md:justify-between">
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col gap-3 pb-5">
              <div className="h-36 w-28 shrink-0 overflow-hidden">
                <img
                  src="/rheumlogo.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="font-display text-lg md:text-xl font-semibold">
                Rheumatology Consultants
              </p>
            </div>
            <p className="font-body max-w-sm text-xs md:text-sm leading-relaxed text-neutral-300">
              Western Maryland&apos;s independent rheumatology and osteoporosis
              specialty practice, serving patients since 1994.
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="font-body text-sm md:text-base font-semibold uppercase tracking-wide text-bg/60">
              Navigate
            </p>
            <ul className="mt-4 grid md:grid-cols-2 gap-x-4 gap-y-2.5 lg:grid-cols-1">
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
          <div className="lg:col-span-3">
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

          <div className="lg:col-span-2">
            <p className="font-body text-sm md:text-base font-semibold uppercase tracking-wide text-bg/60">
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

        <div className="mt-12 border-t border-bg/15 pt-6 text-center md:text-left">
          <p className="font-body text-xs text-bg/55">
            © {new Date().getFullYear()} Rheumatology Consultants. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
