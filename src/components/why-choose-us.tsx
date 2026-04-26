"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { LogoCarousel } from "@/components/ui/logo-carousel";

const carBrandLogos = [
  { src: "/images/brands/toyota.svg", alt: "Toyota" },
  { src: "/images/brands/honda.svg", alt: "Honda" },
  { src: "/images/brands/ford.svg", alt: "Ford" },
  { src: "/images/brands/chevrolet.svg", alt: "Chevrolet" },
  { src: "/images/brands/nissan.svg", alt: "Nissan" },
  { src: "/images/brands/hyundai.svg", alt: "Hyundai" },
  { src: "/images/brands/kia.svg", alt: "Kia" },
  { src: "/images/brands/volkswagen.svg", alt: "Volkswagen" },
  { src: "/images/brands/bmw.svg", alt: "BMW" },
  { src: "/images/brands/mercedes.svg", alt: "Mercedes-Benz" },
  { src: "/images/brands/dodge.svg", alt: "Dodge" },
  { src: "/images/brands/jeep.svg", alt: "Jeep" },
  { src: "/images/brands/subaru.svg", alt: "Subaru" },
];

export function WhyChooseUs() {
  const { locale, t } = useLanguage();

  return (
    <section id="why-us" className="relative bg-surface-dark py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Decorative watermark logo — hidden on mobile */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
        <Image
          src="/images/logos/ame-compact-white.png"
          alt=""
          width={450}
          height={450}
          sizes="450px"
          className="h-auto w-[450px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-brand">03</span>
          <span className="h-px w-12 bg-brand/40" />
          <span className="text-sm font-medium uppercase tracking-widest text-white/60">
            {t.whyUs.label[locale]}
          </span>
        </div>

        <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          {t.whyUs.heading1[locale]} <span className="text-brand">{t.whyUs.heading2[locale]}</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          {t.whyUs.subtitle[locale]}
        </p>

        {/* Reasons Grid */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2">
          {t.whyUs.reasons.map((reason) => (
            <div
              key={reason.title.en}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-brand/30 hover:bg-white/[0.07] sm:p-8"
            >
              <div>
                <span className="inline-block rounded-full bg-brand/20 px-3 py-1 text-xs font-medium text-brand">
                  {reason.detail[locale]}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
                  {reason.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {reason.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Carousel */}
        <div className="mt-12 border-t border-white/10 pt-10 sm:mt-16 sm:pt-12">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-white/60 sm:mb-8 sm:text-sm">
            {t.whyUs.brands[locale]}
          </p>
          <LogoCarousel logos={carBrandLogos} />
        </div>
      </div>
    </section>
  );
}
