"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronLeft, ChevronRight, Award, ArrowRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/school_pictures/school_layout_1.jpg",
    tag: "Solomio Campus · Ruwa",
    title: "A Peaceful, Distraction-Free Learning Sanctuary",
    caption:
      "Situated in the tranquil community of Solomio, our campus fosters rigorous academic focus, discipline, and personal development away from urban noise.",
  },
  {
    src: "/school_pictures/students_at debate.jpg",
    tag: "Technology & Competitions",
    title: "Champions in Innovation & Digital Minds",
    caption:
      "1st Place Winners at the Irene Christian College Digital Minds Quiz. Preparing youngsters with digital literacy to compete on national and international stages.",
  },
  {
    src: "/school_pictures/classroom_layout_2.jpg",
    tag: "Academic Excellence · 1:25 Ratio",
    title: "Dedicated Faculty & Individualized Attention",
    caption:
      "ZIMSEC-aligned O & A-Level education from Form 1 to 6, achieving an outstanding 100% A-Level pass rate two years in a row (2024 & 2025).",
  },
  {
    src: "/school_pictures/students_recieving _prize_1.jpg",
    tag: "Holistic Student Development",
    title: "Building Character, Integrity & Leadership",
    caption:
      "Empowering students through debate, sports, science clubs, and community outreach like our partnership with Rusike Children's Home.",
  },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Slideshow Canvas with Ken Burns smooth zoom */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === active ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <motion.div
              animate={{ scale: idx === active ? 1.06 : 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        ))}
        {/* Layered Gradient Vignette for Superior Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl space-y-6">
          {/* Institutional Eyebrow Tag with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`tag-${active}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-200 backdrop-blur-md"
            >
              <Award className="h-3.5 w-3.5 text-amber-400" />
              <span>{slides[active].tag}</span>
            </motion.div>
          </AnimatePresence>

          {/* Majestic Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]"
          >
            Equipping Youngsters to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-200">
              Compete Internationally
            </span>
          </motion.h1>

          {/* Dynamic Caption with Smooth Fade */}
          <div className="min-h-[4.5rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={`caption-${active}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal"
              >
                {slides[active].caption}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* High-Impact Action CTAs with Micro-interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/50 transition-all hover:bg-red-600"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://cic-portal.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-slate-400 hover:bg-slate-800"
              >
                {/* <GraduationCap className="h-4 w-4 text-amber-400" /> */}
                <span>School Portal</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-80" />
              </a>
            </motion.div>

            <Link
              href="/academics"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <span>Explore Curriculum &rarr;</span>
            </Link>
          </motion.div>

          {/* Interactive Slide Controllers & Indicators */}
          <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={prevSlide}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={nextSlide}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden ${
                    i === active ? "w-9 bg-slate-800" : "w-2.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {i === active && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5.5, ease: "linear" }}
                      className="absolute inset-0 bg-red-500 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-400 font-mono">
              0{active + 1} / 0{slides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

