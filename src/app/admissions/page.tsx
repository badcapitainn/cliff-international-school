import Image from "next/image";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Join Cliffs International College family. Learn about entry requirements, intakes, and competitive private school fees with flexible payment plans for quality education.",
  keywords: ["school admissions Zimbabwe", "private school fees", "enrollment requirements", "school intake"],
  openGraph: {
    title: "Admissions | Cliffs International College",
    description: "Accessible, future-proof education. Competitive fees and flexible payment plans.",
    images: [
      {
        url: "/school_pictures/students_10.jpg",
        width: 1200,
        height: 630,
        alt: "Students at Cliffs International College",
      },
    ],
  },
};

export default function AdmissionsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">
              Admissions
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Accessible, future‑proof education
            </h1>
            <p className="mt-3 text-sm text-slate-700 sm:text-[15px]">
              Cliffs International College offers competitive private school fees and flexible
              payment plans, ensuring families can invest in quality without compromising
              stability.
            </p>
          </div>
          <div className="relative mt-4 h-48 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:mt-0">
            <Image
              src="/school_pictures/students_8.jpg"
              alt="Prospective learners and families at Cliffs International College"
              fill
              className="object-cover"
            />
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-semibold text-slate-900">
              Admissions checklist
            </h2>
            <ul className="mt-1 space-y-1">
              <li>• Certified copies of latest school reports or results.</li>
              <li>• Birth certificate and, where applicable, a transfer letter.</li>
              <li>• Completed application form from the administration office.</li>
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-semibold text-slate-900">
              Intake &amp; calendar
            </h2>
            <ul className="mt-1 space-y-1">
              <li>• Formal intake from January each year.</li>
              <li>• Additional enrolments at the start of each term, space permitting.</li>
              <li>• Academic year follows the official Zimbabwean three‑term calendar.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-5 text-sm text-slate-800 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
          <h2 className="text-sm font-semibold text-red-800">
            Fees &amp; financial information
          </h2>
          <p className="mt-2">
            Cliffs International College is committed to making quality private education
            accessible. For the latest fee schedule and payment plan options, please contact the
            administration office directly. Early applications are encouraged, especially for Form
            1 and Form 5 entry.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-800">
          <h2 className="text-sm font-semibold text-slate-900">
            Open admissions policy
          </h2>
          <p className="mt-2">
            The college operates an open admissions policy, welcoming new students throughout the
            year. Formal processing takes place from the beginning of the school year in January,
            with additional intakes considered at the start of each term, subject to space.
          </p>
          <p className="mt-2">
            Families are encouraged to apply early — particularly for Form 1 and Form 5 — to
            secure placement and access the full range of subject combinations and support
            available.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}

