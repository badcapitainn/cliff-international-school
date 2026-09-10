import Image from "next/image";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionReveal";

export const metadata: Metadata = {
  title: "Academics",
  description: "Discover our ZIMSEC-aligned O & A-Level curriculum at Cliffs International College. From Form 1 to 6, we build academic excellence, digital literacy, and character for international competitiveness.",
  keywords: ["ZIMSEC curriculum", "O Level A Level Zimbabwe", "academic programs", "secondary education Zimbabwe"],
  openGraph: {
    title: "Academics | Cliffs International College",
    description: "ZIMSEC curriculum, globally minded outcomes. Rigorous academic foundation from Form 1 to 6.",
    images: [
      {
        url: "/school_pictures/classroom_layout_2.jpg",
        width: 1200,
        height: 630,
        alt: "Learners in a focused classroom at Cliffs International College",
      },
    ],
  },
};

export default function AcademicsPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "O Level Program",
              "description": "Ordinary Level education from Form 1-4 aligned to ZIMSEC standards",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Cliffs International College"
              },
              "educationalLevel": "Secondary School",
              "courseMode": "full-time",
              "timeRequired": "P4Y"
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "A Level Program",
              "description": "Advanced Level education from Form 5-6 aligned to ZIMSEC standards",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Cliffs International College"
              },
              "educationalLevel": "Secondary School",
              "courseMode": "full-time",
              "timeRequired": "P2Y"
            }
          ])
        }}
      />

      {/* Page Hero Header */}
      <div className="bg-slate-900 text-white py-14 sm:py-16 border-b-4 border-red-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              Form 1 to Form 6 · ZIMSEC Aligned
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Academic Excellence &amp; Pathways
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Equipping every learner with the academic foundation, digital literacy, and disciplined character necessary to compete at the highest levels — locally and internationally.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-12">
        {/* Intro & Real Classroom Image */}
        <header className="grid gap-8 md:grid-cols-12 md:items-center">
          <FadeIn direction="left" className="md:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-800">
              Rigorous Standard
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              ZIMSEC Curriculum with Globally Minded Outcomes
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Cliffs International College follows the Zimbabwe School Examinations Council (ZIMSEC) curriculum, the nationally recognized framework governing secondary education across Zimbabwe. This competency-based curriculum emphasizes critical thinking, problem-solving, practical scientific discovery, and applied knowledge.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Continuous Assessment Records (CARs) are diligently maintained throughout the academic year, ensuring consistent progress monitoring and preparation for national examinations.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="md:col-span-5 relative h-72 sm:h-80 overflow-hidden rounded-3xl border-2 border-slate-200 shadow-lg bg-slate-100">
            <Image
              src="/school_pictures/classroom_layout_2.jpg"
              alt="Learners in a focused classroom at Cliffs International College"
              fill
              className="object-cover"
            />
          </FadeIn>
        </header>

        {/* 100% Pass Rate Highlight Banner */}
        <FadeIn direction="up" className="rounded-2xl border border-red-200 bg-red-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800">
              Proven Examination Results
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              100% A-Level Pass Rate (2024 &amp; 2025)
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 max-w-xl">
              Our Advanced Level students achieved a perfect 100% pass rate for two consecutive years, with O-Level pass rates climbing from 67% to 79%.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center rounded-2xl bg-red-800 px-6 py-4 text-white shadow-sm">
            <span className="font-serif text-3xl font-extrabold">100%</span>
            <span className="text-[11px] uppercase tracking-wider font-semibold">A-Level Pass</span>
          </div>
        </FadeIn>

        {/* Grade Levels Breakdown */}
        <section className="grid gap-6 md:grid-cols-2">
          <StaggerContainer className="contents">
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <div className="inline-block rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider">
                Forms 1 – 4
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Ordinary Level (O-Level)
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Students build a broad base of knowledge across sciences, humanities, business, and languages before specializing. In Form 4, learners sit for ZIMSEC O-Level examinations.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">
                <li>• Broad and balanced subject offerings</li>
                <li>• Optimal 1:25 student-to-teacher ratio</li>
                <li>• Practical laboratory and computer application skills</li>
              </ul>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <div className="inline-block rounded-md bg-red-100 px-3 py-1 text-xs font-bold text-red-800 uppercase tracking-wider">
                Forms 5 – 6
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Advanced Level (A-Level)
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Rigorous specialization in chosen subject combinations tailored for university entrance and career readiness in medicine, engineering, law, commerce, and technology.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">
                <li>• Focused faculty tracks: Sciences, Commercials, Arts</li>
                <li>• In-depth seminar-style teaching and research preparation</li>
                <li>• 100% A-Level pass rate recorded consecutively</li>
              </ul>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Faculties Grid */}
        <section className="space-y-6">
          <FadeIn direction="up" className="border-b border-slate-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Faculties &amp; Subject Offerings
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Comprehensive subject coverage taught by experienced, specialized secondary educators.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">Science &amp; STEM</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">Faculty of Sciences</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Prepares students for medicine, engineering, applied sciences, and technical innovation.
                </p>
                <div className="mt-4 space-y-1 text-xs text-slate-800">
                  <p>• Biology</p>
                  <p>• Chemistry</p>
                  <p>• Physics</p>
                  <p>• Mathematics</p>
                  <p>• Combined Science</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Business &amp; Finance</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">Faculty of Commerce</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Fosters financial literacy, corporate strategy, and entrepreneurship.
                </p>
                <div className="mt-4 space-y-1 text-xs text-slate-800">
                  <p>• Principles of Accounting</p>
                  <p>• Business Studies</p>
                  <p>• Economics</p>
                  <p>• Commerce</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Communication</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">Faculty of Languages</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Building articulate, culturally grounded graduates with strong literacy and eloquence.
                </p>
                <div className="mt-4 space-y-1 text-xs text-slate-800">
                  <p>• English Language</p>
                  <p>• Literature in English</p>
                  <p>• Shona Language</p>
                  <p>• Public Speaking &amp; Debate</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Social Sciences</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">Faculty of Humanities</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Cultivating critical analysis, historical insight, and ethical social awareness.
                </p>
                <div className="mt-4 space-y-1 text-xs text-slate-800">
                  <p>• History</p>
                  <p>• Geography</p>
                  <p>• Sociology</p>
                  <p>• Heritage Studies</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Academic Calendar & Application CTA */}
        <div className="grid gap-6 md:grid-cols-12">
          <FadeIn direction="left" className="md:col-span-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-2">
            <h3 className="font-serif text-lg font-bold text-slate-900">Official Academic Calendar</h3>
            <p className="text-xs text-slate-600">Following the Government of Zimbabwe three-term calendar:</p>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-1 pt-2">
              <li>• <strong>Term 1:</strong> January – April</li>
              <li>• <strong>Term 2:</strong> May – August</li>
              <li>• <strong>Term 3:</strong> September – November / December</li>
            </ul>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="md:col-span-7 rounded-2xl border border-slate-900 bg-slate-950 p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif text-lg font-bold text-white">Join Our Academic Programs</h3>
              <p className="text-xs text-slate-400">Open admissions for Form 1 through Form 6.</p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://cic-portal.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700"
              >
                Portal Login
              </a>
              <a
                href="/admissions"
                className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold text-white hover:bg-red-600"
              >
                Apply Now &rarr;
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </SiteShell>
  );
}
