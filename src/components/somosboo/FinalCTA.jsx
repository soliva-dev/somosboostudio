import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "./Navbar";

export default function FinalCTA() {
  return (
    <section className="relative bg-boo-lime text-boo-obsidian py-24 sm:py-36 lg:py-48 overflow-hidden">
      {/* Decorative oversized word */}
      <div className="pointer-events-none select-none absolute -top-6 left-0 right-0 overflow-hidden">
        <span className="block text-center font-display font-extrabold text-[20vw] leading-none text-boo-obsidian/[0.05] whitespace-nowrap">
          BOO
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold leading-[0.92] tracking-[-0.02em] text-[11vw] sm:text-[8vw] lg:text-[6.5vw] xl:text-[110px]"
        >
          ¿HACEMOS ALGO BUENO
          <br />
          CON TU MARCA?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-lg sm:text-xl text-boo-obsidian/70 font-light max-w-xl mx-auto"
        >
          Contanos qué estás construyendo y vemos cómo podemos ayudarte.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-boo-obsidian px-8 py-5 text-sm sm:text-base font-semibold uppercase tracking-[0.06em] text-boo-cream hover:px-12 transition-all duration-400 ease-out"
          >
            Hablemos por WhatsApp
            <ArrowUpRight
              className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={2.5}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}