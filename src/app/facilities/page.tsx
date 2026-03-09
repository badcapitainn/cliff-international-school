import Image from "next/image";
import SiteShell from "@/components/SiteShell";

export default function FacilitiesPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">
            Facilities &amp; Welfare
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            A peaceful campus engineered for focus
          </h1>
          <p className="mt-3 text-sm text-slate-700 sm:text-[15px]">
            Away from city noise but fully connected, Cliffs International College is designed to
            let learners think deeply, grow confidently and feel genuinely cared for.
          </p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <FacilityCard
            title="Science laboratory"
            body="Fully equipped for Biology, Chemistry and Physics practical work, bridging theory and practice."
          />
          <FacilityCard
            title="IT department"
            body="A dedicated computer suite with laptops and modern software for real‑world digital skills."
          />
          <FacilityCard
            title="Classrooms"
            body="Classrooms designed for a 1:25 learner–teacher ratio, ensuring individual attention."
          />
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <FacilityCard
            title="Transport"
            body="A dedicated school kombi provides safe, reliable transport for learners."
          />
          <FacilityCard
            title="Medical support"
            body="On‑site medical supplies and first‑aid trained staff, with transport to nearby facilities when needed."
          />
          <FacilityCard
            title="Pastoral care"
            body="Structured counselling and follow‑up systems keep learners and parents connected."
          />
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:items-center">
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <h2 className="text-sm font-semibold text-slate-900">Life at Cliffs</h2>
            <p>
              Calm semi‑rural surroundings, high‑tech labs and a genuine knowledge of each learner
              by name create an environment where young people can flourish.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ImageTile src="/school_pictures/students_8.jpg" alt="Students at Cliffs" />
            <ImageTile src="/school_pictures/students_red_3.jpg" alt="House colours" />
            <ImageTile src="/school_pictures/students_red_2.jpg" alt="Learners on campus" />
            <ImageTile src="/school_pictures/students_red_5.jpg" alt="House spirit" />
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-red-100 bg-red-50/70 p-5 text-sm text-slate-800">
          <h2 className="text-sm font-semibold text-red-800">
            A conducive learning environment
          </h2>
          <p className="mt-2">
            Set in the tranquil community of Solomio, our campus provides a focused, peaceful
            environment that is free from city distractions — while remaining easily accessible to
            families across the region.
          </p>
          <p className="mt-2">
            Every facility at Cliffs International College is designed to support effective
            teaching and active learning, from purpose‑built classrooms to specialist laboratories
            and safe transport links.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}

type FacilityProps = {
  title: string;
  body: string;
};

function FacilityCard({ title, body }: FacilityProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      <p className="mt-2">{body}</p>
    </article>
  );
}

type ImageTileProps = {
  src: string;
  alt: string;
};

function ImageTile({ src, alt }: ImageTileProps) {
  return (
    <div className="group relative h-28 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md sm:h-32">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

