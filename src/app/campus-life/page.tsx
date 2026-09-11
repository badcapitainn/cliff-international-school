import Image from "next/image";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";
import { ShieldCheck, Heart } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionReveal";

export const metadata: Metadata = {
  title: "Campus Life",
  description: "Experience holistic development at Cliffs International College. From science labs and ICT suites to debates, sports, and national competitions in a calm, semi-rural campus.",
  keywords: ["campus life", "school activities", "sports clubs", "student life Zimbabwe", "extracurricular activities"],
  openGraph: {
    title: "Campus Life | Cliffs International College",
    description: "In and beyond the classroom - holistic development with clubs, sports, and competitions.",
    images: [
      {
        url: "/school_pictures/students_red_1.jpg",
        width: 1200,
        height: 630,
        alt: "Students engaged in campus activities at Cliffs International College",
      },
    ],
  },
};

export default function CampusLifePage() {
  return (
    <SiteShell>
      {/* Page Hero Header */}
      <div className="bg-slate-900 text-white py-14 sm:py-16 border-b-4 border-red-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              Character, Community &amp; Leadership
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Vibrant Campus Life &amp; Co-Curriculars
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              In and beyond the classroom. A caring community where every young person discovers lifelong values, competitive spirit, empathy, and leadership.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-16">
        {/* Intro Grid with Photography */}
        <section className="grid gap-8 md:grid-cols-12 md:items-center">
          <FadeIn direction="left" className="md:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-800">
              The Cliffs Experience
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Nurturing the Whole Person: Mind, Body &amp; Spirit
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              At Cliffs International College, we believe education is as much about character and social consciousness as it is about examination grades. Set in the quiet, supportive surroundings of Victory Park, students enjoy a campus life filled with spirited debate, technology competitions, sports, house competitions, and meaningful community service.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our small class sizes and intentional pastoral care ensure no student gets lost in the crowd. Teachers act as mentors, guiding learners through academic hurdles and personal milestones alike.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="md:col-span-5 relative h-72 sm:h-80 overflow-hidden rounded-3xl border-2 border-slate-200 shadow-lg bg-slate-900">
            <Image
              src="/school_pictures/students_red_1.jpg"
              alt="House spirit and student life at Cliffs International College"
              fill
              className="object-cover"
            />
          </FadeIn>
        </section>

        {/* Clubs & Societies Directory */}
        <section className="space-y-6">
          <FadeIn direction="up" className="border-b border-slate-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Clubs &amp; Student Societies
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Active co-curricular programs that ignite passion, critical thinking, and team camaraderie.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">Articulate Minds</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">Debating Society &amp; Public Speaking</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Honing eloquence, forensic reasoning, and confidence in public discourse. Prepares students for inter-school debates and leadership roles.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Tech Pioneers</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">ICT &amp; Digital Minds Club</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Home of the 1st Place National Champions at Irene Christian College. Students learn practical computing, problem-solving, and quiz strategy.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Health &amp; Service</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">Social Club &amp; First Aid Responders</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Trained to administer first aid during school events and daily campus activities, developing civic readiness and healthcare interest.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Inquiry &amp; Logic</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">Science &amp; Mathematics Club</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Hands-on experiments, mathematics olympiad prep, and scientific research projects bridging classroom concepts with innovation.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Athletics</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">Sports &amp; Fitness</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Encouraging physical fitness, endurance, teamwork, and healthy house rivalries during inter-house athletics and sports days.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Compassion</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">Community Outreach &amp; Charity</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct partnership with organizations such as Rusike Children&apos;s Home. Students organize food drives, donations, and awareness campaigns.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Pastoral Care & Counseling */}
        <section className="grid gap-8 md:grid-cols-2">
          <FadeIn direction="left" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="h-10 w-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Pastoral Care &amp; Individual Follow-Up
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              We operate a structured and proactive student follow-up programme that monitors both academic progress and personal wellbeing. Our dedicated counselling team ensures students have access to confidential guidance whenever challenges arise.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Crucially, our teachers maintain constant, open communication with parents and guardians — ensuring families are true partners in each student&apos;s development.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="rounded-2xl border border-red-200 bg-red-50/70 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="h-10 w-10 rounded-xl bg-red-700 text-white flex items-center justify-center">
              <Heart className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Community Outreach: Rusike Children’s Home
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Cliffs International College is proud of its roots in Ruwa. We actively teach empathy through action by mobilizing regular student-led donation drives, awareness events, and support visits to Rusike Children&apos;s Home.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              These experiences ground our youngsters in compassion, community spirit, and gratitude — producing leaders who care for the people around them.
            </p>
          </FadeIn>
        </section>

        {/* Photo Gallery Grid */}
        <section className="space-y-6">
          <FadeIn direction="up" className="border-b border-slate-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Life on Campus in Pictures
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Celebrating milestones, debate matches, and daily camaraderie in Victory Park.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StaggerItem className="relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <Image src="/school_pictures/students_2.jpg" alt="Learners in class" fill className="object-cover" />
            </StaggerItem>
            <StaggerItem className="relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <Image src="/school_pictures/students_at debate.jpg" alt="Debate club" fill className="object-cover" />
            </StaggerItem>
            <StaggerItem className="relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <Image src="/school_pictures/students_recieving _prize_1.jpg" alt="Awards celebration" fill className="object-cover" />
            </StaggerItem>
            <StaggerItem className="relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <Image src="/school_pictures/students_7.jpg" alt="Team achievement" fill className="object-cover" />
            </StaggerItem>
          </StaggerContainer>
        </section>
      </div>
    </SiteShell>
  );
}
