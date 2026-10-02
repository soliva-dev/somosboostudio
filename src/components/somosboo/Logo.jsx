import React from "react";

// Tratamiento tipográfico del logotipo de Somos Boo Studio.
// Cuando se entregen los logos oficiales, reemplazar este componente por <img>.
export default function Logo({ className = "", variant = "dark" }) {
  const color = variant === "light" ? "text-boo-cream" : "text-boo-obsidian";
  return (
    <span className={`font-display font-extrabold tracking-tight leading-none ${color} ${className}`}>
      <span className="block text-[15px] sm:text-base uppercase tracking-[0.18em]">
        Somos Boo
      </span>
      <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.42em] opacity-60 mt-0.5">
        Studio
      </span>
    </span>
  );
}