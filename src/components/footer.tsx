const footerLinks = {
  services: [
    "Diagnóstico Computarizado",
    "Frenos y Suspensión",
    "Cambio de Aceite",
    "Motor y Transmisión",
    "Sistema Eléctrico",
    "Aire Acondicionado",
  ],
  company: [
    { label: "Sobre Nosotros", href: "#about" },
    { label: "Nuestros Servicios", href: "#services" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Contacto", href: "#contact" },
  ],
};

import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logos/ame-full-white.png"
              alt="Angel Mechanic Expert LLC"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Taller automotriz profesional con más de 30 años de experiencia.
              Tu confianza, nuestra prioridad.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  label: "Facebook",
                  icon: (
                    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  icon: (
                    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all hover:border-brand/50 hover:bg-brand/10 hover:text-brand"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Empresa
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-white/50">
                3311 W Washington St
                <br />
                Orlando, FL 32805
              </li>
              <li>
                <a
                  href="tel:+14074509997"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  (407) 450-9997
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@angelmechanicexpert.com"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  info@angelmechanicexpert.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Angel Mechanic Expert LLC. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
