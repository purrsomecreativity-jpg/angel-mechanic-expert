import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Angel Mechanic Expert",
  "alternateName": "Angel Mechanic Expert LLC",
  "url": "https://www.angelmechanicexpert.com",
  "logo": "https://www.angelmechanicexpert.com/images/logos/ame-full-orange.png",
  "image": "https://www.angelmechanicexpert.com/images/hero-bg.webp",
  "description":
    "Professional auto repair shop in Orlando, FL with over 36 years of experience. Specializing in diagnostics, brake repair, AC service, engine repair, transmission repair, and auto electrical. Family-owned since 1990. Se habla español.",
  "telephone": "+1-407-450-9997",
  "email": "info@angelmechanicexpert.com",
  "foundingDate": "1990",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Visa, Mastercard, American Express, Apple Pay, Google Pay, Venmo",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3311 W Washington St",
    "addressLocality": "Orlando",
    "addressRegion": "FL",
    "postalCode": "32805",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5383,
    "longitude": -81.4148,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00",
    },
  ],
  "areaServed": [
    { "@type": "City", "name": "Orlando", "sameAs": "https://en.wikipedia.org/wiki/Orlando,_Florida" },
    { "@type": "Place", "name": "West Orlando, FL" },
    { "@type": "Place", "name": "MetroWest, Orlando, FL" },
    { "@type": "Place", "name": "Pine Hills, FL" },
    { "@type": "Place", "name": "Edgewood, FL" },
    { "@type": "Place", "name": "Maitland, FL" },
    { "@type": "Place", "name": "Lake Mary, FL" },
    { "@type": "Place", "name": "Longwood, FL" },
    { "@type": "Place", "name": "Horizons West, FL" },
    { "@type": "Place", "name": "Winter Park, FL" },
    { "@type": "Place", "name": "Windermere, FL" },
    { "@type": "Place", "name": "Ocoee, FL" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Auto Repair Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer Diagnostics", "description": "OBD-II diagnostic scanning to identify engine, transmission, electrical, and emissions faults with precision." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brake Repair", "description": "Complete brake service including pad and rotor replacement, brake fluid flush, caliper repair, and ABS diagnostics." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oil Change", "description": "Conventional, synthetic blend, and full synthetic oil changes with high-quality filters and multi-point inspection." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engine Repair and Replacement", "description": "Engine diagnostics, tune-ups, timing belt replacement, head gasket repair, and complete engine replacement." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auto Electrical Repair", "description": "Battery, alternator, starter, wiring harness repair, sensor replacement, and full electrical system diagnostics." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car AC Repair", "description": "AC recharge, compressor repair and replacement, leak detection, condenser and evaporator service for all vehicle makes." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transmission Repair", "description": "Transmission fluid service, diagnostics, shift solenoid repair, torque converter service, and full transmission rebuild or replacement." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Suspension Repair", "description": "Shock absorber replacement, strut replacement, alignment, and complete suspension system service." } },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "100",
    "reviewCount": "100",
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Brendan Halpin" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody":
        "I use my van for work everyday. Noticed the brakes getting soft and then noticed grinding when coming to a stop. Missing work is not an option for me. I called and they were able to get me in and get all my pads and rotors done in the same day.",
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Kathleen Noble" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody":
        "I was referred to Angel's Mechanic by a friend, and I'm so glad I trusted their recommendation. Angel himself took the time to connect my car to the diagnostic analyzer and thoroughly investigate the issue. Fast, efficient, and incredibly reasonable pricing.",
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Miguel Roque" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Excellent mechanic, fast work, good quality, clean, 100% recommended!",
    },
  ],
  "sameAs": [
    "https://www.instagram.com/angelmechanicexpert/",
    "https://www.yelp.com/biz/angel-mechanic-expert-no-title",
    "https://www.bbb.org/us/fl/orlando/profile/auto-repair/angels-auto-mechanic-0733-131229488",
  ],
  "knowsLanguage": ["en", "es"],
  "slogan": "Tu Auto en las Mejores Manos",
  "hasMap": "https://maps.app.goo.gl/3EyBKDuKAeb9PaAb7",
};

const atypDisplay = localFont({
  src: [
    { path: "../fonts/AtypDisplay-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/AtypDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/AtypDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/AtypDisplay-Semibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/AtypDisplay-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-atyp-display",
  display: "swap",
});

const atypText = localFont({
  src: [
    { path: "../fonts/AtypText-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/AtypText-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/AtypText-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/AtypText-Semibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/AtypText-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-atyp-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angel Mechanic Expert | Expert Auto Repair & Maintenance",
  description:
    "Professional auto repair and maintenance services. Certified mechanics, honest pricing, and quality work you can trust. Schedule your appointment today.",
  keywords: [
    "auto repair",
    "mechanic",
    "car maintenance",
    "oil change",
    "brake repair",
    "engine diagnostics",
    "transmission replacement",
    "Angel Mechanic Expert",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${atypDisplay.variable} ${atypText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NJYVTY8LG7"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NJYVTY8LG7');
  `}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
