"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dumbbell,
  Calendar,
  Video,
  Clock,
  TrendingUp,
  Target,
  Flame,
  LogOut,
  Settings,
  Bell,
  ChevronRight,
  Play,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const upcomingSessions = [
  {
    id: 1,
    coach: "Sarah Mitchell",
    type: "Strength Training",
    date: "Feb 6, 2026",
    time: "9:00 AM",
    status: "upcoming",
  },
  {
    id: 2,
    coach: "Marcus Chen",
    type: "Nutrition Review",
    date: "Feb 8, 2026",
    time: "2:00 PM",
    status: "upcoming",
  },
];

const recentWorkouts = [
  {
    id: 1,
    name: "Upper Body Strength",
    duration: "45 min",
    calories: 320,
    completed: true,
    date: "Today",
  },
  {
    id: 2,
    name: "HIIT Cardio",
    duration: "30 min",
    calories: 280,
    completed: true,
    date: "Yesterday",
  },
  {
    id: 3,
    name: "Lower Body Power",
    duration: "50 min",
    calories: 380,
    completed: false,
    date: "Scheduled",
  },
];

const weeklyProgress = [
  { day: "Mon", completed: true },
  { day: "Tue", completed: true },
  { day: "Wed", completed: true },
  { day: "Thu", completed: false },
  { day: "Fri", completed: false },
  { day: "Sat", completed: false },
  { day: "Sun", completed: false },
];

const stats = [
  { label: "Sessions This Month", value: "8", icon: Video, change: "+2" },
  { label: "Workouts Completed", value: "24", icon: Target, change: "+6" },
  { label: "Current Streak", value: "3 days", icon: Flame, change: "" },
  { label: "Total Minutes", value: "720", icon: Clock, change: "+180" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/30 lg:flex-row">
      {/* Sidebar */}
      <aside className="border-b border-border bg-sidebar lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:border-b-0 lg:border-r">
        <div className="flex h-16 items-center gap-2 px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary">
            <Dumbbell className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-sidebar-foreground">
            Coachify
          </span>
        </div>

        <nav className="hidden px-3 py-4 lg:block">
          <div className="space-y-1">
            {[
              { icon: TrendingUp, label: "Overview", href: "/dashboard" },
              { icon: Calendar, label: "Schedule", href: "/dashboard/schedule" },
              { icon: Video, label: "Sessions", href: "/dashboard/sessions" },
              { icon: Target, label: "Goals", href: "/dashboard/goals" },
              { icon: Settings, label: "Settings", href: "/dashboard/settings" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  item.label === "Overview"
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden border-t border-sidebar-border p-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:block">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-sidebar-foreground">
                John Doe
              </p>
              <p className="text-xs text-sidebar-foreground/60">Pro Plan</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-sidebar-foreground/60 hover:text-sidebar-foreground"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <div>
              <h1 className="font-display text-xl font-bold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Welcome back, John!
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
              </Button>
              <Link href="/booking">
                <Button size="sm" className="hidden gap-2 sm:flex">
                  <Calendar className="h-4 w-4" />
                  Book Session
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6">
          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-bold">
                        {stat.value}
                      </span>
                      {stat.change && (
                        <span className="text-xs text-primary">
                          {stat.change}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {/* Upcoming Sessions */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <h2 className="font-display font-semibold">Upcoming Sessions</h2>
                <Link href="/dashboard/sessions">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center gap-4 rounded-lg border border-border p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{session.type}</h3>
                      <p className="text-sm text-muted-foreground">
                        with {session.coach}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{session.date}</p>
                      <p className="text-sm text-muted-foreground">
                        {session.time}
                      </p>
                    </div>
                    <Button size="sm" className="gap-2">
                      <Play className="h-4 w-4" />
                      Join
                    </Button>
                  </div>
                ))}
                {upcomingSessions.length === 0 && (
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">No upcoming sessions</p>
                    <Link href="/booking">
                      <Button className="mt-4">Book a Session</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Weekly Progress */}
            <Card>
              <CardHeader className="pb-4">
                <h2 className="font-display font-semibold">This Week</h2>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  {weeklyProgress.map((day) => (
                    <div key={day.day} className="flex flex-col items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {day.day}
                      </span>
                      {day.completed ? (
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      ) : (
                        <Circle className="h-8 w-8 text-muted-foreground/30" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Weekly Goal</span>
                    <span className="font-medium">3/5 workouts</span>
                  </div>
                  <Progress value={60} className="mt-2" />
                </div>
              </CardContent>
            </Card>

            {/* Recent Workouts */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <h2 className="font-display font-semibold">Recent Workouts</h2>
                <Link href="/dashboard/workouts">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentWorkouts.map((workout) => (
                  <div
                    key={workout.id}
                    className="flex items-center gap-4 rounded-lg border border-border p-3"
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg",
                        workout.completed
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {workout.completed ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <Circle className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{workout.name}</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {workout.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="h-3 w-3" />
                          {workout.calories} cal
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant={workout.completed ? "default" : "secondary"}
                      className={cn(
                        !workout.completed && "bg-muted text-muted-foreground"
                      )}
                    >
                      {workout.date}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Your Coach */}
            <Card>
              <CardHeader className="pb-4">
                <h2 className="font-display font-semibold">Your Coach</h2>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                    <span className="font-display text-2xl font-bold text-primary/50">
                      S
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Mitchell</h3>
                    <p className="text-sm text-muted-foreground">
                      Strength & Conditioning
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Button variant="outline" className="w-full gap-2 bg-transparent">
                    <Video className="h-4 w-4" />
                    Message Coach
                  </Button>
                  <Link href="/booking?coach=1" className="block">
                    <Button className="w-full gap-2">
                      <Calendar className="h-4 w-4" />
                      Book Session
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
