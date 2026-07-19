"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageHero from "@/components/shared/page-hero";
import Features from "@/components/about/features";
import { Button } from "@/components/ui/button";
import Conditions from "@/components/services/conditions";

export default function page() {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageWrapperRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <main>
      <PageHero
        pageName="Our Practice"
        // image="/med.jpg"
        description="With us, your
            well-being is a top priority. We proudly offer a range of
            cutting-edge services to cater to your unique needs."
      />

      <section className="bg-white px-4 py-20 lg:px-14 lg:py-30">
        <div className="mx-auto max-w-6xl">
          <div className="mt- grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* RHS — image, sticky on desktop matching the About page pattern */}
            <motion.div
              ref={imageWrapperRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:order-2 lg:sticky lg:top-28 lg:h-fit"
            >
              <motion.img
                src="https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/13420ce6-7b4e-49d5-9567-08493c4eaa28/IMG_9999.jpg"
                alt="A nurse drawing blood from a seated patient in an examination room"
                style={{ y: imageY }}
                className="absolute left-0 -top-[15%] h-[130%] w-full object-cover"
              />
            </motion.div>
            {/* LHS — copy */}
            <div className="order-2 flex flex-col gap-8 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="flex flex-col gap-12 md:gap-7"
              >
                <div className="flex flex-col gap-4 md:pb-4">
                  <h2 className="font-display text-primary text-2xl font-semibold md:text-4xl">
                    Discover Rheumatology Consultants
                  </h2>
                  <p className="font-body text-xs leading-relaxed text-ink-muted md:text-sm">
                    Our infusion suite provides a comfortable and serene
                    environment for receiving advanced treatments under the
                    expert care of our skilled medical team. With our in-house
                    x-ray and DXA services, you'll experience the convenience of
                    seamless diagnostics, enabling our specialists to tailor
                    treatment plans with precision. Additionally, our
                    fully-equipped laboratory ensures swift and accurate
                    results, expediting your journey to optimal health.
                  </p>
                </div>
                <div className="flex flex-col gap-4 pb-6 md:pb-4">
                  <h2 className="font-display text-primary text-2xl font-semibold leading-tight sm:text-4xl">
                    Our Consulting Services
                  </h2>

                  <p className="text-neutral-600 text-xs md:text-sm">
                    We provide diagnosis and treatment of rheumatological
                    diseases and other related disorders affecting bones,
                    muscles, and joints, including:
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <Conditions />

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl max-w-3xl bg-bg-alt p-8 md:p-12 flex flex-col md:items-center"
          >
            <h3 className="font-display md:text-center text-2xl font-semibold text-ink md:text-4xl">
              Your well-being, our expertise. Together, we thrive!
            </h3>
            <p className="mt-4 font-body md:text-center text-xs leading-relaxed text-ink-muted md:text-base">
              We are committed to providing holistic care that empowers you to
              live your best life. Trust us to be your partners in managing
              rheumatological conditions and enhancing your quality of life.
              Contact us today to schedule your appointment and experience the
              excellence of comprehensive rheumatology care.
            </p>

            <div className="mt-8">
              <Button variant="primary" icon={null} href="/contact">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
