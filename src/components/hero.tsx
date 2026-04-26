"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex overflow-hidden bg-surface-dark pt-16 md:pt-20"
    >
      {/* Background image — next/Image so it serves AVIF/WebP responsively */}
      <Image
        src="/images/hero-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -scale-x-100 object-cover object-center"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />

      <div className="relative mx-auto max-w-7xl px-4 pb-0 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Logo with Inferno Gradient */}
            <div
              className="mt-6 mb-2 inline-block w-[160px] sm:w-[230px] md:w-[280px] lg:w-[320px] aspect-[1456/816]"
              role="img"
              aria-label="Angel Mechanic Expert LLC"
              style={{
                background: "linear-gradient(180deg, #e85102 0%, #c43c00 40%, #8b1a00 70%, #0f0f0f 100%)",
                maskImage: "url(/images/logos/ame-full-white-tight.png)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: "url(/images/logos/ame-full-white-tight.png)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            />

            {/* Headline */}
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t.hero.headline1[locale]}
              <span className="block text-brand">{t.hero.headline2[locale]}</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:mt-6 sm:text-xl lg:mx-0">
              {t.hero.subtitle[locale]}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-brand/40 sm:w-auto sm:px-8"
              >
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                {t.hero.cta1[locale]}
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto sm:px-8"
              >
                {t.hero.cta2[locale]}
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 grid grid-cols-2 gap-6 pb-10 sm:mt-16 sm:gap-8 sm:pb-16 sm:grid-cols-4">
              {[
                { value: "36+", label: t.hero.stats.experience[locale] },
                { value: "15K+", label: t.hero.stats.vehicles[locale] },
                { value: "100%", label: t.hero.stats.warranty[locale] },
                { value: "4.9", label: t.hero.stats.stars[locale] },
              ].map((stat) => (
                <div key={stat.value} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-brand sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-white/60 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Angel's photo */}
          <div className="relative flex items-end justify-center lg:justify-end self-end mb-0">
            {/* Glow behind Angel */}
            <div className="absolute bottom-0 left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-black/60 blur-[100px]" />
            <Image
              src="/images/angel-hero-transparent.png"
              alt="Angel — Owner of Angel Mechanic Expert"
              width={520}
              height={680}
              sizes="(min-width: 1024px) 520px, (min-width: 768px) 380px, 280px"
              className="relative z-10 mb-[-1px] h-auto max-h-[55vh] w-auto max-w-[280px] drop-shadow-[0_0_40px_rgba(232,81,2,0.15)] sm:max-h-[65vh] sm:max-w-[360px] md:max-w-none lg:max-h-[75vh]"
              priority
            />
          </div>
        </div>
      </div>

    </section>
  );
}
