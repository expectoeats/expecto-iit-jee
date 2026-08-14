"use client";

import Image from "next/image";
import {
  Building2,
  Tv2,
  ClipboardList,
  BookOpen,
  FlaskConical,
  Video,
  Check,
  Phone,
  MapPin,
  Wifi,
  Users,
  Sparkles,
} from "lucide-react";

const SECONDARY = "#1D4ED8";
const SECONDARY_HOVER = "#1E40AF";
const PRIMARY = "#0F2C59";

const BANNER_IMG = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80";

type InfraItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  stat: string;
  color: string;
  gradient: string;
  pattern: string;
  num: string;
};

const infraItems: InfraItem[] = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Large Spacious Classrooms",
    desc: "Spacious, well-ventilated AC classrooms with ergonomic seating for 45+ students — distraction-free, natural light, and noise-proof walls.",
    stat: "100+ Seat Capacity",
    color: "#0F2C59",
    gradient: "from-[#0F2C59] via-[#1E40AF] to-[#3B82F6]",
    pattern: "01",
    num: "01",
  },
  {
    icon: <Tv2 className="w-8 h-8" />,
    title: "High-Tech Digital Boards",
    desc: "Full HD interactive smart boards with 3D animations, annotated notes & wireless screen sharing in every classroom for visual learning.",
    stat: "All Classrooms Equipped",
    color: SECONDARY,
    gradient: "from-[#1D4ED8] via-[#2563EB] to-[#60A5FA]",
    pattern: "02",
    num: "02",
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Regular Test Series",
    desc: "Weekly chapter-wise tests, monthly full-syllabus JEE/NEET pattern mocks + OMR-based practice with detailed scorecard analytics.",
    stat: "40+ Tests Per Year",
    color: "#059669",
    gradient: "from-[#047857] via-[#059669] to-[#34D399]",
    pattern: "03",
    num: "03",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Comprehensive Study Material",
    desc: "Expert-curated printed booklets aligned with NCERT + latest exam patterns: concept theory, solved examples, DPPs, and revision notes.",
    stat: "Includes DPPs & Notes",
    color: "#7C3AED",
    gradient: "from-[#6D28D9] via-[#7C3AED] to-[#A78BFA]",
    pattern: "04",
    num: "04",
  },
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: "Science Lab Access",
    desc: "Fully equipped Physics, Chemistry & Biology labs with modern apparatus for NEET & Board practicals — hands-on learning, not just theory.",
    stat: "Modern Equipment",
    color: "#D97706",
    gradient: "from-[#B45309] via-[#D97706] to-[#FBBF24]",
    pattern: "05",
    num: "05",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Recorded Video Lectures",
    desc: "Missed a class? No problem — LMS portal par har lecture ki HD recording access karo 24×7 kisi bhi device pe — unlimited views.",
    stat: "On-Demand Access",
    color: "#DC2626",
    gradient: "from-[#B91C1C] via-[#DC2626] to-[#F87171]",
    pattern: "06",
    num: "06",
  },
];

const perks = [
  { icon: <Wifi className="w-4 h-4" />, text: "High-Speed Wi-Fi Campus" },
  { icon: <Users className="w-4 h-4" />, text: "Dedicated Self-Study Zone" },
  { icon: <Sparkles className="w-4 h-4" />, text: "24×7 Doubt Counters" },
];

