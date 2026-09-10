import SiteShell from "@/components/SiteShell";
import HeroSlideshow from "@/components/HeroSlideshow";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionReveal";
import {
  Award,
  BookOpen,
  Laptop,
  FlaskConical,
  Bus,
  Phone,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  FileText,
  HeartHandshake,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Cliffs International College — Zimbabwe's premier private school in Solomio, Ruwa. ZIMSEC-aligned O & A-Level education, 100% A-Level pass rate, and holistic leadership development.",
  openGraph: {
    title: "Cliffs International College | Elite Private Secondary School in Zimbabwe",
    description:
      "Equipping youngsters to compete internationally – an elite Zimbabwean private school blending academic rigour, digital innovation and character building.",
    images: [
      {
        url: "/school_pictures/school_layout_1.jpg",
        width: 1200,
        height: 630,
        alt: "Cliffs International College campus in Solomio, Ruwa",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <SiteShell>
      {/* 1. HERO SLIDESHOW */}
      <HeroSlideshow />

      {/* 2. STATS & EXCELLENCE RIBBON */}
      <section className="border-y border-slate-200 bg-white py-8 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
            <StaggerItem className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-red-800">
                100%
              </span>
              <span className="mt-1 text-xs sm:text-sm font-semibold text-slate-900">
                A-Level Pass Rate
              </span>
              <span className="text-[11px] text-slate-500">2024 &amp; 2025 Consecutive</span>
            </StaggerItem>

            <StaggerItem className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-red-800">
                1:25
              </span>
              <span className="mt-1 text-xs sm:text-sm font-semibold text-slate-900">
                Student to Teacher Ratio
              </span>
              <span className="text-[11px] text-slate-500">Individualized Mentorship</span>
            </StaggerItem>

            <StaggerItem className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-red-800">
                1st Place
              </span>
              <span className="mt-1 text-xs sm:text-sm font-semibold text-slate-900">
                Digital Minds Champions
              </span>
              <span className="text-[11px] text-slate-500">Irene Christian College 2026</span>
            </StaggerItem>

            <StaggerItem className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-red-800">
                Form 1 – 6
              </span>
              <span className="mt-1 text-xs sm:text-sm font-semibold text-slate-900">
                ZIMSEC Curriculum
              </span>
              <span className="text-[11px] text-slate-500">MoPSE Registered (Est. 2018)</span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. WELCOME FROM THE PRINCIPAL & CORE VALUES */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Principal's Statement */}
            <FadeIn direction="left" className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-800">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Leadership &amp; Institutional Vision</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Welcome to Cliffs International College
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Founded on 8 May 2018 in Solomio, Ruwa, Cliffs International College was built on a bold conviction: that every young person deserves the opportunity to discover their highest potential, cultivate ethical leadership, and pursue academic excellence without compromise.
              </p>

              <div className="rounded-2xl border-l-4 border-red-800 bg-white p-6 shadow-sm">
                <blockquote className="italic text-base text-slate-800 leading-relaxed">
                  &ldquo;Our results improve year on year, our facilities are expanding, and our students are competing — and winning — at national levels. But what we cherish most is a culture where learners are known by name, nurtured as individuals, and prepared not just for Zimbabwe, but for the world.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-900">Office of the Principal</span>
                    <span className="block text-slate-500">Cliffs International College Secondary</span>
                  </div>
                  <span className="text-red-700 font-semibold tracking-wide uppercase text-[11px]">
                    Solomio Campus
                  </span>
                </div>
              </div>

              {/* Core Values Pills */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                  Our Five Core Pillars
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Excellence",
                    "Integrity",
                    "Innovation",
                    "Community Service",
                    "Discipline",
                  ].map((val) => (
                    <span
                      key={val}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-red-700" />
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right: Featured Campus Photography */}
            <FadeIn direction="right" delay={0.15} className="lg:col-span-5 space-y-4">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-3xl border-2 border-slate-200 shadow-xl bg-slate-900">
                <Image
                  src="/school_pictures/students_8.jpg"
                  alt="Cliffs International College Students in full school blazer uniform"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded bg-red-700 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider">
                    Solomio, Ruwa
                  </span>
                  <p className="mt-1 text-sm font-semibold">
                    A peaceful, dedicated academic campus supporting focus and character.
                  </p>
                </div>
              </div>

              {/* Quick Contact & Location Bar */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-xs text-slate-700 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-900 block">Open Admissions 2025 / 2026</span>
                  <span className="text-slate-500">Inquire for Form 1 – Form 6 intake</span>
                </div>
                <Link
                  href="/admissions"
                  className="rounded-full bg-red-700 px-4 py-2 text-xs font-semibold text-white hover:bg-red-800 transition-colors"
                >
                  Apply &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC CURRICULUM & FACULTIES */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
              National Rigour · International Standards
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Comprehensive Academic Programs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We provide a structured progression under the Zimbabwe School Examinations Council (ZIMSEC) curriculum, complemented by continuous assessment, practical experiments, and modern technology.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Faculty 1: Sciences */}
            <StaggerItem className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between transition-all hover:border-red-600 hover:shadow-md hover:-translate-y-1">
              <div>
                <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center text-red-800 mb-4">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Faculty of Sciences
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Preparing future engineers, doctors, and technologists with rigorous hands-on laboratory experiments.
                </p>
                <div className="mt-4 space-y-1 text-xs font-medium text-slate-700">
                  <p>• Biology &amp; Chemistry</p>
                  <p>• Physics &amp; Mathematics</p>
                  <p>• Combined Science</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-red-700">
                Form 1 to 6 (O &amp; A-Level)
              </div>
            </StaggerItem>

            {/* Faculty 2: Commerce */}
            <StaggerItem className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between transition-all hover:border-red-600 hover:shadow-md hover:-translate-y-1">
              <div>
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800 mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Faculty of Commerce
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Equipping students with foundational business acumen, financial literacy, and entrepreneurial drive.
                </p>
                <div className="mt-4 space-y-1 text-xs font-medium text-slate-700">
                  <p>• Principles of Accounting</p>
                  <p>• Business Studies</p>
                  <p>• Economics &amp; Commerce</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-red-700">
                Form 1 to 6 (O &amp; A-Level)
              </div>
            </StaggerItem>

            {/* Faculty 3: Digital & STEM */}
            <StaggerItem className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between transition-all hover:border-red-600 hover:shadow-md hover:-translate-y-1">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mb-4">
                  <Laptop className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  IT &amp; Digital Innovation
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Home of our National Quiz Champions. Equipping students with practical coding, digital literacy, and computing.
                </p>
                <div className="mt-4 space-y-1 text-xs font-medium text-slate-700">
                  <p>• Computer Applications</p>
                  <p>• Digital Minds Competitions</p>
                  <p>• Laptop Lab Workstations</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-red-700">
                #1 Ranked Quiz Winners
              </div>
            </StaggerItem>

            {/* Faculty 4: Humanities & Languages */}
            <StaggerItem className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between transition-all hover:border-red-600 hover:shadow-md hover:-translate-y-1">
              <div>
                <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Humanities &amp; Languages
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Cultivating critical thinking, eloquent articulation, historical consciousness, and cultural appreciation.
                </p>
                <div className="mt-4 space-y-1 text-xs font-medium text-slate-700">
                  <p>• English Language &amp; Literature</p>
                  <p>• Shona Language</p>
                  <p>• History &amp; Geography</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-red-700">
                Debating &amp; Public Speaking
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn direction="up" delay={0.2} className="mt-10 text-center">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-xs hover:border-red-700 hover:text-red-700 transition-colors"
            >
              <span>View Full Academic Curriculum &amp; Syllabi</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 5. CAMPUS FACILITIES & LEARNING ENVIRONMENT */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                Solomio Campus · Ruwa
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Facilities Built for Focused Learning
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                A serene semi-rural campus offering peace and safety, equipped with modern tools for practical education.
              </p>
            </div>
            <Link
              href="/facilities"
              className="text-sm font-semibold text-red-800 hover:text-red-900 flex items-center gap-1 shrink-0"
            >
              Explore all campus facilities &rarr;
            </Link>
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {/* Card 1: Science Lab */}
            <StaggerItem className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/school_pictures/classroom_layout_2.jpg"
                  alt="Science Laboratory and Focused Classroom at Cliffs International College"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-red-700">
                  <FlaskConical className="h-4 w-4" />
                  <span>Practical Sciences</span>
                </div>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Science Laboratories
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Equipped with microscopes and scientific apparatus for hands-on practical work across Biology, Chemistry, and Physics.
                </p>
              </div>
            </StaggerItem>

            {/* Card 2: IT Department & Debates */}
            <StaggerItem className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/school_pictures/students_at debate.jpg"
                  alt="Students at debate and ICT suite"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-red-700">
                  <Laptop className="h-4 w-4" />
                  <span>ICT &amp; Digital Lab</span>
                </div>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Computer Suite &amp; Debate Hub
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Dedicated computer suite with laptop workstations fostering digital literacy, programming, and inter-school debate excellence.
                </p>
              </div>
            </StaggerItem>

            {/* Card 3: Transport & Logistics */}
            <StaggerItem className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/school_pictures/school_layout_1.jpg"
                  alt="Cliffs International College Campus and Transport"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-red-700">
                  <Bus className="h-4 w-4" />
                  <span>Student Mobility</span>
                </div>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  School Transport &amp; On-Site Exam Centre
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Dedicated school kombi commuter service for safe travel, and an on-site examination centre under construction.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 6. STUDENT LIFE & ACHIEVEMENTS HIGHLIGHT */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Photo Collage */}
            <FadeIn direction="left" className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 sm:h-60 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <Image
                    src="/school_pictures/students_recieving _prize_1.jpg"
                    alt="Students receiving awards at Cliffs International College"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 sm:h-44 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <Image
                    src="/school_pictures/students_red_1.jpg"
                    alt="Cliffs International College learners"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative h-36 sm:h-44 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <Image
                    src="/school_pictures/students_3.jpg"
                    alt="Students collaborating"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 sm:h-60 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <Image
                    src="/school_pictures/students_recieving _prize_2.jpg"
                    alt="Awards ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Right: Text & Accolades */}
            <FadeIn direction="right" delay={0.15} className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
                <Award className="h-3.5 w-3.5" />
                <span>Honours &amp; Community Spirit</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Nurturing Champions in Mind and Character
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Education at Cliffs extends far beyond textbook memorization. Our learners discover confidence through competitive debate, national quiz competitions, and community outreach.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="mt-0.5 rounded-lg bg-red-700 p-2 text-white">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      1st Place · Irene Christian College Digital Minds Quiz (2026)
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      Our IT Department students claimed first place among top regional schools, cementing our position as a leader in digital education.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="mt-0.5 rounded-lg bg-blue-700 p-2 text-white">
                    <HeartHandshake className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Community Service &amp; Rusike Children&apos;s Home
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      Regular charitable outreach campaigns instill humility, social empathy, and active civic responsibility in our student body.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/achievements"
                  className="rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-red-800 transition-colors"
                >
                  View All Achievements &rarr;
                </Link>
                <Link
                  href="/campus-life"
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:border-slate-400 transition-colors"
                >
                  Discover Clubs &amp; Sports
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. ADMISSIONS CALL-TO-ACTION BANNER */}
      <section className="relative overflow-hidden bg-slate-950 py-16 text-white border-t-4 border-red-800">
        <FadeIn direction="up" className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-300">
            <span>2025 / 2026 Admissions Open</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Give Your Child the Foundation to Compete Internationally
          </h2>

          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            We welcome applications for Form 1 through Form 6. Experience quality education, dedicated teachers, and flexible payment plans designed to support families.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-full bg-red-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-red-600 hover:scale-[1.02]"
            >
              <FileText className="h-4 w-4" />
              <span>Admissions Checklist &amp; Enquiries</span>
            </Link>

            <a
              href="https://cic-portal.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-slate-500 hover:bg-slate-800"
            >
              <GraduationCap className="h-4 w-4 text-amber-400" />
              <span>School Portal</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>

            <a
              href="tel:+263783841141"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-slate-500 hover:text-white"
            >
              <Phone className="h-4 w-4 text-red-400" />
              <span>Call: 0783 841 141</span>
            </a>
          </div>
        </FadeIn>
      </section>
    </SiteShell>
  );
}
