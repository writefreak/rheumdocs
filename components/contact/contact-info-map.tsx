"use client";

import { motion } from "framer-motion";

export default function ContactInfoMap() {
  return (
    <section className="bg-bg px-4 pb-16 md:pb-28 pt-4 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-2xl sm:grid-cols-2">
          {/* Office info — solid dark card, centered, matches source exactly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col items-center justify-center gap-4 bg-primary px-8 py-14 text-center sm:px-10"
          >
            <h3 className="font-display text-lg font-bold text-bg md:text-xl">
              The Professional Village
            </h3>

            <a
              href="https://maps.app.goo.gl/9gVy8SXi3ijABRi39"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium text-bg underline underline-offset-2 md:text-base"
            >
              346 Mill Street, Hagerstown,
              <br />
              Maryland 21740
            </a>

            <div className="mt-2 space-y-1 font-body text-sm md:text-base">
              <p className="text-bg">
                <span className="font-bold">General Email:</span>{" "}
                <a
                  href="mailto:arthritis@rheumdocs.com"
                  className="underline underline-offset-2"
                >
                  arthritis@rheumdocs.com
                </a>
              </p>
              <p className="font-bold text-bg">Prior Authorizations:</p>
              <p>
                <a
                  href="mailto:priorauth@rheumdocs.com"
                  className="text-bg underline underline-offset-2"
                >
                  priorauth@rheumdocs.com
                </a>
              </p>
              <p className="text-bg">
                <span className="font-bold">Telephone:</span>{" "}
                <a
                  href="tel:+13017916680"
                  className="underline underline-offset-2"
                >
                  (301) 791-6680
                </a>
              </p>
              <p className="text-bg">
                <span className="font-bold">Fax:</span>{" "}
                <a
                  href="tel:+13017141506"
                  className="underline underline-offset-2"
                >
                  (301) 714-1506
                </a>
              </p>
            </div>
          </motion.div>

          {/* Real embedded, interactive Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="min-h-[320px] w-full sm:min-h-0"
          >
            <iframe
              title="Rheumatology Consultants location map"
              src="https://www.google.com/maps?q=346+Mill+Street,+Hagerstown,+MD+21740&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
