import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";

export default function Home() {
  return (
    <>
      <SpotlightCursor config={{ radius: 250, brightness: 0.12, color: "#e85102" }} />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
