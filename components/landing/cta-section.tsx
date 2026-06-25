import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-16 text-background md:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-balance">
            Ready to Start Your Transformation?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-background/70">
            Join hundreds of clients who have achieved their fitness goals with
            personalized coaching. Your journey starts with a single step.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/booking">
              <Button
                size="lg"
                className="gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/coaches">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-background/30 bg-transparent px-8 text-background hover:bg-background/10"
              >
                Browse Coaches
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-background/50">
            No credit card required for your first consultation
          </p>
        </div>
      </div>
    </section>
  );
}
