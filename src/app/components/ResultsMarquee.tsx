"use client";

import { Award, Trophy, Medal, TrendingUp } from "lucide-react";

const results = [
  { name: "Ravi S.", rank: "AIR 1,247", exam: "JEE Advanced 2024", icon: <Trophy className="w-4 h-4" />, color: "#FFB347" },
  { name: "Priya M.", rank: "AIR 563", exam: "NEET UG 2024", icon: <Medal className="w-4 h-4" />, color: "#059669" },
  { name: "Ankit K.", rank: "98.7%ile", exam: "JEE Main 2024", icon: <Award className="w-4 h-4" />, color: "#E04D01" },
  { name: "Kavya S.", rank: "623/720", exam: "NEET UG 2024", icon: <TrendingUp className="w-4 h-4" />, color: "#7C3AED" },
  { name: "Mohit P.", rank: "96.4%ile", exam: "JEE Main 2024", icon: <Trophy className="w-4 h-4" />, color: "#FFB347" },
  { name: "Aditi R.", rank: "95.8%ile", exam: "JEE Main 2024", icon: <Medal className="w-4 h-4" />, color: "#059669" },
  { name: "Shivam G.", rank: "AIR 2,184", exam: "JEE Advanced 2024", icon: <Award className="w-4 h-4" />, color: "#E04D01" },
  { name: "Naina V.", rank: "589/720", exam: "NEET UG 2024", icon: <TrendingUp className="w-4 h-4" />, color: "#7C3AED" },
];

export default function ResultsMarquee() {
  return (
    <section className="bg-white border-b border-[#EAE5DC] py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FFB347] to-[#E04D01] flex items-center justify-center shadow-md">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-heading font-extrabold text-[14px] text-[#0F2C59] leading-tight">
              Our Recent Results
            </div>
            <div className="text-[11px] text-[#6B7280] font-semibold">
              2024 — 25 Selections in IIT JEE & NEET
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 bg-[#FFB347]/10 text-[#B45309] text-[11px] font-bold px-3 py-1 rounded-full">
            <Award className="w-3 h-3" />
            5 Students in TOP 5000
          </div>
          <div className="hidden sm:flex items-center gap-1.5 bg-[#059669]/10 text-[#047857] text-[11px] font-bold px-3 py-1 rounded-full">
            <Medal className="w-3 h-3" />
            90% Students Qualified JEE Main
          </div>
          <div className="flex items-center gap-1.5 bg-[#7C3AED]/10 text-[#6D28D9] text-[11px] font-bold px-3 py-1 rounded-full">
            <TrendingUp className="w-3 h-3" />
            Avg Score +40%
          </div>
        </div>
      </div>

      <div className="marquee-wrapper w-full overflow-hidden relative">
        <div
          className="marquee-track flex gap-4 whitespace-nowrap pl-4"
          style={{ minWidth: "max-content" }}
        >
          {[...results, ...results].map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white border border-[#EAE5DC] rounded-xl px-4 py-2.5 card-shadow flex-shrink-0"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${r.color}18`, color: r.color }}
              >
                {r.icon}
              </div>
              <div className="flex items-center gap-2.5">
                <div>
                  <div className="font-heading font-bold text-[13px] text-[#0F2C59] leading-tight">
                    {r.name}
                  </div>
                  <div className="text-[10.5px] text-[#6B7280] font-medium">
                    {r.exam}
                  </div>
                </div>
                <div
                  className="font-heading font-extrabold text-[14px] px-2.5 py-1 rounded-lg"
                  style={{ backgroundColor: `${r.color}15`, color: r.color }}
                >
                  {r.rank}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
