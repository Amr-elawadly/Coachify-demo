import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { CoachesPreview } from "@/components/landing/coaches-preview";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingPreview } from "@/components/landing/pricing-preview";
import { CTASection } from "@/components/landing/cta-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CoachesPreview />
        <TestimonialsSection />
        <PricingPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
