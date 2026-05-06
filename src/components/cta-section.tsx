"use client";

import Image from "next/image";
import { useActionState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n";
import {
  sendContactEmail,
  type ContactFormState,
} from "@/app/actions/send-contact";

const initialState: ContactFormState = { status: "idle" };

export function CtaSection() {
  const { locale, t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const errorText =
    state.status === "error"
      ? state.message === "missing-fields"
        ? t.contact.errorMissing[locale]
        : state.message === "invalid-email"
        ? t.contact.errorEmail[locale]
        : t.contact.errorGeneric[locale]
      : null;

  return (
    <section id="contact" className="relative bg-muted/50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Decorative watermark logo — hidden on mobile */}
      <div className="absolute -right-10 -bottom-10 opacity-[0.04] pointer-events-none hidden lg:block">
        <Image
          src="/images/logos/ame-isotipo-orange.png"
          alt=""
          width={400}
          height={400}
          sizes="400px"
          className="h-auto w-[400px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-brand">05</span>
          <span className="h-px w-12 bg-brand/40" />
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.contact.label[locale]}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Info */}
          <div>
            <Image
              src="/images/logos/ame-full-orange.png"
              alt="Angel Mechanic Expert LLC"
              width={280}
              height={112}
              sizes="(min-width: 640px) 280px, 220px"
              className="mb-4 h-16 w-auto sm:mb-6 sm:h-24"
            />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {t.contact.heading1[locale]}{" "}
              <span className="text-brand">{t.contact.heading2[locale]}</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {t.contact.subtitle[locale]}
            </p>

            {/* Contact info cards */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.contact.address[locale]}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    3311 W Washington St
                    <br />
                    Orlando, FL 32805
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.contact.phone[locale]}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    <a
                      href="tel:+14074509997"
                      className="transition-colors hover:text-brand"
                    >
                      (407) 450-9997
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.contact.schedule[locale]}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {t.contact.scheduleWeekday[locale]}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold text-foreground">
              {t.contact.formTitle[locale]}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.contact.formSubtitle[locale]}
            </p>

            <form
              ref={formRef}
              action={formAction}
              className="mt-6 space-y-4"
            >
              <input type="hidden" name="locale" value={locale} />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t.contact.name[locale]}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t.contact.namePlaceholder[locale]}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 sm:py-2.5 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t.contact.phone[locale]}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t.contact.phonePlaceholder[locale]}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 sm:py-2.5 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.email[locale]}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.serviceRequired[locale]}
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t.contact.selectService[locale]}
                  </option>
                  {t.services.items.map((service) => (
                    <option key={service.title.en} value={service.title.en}>
                      {service.title[locale]}
                    </option>
                  ))}
                  <option value="Other">{t.contact.other[locale]}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="vin"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.vin[locale]}
                </label>
                <input
                  type="text"
                  id="vin"
                  name="vin"
                  inputMode="text"
                  autoComplete="off"
                  autoCapitalize="characters"
                  spellCheck={false}
                  maxLength={17}
                  pattern="[A-HJ-NPR-Za-hj-npr-z0-9]{11,17}"
                  placeholder={t.contact.vinPlaceholder[locale]}
                  aria-describedby="vin-hint"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-mono text-sm uppercase text-foreground placeholder:font-sans placeholder:normal-case placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
                <p id="vin-hint" className="mt-1.5 text-xs text-muted-foreground">
                  {t.contact.vinHint[locale]}
                </p>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.message[locale]}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={t.contact.messagePlaceholder[locale]}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="min-h-12 w-full rounded-lg bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-brand/40 disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm"
              >
                {isPending ? t.contact.sending[locale] : t.contact.submit[locale]}
              </button>

              {state.status === "success" && (
                <div
                  role="status"
                  className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700"
                >
                  {t.contact.success[locale]}
                </div>
              )}

              {errorText && (
                <div
                  role="alert"
                  className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
                >
                  {errorText}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
