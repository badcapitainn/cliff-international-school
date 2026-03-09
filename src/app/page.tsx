import SiteShell from "@/components/SiteShell";
import HeroSlideshow from "@/components/HeroSlideshow";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSlideshow />

      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              Vision
            </h2>
            <p className="text-sm text-slate-700">
              To be an internationally recognized centre of learning that produces well‑rounded,
              globally competitive graduates rooted in strong values and a love of knowledge.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              Mission
            </h2>
            <p className="text-sm text-slate-700">
              To equip every student with the academic foundation, digital literacy and character
              necessary to compete and excel at the highest levels — locally and internationally.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-10 sm:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:px-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Identity &amp; Overview
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Founded on 8 May 2018, Cliffs International College is a reputable, independent
              secondary school registered under Zimbabwe&apos;s Ministry of Primary and Secondary
              Education (MoPSE). We stand as a beacon of quality private education, committed to
              academic excellence, holistic development and the nurturing of future leaders.
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Set in the tranquil community of Solomio, Ruwa, our campus offers a genuinely
              conducive learning environment — away from the noise of dense urban settings, yet
              accessible and well‑connected. As a fully registered institution, every learner
              receives a credible, recognised and world‑class education within the Zimbabwean
              context.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
            <p className="font-semibold text-slate-900">
              Our Motto
            </p>
            <p>
              “Equipping youngsters to compete internationally”
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Core values
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Excellence</li>
              <li>• Integrity</li>
              <li>• Innovation</li>
              <li>• Community</li>
              <li>• Discipline</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold text-slate-900 sm:text-2xl">
            Discover Cliffs International College
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <HomeCard
              href="/academics"
              title="Academics"
              description="ZIMSEC‑aligned O & A‑Level programmes from Form 1 to 6."
              image="/school_pictures/classroom_layout_1.jpg"
            />
            <HomeCard
              href="/campus-life"
              title="Campus Life"
              description="A caring community with clubs, sports and digital competitions."
              image="/school_pictures/students_red_1.jpg"
            />
            <HomeCard
              href="/admissions"
              title="Admissions"
              description="Entry requirements, intakes and how to join the Cliffs family."
              image="/school_pictures/students_10.jpg"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

type HomeCardProps = {
  href: string;
  title: string;
  description: string;
  image: string;
};

function HomeCard({ href, title, description, image }: HomeCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-red-600 hover:shadow-md"
    >
      <div className="relative h-40 w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-4 py-3">
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs text-slate-700">{description}</p>
        <span className="mt-2 text-xs font-semibold text-red-700">
          Learn more &rarr;
        </span>
      </div>
    </Link>
  );
}
