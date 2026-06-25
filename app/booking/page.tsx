"use client";

import React from "react"

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { coaches, pricingPlans, timeSlots } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Star,
  Clock,
  Check,
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  User,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, name: "Choose Coach", icon: User },
  { id: 2, name: "Select Time", icon: CalendarIcon },
  { id: 3, name: "Your Details", icon: CreditCard },
];

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedCoachId = searchParams.get("coach");

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCoach, setSelectedCoach] = useState<string | null>(
    preselectedCoachId
  );
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    goals: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedCoachData = coaches.find((c) => c.id === selectedCoach);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const canProceed = () => {
    if (currentStep === 1) return selectedCoach && selectedPlan;
    if (currentStep === 2) return selectedDate && selectedTime;
    return true;
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <Card className="mx-auto max-w-md text-center">
            <CardContent className="pt-8">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold">
                Booking Confirmed!
              </h2>
              <p className="mt-4 text-muted-foreground">
                We&apos;ve sent a confirmation email to{" "}
                <strong>{formData.email}</strong> with all the details for your
                session with {selectedCoachData?.name}.
              </p>
              <div className="mt-6 rounded-lg bg-muted p-4 text-left text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coach</span>
                  <span className="font-medium">{selectedCoachData?.name}</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {selectedDate?.toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
              </div>
              <Button className="mt-6 w-full" asChild>
                <a href="/dashboard">Go to Dashboard</a>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl text-balance">
              Book Your Session
            </h1>
            <p className="mt-2 text-muted-foreground">
              Schedule your personalized coaching session in a few simple steps.
            </p>

            <div className="mt-8">
              <nav aria-label="Progress">
                <ol className="flex items-center justify-between md:justify-start md:gap-8">
                  {steps.map((step) => (
                    <li key={step.id} className="flex items-center">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
                          currentStep >= step.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-muted-foreground"
                        )}
                      >
                        {currentStep > step.id ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <step.icon className="h-5 w-5" />
                        )}
                      </div>
                      <span
                        className={cn(
                          "ml-3 hidden text-sm font-medium md:block",
                          currentStep >= step.id
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {step.name}
                      </span>
                      {step.id !== steps.length && (
                        <div
                          className={cn(
                            "ml-4 hidden h-0.5 w-16 md:block",
                            currentStep > step.id
                              ? "bg-primary"
                              : "bg-border"
                          )}
                        />
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {currentStep === 1 && (
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h2 className="mb-6 font-display text-xl font-semibold">
                    Select Your Coach
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {coaches.map((coach) => (
                      <button
                        key={coach.id}
                        type="button"
                        onClick={() => setSelectedCoach(coach.id)}
                        className={cn(
                          "flex items-start gap-4 rounded-xl border p-4 text-left transition-all hover:border-primary/50",
                          selectedCoach === coach.id
                            ? "border-primary bg-primary/5"
                            : "border-border"
                        )}
                      >
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
                          <span className="font-display text-xl font-bold text-primary/50">
                            {coach.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{coach.name}</h3>
                            <Badge
                              variant="secondary"
                              className="flex items-center gap-1"
                            >
                              <Star className="h-3 w-3 fill-primary text-primary" />
                              {coach.rating}
                            </Badge>
                          </div>
                          <p className="mt-1 text-sm text-primary">
                            {coach.specialty}
                          </p>
                          <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {coach.experience}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {selectedCoach && (
                    <>
                      <h2 className="mb-6 mt-10 font-display text-xl font-semibold">
                        Select Your Plan
                      </h2>
                      <div className="grid gap-4 sm:grid-cols-3">
                        {pricingPlans.map((plan) => (
                          <button
                            key={plan.id}
                            type="button"
                            onClick={() => setSelectedPlan(plan.id)}
                            className={cn(
                              "relative rounded-xl border p-4 text-left transition-all hover:border-primary/50",
                              selectedPlan === plan.id
                                ? "border-primary bg-primary/5"
                                : "border-border",
                              plan.popular && "ring-1 ring-primary"
                            )}
                          >
                            {plan.popular && (
                              <Badge className="absolute -top-2 right-2 bg-primary text-primary-foreground">
                                Popular
                              </Badge>
                            )}
                            <h3 className="font-semibold">{plan.name}</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                              <span className="font-display text-2xl font-bold">
                                ${plan.price}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                /mo
                              </span>
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground">
                              {plan.features[0]}
                            </p>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="lg:col-span-1">
                  {selectedCoachData && (
                    <Card className="sticky top-24">
                      <CardHeader>
                        <h3 className="font-display font-semibold">
                          Your Selection
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
                            <span className="font-display text-2xl font-bold text-primary/50">
                              {selectedCoachData.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold">
                              {selectedCoachData.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {selectedCoachData.specialty}
                            </p>
                          </div>
                        </div>
                        {selectedPlan && (
                          <div className="mt-4 border-t border-border pt-4">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                Plan
                              </span>
                              <span className="font-medium">
                                {
                                  pricingPlans.find((p) => p.id === selectedPlan)
                                    ?.name
                                }
                              </span>
                            </div>
                            <div className="mt-2 flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                Monthly
                              </span>
                              <span className="font-medium">
                                $
                                {
                                  pricingPlans.find((p) => p.id === selectedPlan)
                                    ?.price
                                }
                              </span>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h2 className="mb-6 font-display text-xl font-semibold">
                    Select Date & Time
                  </h2>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <Label className="mb-3 block text-sm font-medium">
                        Choose a Date
                      </Label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) =>
                          date < new Date() ||
                          date >
                            new Date(
                              new Date().setMonth(new Date().getMonth() + 2)
                            )
                        }
                        className="rounded-lg border"
                      />
                    </div>
                    <div>
                      <Label className="mb-3 block text-sm font-medium">
                        Choose a Time
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "rounded-lg border px-3 py-2 text-sm transition-all hover:border-primary/50",
                              selectedTime === time
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <h3 className="font-display font-semibold">
                        Booking Summary
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Coach</span>
                        <span className="font-medium">
                          {selectedCoachData?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Plan</span>
                        <span className="font-medium">
                          {pricingPlans.find((p) => p.id === selectedPlan)?.name}
                        </span>
                      </div>
                      {selectedDate && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date</span>
                          <span className="font-medium">
                            {selectedDate.toLocaleDateString()}
                          </span>
                        </div>
                      )}
                      {selectedTime && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time</span>
                          <span className="font-medium">{selectedTime}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h2 className="mb-6 font-display text-xl font-semibold">
                    Your Information
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goals">
                        Tell us about your fitness goals
                      </Label>
                      <Textarea
                        id="goals"
                        placeholder="What would you like to achieve? Any specific areas you want to focus on?"
                        value={formData.goals}
                        onChange={(e) =>
                          setFormData({ ...formData, goals: e.target.value })
                        }
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2 sm:w-auto"
                    >
                      Confirm Booking
                      <Check className="h-4 w-4" />
                    </Button>
                  </form>
                </div>

                <div className="lg:col-span-1">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <h3 className="font-display font-semibold">
                        Booking Summary
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Coach</span>
                        <span className="font-medium">
                          {selectedCoachData?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Plan</span>
                        <span className="font-medium">
                          {pricingPlans.find((p) => p.id === selectedPlan)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">
                          {selectedDate?.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="border-t border-border pt-3">
                        <div className="flex justify-between font-medium">
                          <span>Monthly Total</span>
                          <span className="text-primary">
                            $
                            {
                              pricingPlans.find((p) => p.id === selectedPlan)
                                ?.price
                            }
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between border-t border-border pt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="gap-2 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              {currentStep < 3 && (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="gap-2"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={null}>
      <BookingContent />
    </Suspense>
  );
}
