"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Hash,
  Navigation,
  Target,
  Check,
  ChevronRight,
  MessageCircle,
  Building2,
  Star,
} from "lucide-react";

const SECONDARY = "#1D4ED8";
const SECONDARY_HOVER = "#1E40AF";
const ACCENT_LIGHT = "#93C5FD";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: "https://www.mentorsedu.com/wp-folder/img/Group-21.png",
    href: "https://wa.me/919807678581",
    color: "#25D366",
  },
  {
    name: "YouTube",
    icon: "https://www.mentorsedu.com/wp-folder/img/Group-22.png",
    href: "https://youtube.com",
    color: "#FF0000",
  },
  {
    name: "LinkedIn",
    icon: "https://www.mentorsedu.com/wp-folder/img/Group-23.png",
    href: "https://linkedin.com",
    color: "#0A66C2",
  },
  {
    name: "Telegram",
    icon: "https://www.mentorsedu.com/wp-folder/img/Group-24.png",
    href: "https://t.me/trisclasses",
    color: "#26A5E4",
  },
  {
    name: "Facebook",
    icon: "https://www.mentorsedu.com/wp-folder/img/Group-26.png",
    href: "https://facebook.com",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: "https://www.mentorsedu.com/wp-folder/img/Group-27.png",
    href: "https://instagram.com",
    color: "#E1306C",
  },
];

const quickLinks = [
  { label: "JEE Main Preparation", href: "#courses" },
  { label: "JEE Advanced Coaching", href: "#courses" },
  { label: "NEET UG Preparation", href: "#courses" },
  { label: "Foundation Batches (6–10)", href: "#courses" },
  { label: "Student Results", href: "#reviews" },
  { label: "Faculty", href: "#director" },
];

const contactInfo = [
  {
    icon: <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />,
    label: "Address",
    value: "Panchkoshi Rd, Jai Nagar Colony, Gilat Bazar, Varanasi 221002",
    href: undefined,
  },
  {
    icon: <Phone className="w-4 h-4 flex-shrink-0" />,
    label: "Phone",
    value: "098076 78581",
    href: "tel:09807678581",
  },
  {
    icon: <Clock className="w-4 h-4 flex-shrink-0" />,
    label: "Timings",
    value: "Open 24 Hours",
    href: undefined,
  },
  {
    icon: <Hash className="w-4 h-4 flex-shrink-0" />,
    label: "Plus Code",
    value: "9X38+HX Varanasi",
    href: undefined,
  },
];

export default function Footer() {
  return (
    <>
      <div className="floating-social hidden md:flex">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className="group relative block w-11 h-11 overflow-hidden rounded-l-xl transition-all duration-200 hover:w-14"
            style={{ backgroundColor: social.color }}
          >
            <div className="w-11 h-11 flex items-center justify-center">
              <Image
                src={social.icon}
                alt={social.name}
                width={22}
                height={22}
                className="object-contain filter brightness-0 invert"
              />
            </div>
          </a>
        ))}
      </div>

      <footer className="bg-[#091E3E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-white/20 shadow-lg bg-white">
                  <Image
                    src="/logo.jpg"
                    alt="TRI-S Classes Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-[17px] text-white leading-tight">
                    TRI-S CLASSES
                  </div>
                  <div className="text-[11px] font-semibold tracking-wide" style={{ color: SECONDARY_HOVER }}>
                    त्रि-स क्लासेज
                  </div>
                  <div className="text-[10px] text-white/40 font-medium mt-0.5">
                    सत्यम् शिवम् सुन्दरम्
                  </div>
                </div>
              </div>
            <p className="text-[13px] text-white/60 leading-relaxed mb-5 hidden sm:block">
              Premier offline &amp; hybrid coaching institute in Varanasi, specializing in JEE,
              NEET &amp; Foundation programs. Trusted by 500+ students and their families.
            </p>
            <p className="text-[13px] text-white/60 leading-relaxed mb-5 sm:hidden">
              JEE, NEET &amp; Foundation coaching in Varanasi. Trusted by 500+ students.
            </p>

              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-9 h-9 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: `${social.color}25`, border: `1px solid ${social.color}40` }}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading text-[15px] font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full inline-block" style={{ backgroundColor: SECONDARY }}></span>
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-white/60 hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-2"
                    >
                      <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: ACCENT_LIGHT }} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-[15px] font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full inline-block" style={{ backgroundColor: SECONDARY }}></span>
                Contact &amp; Location
              </h4>
              <ul className="space-y-3">
                {contactInfo.map((info, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5" style={{ color: ACCENT_LIGHT }}>{info.icon}</span>
                    <div>
                      <div className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a href={info.href} className="text-[13px] text-white/75 hover:text-white transition-colors font-medium">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-[13px] text-white/75 leading-snug">{info.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-[15px] font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full inline-block" style={{ backgroundColor: SECONDARY }}></span>
                Admissions 2026–27
              </h4>
              <div className="bg-white/6 border border-white/10 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-[13px] text-white/70">
                  <Target className="w-4 h-4" style={{ color: ACCENT_LIGHT }} />
                  Seats are filling fast. Enroll now for:
                </div>
                {["JEE Main & Advanced", "NEET UG", "Foundation (6–10)"].map((prog) => (
                  <div key={prog} className="flex items-center gap-2 text-[12px] text-white/80 font-semibold">
                    <Check className="w-3.5 h-3.5" style={{ color: ACCENT_LIGHT }} /> {prog}
                  </div>
                ))}
                <a
                  href="tel:09807678581"
                  className="flex items-center justify-center gap-2 w-full text-center hover:bg-[#1E40AF] text-white font-bold text-[13px] py-2.5 rounded-xl transition-colors mt-2"
                  style={{ backgroundColor: SECONDARY }}
                >
                  <Phone className="w-4 h-4" />
                  Call to Enroll Now
                </a>
                <a
                  href="https://wa.me/919807678581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-center bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-bold text-[13px] py-2.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[12px] text-white/40 text-center sm:text-left">
              © 2026 TRI-S CLASSES. All Rights Reserved. Designed for Educational Excellence.
            </p>
            <div className="flex items-center gap-4 text-[12px] text-white/40">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                Varanasi, UP 221002
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                4.8 Google Rating
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
