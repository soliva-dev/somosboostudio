
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "./Navbar";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef(null);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-[100svh] bg-boo-obsidian text-boo-cream overflow-hidden flex flex-col justify-end pb-12 sm:pb-16 pt-28 sm:pt-32"
    >
      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full grid grid-cols-6 sm:grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-boo-cream last:border-0 hidden sm:block" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`m${i}`} className="border-r border-boo-cream last:border-0 sm:hidden" />
          ))}
        </div>
      </div>

      {/* Lime accent block */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="origin-bottom absolute right-0 top-0 h-full w-[14%] sm:w-[10%] bg-boo-lime hidden xs:block"
        style={{ transformOrigin: "bottom" }}
      />

      {/* Floating tag */}
      {/* <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-28 sm:top-32 left-5 sm:left-12 lg:left-16 z-10"
      >
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-boo-lime">
          <span className="w-8 h-px bg-boo-lime" />
          Estudio creativo · Branding
        </span>
      </motion.div> */}

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 sm:px-8 lg:px-12">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display font-extrabold leading-[0.92] tracking-[-0.02em] text-[13vw] sm:text-[11vw] lg:text-[9.5vw] xl:text-[150px]"
        >
          <motion.span variants={item} className="block">
            DISEÑAMOS
          </motion.span>
          <motion.span variants={item} className="block">
            <span className="text-outline">MARCAS</span>{" "}
            <span className="text-boo-cream">QUE</span>
          </motion.span>
          <motion.span variants={item} className="block">
            TIENEN ALGO
          </motion.span>
          <motion.span variants={item} className="block">
            QUE DECIR.
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 sm:mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <p className="max-w-md text-base sm:text-lg text-boo-cream/70 leading-relaxed font-light">
            Branding, rebranding e identidad visual para negocios que quieren
            verse tan bien como lo que hacen.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-boo-lime px-7 py-4 text-sm font-semibold uppercase tracking-[0.06em] text-boo-obsidian hover:scale-[1.03] active:scale-95 transition-transform duration-300"
            >
              Hablemos de tu marca
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </a>
            <a
              href="#trabajos"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-boo-cream/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.06em] text-boo-cream hover:border-boo-lime hover:text-boo-lime transition-colors duration-300"
            >
              Ver nuestros trabajos
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}