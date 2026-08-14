"use client";

import { MapPin, Phone, ChevronRight, Sparkles, CalendarClock } from "lucide-react";

const SECONDARY = "#1D4ED8";
const SECONDARY_HOVER = "#1E40AF";

const announcements = [
  "New Batches Starting from 1st September 2026 — Enroll Now!",
  "25+ Selections in JEE Main & NEET UG 2024 from TRI-S CLASSES",
  "Free Scholarship Cum Admission Test — Every Sunday 10 AM",
  "Limited Seats Left in JEE Dropper & NEET Dropper Batches",
];

export default function AnnouncementBar() {
  return (
    <div className="bg-[#0F2C59] text-white z-50 overflow-hidden">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-stretch">
          <div className="flex items-center gap-2 px-4 py-2 flex-shrink-0 font-bold text-[12px] tracking-wider uppercase whitespace-nowrap" style={{ backgroundColor: SECONDARY }}>
            <Sparkles className="w-3.5 h-3.5 text-white" />
            Announcement
          </div>
          <div className="marquee-wrapper flex-1 overflow-hidden relative">
            <div
              className="marquee-track flex items-center gap-10 whitespace-nowrap py-2 pl-6"
              style={{ minWidth: "max-content" }}
            >
              {[...announcements, ...announcements, ...announcements].map((a, i) => (
                <div key={i} className="flex items-center gap-2 text-[12.5px] font-semibold text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: SECONDARY }}></span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between gap-2 text-[12px] font-semibold">
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <span className="pulse-badge inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: SECONDARY }}></span>
          <span className="flex items-center gap-1.5 flex-wrap">
            <CalendarClock className="w-3.5 h-3.5 flex-shrink-0 hidden sm:inline-block" style={{ color: "#93C5FD" }} />
            <span className="hidden sm:inline">Admissions Open for Academic Session 2026–27</span>
            <span className="sm:hidden truncate text-white/90">Admissions Open 2026–27</span>
            <span className="hidden sm:inline text-white/50">|</span>
            <Phone className="w-3.5 h-3.5 flex-shrink-0 hidden sm:inline-block" />
            <a
              href="tel:09807678581"
              className="underline underline-offset-2 hover:text-white transition-colors hidden sm:inline"
              style={{ color: "#93C5FD" }}
            >
              098076 78581
            </a>
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="hidden md:flex items-center gap-1 text-white/70 text-[12px]">
            <MapPin className="w-3 h-3" />
            Panchkoshi Rd, Gilat Bazar, Varanasi
          </span>
          <a
            href="#contact"
            className="flex items-center gap-1 hover:text-white text-[11px] sm:text-[12px] font-bold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg"
            style={{ backgroundColor: SECONDARY }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = SECONDARY_HOVER)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = SECONDARY)}
          >
            Free Demo
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
