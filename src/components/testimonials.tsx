"use client";

import { useLanguage } from "@/lib/i18n";

const testimonials = [
  {
    name: "Brendan Halpin",
    role: "Local Guide",
    text: "I use my van for work everyday. Noticed the brakes getting soft and then noticed grinding when coming to a stop. Missing work is not an option for me. I called and they were able to get me in and get all my pads and rotors done in the same day.",
    rating: 5,
  },
  {
    name: "Kathleen Noble",
    role: "Local Guide",
    text: "I was referred to Angel's Mechanic by a friend, and I'm so glad I trusted their recommendation. Angel himself took the time to connect my car to the diagnostic analyzer and thoroughly investigate the issue. Fast, efficient, and incredibly reasonable pricing.",
    rating: 5,
  },
  {
    name: "Miguel Roque",
    role: "Local Guide",
    text: "Thank you so much Angel, he worked on my Mercedes and my Chevy, excellent mechanic, fast work, good quality, clean, 100% recommended! Excelente Mecánico, honesto, rápido, busco soluciones alternativas para que no gastara mas, eternamente agradecido.",
    rating: 5,
  },
  {
    name: "Chris Plum",
    role: "Google Review",
    text: "Great mechanics and fair prices, as well as honest and straightforward communication. Don't hesitate to take your vehicle here for repairs.",
    rating: 5,
  },
  {
    name: "Rochelle Deliz",
    role: "Local Guide",
    text: "FIVE STARS!! I can't believe I found this gem. I called Angel and he quoted me $150 and said he could use the parts I bought. Angel and Luis were both so kind and professional, and you really can't beat that price. A mechanic I can trust!",
    rating: 5,
  },
  {
    name: "Eli Herro",
    role: "Local Guide",
    text: "Fantastic service I just moved here from the Midwest. Was looking for someone that could replace my brakes and rotors at a good price. Angel is the man as well as the other guy that works on the car. Most definitely will be coming back!",
    rating: 5,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`size-4 ${filled ? "text-amber-400" : "text-white/20"}`}
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

export function Testimonials() {
  const { locale, t } = useLanguage();

  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-brand">04</span>
          <span className="h-px w-12 bg-brand/40" />
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.testimonials.label[locale]}
          </span>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-lg text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.testimonials.heading1[locale]}{" "}
            <span className="text-brand">{t.testimonials.heading2[locale]}</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">
              {t.testimonials.googleReviews[locale]}
            </span>
            <svg className="size-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    filled={star <= testimonial.rating}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
