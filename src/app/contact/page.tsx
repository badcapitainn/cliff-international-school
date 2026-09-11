import Image from "next/image";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, GraduationCap } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Cliffs International College. Visit us at 20440 Victory Park, Ruwa, Zimbabwe. Phone: 0783 841 141. Email: cliftonmataruse2@gmail.com",
  keywords: ["contact school", "school address Zimbabwe", "Ruwa school location", "school phone number"],
  openGraph: {
    title: "Contact | Cliffs International College",
    description: "Visit Cliffs International College in Victory Park, Ruwa. Contact us for admissions and inquiries.",
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
      {/* Page Hero Header */}
      <div className="bg-slate-900 text-white py-14 sm:py-16 border-b-4 border-red-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              Get in Touch · Victory Park, Ruwa
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Contact &amp; Campus Location
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We welcome visits, calls, and admissions inquiries. Our administration team is always ready to assist prospective and current families.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-12">
        {/* Contact Cards Grid */}
        <section>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center mb-3">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900">Phone Calls</h3>
                <p className="mt-1 text-xs text-slate-500">General administration inquiries</p>
                <div className="mt-3 space-y-1 text-xs sm:text-sm font-semibold text-slate-800">
                  <p>0783 841 141</p>
                  <p>0785 638 463</p>
                </div>
              </div>
              <a
                href="tel:+263783841141"
                className="mt-4 inline-block text-xs font-semibold text-red-700 hover:text-red-800"
              >
                Call Hotline &rarr;
              </a>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900">WhatsApp Chat</h3>
                <p className="mt-1 text-xs text-slate-500">Instant admissions chat</p>
                <div className="mt-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <p>+263 783 841 141</p>
                </div>
              </div>
              <a
                href="https://wa.me/263783841141"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Chat on WhatsApp &rarr;
              </a>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900">Email Enquiries</h3>
                <p className="mt-1 text-xs text-slate-500">Official correspondence</p>
                <div className="mt-3 text-xs sm:text-sm font-semibold text-slate-800 break-all">
                  <p>cliftonmataruse2@gmail.com</p>
                </div>
              </div>
              <a
                href="mailto:cliftonmataruse2@gmail.com"
                className="mt-4 inline-block text-xs font-semibold text-blue-700 hover:text-blue-800"
              >
                Send an Email &rarr;
              </a>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900">Office Hours</h3>
                <p className="mt-1 text-xs text-slate-500">Visiting &amp; administration</p>
                <div className="mt-3 text-xs sm:text-sm font-medium text-slate-800">
                  <p className="font-semibold">Mon – Fri:</p>
                  <p>7:30 AM – 4:30 PM</p>
                </div>
              </div>
              <span className="mt-4 text-xs font-semibold text-slate-400">Weekends by Appointment</span>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Map & Physical Campus Section */}
        <section className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <FadeIn direction="left" className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-red-800">
                <MapPin className="h-5 w-5" />
                <h3 className="font-serif text-xl font-bold text-slate-900">Physical Campus Location</h3>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                20440 Victory Park, Ruwa, Zimbabwe
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Set in the tranquil community of Victory Park in Ruwa, our campus offers a calm, focused atmosphere free from metropolitan traffic and urban noise — while remaining fully connected and accessible for commuters across the area.
              </p>
              <div className="border-t border-slate-100 pt-3 text-xs text-slate-600 space-y-1">
                <p>• <strong>Transport:</strong> Dedicated school kombi available along key routes.</p>
                <p>• <strong>Parking:</strong> Safe on-site visitor parking available during campus hours.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-900 bg-slate-950 p-6 text-white space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <GraduationCap className="h-5 w-5" />
                <h4 className="font-serif text-base font-bold">School Portal Access</h4>
              </div>
              <p className="text-xs text-slate-300">
                Enrolled students and guardians can access academic records, notices, and term materials directly via the portal.
              </p>
              <a
                href="https://cic-portal.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-red-700 px-5 py-2 text-xs font-semibold text-white hover:bg-red-600 transition-colors"
              >
                <span>Launch Portal (cic-portal.app)</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="lg:col-span-7 space-y-4">
            <div className="overflow-hidden rounded-3xl border-2 border-slate-200 shadow-md bg-slate-100">
              <iframe
                title="Cliffs International College Location Map"
                src="https://www.google.com/maps?q=20440+Victory+Park,+Ruwa,+Zimbabwe&output=embed"
                className="h-80 sm:h-96 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <Image
                src="/school_pictures/school_layout_1.jpg"
                alt="Cliffs International College Campus"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </section>
      </div>
    </SiteShell>
  );
}
