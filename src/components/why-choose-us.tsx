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
    <section id="why-us" className="relative bg-surface-dark py-20 lg:py-28 overflow-hidden">
      {/* Decorative watermark logo */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Image
          src="/images/logos/ame-compact-white.png"
          alt=""
          width={450}
          height={450}
          className="h-auto w-[450px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-brand">03</span>
          <span className="h-px w-12 bg-brand/40" />
          <span className="text-sm font-medium uppercase tracking-widest text-white/50">
            {t.whyUs.label[locale]}
          </span>
        </div>

        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t.whyUs.heading1[locale]} <span className="text-brand">{t.whyUs.heading2[locale]}</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/60">
          {t.whyUs.subtitle[locale]}
        </p>

        {/* Reasons Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.whyUs.reasons.map((reason, i) => (
            <div
              key={reason.title.en}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-brand/30 hover:bg-white/[0.07]"
            >
              <div>
                <span className="inline-block rounded-full bg-brand/20 px-3 py-1 text-xs font-medium text-brand">
                  {reason.detail[locale]}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {reason.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {reason.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Carousel */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-white/40">
            {t.whyUs.brands[locale]}
          </p>
          <LogoCarousel
            logos={carBrandLogos}
            autoPlay
            autoPlayInterval={1500}
            itemsPerViewMobile={3}
            itemsPerViewDesktop={6}
          />
        </div>
      </div>
    </section>
  );
}
