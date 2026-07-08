const STEPS = [
  {
    title: "DXA Scanners",
    description: "GE/Lunar Prodigy Advance",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
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
    <section className="md:grid md:grid-cols-3 md:gap-6 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:pb-0 scrollbar-none">
      {STEPS.map((step) => (
        <article
          key={step.title}
          className="group border rounded-2xl relative flex shadow-sm flex-col gap-4 md:h-full h-80 w-72 md:w-auto shrink-0 snap-start"
        >
          <div className="relative overflow-hidden rounded-t-2xl aspect-4/3">
            <img
              src={step.image}
              alt={step.title}
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-display text-sm md:text-base font-bold text-foreground">
              {step.title}
            </h3>
            <p className="font-sans line-clamp-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
