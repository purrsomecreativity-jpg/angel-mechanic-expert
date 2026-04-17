import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

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
    "Angel Mechanic Expert",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
