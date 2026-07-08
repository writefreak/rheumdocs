"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/shared/page-hero";
import Features from "@/components/about/features";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <main>
      <PageHero pageName="Our Practice" image="/exam-room.png" />

      <section className="bg-bg px-4 py-20 lg:px-14 lg:py-30">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl font-body text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            Welcome to our state-of-the-art rheumatology office, where your
            well-being is our top priority. We proudly offer a range of
            cutting-edge services to cater to your unique needs.
          </motion.p>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LHS — copy */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
              >
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  Discover Rheumatology Consultants
                </h2>
                <p className="mt-4 font-body text-sm leading-relaxed text-ink-muted md:text-base">
                  Our infusion suite provides a comfortable and serene
                  environment for receiving advanced treatments under the expert
                  care of our skilled medical team. With our in-house x-ray and
                  DXA services, you'll experience the convenience of seamless
                  diagnostics, enabling our specialists to tailor treatment
                  plans with precision. Additionally, our fully-equipped
                  laboratory ensures swift and accurate results, expediting your
                  journey to optimal health.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="rounded-2xl bg-bg-alt p-8"
              >
                <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                  Your well-being, our expertise. Together, we thrive!
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-ink-muted md:text-base">
                  We are committed to providing holistic care that empowers you
                  to live your best life. Trust us to be your partners in
                  managing rheumatological conditions and enhancing your quality
                  of life. Contact us today to schedule your appointment and
                  experience the excellence of comprehensive rheumatology care.
                </p>

                <div className="mt-8">
                  <Button variant="primary" href="/contact">
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* RHS — image, sticky on desktop matching the About page pattern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:sticky lg:top-28 lg:h-fit"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/13420ce6-7b4e-49d5-9567-08493c4eaa28/IMG_9999.jpg"
                alt="A nurse drawing blood from a seated patient in an examination room"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="pt-14 md:pt-20">
            <Features />
          </div>
        </div>
      </section>
    </main>
  );
}
