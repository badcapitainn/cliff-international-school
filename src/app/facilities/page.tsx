import Image from "next/image";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";
import { FlaskConical, Laptop, Users, Bus, ShieldCheck, Building2 } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionReveal";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Explore the modern facilities at Cliffs International College. Peaceful campus with science labs, ICT suites, sports facilities, and welfare services designed for focused learning.",
  keywords: ["school facilities", "campus infrastructure", "science labs", "ICT suites", "sports facilities Zimbabwe"],
  openGraph: {
    title: "Facilities | Cliffs International College",
    description: "A peaceful campus engineered for focus with modern facilities and welfare services.",
    images: [
      {
        url: "/school_pictures/school_layout_1.jpg",
        width: 1200,
        height: 630,
        alt: "Cliffs International College facilities",
      },
    ],
  },
};

export default function FacilitiesPage() {
  return (
    <SiteShell>
      {/* Page Hero Header */}
      <div className="bg-slate-900 text-white py-14 sm:py-16 border-b-4 border-red-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              Solomio Campus Infrastructure
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Campus Facilities &amp; Student Welfare
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Engineered for academic focus, safety, and holistic growth. A serene setting in Solomio, Ruwa, equipped with modern tools for real-world learning.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-16">
        {/* Core Facilities Grid */}
        <section className="space-y-6">
          <FadeIn direction="up" className="border-b border-slate-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Specialized Learning Spaces &amp; Support
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Purpose-built environments designed to support active learning, scientific discovery, and daily wellbeing.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Facility 1 */}
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/school_pictures/classroom_layout_2.jpg"
                  alt="Science Laboratory"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700">
                    <FlaskConical className="h-4 w-4" />
                    <span>Experimental Science</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mt-2">
                    Fully Equipped Science Laboratory
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Outfitted with optical microscopes and essential laboratory apparatus for Biology, Chemistry, and Physics. Learners participate in hands-on practicals that bridge syllabus theory with real-world scientific inquiry.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                  ZIMSEC Practical Examination Ready
                </div>
              </div>
            </StaggerItem>

            {/* Facility 2 */}
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/school_pictures/students_at debate.jpg"
                  alt="IT Department & Computer Suite"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                    <Laptop className="h-4 w-4" />
                    <span>Technology Hub</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mt-2">
                    IT Department &amp; Laptop Lab
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A dedicated computer suite equipped with laptops and digital learning tools. Home to our National 1st Place Digital Minds Quiz Champions, preparing youngsters for digital literacy and programming.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                  High-Speed Research Access
                </div>
              </div>
            </StaggerItem>

            {/* Facility 3 */}
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/school_pictures/classroom_layout_1.jpg"
                  alt="Classroom Layout"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    <Users className="h-4 w-4" />
                    <span>Focused Classrooms</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mt-2">
                    1:25 Student-to-Teacher Ratio
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Spacious, well-ventilated classrooms capped at 25 learners. This intentional structure ensures teachers know every student by name, identify learning gaps early, and deliver individualized mentorship.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                  Intimate Learning Environment
                </div>
              </div>
            </StaggerItem>

            {/* Facility 4 */}
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                  <Bus className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Dedicated School Transport
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The college provides a dedicated school kombi commuter service covering key routes across Ruwa and surrounding communities, guaranteeing safe, punctual travel to and from campus each day.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Safe &amp; Reliable Commutes
              </div>
            </StaggerItem>

            {/* Facility 5 */}
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center mb-3">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  On-Site Medical Station &amp; First Aid
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A fully stocked medical first-aid station on campus managed by staff and our trained student Social Club first-responders. Emergency transport is maintained for immediate transfer if medical attention is required.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Student Health &amp; Safety First
              </div>
            </StaggerItem>

            {/* Facility 6 */}
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-3">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  On-Site Examinations Centre
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Construction is currently underway for our dedicated on-site ZIMSEC examination centre. Soon, learners will sit public exams in their familiar home school environment, boosting confidence and convenience.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Expanding Campus Infrastructure
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Campus Gallery */}
        <section className="space-y-6">
          <FadeIn direction="up" className="border-b border-slate-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Campus Life &amp; Student Community
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Glimpses of daily life, assemblies, and house spirit at Cliffs International College.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StaggerItem className="relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <Image src="/school_pictures/students_8.jpg" alt="Students on campus" fill className="object-cover" />
            </StaggerItem>
            <StaggerItem className="relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <Image src="/school_pictures/students_red_3.jpg" alt="House colours and blazer uniform" fill className="object-cover" />
            </StaggerItem>
            <StaggerItem className="relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <Image src="/school_pictures/students_red_2.jpg" alt="Learners in courtyard" fill className="object-cover" />
            </StaggerItem>
            <StaggerItem className="relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <Image src="/school_pictures/students_red_5.jpg" alt="House spirit" fill className="object-cover" />
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* CTA Banner */}
        <FadeIn direction="up" className="rounded-3xl bg-slate-900 p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">Experience Our Campus First-Hand</h3>
            <p className="text-sm text-slate-300 max-w-lg">
              Book a guided campus tour with our admissions team and view our laboratory, classrooms, and grounds.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-red-700 px-6 py-3 text-xs font-semibold text-white hover:bg-red-600 transition-colors shrink-0"
          >
            Schedule a Campus Visit &rarr;
          </Link>
        </FadeIn>
      </div>
    </SiteShell>
  );
}
