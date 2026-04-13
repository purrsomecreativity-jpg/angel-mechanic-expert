import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex overflow-hidden bg-surface-dark pt-16 md:pt-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -scale-x-100"
        style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-7xl px-4 pb-0 sm:px-6 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Logo with Inferno Gradient */}
            <div
              className="mt-6 mb-2 inline-block w-[180px] sm:w-[230px] md:w-[280px] lg:w-[320px] aspect-[1456/816]"
              role="img"
              aria-label="Angel Mechanic Expert LLC"
              style={{
                background: "linear-gradient(180deg, #e85102 0%, #c43c00 40%, #8b1a00 70%, #0f0f0f 100%)",
                maskImage: "url(/images/logos/ame-full-white-tight.png)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "left center",
                WebkitMaskImage: "url(/images/logos/ame-full-white-tight.png)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "left center",
              }}
            />

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Tu Auto en las
              <span className="block text-brand">Mejores Manos</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 sm:text-xl lg:mx-0">
              Servicio automotriz profesional con los mejores estándares de
              calidad. Diagnóstico preciso, reparación experta y precios
              honestos.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-brand/40 sm:w-auto"
              >
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                Agendar Cita
              </a>
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
              >
                Ver Servicios
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
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
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "30+", label: "Años de Experiencia" },
                { value: "12K+", label: "Vehículos Atendidos" },
                { value: "100%", label: "Garantía en Servicio" },
                { value: "4.9", label: "Estrellas Google" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-white/50">
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
              src="/images/angel.png"
              alt="Angel — Dueño de Angel Mechanic Expert"
              width={520}
              height={680}
              className="relative z-10 h-auto max-h-[75vh] w-auto drop-shadow-[0_0_40px_rgba(232,81,2,0.15)] mb-[-1px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/20 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
