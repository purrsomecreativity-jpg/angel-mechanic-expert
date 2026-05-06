"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Locale = "es" | "en";

const translations = {
  // Header
  nav: {
    home: { es: "Inicio", en: "Home" },
    about: { es: "Nosotros", en: "About" },
    services: { es: "Servicios", en: "Services" },
    whyUs: { es: "Por Qué Elegirnos", en: "Why Choose Us" },
    testimonials: { es: "Testimonios", en: "Testimonials" },
    contact: { es: "Contacto", en: "Contact" },
    callNow: { es: "Llamar Ahora", en: "Call Now" },
  },

  // Hero
  hero: {
    headline1: { es: "Tu Auto en las", en: "Your Car in the" },
    headline2: { es: "Mejores Manos", en: "Best Hands" },
    subtitle: {
      es: "Servicio automotriz profesional con los mejores estándares de calidad. Diagnóstico preciso, reparación experta y precios honestos.",
      en: "Professional automotive service with the highest quality standards. Precise diagnostics, expert repairs, and honest pricing.",
    },
    cta1: { es: "Agendar Cita", en: "Schedule Appointment" },
    cta2: { es: "Ver Servicios", en: "View Services" },
    stats: {
      experience: { es: "Años de Experiencia", en: "Years of Experience" },
      vehicles: { es: "Vehículos Atendidos", en: "Vehicles Serviced" },
      warranty: { es: "Garantía en Servicio", en: "Service Warranty" },
      stars: { es: "Estrellas Google", en: "Google Stars" },
    },
  },

  // About
  about: {
    label: { es: "Nosotros", en: "About Us" },
    heading1: { es: "Expertos en el Cuidado de", en: "Experts in" },
    heading2: { es: "Tu Vehículo", en: "Your Vehicle's Care" },
    p1: {
      es: "En Angel Mechanic Expert nos dedicamos a brindar el mejor servicio automotriz con tecnología de punta y un equipo de mecánicos certificados. Desde diagnósticos computarizados hasta reparaciones complejas de motor, nuestro compromiso es la excelencia en cada servicio.",
      en: "At Angel Mechanic Expert we are dedicated to providing the best automotive service with cutting-edge technology and a team of certified mechanics. From computerized diagnostics to complex engine repairs, our commitment is excellence in every service.",
    },
    p2: {
      es: "Utilizamos equipos de última generación y repuestos de calidad original para garantizar que tu vehículo reciba el mejor tratamiento posible. Tu seguridad y satisfacción son nuestra prioridad.",
      en: "We use state-of-the-art equipment and original quality parts to ensure your vehicle receives the best possible treatment. Your safety and satisfaction are our priority.",
    },
    features: [
      { es: "Más de 36 Años de Experiencia", en: "Over 36 Years of Experience" },
      { es: "Tecnología de Diagnóstico", en: "Diagnostic Technology" },
      { es: "Repuestos de Calidad", en: "Quality Parts" },
      { es: "Garantía por Escrito", en: "Written Warranty" },
      { es: "Precios Transparentes", en: "Transparent Pricing" },
      { es: "Servicio Express", en: "Express Service" },
    ],
    statsCards: [
      {
        value: "36+",
        label: { es: "Años de Experiencia", en: "Years of Experience" },
        desc: { es: "Más de 36 años al servicio de la comunidad", en: "Over 36 years serving the community" },
      },
      {
        value: "15K+",
        label: { es: "Vehículos Reparados", en: "Vehicles Repaired" },
        desc: { es: "Confianza comprobada por miles de clientes", en: "Proven trust by thousands of clients" },
      },
      {
        value: "8",
        label: { es: "Mecánicos Certificados", en: "Certified Mechanics" },
        desc: { es: "Equipo profesional y especializado", en: "Professional and specialized team" },
      },
      {
        value: "98%",
        label: { es: "Satisfacción", en: "Satisfaction" },
        desc: { es: "Clientes que vuelven y nos recomiendan", en: "Clients who return and recommend us" },
      },
    ],
  },

  // Services
  services: {
    label: { es: "Servicios", en: "Services" },
    heading1: { es: "Servicios Profesionales para", en: "Professional Services for" },
    heading2: { es: "Cada Necesidad", en: "Every Need" },
    viewAll: { es: "Ver todos los servicios", en: "View all services" },
    requestService: { es: "Solicitar servicio", en: "Request service" },
    items: [
      {
        title: { es: "Diagnóstico Computarizado", en: "Computer Diagnostics" },
        description: {
          es: "Escáner OBD-II de última generación para identificar cualquier falla en tu vehículo con precisión.",
          en: "State-of-the-art OBD-II scanner to accurately identify any issue in your vehicle.",
        },
      },
      {
        title: { es: "Frenos y Suspensión", en: "Brakes & Suspension" },
        description: {
          es: "Revisión completa, cambio de pastillas, discos, amortiguadores y alineación para tu seguridad.",
          en: "Complete inspection, pad and rotor replacement, shocks, and alignment for your safety.",
        },
      },
      {
        title: { es: "Cambio de Aceite", en: "Oil Change" },
        description: {
          es: "Aceite sintético, semi-sintético o convencional con filtros de alta calidad. Servicio express disponible.",
          en: "Synthetic, semi-synthetic, or conventional oil with high-quality filters. Express service available.",
        },
      },
      {
        title: { es: "Reparación de Motor", en: "Engine Repair" },
        description: {
          es: "Diagnóstico y reparación de motores por especialistas con años de experiencia.",
          en: "Engine diagnosis and repair by specialists with years of experience.",
        },
      },
      {
        title: { es: "Reemplazo de Transmisión", en: "Transmission Replacement" },
        description: {
          es: "Reemplazo completo de transmisión con unidades de calidad y garantía. No realizamos reparaciones, solo reemplazos profesionales.",
          en: "Complete transmission replacement with quality units and warranty. We don't do repairs — only professional replacements.",
        },
      },
      {
        title: { es: "Sistema Eléctrico", en: "Electrical System" },
        description: {
          es: "Diagnóstico y reparación de alternadores, baterías, sistemas de encendido y cableado completo.",
          en: "Diagnosis and repair of alternators, batteries, ignition systems, and complete wiring.",
        },
      },
      {
        title: { es: "Aire Acondicionado", en: "Air Conditioning" },
        description: {
          es: "Recarga de gas, revisión de compresor, reparación de fugas y mantenimiento preventivo del A/C.",
          en: "Gas recharge, compressor inspection, leak repair, and preventive A/C maintenance.",
        },
      },
    ],
  },

  // Why Choose Us
  whyUs: {
    label: { es: "Por Qué Elegirnos", en: "Why Choose Us" },
    heading1: { es: "Más de 36 Años de", en: "Over 36 Years of" },
    heading2: { es: "Confianza Comprobada", en: "Proven Trust" },
    subtitle: {
      es: "Más de tres décadas de experiencia respaldan cada diagnóstico y cada reparación. Miles de clientes confían en nosotros porque cumplimos con resultados, no con promesas.",
      en: "Over three decades of experience back every diagnosis and every repair. Thousands of clients trust us because we deliver results, not promises.",
    },
    brands: { es: "Trabajamos con todas las marcas", en: "We work with all brands" },
    reasons: [
      {
        title: { es: "Diagnóstico Preciso", en: "Precise Diagnostics" },
        description: {
          es: "Utilizamos escáneres de última generación para detectar cualquier problema antes de realizar cualquier trabajo.",
          en: "We use state-of-the-art scanners to detect any problem before performing any work.",
        },
        detail: { es: "Equipos OBD-II profesionales", en: "Professional OBD-II equipment" },
      },
      {
        title: { es: "Precios Transparentes", en: "Transparent Pricing" },
        description: {
          es: "Recibes un presupuesto detallado antes de cada reparación. Sin costos ocultos ni sorpresas.",
          en: "You receive a detailed quote before every repair. No hidden costs or surprises.",
        },
        detail: { es: "Cotización sin compromiso", en: "Free estimates" },
      },
      {
        title: { es: "Garantía Escrita", en: "Written Warranty" },
        description: {
          es: "Respaldamos cada trabajo con garantía por escrito. Tu tranquilidad es nuestra responsabilidad.",
          en: "We back every job with a written warranty. Your peace of mind is our responsibility.",
        },
        detail: { es: "Hasta 12 meses / 20,000 km", en: "Up to 12 months / 12,000 mi" },
      },
      {
        title: { es: "Repuestos de Calidad", en: "Quality Parts" },
        description: {
          es: "Utilizamos repuestos de alta calidad para asegurar el mejor rendimiento y durabilidad.",
          en: "We use high-quality parts to ensure the best performance and durability.",
        },
        detail: { es: "Marcas de confianza", en: "Trusted brands" },
      },
    ],
  },

  // Testimonials
  testimonials: {
    label: { es: "Testimonios", en: "Testimonials" },
    heading1: { es: "Lo Que Dicen", en: "What Our" },
    heading2: { es: "Nuestros Clientes", en: "Clients Say" },
    googleReviews: { es: "en Google Reviews", en: "on Google Reviews" },
  },

  // CTA / Contact
  contact: {
    label: { es: "Contacto", en: "Contact" },
    heading1: { es: "¿Listo Para Agendar", en: "Ready to Schedule" },
    heading2: { es: "Tu Cita?", en: "Your Appointment?" },
    subtitle: {
      es: "Contáctanos hoy y obtén un diagnóstico gratuito. Estamos aquí para ayudarte con cualquier problema de tu vehículo.",
      en: "Contact us today and get a free diagnosis. We're here to help you with any vehicle issue.",
    },
    address: { es: "Dirección", en: "Address" },
    phone: { es: "Teléfono", en: "Phone" },
    schedule: { es: "Horario", en: "Hours" },
    scheduleWeekday: { es: "Lunes a Sábado: 10:00 AM - 5:00 PM", en: "Monday to Saturday: 10:00 AM - 5:00 PM" },
    formTitle: { es: "Envíanos un Mensaje", en: "Send Us a Message" },
    formSubtitle: {
      es: "Completa el formulario y te contactaremos a la brevedad.",
      en: "Fill out the form and we'll get back to you shortly.",
    },
    name: { es: "Nombre", en: "Name" },
    namePlaceholder: { es: "Tu nombre", en: "Your name" },
    phonePlaceholder: { es: "(55) 1234-5678", en: "(407) 123-4567" },
    email: { es: "Email", en: "Email" },
    serviceRequired: { es: "Servicio Requerido", en: "Service Needed" },
    selectService: { es: "Selecciona un servicio", en: "Select a service" },
    other: { es: "Otro", en: "Other" },
    vin: { es: "Número VIN (opcional)", en: "VIN Number (optional)" },
    vinPlaceholder: { es: "Ej. 1HGBH41JXMN109186", en: "e.g. 1HGBH41JXMN109186" },
    vinHint: {
      es: "17 caracteres, ubicado en el tablero o marco de la puerta del conductor.",
      en: "17 characters, found on the dashboard or driver door frame.",
    },
    message: { es: "Mensaje", en: "Message" },
    messagePlaceholder: {
      es: "Describe el problema o servicio que necesitas...",
      en: "Describe the problem or service you need...",
    },
    submit: { es: "Enviar Mensaje", en: "Send Message" },
    sending: { es: "Enviando...", en: "Sending..." },
    success: {
      es: "¡Mensaje enviado! Te contactaremos pronto.",
      en: "Message sent! We'll be in touch soon.",
    },
    errorGeneric: {
      es: "No se pudo enviar el mensaje. Intenta de nuevo o llámanos.",
      en: "Couldn't send your message. Try again or give us a call.",
    },
    errorMissing: {
      es: "Por favor completa nombre, email y mensaje.",
      en: "Please fill in name, email, and message.",
    },
    errorEmail: {
      es: "El email no es válido.",
      en: "The email address is invalid.",
    },
  },

  // Footer
  footer: {
    description: {
      es: "Taller automotriz profesional con más de 30 años de experiencia. Tu confianza, nuestra prioridad.",
      en: "Professional auto repair shop with over 30 years of experience. Your trust, our priority.",
    },
    servicesTitle: { es: "Servicios", en: "Services" },
    companyTitle: { es: "Empresa", en: "Company" },
    contactTitle: { es: "Contacto", en: "Contact" },
    companyLinks: [
      { label: { es: "Sobre Nosotros", en: "About Us" }, href: "#about" },
      { label: { es: "Nuestros Servicios", en: "Our Services" }, href: "#services" },
      { label: { es: "Testimonios", en: "Testimonials" }, href: "#testimonials" },
      { label: { es: "Contacto", en: "Contact" }, href: "#contact" },
    ],
    copyright: { es: "Todos los derechos reservados.", en: "All rights reserved." },
    privacy: { es: "Política de Privacidad", en: "Privacy Policy" },
    terms: { es: "Términos de Servicio", en: "Terms of Service" },
  },

  // WhatsApp
  whatsapp: {
    aria: { es: "Contáctanos por WhatsApp", en: "Contact us on WhatsApp" },
  },
} as const;

type LanguageContextType = {
  locale: Locale;
  toggleLocale: () => void;
  t: typeof translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");
  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
