import Image from "next/image";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";

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
      
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">
              Academics
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              ZIMSEC curriculum, globally minded outcomes
            </h1>
            <p className="mt-3 text-sm text-slate-700 sm:text-[15px]">
              From Form 1 to Form 6, every learner builds a rigorous academic foundation, digital
              literacy and the character to compete at the highest levels — locally and
              internationally.
            </p>
          </div>
          <div className="relative mt-4 h-48 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:mt-0">
            <Image
              src="/school_pictures/classroom_layout_2.jpg"
              alt="Learners in a focused classroom at Cliffs International College"
              fill
              className="object-cover"
            />
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-semibold text-slate-900">
              Forms 1–6 · O &amp; A‑Level
            </h2>
            <p className="text-sm text-slate-700">
              A structured pathway from Form 1–4 (O‑Level) into Form 5–6 (A‑Level), aligned to the
              Zimbabwe School Examinations Council (ZIMSEC) standards.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>• Competency‑based teaching that emphasises critical thinking and applied knowledge.</li>
              <li>• Continuous Assessment Records (CARs) maintained throughout the year.</li>
              <li>• Broad subject exposure before specialisation.</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-semibold text-slate-900">
              Grade levels
            </h2>
            <p className="text-sm text-slate-700">
              Cliffs International College offers education from Form 1 through Form 6:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>• Form 1 – Form 4: Ordinary Level (O‑Level).</li>
              <li>• Form 5 – Form 6: Advanced Level (A‑Level).</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Faculty of Sciences",
              body: "Biology, Chemistry, Physics, Mathematics and Combined Science — preparing future doctors, engineers and scientists.",
            },
            {
              title: "Faculty of Commerce",
              body: "Accounting, Business Studies, Economics and Commerce for tomorrow’s entrepreneurs and business leaders.",
            },
            {
              title: "Faculty of Languages",
              body: "English Language & Literature, Shona and other languages, building articulate, culturally grounded graduates.",
            },
            {
              title: "Faculty of Humanities",
              body: "History, Geography, Sociology and more, shaping analytical, socially aware citizens.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-red-100 bg-red-50/60 p-5 text-sm text-slate-800">
          <h2 className="text-sm font-semibold text-red-800">
            Curriculum at a glance
          </h2>
          <p className="mt-2">
            Cliffs International College follows the Zimbabwe School Examinations Council (ZIMSEC)
            curriculum, designed to develop well‑rounded students with both theoretical knowledge
            and practical skills.
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Alignment with national learning outcomes set by the Ministry of Primary and Secondary Education.</li>
            <li>• Competency‑based teaching that emphasises critical thinking, problem‑solving and applied knowledge.</li>
            <li>• Integration of life skills, entrepreneurship and heritage studies for holistic development.</li>
            <li>• Internally assessed coursework and projects that complement end‑of‑year examinations.</li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-800">
          <h2 className="text-sm font-semibold text-slate-900">
            Academic calendar
          </h2>
          <p className="mt-2">
            The school follows the official three‑term Zimbabwean academic calendar:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Term 1: January – April</li>
            <li>• Term 2: May – August</li>
            <li>• Term 3: September – November / December</li>
          </ul>
        </section>
      </div>
    </SiteShell>
  );
}

