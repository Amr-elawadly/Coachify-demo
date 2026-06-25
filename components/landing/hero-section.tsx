import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Users, Trophy, Clock } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "50+", label: "Expert Coaches", icon: Trophy },
  { value: "10K+", label: "Sessions Completed", icon: Clock },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0d11] text-white min-h-screen">
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
        alt="Athlete stretching before training"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover md:object-[center_18%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,9,12,0.4)_0%,rgba(7,9,12,0.72)_45%,rgba(7,9,12,0.92)_100%),linear-gradient(90deg,rgba(7,9,12,0.92)_0%,rgba(7,9,12,0.45)_42%,rgba(7,9,12,0.2)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_18%,#000_62%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-background" />
      
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="secondary"
            className="mb-6 gap-2 border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur"
          >
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            Rated 4.9/5 by 500+ clients
          </Badge>

          <h1 className="font-display text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Body. <span className="text-accent">Elevate Your Life.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Get personalized fitness coaching from certified professionals.
            Custom training programs, nutrition guidance, and 1-on-1 video
            sessions designed around your goals.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/booking">
              <Button size="lg" className="gap-2 px-8 shadow-lg shadow-accent/20">
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/coaches">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-white/20 bg-white/5 px-8 text-white hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                Meet Our Coaches
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="font-display text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
