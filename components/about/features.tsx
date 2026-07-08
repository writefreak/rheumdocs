import { motion } from "framer-motion";
const FEATURES = [
  {
    title: "DXA Scanners",
    description:
      "GE/Lunar Prodigy Advance dual-energy X-ray absorptiometry system, used on-site to measure bone mineral density and assess fracture risk for osteoporosis and related conditions.",
    image:
      "https://d2i9320pexmd8f.cloudfront.net/hologic-horizon-dxa15323703091532370309_resized.jpg",
  },
  {
    title: "Design & Production",
    description:
      "X-ray facility available on-site utilizing Gendex-Del and Digital Fuji CR equipment, Onsite ultrasound utilizing Sonosite M-MSK Progressive Radiology",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Infusion Services",
    description:
      "Individualized administration of the latest I.V. medicines for rheumatologic conditions and osteoporosis.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Features() {
  return (
    <section className="">
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-display text-xl font-semibold text-ink md:text-2xl"
      >
        Our Facilities
      </motion.h3>

      <div className="md:grid md:grid-cols-3 md:gap-6 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:pb-0 scrollbar-none">
        {" "}
        {FEATURES.map((step) => (
          <article
            key={step.title}
            className="group border rounded-2xl relative flex shadow-sm flex-col gap-4 md:h-full h-80 w-72 md:w-auto shrink-0 snap-start"
          >
            <div className="p-4 space-y-2">
              <h3 className="font-display text-sm md:text-base font-bold text-foreground">
                {step.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
