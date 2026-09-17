"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Trophy,
  Target,
  Building2,
  ClipboardList,
  HandshakeIcon,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Monitor,
  User,
  GraduationCap,
  IndianRupee,
  Clock4 as Clock4Icon,
} from "lucide-react";

const SECONDARY = "#1D4ED8";
const SECONDARY_HOVER = "#1E40AF";

const STUDY_IMG = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80";

const classes = [
  "Class 6th",
  "Class 7th",
  "Class 8th",
  "Class 9th",
  "Class 10th",
  "Class 11th (JEE)",
  "Class 11th (NEET)",
  "Class 12th (JEE)",
  "Class 12th (NEET)",
  "NTSE Preparation",
  "Olympiad Preparation",
  "Dropper (JEE)",
  "Dropper (NEET)",
];

const trustBadges = [
  { icon: <Target className="w-3.5 h-3.5" />, label: "IIT JEE & NEET Expert Faculty" },
  { icon: <Building2 className="w-3.5 h-3.5" />, label: "Smart Digital Classrooms" },
  { icon: <ClipboardList className="w-3.5 h-3.5" />, label: "Weekly Test Series" },
  { icon: <HandshakeIcon className="w-3.5 h-3.5" />, label: "1-on-1 Doubt Sessions" },
];

const uspList = [
  { icon: <GraduationCap className="w-4 h-4" />, text: "IIT & Medical Expert Faculty" },
  { icon: <IndianRupee className="w-4 h-4" />, text: "Most Affordable Fees in Bharatpur" },
  { icon: <Clock4Icon className="w-4 h-4" />, text: "NTSE & Olympiad Preparation" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "100% Syllabus Completion Guarantee" },
];

export default function LeadFormSection() {
  const [form, setForm] = useState({ name: "", mobile: "", cls: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.mobile && form.cls) {
      setSubmitted(true);
      setForm({ name: "", mobile: "", cls: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="bg-white py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div>
            <div className="inline-flex items-center gap-2 border border-[#0F2C59]/15 text-[#0F2C59] lg:text-[12px] text-[10px] font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide" style={{ backgroundColor: "#0F2C5910" }}>
              <Trophy className="w-3.5 h-3.5" style={{ color: SECONDARY }} />
              <span>#1 Ranked Coaching — Bharatpur, Rajasthan</span>
            </div>

            <h1 className="font-heading text-[22px] sm:text-[30px] lg:text-[42px] font-extrabold text-[#0F2C59] leading-[1.2] tracking-tight mb-3">
              Build a Solid Foundation for{" "}
              <span style={{ color: SECONDARY }}>IIT JEE, NEET</span>{" "}
              &amp; Board Exams with{" "}
              <span className="relative inline-block">
                Expert Mentors
                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full" style={{ backgroundColor: `${SECONDARY}30` }}></span>
              </span>
              .
            </h1>

            <p className="text-[13px] sm:text-[15px] text-[#4B5563] leading-relaxed mb-4 max-w-lg">
              Bharatpur&apos;s most trusted coaching — IIT JEE, NEET, NTSE, Olympiad &amp; Foundation classes with expert faculty &amp; personal mentorship.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4 max-w-lg">
              {uspList.map((u) => (
              <div key={u.text} className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-[#374151]">
                <span className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${SECONDARY}15`, color: SECONDARY }}>
                  {u.icon}
                </span>
                <span className="leading-snug">{u.text}</span>
              </div>
            ))}
            </div>

            <div className="hidden sm:flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-1.5 bg-white border border-[#EAE5DC] rounded-lg px-2.5 py-1 text-[11px] sm:text-[12px] font-semibold text-[#374151] card-shadow"
                >
                  <span style={{ color: SECONDARY }}>{b.icon}</span>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl mb-5 h-48 sm:h-52 card-shadow border border-[#EAE5DC] group">
              <Image
                src={STUDY_IMG}
                alt="Students preparing for IIT JEE NEET at High Q Academy Bharatpur"
                fill
                className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59]/80 via-[#0F2C59]/30 to-transparent"></div>
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-[11px] font-bold bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full w-fit border border-white/20 mb-2 text-white/90">
                  ⭐ 500+ Happy Students
                </div>
                <div className="font-heading font-extrabold text-[16px] sm:text-[20px] text-white leading-tight">
                  Join Bharatpur&apos;s Fastest Growing Coaching
                </div>
                <div className="hidden sm:block text-[11px] text-white/65 font-semibold mt-1">
                  Smart classes • Expert faculty • Affordable fees
                </div>
              </div>
            </div>
            <div className="relative bg-white border border-[#EAE5DC] rounded-2xl p-6 card-shadow">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: SECONDARY }}></div>
                  <h2 className="font-heading lg:text-[18px] text-[#0F2C59] text-[14px]">
                    Get a Free Counseling Call
                  </h2>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#05966918", color: "#047857" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#059669" }}></span>
                  24×7 Available
                </div>
              </div>

              {submitted ? (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-5 text-green-700">
                  <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-[15px]">Request Received!</div>
                    <div className="text-[13px]">Our counselor will call you within 2 hours.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                      <input
                        type="text"
                        placeholder="Student Name *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full border border-[#EAE5DC] rounded-xl pl-9 pr-4 py-3 text-[14px] text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0F2C59] focus:ring-2 focus:ring-[#0F2C59]/10 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                      <input
                        type="tel"
                        placeholder="Mobile Number *"
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        required
                        maxLength={10}
                        className="w-full border border-[#EAE5DC] rounded-xl pl-9 pr-4 py-3 text-[14px] text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0F2C59] focus:ring-2 focus:ring-[#0F2C59]/10 transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Monitor className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    <select
                      value={form.cls}
                      onChange={(e) => setForm({ ...form, cls: e.target.value })}
                      required
                      className="w-full border border-[#EAE5DC] rounded-xl pl-9 pr-4 py-3 text-[14px] text-[#1F2937] focus:outline-none focus:border-[#0F2C59] focus:ring-2 focus:ring-[#0F2C59]/10 transition-all bg-white"
                    >
                      <option value="">Select Class / Target Exam *</option>
                      {classes.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full hover:bg-[#1E40AF] text-white font-bold text-[15px] py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                    style={{ backgroundColor: SECONDARY }}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Get Free Counseling Call</span>
                  </button>
                  <p className="text-[11px] text-center text-[#9CA3AF] flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Your information is 100% safe. No spam calls, ever.
                  </p>
                </form>
              )}

              <div className="mt-5 pt-4 border-t border-[#EAE5DC] grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="font-heading font-extrabold text-[18px] text-[#0F2C59]">2 Hr</div>
                  <div className="text-[10.5px] text-[#6B7280] font-semibold uppercase tracking-wider">Response Time</div>
                </div>
                <div className="text-center border-x border-[#EAE5DC]">
                  <div className="font-heading font-extrabold text-[18px] text-[#0F2C59]">500+</div>
                  <div className="text-[10.5px] text-[#6B7280] font-semibold uppercase tracking-wider">Students</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-extrabold text-[18px] text-[#0F2C59]">4.8★</div>
                  <div className="text-[10.5px] text-[#6B7280] font-semibold uppercase tracking-wider">Google Rated</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
