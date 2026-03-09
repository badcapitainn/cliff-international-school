import Image from "next/image";
import SiteShell from "@/components/SiteShell";

export default function CampusLifePage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">
            Campus Life
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            In and beyond the classroom
          </h1>
          <p className="mt-3 text-sm text-slate-700 sm:text-[15px]">
            A calm, semi‑rural campus with the energy of national competitions — from science labs
            and ICT suites to debates, prize‑givings and sports days.
          </p>
        </header>

        <section className="mt-10 grid auto-rows-[150px] gap-4 md:grid-cols-4">
          <CampusTile
            src="/school_pictures/classroom_layout_2.jpg"
            title="Focused classrooms"
          />
          <CampusTile src="/school_pictures/students_2.jpg" title="Engaged learners" />
          <CampusTile
            src="/school_pictures/students_recieving _prize_1.jpg"
            title="Celebrating excellence"
          />
          <CampusTile
            src="/school_pictures/students_at debate.jpg"
            title="Fostering leadership"
          />
          <CampusTile src="/school_pictures/students_red_1.jpg" title="House spirit" />
          <CampusTile src="/school_pictures/students_7.jpg" title="Digital champions" />
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <h2 className="text-sm font-semibold text-slate-900">Clubs & activities</h2>
            <p>
              Learners are encouraged to participate in academic clubs, sports, debate and social
              impact initiatives. These activities build confidence, teamwork and leadership.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <h2 className="text-sm font-semibold text-slate-900">Community & outreach</h2>
            <p>
              The school organises educational trips, awareness campaigns and community outreach
              initiatives, including donations to organisations such as Rusike Children’s Home.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <h2 className="text-sm font-semibold text-slate-900">
            Student welfare &amp; pastoral care
          </h2>
          <p className="mt-2">
            At Cliffs International College, academic success and personal wellbeing go hand in
            hand. Our pastoral care system ensures every learner feels known, supported and valued
            — not just as a student, but as a whole person.
          </p>
          <p className="mt-2">
            A structured follow‑up and counselling programme tracks both academic progress and
            personal wellbeing, with open communication between staff and parents so families stay
            closely involved in each child&apos;s journey.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-red-100 bg-red-50/70 p-5 text-sm text-slate-800">
          <h2 className="text-sm font-semibold text-red-800">
            Community‑centred approach
          </h2>
          <p className="mt-2">
            Cliffs International College is deeply rooted in its community. We listen to parents,
            students and neighbours, continuously refining our approach based on what matters most
            to them.
          </p>
          <p className="mt-2">
            The school organises educational and recreational trips, awareness campaigns on social
            and health issues, and community outreach initiatives — including donations to
            organisations such as Rusike Children&apos;s Home.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}

type CampusTileProps = {
  src: string;
  title: string;
};

function CampusTile({ src, title }: CampusTileProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-x-2 bottom-2 rounded bg-black/60 px-2 py-1 text-[11px] font-medium text-white">
        {title}
      </div>
    </div>
  );
}

