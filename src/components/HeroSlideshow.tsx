"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/school_pictures/school_layout_1.jpg",
    label: "Solomio campus",
    caption:
      "A peaceful, semi‑rural setting in Solomio, Ruwa — away from city noise, yet well‑connected.",
  },
  {
    src: "/school_pictures/classroom_layout_1.jpg",
    label: "Focused classrooms",
    caption:
      "Small classes and attentive teachers create space for every learner to be seen and supported.",
  },
  {
    src: "/school_pictures/students_7.jpg",
    label: "Digital excellence",
    caption:
      "Award‑winning ICT teams leading the way in national Digital Minds competitions.",
  },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative border-b border-slate-200 bg-black text-white">
      {/* Blurred full-width background based on active slide */}
      <div className="pointer-events-none absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={slides[active].src}
            alt={slides[active].label}
            fill
            className="object-cover blur-3xl opacity-40"
          />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[360px] max-w-6xl flex-col justify-center gap-8 px-4 py-12 sm:min-h-[420px] sm:px-6 sm:py-16 lg:min-h-[480px] lg:flex-row lg:items-center lg:px-8 lg:py-20">
        <div className="relative w-full overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/90 shadow-[0_24px_80px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:scale-[1.01] lg:w-2/3">
          <div className="relative h-[260px] w-full sm:h-[320px] lg:h-[360px]">
            {slides.map((slide, index) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === active
                    ? "opacity-100 translate-x-0 scale-100"
                    : "pointer-events-none opacity-0 translate-x-4 scale-105"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.label}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5" />
              </div>
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-3 pt-2 text-xs sm:px-5">
            <div className="max-w-xs text-[11px] text-slate-100">
              <div className="font-semibold text-white">{slides[active].label}</div>
              <div className="mt-1 text-[11px] text-slate-200">
                {slides[active].caption}
              </div>
            </div>
            <div className="flex items-center gap-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === active ? "w-5 bg-red-500" : "w-2 bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full space-y-4 lg:w-1/3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
            Old World Heritage · Future‑Forward Innovation
          </p>
          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Equipping youngsters to{" "}
            <span className="text-red-400">
              compete internationally
            </span>
          </h1>
          <p className="max-w-md text-sm text-slate-200 sm:text-[15px]">
            Founded in 2018 in Solomio, Ruwa, Cliffs International College is a registered,
            independent secondary school under MoPSE — committed to academic excellence, holistic
            development and future‑ready graduates.
          </p>
        </div>
      </div>
    </section>
  );
}

