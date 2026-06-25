import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { pricingPlans } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What happens after I choose a plan?",
    answer:
      "After selecting your plan, you'll be matched with a coach based on your goals and preferences. You'll have an initial consultation to discuss your fitness journey, after which your coach will create a personalized program tailored to your needs.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, you'll receive prorated access to additional features.",
  },
  {
    question: "What's included in video coaching sessions?",
    answer:
      "Video sessions are live 1-on-1 calls with your coach. They include form checks, workout guidance, progress reviews, goal setting, and Q&A. Sessions are typically 30-45 minutes and can be scheduled at your convenience.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee for new members. If you're not satisfied with your experience within the first 30 days, contact us for a full refund. No questions asked.",
  },
  {
    question: "Can I work with multiple coaches?",
    answer:
      "With our Pro and Elite plans, you can request to work with different coaches for different specialties. For example, you might have one coach for strength training and another for nutrition guidance.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "Your coach will design programs based on the equipment you have available. Whether you have a full gym, minimal home equipment, or no equipment at all, we can create effective workouts for your situation.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="secondary" className="mb-4">
                Flexible Plans
              </Badge>
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-balance">
                Invest in Your Health
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose the coaching plan that fits your goals and budget. All
                plans include our mobile app and foundational support.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={cn(
                    "relative flex flex-col overflow-hidden border-border transition-all hover:shadow-lg",
                    plan.popular && "border-2 border-primary shadow-lg"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute right-4 top-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <h2 className="font-display text-2xl font-bold">
                      {plan.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="font-display text-5xl font-bold">
                        ${plan.price}
                      </span>
                      <span className="text-lg text-muted-foreground">
                        /{plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <ul className="flex-1 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/booking" className="mt-8 block">
                      <Button
                        className={cn(
                          "w-full gap-2",
                          !plan.popular && "bg-transparent"
                        )}
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-xl text-center">
              <p className="text-sm text-muted-foreground">
                All plans include a 30-day money-back guarantee. No contracts,
                cancel anytime.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <HelpCircle className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold">
                  Frequently Asked Questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl rounded-2xl bg-foreground p-8 text-center text-background md:p-12">
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Still Have Questions?
              </h2>
              <p className="mt-4 text-background/70">
                Book a free consultation call with our team to discuss your
                goals and find the perfect plan for you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/booking">
                  <Button
                    size="lg"
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Book Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-background/30 bg-transparent text-background hover:bg-background/10"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
