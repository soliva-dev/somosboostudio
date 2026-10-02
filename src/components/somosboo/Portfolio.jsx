import React from "react";
import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";

// PROYECTOS PLACEHOLDER
// Estos bloques son placeholders identificados para reemplazar con imágenes reales.
// Estructura: { name, category, desc, span } — al agregar imágenes, reemplazar el
// bloque de placeholder por una <img> / componente Image con la URL del proyecto.
const projects = [
  {
    name: "Proyecto de branding",
    category: "Branding",
    desc: "Identidad visual construida desde cero para un nuevo emprendimiento.",
    span: "lg:col-span-7 lg:row-span-2",
    tone: "bg-boo-petrol",
  },
  {
    name: "Rebranding de marca",
    category: "Rebranding",
    desc: "Transformación de una identidad existente a una nueva etapa.",
    span: "lg:col-span-5",
    tone: "bg-boo-intense",
  },
  {
    name: "Sistema de identidad",
    category: "Identidad visual",
    desc: "Recursos visuales para hacer una marca reconocible y consistente.",
    span: "lg:col-span-5",
    tone: "bg-boo-darkgreen",
  },
  {
    name: "Landing page",
    category: "Web",
    desc: "Página web clara y moderna pensada para presentar un negocio.",
    span: "lg:col-span-7",
    tone: "bg-boo-obsidian",
  },
];

export default function Portfolio() {
  return (
    <section
      id="trabajos"
      className="relative bg-boo-cream text-boo-obsidian py-24 sm:py-36 lg:py-44 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-boo-petrol">
              <span className="w-8 h-px bg-boo-petrol" />
              Portfolio
            </span>
            <h2 className="mt-6 font-display font-extrabold leading-[0.95] tracking-[-0.02em] text-[10vw] sm:text-[7vw] lg:text-[5.5vw]">
              ALGUNOS <span className="text-boo-petrol">PROYECTOS.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-boo-obsidian/60 font-light leading-relaxed">
            Próximamente compartiremos los proyectos en los que estamos
            trabajando. Por ahora, estos espacios están listos para mostrarse.
          </p>
        </motion.div>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 auto-rows-[280px] lg:auto-rows-[220px]">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, scale: 0.97, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-sm ${p.span} ${p.tone} cursor-default`}
            >
              {/* Placeholder graphic pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full flex items-center justify-center">
                  <ImageOff className="w-12 h-12 sm:w-16 sm:h-16 text-boo-cream" strokeWidth={1} />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-boo-lime/0 group-hover:bg-boo-lime/10 transition-colors duration-500" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-boo-lime font-semibold">
                    {p.category}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-boo-cream/40">
                    Placeholder
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-boo-cream leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-boo-cream/60 font-light max-w-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}