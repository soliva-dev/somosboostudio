import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/543517630648";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Estudio", href: "#estudio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Proceso", href: "#proceso" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-boo-obsidian/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        <a href="#inicio" aria-label="Somos Boo Studio — Inicio" className="shrink-0">
          <img
            src="/images/logo1.png"
            alt="Somos Boo Studio"
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[13px] uppercase tracking-[0.14em] text-boo-cream/70 hover:text-boo-cream transition-colors duration-300"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-boo-lime group-hover:w-full transition-all duration-400 ease-out" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-boo-lime px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-boo-obsidian hover:scale-[1.03] active:scale-95 transition-transform duration-300"
        >
          Hablemos
          <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden text-boo-cream p-2 -mr-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-boo-obsidian border-t border-white/5"
          >
            <ul className="px-5 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-2xl font-display font-semibold text-boo-cream hover:text-boo-lime transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-boo-lime px-6 py-3 text-sm font-semibold uppercase tracking-wide text-boo-obsidian"
                >
                  Hablemos <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}