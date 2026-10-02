import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    name: "Branding",
    desc: "Construimos la identidad visual de tu marca desde cero.",
  },
  {
    num: "02",
    name: "Rebranding",
    desc: "Transformamos una identidad existente para llevarla a una nueva etapa.",
  },
  {
    num: "03",
    name: "Identidad visual",
    desc: "Definimos los recursos visuales que hacen reconocible y consistente a tu marca.",
  },
  {
    num: "04",
    name: "Landing pages",
    desc: "Diseñamos páginas web claras, modernas y pensadas para presentar tu negocio y generar consultas.",
  },
  {
    num: "05",
    name: "Fotografía de producto",
    desc: "Creamos imágenes que ayudan a mostrar tus productos de una manera más profesional y atractiva.",
  },
];

const greens = [
  "bg-boo-darkgreen",
  "bg-boo-intense",
  "bg-boo-petrol",
  "bg-boo-darkgreen",
  "bg-boo-intense",
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="servicios"
      className="relative bg-boo-obsidian text-boo-cream py-24 sm:py-36 lg:py-44 overflow-hidden"
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
            Servicios
          </span>
          <h2 className="mt-6 font-display font-extrabold leading-[0.95] tracking-[-0.02em] text-[8vw] sm:text-[6vw] lg:text-[4.5vw] max-w-4xl">
            LO QUE PODEMOS HACER
            <br />
            POR TU <span className="text-boo-lime">MARCA.</span>
          </h2>
        </motion.div>

        <ul className="mt-16 sm:mt-24 border-t border-boo-cream/10">
          {services.map((s, i) => (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActive(i)}
              className="group relative border-b border-boo-cream/10 overflow-hidden"
            >
              {/* Hover background sweep */}
              <span
                className={`absolute inset-0 ${greens[i]} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out -z-0`}
              />
              <div className="relative z-10 grid grid-cols-12 items-center gap-4 py-7 sm:py-10 px-1 sm:px-2 transition-colors duration-500">
                <span className="col-span-2 sm:col-span-1 font-display font-light text-2xl sm:text-3xl text-boo-lime group-hover:text-boo-cream transition-colors duration-500">
                  {s.num}
                </span>
                <h3 className="col-span-10 sm:col-span-5 font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-none group-hover:translate-x-2 transition-transform duration-500">
                  {s.name}
                </h3>
                <p className="col-span-12 sm:col-span-5 text-base sm:text-lg text-boo-cream/70 group-hover:text-boo-cream/90 transition-colors duration-500 font-light leading-relaxed">
                  {s.desc}
                </p>
                <div className="hidden sm:flex sm:col-span-1 justify-end">
                  <ArrowUpRight
                    className="w-7 h-7 text-boo-lime group-hover:text-boo-cream group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}