export default function InfraSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FDFBF7] via-white to-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ backgroundColor: "#1D4ED820" }}></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ backgroundColor: "#0F2C5915" }}></div>

        <div className="text-center mb-14 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#0F2C59]/15 bg-white/80 backdrop-blur-sm text-[#0F2C59] text-[12px] font-bold px-4 py-1.5 rounded-full mb-5 tracking-wider uppercase shadow-sm">
            <Building2 className="w-3.5 h-3.5" style={{ color: SECONDARY }} />
            World-Class Infrastructure
          </div>
          <h2 className="font-heading text-[26px] sm:text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-3" style={{ color: PRIMARY }}>
            An <span style={{ color: SECONDARY }}>Ecosystem</span> Built for
            <br className="hidden sm:block" />
            Serious Aspirants
          </h2>
          <p className="text-[13px] sm:text-[15px] md:text-[16px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed hidden sm:block">
            Kota-level infrastructure, right here in Varanasi. Smart classrooms, premium labs, and dedicated study zones —
            everything your child needs to crack JEE &amp; NEET without leaving home.
          </p>
          <p className="text-[13px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed sm:hidden">
            Kota-level infrastructure in Varanasi — smart classrooms, labs &amp; study zones.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl mb-16 border border-white shadow-[0_20px_80px_-25px_rgba(15,44,89,0.25)]">
          <div className="relative h-56 sm:h-72 md:h-80">
            <Image
              src={BANNER_IMG}
              alt="Modern TRI-S CLASSES Classroom with Digital Board"
              fill
              className="object-cover w-full"
              priority={false}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59]/90 via-[#0F2C59]/65 to-[#0F2C59]/20"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
                <div className="max-w-xl">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {perks.map((p) => (
                      <span
                        key={p.text}
                        className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-bold px-3 py-1 rounded-full"
                      >
                        {p.icon}
                        {p.text}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-[22px] sm:text-[30px] md:text-[38px] font-extrabold text-white leading-[1.1] mb-2">
                    Where Ambition
                    <br />
                    Meets <span className="text-[#93C5FD]">Excellence.</span>
                  </h3>
                  <p className="text-[12px] sm:text-[14px] text-white/70 max-w-lg leading-relaxed hidden sm:block">
                    10,000+ sq. ft. of state-of-the-art learning space designed specifically for focused JEE &amp; NEET preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14 relative z-10">
          {infraItems.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl shadow-[0_6px_30px_-15px_rgba(15,44,89,0.2)] hover:shadow-[0_18px_50px_-20px_rgba(15,44,89,0.35)] transition-all duration-500 ease-out overflow-hidden border border-[#EAE5DC]/70 hover:border-[#1D4ED8]/25 hover:-translate-y-1"
            >
              <div className={`relative h-32 sm:h-36 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                <div
                  className="absolute -right-8 -top-8 text-[120px] sm:text-[140px] font-black leading-none opacity-[0.08] select-none pointer-events-none"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "white" }}
                >
                  {item.num}
                </div>
                <div className="absolute inset-0 opacity-[0.08]" style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 75% 70%, white 1px, transparent 1px)`,
                  backgroundSize: "22px 22px, 18px 18px",
                }}></div>
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm text-white border border-white/25"
                    style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-0.5">
                      Feature {item.num}
                    </div>
                    <div className="text-white/90 text-[11px] font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3 text-white/90" />
                      {item.stat}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-3 mb-2 sm:mb-3">
                  <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                  <div>
                    <h3 className="font-heading text-[17px] font-extrabold leading-snug mb-1.5" style={{ color: PRIMARY }}>
                      {item.title}
                    </h3>
                    <p className="hidden sm:block text-[13px] text-[#6B7280] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#EAE5DC]">
                  <div
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: `${item.color}12`, color: item.color }}
                  >
                    <Check className="w-3 h-3" />
                    Included
                  </div>
                  <div className="text-[11px] font-bold text-[#9CA3AF] flex items-center gap-1 group-hover:text-[#1D4ED8] transition-colors">
                    Learn more
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_80px_-30px_rgba(15,44,89,0.4)]" style={{ backgroundColor: PRIMARY }}>
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: `radial-gradient(circle at 85% 15%, white 1.2px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
          }}></div>
          <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ backgroundColor: "#60A5FA" }}></div>
          <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ backgroundColor: "#1D4ED8" }}></div>

          <div className="relative p-8 sm:p-10 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/85 text-[12px] font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#93C5FD]" />
              Gilat Bazar, Shivpur — Varanasi
            </div>
            <h3 className="font-heading text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-white leading-tight mb-3">
              See it for Yourself.
              <br className="hidden sm:block" />
              <span className="text-[#93C5FD]">Book a Free Campus Tour.</span>
            </h3>
            <p className="text-white/70 text-[13px] sm:text-[15px] mb-6 max-w-2xl mx-auto leading-relaxed hidden sm:block">
              Visit our center, explore the classrooms &amp; labs, meet our faculty, and attend a complimentary demo lecture — absolutely no pressure, no hidden charges.
            </p>
            <p className="text-white/70 text-[13px] mb-6 max-w-2xl mx-auto leading-relaxed sm:hidden">
              Visit our center, meet faculty &amp; attend a free demo — no pressure.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:09807678581"
                className="inline-flex items-center gap-2 hover:brightness-110 text-white font-bold text-[14px] sm:text-[15px] px-7 sm:px-8 py-3.5 rounded-full transition-all duration-200 shadow-[0_10px_30px_-10px_rgba(29,78,216,0.7)]"
                style={{ backgroundColor: SECONDARY }}
              >
                <Phone className="w-4.5 h-4.5" />
                Call: 098076 78581
              </a>
              <a
                href="https://maps.google.com/?q=Panchkoshi+Rd,+Jai+Nagar+Colony,+Gilat+Bazar,+Varanasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold text-[14px] sm:text-[15px] px-7 sm:px-8 py-3.5 rounded-full border border-white/30 transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <MapPin className="w-4.5 h-4.5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
