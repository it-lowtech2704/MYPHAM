import React from "react";

interface LogoProps {
  className?: string;
  isSolid?: boolean;
}

export function Logo({ className = "", isSolid = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Coconut/Palm Leaf Circle SVG */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-12 ${
          isSolid
            ? "bg-palma-teal text-white shadow-md shadow-palma-teal/20"
            : "bg-white text-palma-teal shadow-md"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-7 h-7"
        >
          {/* Inner decorative circle */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            opacity="0.8"
          />
          {/* Palm branch stem */}
          <path
            d="M32 72 Q50 50 68 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Leaflets - Left Side */}
          <path d="M40 60 Q28 55 32 47 Q41 54 43 56" fill="currentColor" />
          <path d="M47 50 Q36 44 39 37 Q48 44 49 46" fill="currentColor" />
          <path d="M54 41 Q44 34 46 27 Q55 35 56 37" fill="currentColor" />
          <path d="M60 32 Q51 25 53 19 Q61 27 62 29" fill="currentColor" />

          {/* Leaflets - Right Side */}
          <path d="M45 64 Q57 60 53 52 Q47 57 44 60" fill="currentColor" />
          <path d="M51 54 Q63 49 59 41 Q53 47 50 50" fill="currentColor" />
          <path d="M57 45 Q69 38 65 30 Q59 37 56 40" fill="currentColor" />
          <path d="M63 36 Q73 28 69 21 Q64 30 61 32" fill="currentColor" />

          {/* Leaflets - Top Tip */}
          <path d="M68 28 Q72 18 67 14 Q63 22 66 26" fill="currentColor" />
        </svg>
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
