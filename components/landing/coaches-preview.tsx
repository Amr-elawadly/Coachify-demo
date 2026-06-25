import Link from "next/link";
import { coaches } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";

export function CoachesPreview() {
  const featuredCoaches = coaches.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Meet Our Expert Coaches
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Certified professionals dedicated to your success
            </p>
          </div>
          <Link href="/coaches">
            <Button variant="outline" className="gap-2 bg-transparent">
              View All Coaches
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCoaches.map((coach) => (
            <div
              key={coach.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <span className="font-display text-6xl font-bold text-primary/30">
                    {coach.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {coach.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {coach.specialty}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    {coach.rating}
                  </Badge>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                  {coach.bio}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {coach.experience} experience
                  </span>
                  <span className="font-semibold text-primary">
                    ${coach.hourlyRate}/hr
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
