import Image from "next/image";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Cliffs International College. Visit us at 20440 Victory Park, Solomio, Ruwa, Zimbabwe. Phone: 0783 841 141. Email: cliftonmataruse2@gmail.com",
  keywords: ["contact school", "school address Zimbabwe", "Ruwa school location", "school phone number"],
  openGraph: {
    title: "Contact | Cliffs International College",
    description: "Visit Cliffs International College in Solomio, Ruwa. Contact us for admissions and inquiries.",
    images: [
      {
        url: "/school_pictures/school_layout_1.jpg",
        width: 1200,
        height: 630,
        alt: "Cliffs International College campus location",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">
              Contact
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Visit Cliffs International College
            </h1>
            <p className="mt-3 text-sm text-slate-700 sm:text-[15px]">
              We welcome visits, calls and enquiries. Our administration team is always happy to
              assist.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-800">
              <ContactRow label="Physical Address">
                20440 Victory Park, Solomio, Ruwa, Zimbabwe
              </ContactRow>
              <ContactRow label="Phone / WhatsApp">
                0783 841 141 · 0785 638 463
              </ContactRow>
              <ContactRow label="Email">
                cliftonmataruse2@gmail.com
              </ContactRow>
              <ContactRow label="Location">
                Solomio, Ruwa — a peaceful semi‑rural community offering a calm, focused learning
                environment.
              </ContactRow>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative h-40 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 sm:h-48">
              <Image
                src="/school_pictures/school_layout_1.jpg"
                alt="Cliffs International College campus"
                fill
                className="object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <iframe
                title="Cliffs International College Location"
                src="https://www.google.com/maps?q=20440+Victory+Park,+Solomio,+Ruwa,+Zimbabwe&output=embed"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </header>
      </div>
    </SiteShell>
  );
}

type ContactRowProps = {
  label: string;
  children: React.ReactNode;
};

function ContactRow({ label, children }: ContactRowProps) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>
      <div className="text-sm text-slate-800">{children}</div>
    </div>
  );
}

