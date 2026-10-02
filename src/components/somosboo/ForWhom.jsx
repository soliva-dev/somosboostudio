import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "./Navbar";

const moments = [
  {
    title: "Estoy empezando",
    desc: "Tengo un negocio/emprendimiento y necesito construir una identidad desde cero.",
  },
  {
    title: "Mi marca ya no me representa",
    desc: "Mi negocio creció y mi identidad quedó atrás.",
  },
  {
    title: "Quiero verme más profesional",
    desc: "Sé que mi producto o servicio es bueno, pero mi imagen no lo comunica.",
  },
  {
    title: "Necesito ordenar mi marca",
    desc: "Tengo logo, colores y piezas, pero todo se siente desconectado.",
  },
];

export default function ForWhom() {
  return (
    <section className="relative bg-boo-petrol text-boo-cream py-24 sm:py-36 lg:py-44 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-boo-lime">
            <span className="w-8 h-px bg-boo-lime" />
            Para quién
          </span>
          <h2 className="mt-6 font-display font-extrabold leading-[0.95] tracking-[-0.02em] text-[7vw] sm:text-[5.5vw] lg:text-[4.2vw] max-w-4xl">
            ¿ESTÁS EN ALGUNO
            <br />
            DE ESTOS <span className="text-boo-lime">MOMENTOS?</span>
          </h2>
        </motion.div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {moments.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border border-boo-cream/15 p-8 sm:p-10 hover:bg-boo-obsidian transition-colors duration-500"
            >
              <span className="font-display font-light text-2xl text-boo-lime/70">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight leading-tight">
                {m.title}
              </h3>
              <p className="mt-3 text-boo-cream/70 text-base sm:text-lg font-light leading-relaxed">
                {m.desc}
              </p>
              <span className="mt-6 block h-px w-8 bg-boo-lime/40 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 border-t border-boo-cream/15 pt-10"
        >
          <p className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl leading-snug max-w-2xl">
            Si te sentiste identificado, probablemente tengamos algo que hablar.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-boo-lime px-7 py-4 text-sm font-semibold uppercase tracking-[0.06em] text-boo-obsidian hover:scale-[1.03] active:scale-95 transition-transform duration-300"
          >
            Hablemos
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}