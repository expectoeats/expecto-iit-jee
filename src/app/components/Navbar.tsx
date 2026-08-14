"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

const SECONDARY = "#1D4ED8";
const SECONDARY_HOVER = "#1E40AF";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#reviews" },
  { label: "Offline Centers", href: "#about" },
  { label: "Faculty", href: "#director" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-md" : "bg-[#FDFBF7]/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#0F2C59]/15 shadow-md group-hover:scale-105 transition-transform duration-200 bg-white">
              <Image
                src="/logo.jpg"
                alt="TRI-S Classes Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain p-0.5"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="font-heading font-extrabold text-[15px] sm:text-[16px] text-[#0F2C59] leading-tight tracking-tight">
                TRI-S CLASSES
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-wide" style={{ color: SECONDARY }}>
                त्रि-स क्लासेज
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[13px] font-semibold text-[#374151] hover:text-[#0F2C59] px-3 py-2 rounded-lg hover:bg-[#0F2C59]/5 transition-all duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" style={{ backgroundColor: SECONDARY }}></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-white text-[13px] font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200 whitespace-nowrap border-2 border-[#1D4ED8]"
              style={{ backgroundColor: SECONDARY }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0F2C59] hover:bg-[#0F2C59]/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 bg-white border-t border-[#EAE5DC] shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 px-3 text-[14px] font-semibold text-[#374151] hover:text-[#0F2C59] hover:bg-[#0F2C59]/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 text-white font-bold text-[14px] py-2.5 rounded-full"
            style={{ backgroundColor: SECONDARY }}
          >
            <Phone className="w-4 h-4" />
            Enquire Now / Book Free Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
