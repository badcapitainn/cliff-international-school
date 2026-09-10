"use client";

import Image from "next/image";
import SiteShell from "@/components/SiteShell";
import { useEffect, useState } from "react";
import { Trophy, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, CounterAnimation } from "@/components/MotionReveal";

const achievementSlides = [
  {
    src: "/school_pictures/students_at debate.jpg",
    alt: "Students debating at Cliffs International College",
  },
  {
    src: "/school_pictures/students_recieving _prize_1.jpg",
    alt: "Students receiving prizes at Cliffs International College",
  },
  {
    src: "/school_pictures/students_recieving _prize_2.jpg",
    alt: "Students receiving awards at Cliffs International College",
  },
];

export default function AchievementsPage() {
  return (
    <SiteShell>
      {/* Page Hero Header */}
      <div className="bg-slate-900 text-white py-14 sm:py-16 border-b-4 border-red-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              Verified Results &amp; Accolades
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Academic Results &amp; Achievements
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Consistently climbing examination pass rates, consecutive 100% A-Level success, and national championship trophies in STEM and digital literacy.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-16">
        {/* Visual Hero & Image Slider */}
        <AchievementsHeader />

        {/* 4 Large Highlight Metric Cards */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StaggerContainer className="contents">
            <StaggerItem className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-xs flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-red-700">A-Level Pass Rate</span>
              <div className="my-3">
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-red-900">
                  <CounterAnimation value={100} suffix="%" />
                </span>
              </div>
              <p className="text-xs text-slate-600">Consecutive 100% pass rate recorded across 2024 and 2025.</p>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">O-Level Pass Rate</span>
              <div className="my-3">
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-slate-900">
                  <CounterAnimation value={79} suffix="%" />
                </span>
              </div>
              <p className="text-xs text-slate-600">Up from 67% in 2024, demonstrating consistent academic progression.</p>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-xs flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Digital Minds Quiz</span>
              <div className="my-3">
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-amber-900">1st</span>
              </div>
              <p className="text-xs text-slate-600">Champions at Irene Christian College Schools Quiz (2026).</p>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">NAC National Quiz</span>
              <div className="my-3">
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-slate-900">3rd</span>
              </div>
              <p className="text-xs text-slate-600">National podium finish in our inaugural inter-school competition entry.</p>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Official Results Comparison Table */}
        <FadeIn direction="up" className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800">
              Examination Performance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Official ZIMSEC Examination Record
            </h2>
            <p className="text-sm text-slate-600">
              Verified outcomes for Ordinary and Advanced Level cycles at Cliffs International College.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-600">
                  <th className="py-3.5 px-4 font-bold">Academic Year</th>
                  <th className="py-3.5 px-4 font-bold">O-Level Pass Rate</th>
                  <th className="py-3.5 px-4 font-bold">A-Level Pass Rate</th>
                  <th className="py-3.5 px-4 font-bold">Key Milestones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-800">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900">2025</td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-slate-900">79%</span>
                    <span className="ml-2 text-xs text-emerald-600 font-medium">(+12% gain)</span>
                  </td>
                  <td className="py-4 px-4 font-bold text-red-800">100% Pass Rate</td>
                  <td className="py-4 px-4 text-xs text-slate-600">Top STEM &amp; Commercial results; 1st Place Digital Minds winners</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900">2024</td>
                  <td className="py-4 px-4 font-semibold">67%</td>
                  <td className="py-4 px-4 font-bold text-red-800">100% Pass Rate</td>
                  <td className="py-4 px-4 text-xs text-slate-600">Inaugural 100% A-Level milestone; 3rd place NAC Quiz finish</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Digital Excellence & Future Exam Centre */}
        <section className="grid gap-8 md:grid-cols-2">
          <FadeIn direction="left" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="h-12 w-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Digital &amp; Technology Leadership
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              In 2025, our IT Department students placed 3rd in the national Digital Minds Quiz hosted by the National AIDS Council. In 2026, the team advanced further to claim <strong>1st Place</strong> at the Irene Christian College Schools Digital Minds Quiz.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              These victories testify to our commitment to practical digital literacy, programming foundations, and agile competitive thinking.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="rounded-2xl border border-red-200 bg-red-50/60 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="h-12 w-12 rounded-xl bg-red-800 text-white flex items-center justify-center">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Coming Soon: On-Site Examinations Centre
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Cliffs International College is currently constructing an on-site ZIMSEC examination centre on our Solomio campus. Once completed, students will write national public examinations right on home ground.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              This milestone eliminates travel stress, preserves familiarity, and provides our learners with the optimal environment to perform at their best.
            </p>
          </FadeIn>
        </section>
      </div>
    </SiteShell>
  );
}

function AchievementsHeader() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % achievementSlides.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <header className="grid gap-8 md:grid-cols-12 md:items-center">
      <FadeIn direction="left" className="md:col-span-7 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800 uppercase tracking-wider">
          <Trophy className="h-3.5 w-3.5" />
          <span>Track Record of Success</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Academic Rigour That Delivers Real Results
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          From the classroom to national inter-school stages, Cliffs International College cultivates learners who rise to challenges with discipline and distinction.
        </p>
        <div className="pt-2">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-2.5 text-xs font-semibold text-white hover:bg-red-600 transition-colors"
          >
            <span>Enroll for Next Intake</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </FadeIn>

      <FadeIn direction="right" delay={0.15} className="md:col-span-5 relative h-72 sm:h-80 overflow-hidden rounded-3xl border-2 border-slate-200 bg-slate-900 shadow-lg">
        {achievementSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute bottom-3 right-4 flex gap-1.5">
          {achievementSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all ${
                index === active ? "w-6 bg-red-600" : "w-2 bg-white/70"
              }`}
              aria-label={`Go to achievement image ${index + 1}`}
            />
          ))}
        </div>
      </FadeIn>
    </header>
  );
}
