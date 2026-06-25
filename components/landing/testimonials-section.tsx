import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl text-balance">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real results from real people who transformed their lives with
            Coachify coaching.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden border-border bg-background transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                    <span className="font-display text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Coach: {testimonial.coach}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
