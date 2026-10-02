import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section
      id="estudio"
      className="relative bg-boo-cream text-boo-obsidian py-24 sm:py-36 lg:py-44 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-boo-petrol"
        >
          <span className="w-8 h-px bg-boo-petrol" />
          El estudio
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 font-display font-extrabold leading-[0.95] tracking-[-0.02em] text-[8.5vw] sm:text-[6.5vw] lg:text-[5vw] max-w-5xl"
        >
          NO HACEMOS MARCAS
          <br />
          PARA LLENAR <span className="text-boo-petrol">ESPACIOS.</span>
        </motion.h2>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg sm:text-xl leading-relaxed text-boo-obsidian/80 font-light">
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              Creamos identidades que ayudan a que un negocio se vea, se entienda
              y se recuerde.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              Somos Boo Studio es un estudio creativo enfocado en construir y
              transformar marcas. Trabajamos con emprendedores, comercios,
              negocios locales y pymes que necesitan crear una identidad desde
              cero o llevar la que ya tienen a otro nivel.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              Queremos que cada proyecto tenga personalidad, coherencia y una
              identidad que pueda crecer junto al negocio.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-display font-semibold text-boo-obsidian text-2xl sm:text-3xl leading-snug pt-2"
            >
              Diseñar no es solamente hacer algo lindo. Es encontrar una forma
              de hacer que una marca tenga sentido.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Big background word */}
      <div className="pointer-events-none select-none absolute -bottom-4 sm:-bottom-8 left-0 right-0 overflow-hidden">
        <span className="block text-center font-display font-extrabold text-[22vw] leading-none text-boo-obsidian/[0.04] whitespace-nowrap">
          SOMOS BOO
        </span>
      </div>
    </section>
  );
}