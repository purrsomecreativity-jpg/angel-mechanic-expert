import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative bg-background py-20 lg:py-28 overflow-hidden">
      {/* Decorative watermark logo */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
        <Image
          src="/images/logos/ame-compact-orange.png"
          alt=""
          width={500}
          height={500}
          className="h-auto w-[500px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-brand">01</span>
          <span className="h-px w-12 bg-brand/40" />
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Nosotros
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Expertos en el Cuidado de{" "}
              <span className="text-brand">Tu Vehículo</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              En Angel Mechanic Expert nos dedicamos a brindar el mejor servicio
              automotriz con tecnología de punta y un equipo de mecánicos
              certificados. Desde diagnósticos computarizados hasta
              reparaciones complejas de motor, nuestro compromiso es la
              excelencia en cada servicio.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Utilizamos equipos de última generación y repuestos de calidad
              original para garantizar que tu vehículo reciba el mejor
              tratamiento posible. Tu seguridad y satisfacción son nuestra
              prioridad.
            </p>

            {/* Features list */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Mecánicos Certificados ASE",
                "Tecnología de Diagnóstico",
                "Repuestos Originales",
                "Garantía por Escrito",
                "Precios Transparentes",
                "Servicio Express",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <svg
                    className="size-5 shrink-0 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                value: "30+",
                label: "Años de Experiencia",
                desc: "Más de 30 años al servicio de la comunidad",
                icon: (
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                value: "12K+",
                label: "Vehículos Reparados",
                desc: "Confianza comprobada por miles de clientes",
                icon: (
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
              {
                value: "8",
                label: "Mecánicos Certificados",
                desc: "Equipo profesional y especializado",
                icon: (
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
              },
              {
                value: "98%",
                label: "Satisfacción",
                desc: "Clientes que vuelven y nos recomiendan",
                icon: (
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
              >
                <div className="mb-4 inline-flex rounded-lg bg-brand/10 p-2.5 text-brand transition-colors group-hover:bg-brand/15">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
