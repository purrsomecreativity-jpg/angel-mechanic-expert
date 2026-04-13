const reasons = [
  {
    title: "Diagnóstico Preciso",
    description:
      "Utilizamos escáneres de última generación para detectar cualquier problema antes de realizar cualquier trabajo.",
    detail: "Equipos OBD-II profesionales",
  },
  {
    title: "Precios Transparentes",
    description:
      "Recibes un presupuesto detallado antes de cada reparación. Sin costos ocultos ni sorpresas.",
    detail: "Cotización sin compromiso",
  },
  {
    title: "Garantía Escrita",
    description:
      "Respaldamos cada trabajo con garantía por escrito. Tu tranquilidad es nuestra responsabilidad.",
    detail: "Hasta 12 meses / 20,000 km",
  },
  {
    title: "Repuestos de Calidad",
    description:
      "Solo utilizamos repuestos originales o de calidad equivalente para asegurar el mejor rendimiento.",
    detail: "Marcas certificadas OEM",
  },
];

import Image from "next/image";

export function WhyChooseUs() {
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
            Por Qué Elegirnos
          </span>
        </div>

        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Más de 30 Años de <span className="text-brand">Confianza Comprobada</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/60">
          Tres décadas de experiencia respaldan cada diagnóstico y cada reparación.
          Miles de clientes confían en nosotros porque cumplimos con resultados, no con promesas.
        </p>

        {/* Reasons Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-brand/30 hover:bg-white/[0.07]"
            >
              {/* Number */}
              <span className="absolute right-6 top-6 font-mono text-5xl font-bold text-white/[0.04] transition-colors group-hover:text-brand/10">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <span className="inline-block rounded-full bg-brand/20 px-3 py-1 text-xs font-medium text-brand">
                  {reason.detail}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brands / Trust */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-white/40">
            Trabajamos con todas las marcas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              "Toyota",
              "Honda",
              "Ford",
              "Chevrolet",
              "Nissan",
              "Hyundai",
              "Kia",
              "Volkswagen",
            ].map((brand) => (
              <span
                key={brand}
                className="text-lg font-bold tracking-wide text-white/20 transition-colors hover:text-white/50"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
