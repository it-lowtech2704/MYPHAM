"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Câu chuyện", href: "#story" },
    { name: "Thành phần", href: "#ingredients" },
    { name: "Sản phẩm", href: "#products" },
    { name: "Cam kết", href: "#usp" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const isSolid = scrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isSolid
          ? "py-4 bg-palma-cream/95 backdrop-blur-md shadow-md border-b border-palma-teal/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home">
          <Logo isSolid={isSolid} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                isSolid
                  ? "text-palma-charcoal/80 hover:text-palma-teal"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${
            isSolid
              ? "text-palma-charcoal hover:text-palma-teal"
              : "text-white hover:text-palma-teal-light"
          }`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-palma-cream/98 backdrop-blur-lg border-b border-palma-teal/10 shadow-lg py-6 px-8 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-palma-charcoal/90 hover:text-palma-teal py-2 transition-all border-b border-palma-teal/5"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
