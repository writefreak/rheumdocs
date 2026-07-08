import Image from "next/image";

interface PageHeroProps {
  pageName: string;
  image?: string;
}

/**
 * Reusable page-title banner.
 * Fixed 300px height, background image with a soft primary-color overlay.
 * Drop this at the top of any interior page: <PageHero pageName="About Us" />
 */
export default function PageHero({ pageName }: PageHeroProps) {
  return (
    <section className="relative h-[200px] md:h-[300px] w-full overflow-hidden">
      <img
        src="/exam-room.png"
        alt={pageName}
        className="object-cover h-full w-full"
      />

      {/* soft primary-color overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,40,41,0.72) 0%, rgba(15,40,41,0.55) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full items-end px-4 pb-8 md:px-12 md:pb-10">
        <h1 className="font-display text-2xl text-bg md:text-4xl">
          {pageName}
        </h1>
      </div>
    </section>
  );
}
