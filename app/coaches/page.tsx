"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { coaches } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Search, Calendar, Clock, Award } from "lucide-react";

const specialties = [
  "All Specialties",
  "Strength & Conditioning",
  "Weight Loss & Nutrition",
  "HIIT & Functional Training",
  "Sports Performance",
  "Yoga & Mobility",
  "Bodybuilding & Physique",
];

export default function CoachesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [sortBy, setSortBy] = useState("rating");

  const filteredCoaches = coaches
    .filter((coach) => {
      const matchesSearch =
        coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coach.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSpecialty =
        selectedSpecialty === "All Specialties" ||
        coach.specialty === selectedSpecialty;
      return matchesSearch && matchesSpecialty;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      if (sortBy === "price-low") return a.hourlyRate - b.hourlyRate;
      if (sortBy === "price-high") return b.hourlyRate - a.hourlyRate;
      return 0;
    });

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-balance">
                Our Expert Coaches
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Find the perfect coach to guide your fitness journey. All our
                coaches are certified professionals with proven track records.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-4xl">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search coaches..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select
                  value={selectedSpecialty}
                  onValueChange={setSelectedSpecialty}
                >
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Top Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="price-low">Price: Low</SelectItem>
                    <SelectItem value="price-high">Price: High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-6 text-sm text-muted-foreground">
              Showing {filteredCoaches.length} coach
              {filteredCoaches.length !== 1 ? "es" : ""}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCoaches.map((coach) => (
                <div
                  key={coach.id}
                  className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 transition-transform group-hover:scale-105">
                      <span className="font-display text-7xl font-bold text-primary/30">
                        {coach.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display text-xl font-semibold">
                          {coach.name}
                        </h3>
                        <p className="text-sm text-primary">
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

                    <div className="mt-4 flex flex-wrap gap-2">
                      {coach.certifications.slice(0, 2).map((cert) => (
                        <Badge
                          key={cert}
                          variant="outline"
                          className="bg-transparent text-xs"
                        >
                          {cert}
                        </Badge>
                      ))}
                      {coach.certifications.length > 2 && (
                        <Badge
                          variant="outline"
                          className="bg-transparent text-xs"
                        >
                          +{coach.certifications.length - 2}
                        </Badge>
                      )}
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {coach.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        {coach.reviews} reviews
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {coach.availability.join(", ")}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-display text-xl font-bold text-primary">
                        ${coach.hourlyRate}
                        <span className="text-sm font-normal text-muted-foreground">
                          /hr
                        </span>
                      </span>
                      <Link href={`/booking?coach=${coach.id}`}>
                        <Button size="sm">Book Session</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCoaches.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-muted-foreground">
                  No coaches found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSpecialty("All Specialties");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
