import Image from "next/image";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionReveal";

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

import { Phone, CheckCircle2, FileText, ShieldCheck } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <SiteShell>
      {/* Page Hero Header */}
      <div className="bg-slate-900 text-white py-14 sm:py-16 border-b-4 border-red-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              Form 1 – Form 6 Enrollment
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Admissions &amp; Enrollment
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Accessible, future-proof private education in Solomio, Ruwa. Competitive fees, flexible payment plans, and an environment that equips your child to compete internationally.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-12">
        {/* Intro & Real Campus Photo */}
        <header className="grid gap-8 md:grid-cols-12 md:items-center">
          <FadeIn direction="left" className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800 uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Open Admissions Policy</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Investing in Your Child&apos;s Future with Confidence
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Cliffs International College operates an open admissions policy, welcoming new learners throughout the academic year. While our main intake begins each January, mid-term and beginning-of-term enrolments are welcomed subject to classroom availability.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Because class sizes are kept to an optimal 1:25 ratio to safeguard individualized attention, early application is strongly encouraged — especially for Form 1 and Lower 6 (Form 5) entry points.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="md:col-span-5 relative h-72 sm:h-80 overflow-hidden rounded-3xl border-2 border-slate-200 shadow-lg bg-slate-100">
            <Image
              src="/school_pictures/students_8.jpg"
              alt="Prospective learners and families at Cliffs International College"
              fill
              className="object-cover"
            />
          </FadeIn>
        </header>

        {/* 4-Step Application Pathway */}
        <section className="space-y-6">
          <FadeIn direction="up" className="border-b border-slate-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              The 4-Step Enrollment Process
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              A transparent, supportive journey from initial inquiry to your child&apos;s first day on campus.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Enquiry & Campus Tour",
                desc: "Visit our Solomio campus or speak with our admissions officers to discuss academic goals and school values.",
              },
              {
                step: "02",
                title: "Document Submission",
                desc: "Provide certified academic transcripts/reports, birth certificate, transfer letter, and completed application form.",
              },
              {
                step: "03",
                title: "Assessment & Review",
                desc: "Academic placement review ensuring your student is aligned with their ideal subject combination and faculty track.",
              },
              {
                step: "04",
                title: "Offer & Orientation",
                desc: "Acceptance letter issued, uniform fitting arranged, and welcome pack provided before term begins.",
              },
            ].map((st) => (
              <StaggerItem
                key={st.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl font-bold text-red-800">
                    {st.step}
                  </span>
                  <h3 className="font-serif text-base font-bold text-slate-900 mt-2">
                    {st.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Checklist & Intake Details */}
        <section className="grid gap-8 md:grid-cols-2">
          {/* Admissions Checklist */}
          <FadeIn direction="left" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-red-800">
              <FileText className="h-5 w-5" />
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Required Documents Checklist
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              Please prepare the following items when submitting your application to our administration office:
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-red-700 shrink-0 mt-0.5" />
                <span>Certified copies of latest school reports, ZIMSEC Grade 7 results (for Form 1) or O-Level results (for Form 5).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-red-700 shrink-0 mt-0.5" />
                <span>Certified copy of learner&apos;s birth certificate.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-red-700 shrink-0 mt-0.5" />
                <span>Official clearance or transfer letter from the previous school (where applicable).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-red-700 shrink-0 mt-0.5" />
                <span>Completed Cliffs International College official enrollment form.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-red-700 shrink-0 mt-0.5" />
                <span>Two recent passport-sized photographs of the applicant.</span>
              </li>
            </ul>
          </FadeIn>

          {/* Fees & Flexible Payment Plans */}
          <FadeIn direction="right" delay={0.1} className="rounded-2xl border border-red-200 bg-red-50/70 p-6 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-800">
                Affordable Excellence
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Tuition &amp; Flexible Payment Plans
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                We believe quality education should remain accessible. Cliffs International College provides competitive private school tuition paired with flexible installment options, allowing families to plan and budget with ease throughout the term.
              </p>
              <div className="rounded-xl bg-white p-4 border border-red-100 text-xs text-slate-800 space-y-1.5">
                <p className="font-semibold text-slate-900">Need the latest fee schedule?</p>
                <p className="text-slate-600">
                  Contact our administration team directly via WhatsApp or phone to receive a personalized fee structure for your child&apos;s prospective grade level.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/263783841141"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600 transition-colors"
              >
                <span>WhatsApp Admissions</span>
              </a>
              <a
                href="tel:+263783841141"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call: 0783 841 141</span>
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Direct Action Contact Card */}
        <FadeIn direction="up" className="rounded-3xl border border-slate-200 bg-slate-900 p-8 sm:p-12 text-white">
          <div className="max-w-3xl space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Visit Us in Solomio, Ruwa
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We welcome prospective families to tour our campus, meet our dedicated teachers, and experience our peaceful learning environment first-hand.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 pt-2 text-xs text-slate-300">
              <div>
                <span className="block text-slate-400 font-semibold uppercase">Address</span>
                <span className="font-medium">20440 Victory Park, Solomio, Ruwa</span>
              </div>
              <div>
                <span className="block text-slate-400 font-semibold uppercase">Office Hours</span>
                <span className="font-medium">Mon – Fri: 7:30 AM – 4:30 PM</span>
              </div>
              <div>
                <span className="block text-slate-400 font-semibold uppercase">Hotlines</span>
                <span className="font-medium">0783 841 141 / 0785 638 463</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SiteShell>
  );
}
