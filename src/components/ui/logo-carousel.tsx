"use client";

export const LogoCarousel = ({
  logos,
  speed = 30,
}: {
  logos: { src: string; alt: string }[];
  speed?: number;
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-surface-dark to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-surface-dark to-transparent" />

      <div
        className="flex w-max animate-marquee"
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-8 flex h-16 shrink-0 items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain opacity-30 transition-opacity hover:opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
