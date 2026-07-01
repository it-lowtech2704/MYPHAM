import React from "react";

interface LogoProps {
  className?: string;
  isSolid?: boolean;
}

export function Logo({ className = "", isSolid = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Coconut/Palm Leaf Official Logo */}
      <div
        className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white border border-palma-teal/10 transition-all duration-500 group-hover:rotate-12 shadow-sm"
      >
        <img
          src="/images/logo.jpg"
          alt="Palma Organics"
          className="w-full h-full object-contain p-1"
        />
      </div>

      {/* Brand Names */}
      <div className="flex flex-col">
        <span
          className={`font-serif text-lg md:text-xl font-extrabold tracking-wide transition-colors duration-300 ${
            isSolid ? "text-palma-teal" : "text-white"
          }`}
        >
          PALMA ORGANICS
        </span>
        <span
          className={`text-[9px] font-bold uppercase tracking-[0.25em] leading-none mt-1 transition-colors duration-300 ${
            isSolid ? "text-palma-brown" : "text-palma-teal-light"
          }`}
        >
          NATURAL CARE
        </span>
      </div>
    </div>
  );
}
