"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Hash,
  Navigation,
  MessageCircle,
  CheckCircle2,
  Send,
} from "lucide-react";

const SECONDARY = "#1D4ED8";
const SECONDARY_HOVER = "#1E40AF";

const BUILDING_IMG = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80";

const CAMPUS_IMG = "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=900&q=80";

const LOCATION_MAP_IMG = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80";

export default function AboutSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: SECONDARY }} />,
      label: "Address",
      value: (
        <span className="text-[13px] text-[#6B7280] leading-relaxed">
          23/14/2A, Beli Road, Jagram Chauraha,<br />
          Mumfordganj (New Katra), Near Union Bank,<br />
          Prayagraj, Uttar Pradesh
        </span>
      ),
    },
    {
      icon: <Phone className="w-5 h-5 flex-shrink-0" style={{ color: SECONDARY }} />,
      label: "Phone",
      value: (
        <a href="tel:+919005642857" className="text-[13px] text-[#0F2C59] font-bold transition-colors" style={{ color: SECONDARY_HOVER }}>
          90056 42857
        </a>
      ),
    },
    {
      icon: <Clock className="w-5 h-5 flex-shrink-0" style={{ color: SECONDARY }} />,
      label: "Timings",
      value: <span className="text-[13px] text-[#059669] font-bold">Call for batch timings</span>,
    },
    {
      icon: <Hash className="w-5 h-5 flex-shrink-0" style={{ color: SECONDARY }} />,
      label: "Landmark",
      value: <span className="text-[13px] text-[#6B7280] font-mono">Near Union Bank, Jagram Chauraha</span>,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl card-shadow mb-12 border border-[#EAE5DC]">
          <div className="relative h-44 sm:h-56 md:h-64">
            <Image
              src={BUILDING_IMG}
              alt="TSS ACHARYA Coaching Institute Building Prayagraj"
              fill
              className="object-cover w-full"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59]/85 via-[#0F2C59]/60 to-[#0F2C59]/40"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full text-center sm:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-[11px] sm:text-[12px] font-bold px-3 py-1 rounded-full mb-2 sm:mb-3 tracking-wider uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  Katra, Prayagraj
                </div>
                <h2 className="font-heading text-[20px] sm:text-[28px] md:text-[40px] font-extrabold text-white leading-tight max-w-2xl">
                  Visit Our <span className="text-[#93C5FD]">State-of-the-Art</span> Coaching Center
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#0F2C59]/8 text-[#0F2C59] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h3 className="font-heading text-[22px] md:text-[32px] font-extrabold text-[#0F2C59]">
            Come Meet Us <span style={{ color: SECONDARY }}>in Person</span>
          </h3>
          <p className="mt-2 text-[13px] sm:text-[15px] text-[#6B7280] max-w-xl mx-auto hidden sm:block">
            Attend a free demo class, meet our faculty, and see why students highly recommend TSS ACHARYA
          </p>
          <p className="mt-2 text-[13px] text-[#6B7280] max-w-xl mx-auto sm:hidden">
            Attend a free demo &amp; meet our faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-2xl h-52 sm:h-60 card-shadow border border-[#EAE5DC] mb-5 group">
              <Image
                src={CAMPUS_IMG}
                alt="TSS ACHARYA Reception & Campus Interior Prayagraj"
                fill
                className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: SECONDARY }}>
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-heading font-bold text-[14px] text-white leading-tight">
                    Dedicated Doubt-Clearing Sessions
                  </div>
                  <div className="hidden sm:block text-[11px] text-white/70 font-semibold">
                    Personal attention in a friendly learning environment
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#EAE5DC] rounded-2xl p-6 card-shadow">
              <h3 className="font-heading text-[18px] font-bold text-[#0F2C59] mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${SECONDARY}18` }}>
                  <MapPin className="w-4 h-4" style={{ color: SECONDARY }} />
                </div>
                Institute Details
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {info.icon}
                    <div>
                      <div className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider mb-0.5">
                        {info.label}
                      </div>
                      {info.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                <a
                  href="https://maps.google.com/?q=TSS+Acharya+23/14/2A+Beli+Road+Jagram+Chauraha+Mumfordganj+New+Katra+Prayagraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-white text-[13px] font-bold py-2.5 rounded-xl transition-all duration-200"
                  style={{ backgroundColor: "#0F2C59" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a4080")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0F2C59")}
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <a
                  href="tel:+919005642857"
                  className="flex-1 flex items-center justify-center gap-2 text-white text-[13px] font-bold py-2.5 rounded-xl transition-all duration-200"
                  style={{ backgroundColor: SECONDARY }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = SECONDARY_HOVER)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = SECONDARY)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/919005642857?text=Hello!%20I%20want%20to%20know%20more%20about%20TSS%20Acharya."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-all duration-200 group rounded-2xl p-5 border"
              style={{ backgroundColor: "#25D36612", borderColor: "#25D36640" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#25D366" }}>
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-heading text-[15px] font-bold text-[#0F2C59] group-hover:text-[#25D366] transition-colors">
                  Chat on WhatsApp
                </div>
                <div className="hidden sm:block text-[13px] text-[#6B7280]">
                  Quick reply within minutes — ask us anything!
                </div>
              </div>
              <Navigation className="w-5 h-5 rotate-90" style={{ color: "#25D366" }} />
            </a>
          </div>

          <div id="contact">
            <div className="relative overflow-hidden rounded-2xl h-40 sm:h-48 mb-5 card-shadow border border-[#EAE5DC] group">
              <Image
                src={LOCATION_MAP_IMG}
                alt="TSS ACHARYA Location Map Prayagraj Uttar Pradesh"
                fill
                className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59]/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                  <div className="font-heading font-bold text-[11px] text-[#0F2C59] leading-tight">
                    TSS ACHARYA
                  </div>
                  <div className="text-[9px] text-[#6B7280] font-semibold">
                    Katra, Prayagraj
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=TSS+Acharya+23/14/2A+Beli+Road+Jagram+Chauraha+Mumfordganj+New+Katra+Prayagraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-[11px] px-3 py-2 rounded-xl shadow-lg transition-colors flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  Navigate
                </a>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-[#1D4ED8] flex items-center justify-center shadow-xl border-4 border-white animate-bounce">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#EAE5DC] rounded-2xl p-6 card-shadow">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: SECONDARY }}></div>
                <h3 className="font-heading text-[18px] font-bold text-[#0F2C59]">
                  Send Us a Message
                </h3>
              </div>

              {sent ? (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-5 text-green-700">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                <div>
                  <div className="font-bold text-[15px]">Message Sent Successfully!</div>
                  <div className="text-[13px]">We&apos;ll get back to you within 24 hours.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#374151] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full border border-[#EAE5DC] rounded-xl px-4 py-3 text-[14px] text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none transition-all bg-white"
                    style={{ boxShadow: "0 0 0 2px #1D4ED81A", borderColor: "#0F2C59" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#0F2C59"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#EAE5DC"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#374151] mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    maxLength={10}
                    className="w-full border border-[#EAE5DC] rounded-xl px-4 py-3 text-[14px] text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#374151] mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    placeholder="Any specific query about courses, fees, batch timings..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full border border-[#EAE5DC] rounded-xl px-4 py-3 text-[14px] text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none transition-all bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white font-bold text-[15px] py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#0F2C59" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a4080")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0F2C59")}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
