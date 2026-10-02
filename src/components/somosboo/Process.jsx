import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    name: "Conocernos",
    desc: "Entendemos tu negocio, tus objetivos y qué necesitás mejorar.",
  },
  {
    num: "02",
    name: "Pensar",
    desc: "Definimos una dirección estratégica y visual para el proyecto.",
  },
  {
    num: "03",
    name: "Diseñar",
    desc: "Convertimos esa idea en una identidad visual coherente y funcional.",
  },
  {
    num: "04",
    name: "Lanzar",
    desc: "Te entregamos las herramientas necesarias para empezar a usar tu nueva identidad.",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative bg-boo-darkgreen text-boo-cream py-24 sm:py-36 lg:py-44 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-boo-lime">
            <span className="w-8 h-px bg-boo-lime" />
            Proceso
          </span>
          <h2 className="mt-6 font-display font-extrabold leading-[0.95] tracking-[-0.02em] text-[7vw] sm:text-[5vw] lg:text-[4vw] max-w-4xl">
            DEL PRIMER MENSAJE
            <br />
            A UNA MARCA CON <span className="text-boo-lime">IDENTIDAD.</span>
          </h2>
        </motion.div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-boo-cream/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-boo-darkgreen p-8 sm:p-10 lg:p-8 transition-colors duration-500 hover:bg-boo-obsidian"
            >
              <span className="font-display font-extrabold text-6xl sm:text-7xl text-boo-lime leading-none block">
                {s.num}
              </span>
              <h3 className="mt-8 font-display font-bold text-2xl uppercase tracking-tight">
                {s.name}
              </h3>
              <p className="mt-3 text-boo-cream/70 text-base leading-relaxed font-light">
                {s.desc}
              </p>
              <span className="mt-8 block h-px w-10 bg-boo-lime/40 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}