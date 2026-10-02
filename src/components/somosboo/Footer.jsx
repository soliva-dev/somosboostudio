import React from "react";
import { Instagram, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "./Navbar";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
];

export default function Footer() {
  return (
    <footer className="bg-boo-obsidian text-boo-cream pt-16 pb-10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-boo-cream/10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-boo-cream/60 font-light tracking-wide">
              Branding · Rebranding · Diseño
            </p>
          </div>

          {/* Nav */}
          <nav className="md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-boo-cream/40">
              Navegación
            </span>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-boo-cream/70 hover:text-boo-lime transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-boo-cream/40">
              Contacto
            </span>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-boo-cream/80 hover:text-boo-lime transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                  WhatsApp · +54 351 763 0648
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/somos.boo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-boo-cream/80 hover:text-boo-lime transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.75} />
                  @somos.boo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-boo-cream/40 font-light">
            © {new Date().getFullYear()} Somos Boo Studio. Todos los derechos reservados.
          </p>
          <p className="text-xs text-boo-cream/40 font-light tracking-wide">
            Diseñado con intención.
          </p>
        </div>
      </div>
    </footer>
  );
}