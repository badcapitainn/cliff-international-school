"use client";

import Image from "next/image";
import SiteShell from "@/components/SiteShell";
import { useEffect, useState } from "react";
import type { Metadata } from "next";

// Note: Metadata export is not supported in client components
// This would need to be moved to a server component wrapper

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
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <AchievementsHeader />

        <section className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <AchievementStat label="O‑Level Pass Rate (2025)" value="79%" />
          <AchievementStat label="A‑Level Pass Rate (2025)" value="100%" highlight />
          <AchievementStat label="Digital Minds Quiz 2025" value="3rd" />
          <AchievementStat label="Digital Minds Quiz 2026" value="1st" highlight />
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-red-100 bg-red-50 p-5 text-sm text-slate-800">
            <h2 className="text-sm font-semibold text-red-800">
              Digital &amp; technology excellence
            </h2>
            <p>
              Cliffs International College has established a strong reputation in ICT and digital
              education, with learners competing — and winning — in inter‑school and national
              competitions.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <h2 className="text-sm font-semibold text-slate-900">A school on the rise</h2>
            <p>
              Our improving pass rates, expanding facilities and competition successes reflect the
              dedication of our teachers, the commitment of our students and the trust of our
              parents.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-800">
          <h2 className="text-sm font-semibold text-slate-900">
            Examination results
          </h2>
          <p className="mt-2">
            Our results improve year on year, reflecting the dedication of our teachers and the
            commitment of our students.
          </p>
          <div className="mt-3 inline-block rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-800">
            <div className="mb-2 font-semibold text-slate-900">
              Recent pass rates
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="text-[11px] font-semibold text-slate-600">Year</div>
                <div className="mt-1">2024</div>
                <div>2025</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-slate-600">O‑Level</div>
                <div className="mt-1">67%</div>
                <div>79%</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-slate-600">A‑Level</div>
                <div className="mt-1">100%</div>
                <div>100%</div>
              </div>
            </div>
          </div>

          <p className="mt-4">
            An on‑site examinations centre is currently under construction, which will allow
            learners to sit their ZIMSEC examinations on campus in a familiar environment — further
            boosting confidence and performance.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}

type StatProps = {
  label: string;
  value: string;
  highlight?: boolean;
};

function AchievementStat({ label, value, highlight }: StatProps) {
  return (
    <div
      className={
        "rounded-2xl border px-3 py-4 text-center text-xs transition-transform duration-200 hover:-translate-y-1 hover:shadow-md " +
        (highlight
          ? "border-red-600 bg-red-50 text-red-800"
          : "border-slate-200 bg-white text-slate-800")
      }
    >
      <div className="text-sm font-semibold">{value}</div>
      <div className="mt-1 text-[11px]">{label}</div>
    </div>
  );
}

function AchievementsHeader() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % achievementSlides.length),
      3000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <header className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">
          Achievements
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          Results that speak for themselves
        </h1>
        <p className="mt-3 text-sm text-slate-700 sm:text-[15px]">
          Year‑on‑year improvements, 100% A‑Level pass rates and national digital competition
          wins — from a young, fast‑growing school.
        </p>
      </div>
      <div className="relative mt-4 h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:mt-0">
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
        <div className="absolute bottom-2 right-3 flex gap-1.5">
          {achievementSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === active ? "w-5 bg-red-600" : "w-2 bg-slate-400"
              }`}
              aria-label={`Go to achievement image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

