"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  
  
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  ChevronRight,
  Clock,
  
} from "lucide-react";
import { useState } from "react";

type SiteShellProps = {
  children: React.ReactNode;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/campus-life", label: "Campus Life" },
  { href: "/achievements", label: "Achievements" },
  { href: "/facilities", label: "Facilities" },
  { href: "/contact", label: "Contact" },
];

export default function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 font-sans selection:bg-red-900 selection:text-white">
      {/* 1. TOP UTILITY BAR (Inspired by St George's & Prince Edward) */}
      <div className="border-b border-slate-800 bg-slate-950 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          {/* Quick contact shortcuts */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="tel:+263783841141"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-red-500" />
              <span>+263 783 841 141</span>
            </a>
            <a
              href="mailto:cliftonmataruse2@gmail.com"
              className="hidden items-center gap-1.5 transition-colors hover:text-white sm:inline-flex"
            >
              <Mail className="h-3.5 w-3.5 text-red-500" />
              <span>cliftonmataruse2@gmail.com</span>
            </a>
            <span className="hidden items-center gap-1.5 text-slate-400 lg:inline-flex">
              <MapPin className="h-3.5 w-3.5 text-red-500" />
              <span>Solomio, Ruwa, Zimbabwe</span>
            </span>
          </div>

          {/* Quick utility action links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* <span className="hidden items-center gap-1 rounded bg-slate-900 px-2 py-0.5 text-[11px] font-medium text-slate-300 md:inline-flex">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              MoPSE Registered
            </span>
            <Link
              href="/admissions"
              className="hidden font-medium text-slate-300 hover:text-white sm:inline"
            >
              Admissions 2025/2026
            </Link>
            <span className="hidden text-slate-700 sm:inline">|</span> */}
            <a
              href="https://cic-portal.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-red-700 px-3 py-1 text-xs font-semibold text-white shadow-xs transition-all hover:bg-red-600"
            >
              {/* <GraduationCap className="h-3.5 w-3.5" /> */}
              <span>School Portal</span>
              <ExternalLink className="h-3 w-3 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN INSTITUTIONAL HEADER */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* School Emblem & Stately Title */}
          <Link href="/" className="group flex items-center gap-3.5">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-red-800 shadow-sm transition-transform group-hover:scale-105 sm:h-14 sm:w-14">
              <Image
                src="/school_pictures/Logo.jpg"
                alt="Cliffs International College Crest"
                width={56}
                height={56}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="block font-serif text-lg font-bold tracking-tight text-slate-900 group-hover:text-red-800 sm:text-xl md:text-2xl">
                Cliffs International College
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-700 sm:text-xs">
                  Secondary School
                </span>
                <span className="hidden text-slate-300 md:inline">|</span>
                <span className="hidden text-[11px] italic text-slate-500 lg:inline">
                  &ldquo;Equipping youngsters to compete internationally&rdquo;
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:gap-2 xl:gap-3 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "relative px-3 py-2 text-sm font-semibold transition-all " +
                    (active
                      ? "text-red-800 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-red-800"
                      : "text-slate-700 hover:text-red-800 hover:after:absolute hover:after:bottom-0 hover:after:left-3 hover:after:right-3 hover:after:h-0.5 hover:after:bg-slate-300")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action & Mobile Toggle */}
          {/* <div className="flex items-center gap-3">
            <Link
              href="/admissions"
              className="hidden rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-800 sm:inline-flex"
            >
              Enroll Now
            </Link>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div> */}
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-lg md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={
                      "flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition-colors " +
                      (active
                        ? "bg-red-50 text-red-800 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-red-800")
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 border-t border-slate-100 pt-4 space-y-2">
              <a
                href="https://cic-portal.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800"
              >
                {/* <GraduationCap className="h-4 w-4" /> */}
                <span>Access School Portal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                <span>Apply for Admission</span>
              </Link>
            </div>

            <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-red-700" />
                <span>+263 783 841 141 / 0785 638 463</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-red-700" />
                <span>20440 Victory Park, Solomio, Ruwa</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. PAGE CONTENT */}
      <main className="flex-1">{children}</main>

      {/* 4. STATELY 4-COLUMN FOOTER (Academic Standard) */}
      <footer className="border-t-4 border-red-800 bg-slate-950 text-slate-300">
        {/* Main Footer Directory */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: School Identity */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/school_pictures/Logo.jpg"
                  alt="Cliffs International College Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-red-700 object-contain bg-white"
                />
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Cliffs International
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-red-400 font-semibold">
                    College Secondary
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-400">
                Founded in 2018 in Solomio, Ruwa, Cliffs International College is a registered independent secondary school under MoPSE, equipping youngsters to excel academically and compete internationally.
              </p>

              {/* <div className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-xs text-slate-300 border border-slate-800">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>MoPSE Registered School (Zimbabwe)</span>
              </div> */}
            </div>

            {/* Column 2: Academic Programs */}
            <div>
              <h4 className="font-serif text-base font-semibold text-white border-b border-slate-800 pb-2">
                Academic Programs
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link href="/academics" className="transition-colors hover:text-white flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                    Ordinary Level (Form 1 – 4)
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="transition-colors hover:text-white flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                    Advanced Level (Form 5 – 6)
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="transition-colors hover:text-white flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                    Faculty of Sciences & STEM
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="transition-colors hover:text-white flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                    Faculty of Commercials
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="transition-colors hover:text-white flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                    Faculty of Humanities & Languages
                  </Link>
                </li>
                <li>
                  <Link href="/achievements" className="transition-colors hover:text-white flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                    100% A-Level Pass Rate (2024, 2025)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Campus & Resources */}
            <div>
              <h4 className="font-serif text-base font-semibold text-white border-b border-slate-800 pb-2">
                Campus & Portals
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                <li>
                  <a
                    href="https://cic-portal.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-red-400 hover:text-red-300 flex items-center gap-1.5"
                  >
                    <GraduationCap className="h-4 w-4" />
                    Student & Parent Portal
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <Link href="/admissions" className="transition-colors hover:text-white flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                    Admissions & Requirements
                  </Link>
                </li>
                <li>
                  <Link href="/facilities" className="transition-colors hover:text-white flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                    Science Lab & Computer Suite
                  </Link>
                </li>
                <li>
                  <Link href="/facilities" className="transition-colors hover:text-white flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                    School Transport Service (Kombi)
                  </Link>
                </li>
                <li>
                  <Link href="/campus-life" className="transition-colors hover:text-white flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                    Clubs, Debate & Social Outreach
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Location */}
            <div>
              <h4 className="font-serif text-base font-semibold text-white border-b border-slate-800 pb-2">
                Contact & Location
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 text-red-500 shrink-0" />
                  <span>20440 Victory Park, Solomio, Ruwa, Zimbabwe</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-red-500 shrink-0" />
                  <a href="tel:+263783841141" className="hover:text-white">
                    0783 841 141 / 0785 638 463
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-red-500 shrink-0" />
                  <a href="mailto:cliftonmataruse2@gmail.com" className="hover:text-white break-all">
                    cliftonmataruse2@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Mon – Fri: 7:30 AM – 4:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Sister Schools Network */}
        <div className="border-t border-slate-900 bg-black/40">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>
              &copy; {new Date().getFullYear()} Cliffs International College Secondary School. All rights reserved.
            </p>
            <p className="text-slate-400">
              <span className="text-slate-200 font-semibold">Cliffs Family of Schools:</span> Hartcliffe Secondary · Chenai Primary · Cliffs Primary Solomio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

