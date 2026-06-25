"use client";

import React from "react"

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Users,
  HelpCircle,
} from "lucide-react";

const contactReasons = [
  { value: "general", label: "General Inquiry" },
  { value: "coaching", label: "Coaching Questions" },
  { value: "pricing", label: "Pricing & Plans" },
  { value: "technical", label: "Technical Support" },
  { value: "partnership", label: "Partnership Opportunities" },
  { value: "other", label: "Other" },
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@coachify.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Fitness Ave, Suite 100",
    description: "New York, NY 10001",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday",
    description: "9:00 AM - 6:00 PM EST",
  },
];

const quickLinks = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant answers from our support team",
    action: "Start Chat",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join our fitness community forum",
    action: "Join Now",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Browse FAQs and tutorials",
    action: "View Articles",
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-balance">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have questions about our coaching programs? We&apos;re here to
                help you start your fitness journey.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-2xl font-bold">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>

                {isSubmitted ? (
                  <Card className="mt-8">
                    <CardContent className="py-12 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                      <Button
                        className="mt-6"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            reason: "",
                            message: "",
                          });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                        <Label htmlFor="phone">Phone (Optional)</Label>
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
                      <Label htmlFor="reason">What can we help you with?</Label>
                      <Select
                        value={formData.reason}
                        onValueChange={(value) =>
                          setFormData({ ...formData, reason: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactReasons.map((reason) => (
                            <SelectItem key={reason.value} value={reason.value}>
                              {reason.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl font-bold">
                  Contact Information
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Reach out to us through any of these channels.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((info) => (
                    <Card key={info.title}>
                      <CardContent className="flex items-start gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-sm font-medium">{info.details}</p>
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-lg font-semibold">
                    Quick Support
                  </h3>
                  <div className="mt-4 space-y-3">
                    {quickLinks.map((link) => (
                      <Card
                        key={link.title}
                        className="transition-all hover:border-primary/50"
                      >
                        <CardContent className="flex items-center gap-4 p-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <link.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{link.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {link.description}
                            </p>
                          </div>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            {link.action}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 overflow-hidden rounded-xl border border-border">
                  <div className="flex h-48 items-center justify-center bg-muted">
                    <div className="text-center">
                      <MapPin className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        123 Fitness Ave, Suite 100
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
