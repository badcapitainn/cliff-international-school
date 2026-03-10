"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/40 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/30">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/school_pictures/Logo.jpg"
              alt="Cliffs International College logo"
              width={48}
              height={48}
              className="h-10 w-10 rounded-full object-contain"
            />
            <div className="leading-tight">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                Cliffs International
              </div>
              <div className="text-lg font-semibold text-slate-900">
                College Secondary
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "text-sm font-medium transition-colors " +
                    (active
                      ? "text-red-700"
                      : "text-slate-700 hover:text-red-700")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={
                        "rounded-lg px-2 py-2 text-sm font-medium " +
                        (active
                          ? "bg-red-50 text-red-700"
                          : "text-slate-700 hover:bg-slate-50 hover:text-red-700")
                      }
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 bg-white">{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Cliffs International College Secondary. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Academics", "Campus Life", "Admissions", "Contact"].map((label) => {
              const item = navItems.find((n) => n.label === label);
              if (!item) return null;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-red-700"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}

