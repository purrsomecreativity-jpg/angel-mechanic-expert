"use client";

import Image from "next/image";

export function CtaSection() {
  return (
    <section id="contact" className="relative bg-muted/50 py-20 lg:py-28 overflow-hidden">
      {/* Decorative watermark logo */}
      <div className="absolute -right-10 -bottom-10 opacity-[0.04] pointer-events-none">
        <Image
          src="/images/logos/ame-isotipo-orange.png"
          alt=""
          width={400}
          height={400}
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
            Contacto
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Info */}
          <div>
            <Image
              src="/images/logos/ame-full-orange.png"
              alt="Angel Mechanic Expert LLC"
              width={180}
              height={72}
              className="mb-6 h-14 w-auto"
            />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Listo Para Agendar{" "}
              <span className="text-brand">Tu Cita?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contáctanos hoy y obtén un diagnóstico gratuito. Estamos aquí para
              ayudarte con cualquier problema de tu vehículo.
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
                    Dirección
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
                    Teléfono
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
                    Horario
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Lunes a Viernes: 8:00 AM - 6:00 PM
                    <br />
                    Sábado: 8:00 AM - 2:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-lg font-bold text-foreground">
              Envíanos un Mensaje
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Completa el formulario y te contactaremos a la brevedad.
            </p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(55) 1234-5678"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Servicio Requerido
                </label>
                <select
                  id="service"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  <option>Diagnóstico Computarizado</option>
                  <option>Frenos y Suspensión</option>
                  <option>Cambio de Aceite</option>
                  <option>Motor y Transmisión</option>
                  <option>Sistema Eléctrico</option>
                  <option>Aire Acondicionado</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe el problema o servicio que necesitas..."
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-brand/40"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
