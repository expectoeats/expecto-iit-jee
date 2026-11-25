"use client";

import Image from "next/image";
import {
  GraduationCap,
  Monitor,
  HelpCircle,
  Lightbulb,
  Medal,
  Star,
  Quote,
  Eye,
  Target,
  Heart,
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  IndianRupee,
  Users2,
  TrendingUp,
  Award as AwardIcon,
} from "lucide-react";

const SECONDARY = "#1D4ED8";
const PRIMARY = "#0F2C59";

const DIRECTOR_IMG = "https://asset.allen.in/dce846f6-7be6-4a35-810c-f1ff5b33005f/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.14&__name__=image%2012669";

const FACULTY_IMG = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80";

const pillars = [
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Supportive Expert Faculty",
    desc: "Popular mentors like Ankit Sir (B.Sc. University of Allahabad, M.Sc. Banaras Hindu University) explain every concept of Science and Mathematics from first principles.",
    tag: "Expert Teachers",
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: "AC Smartboard Classrooms",
    desc: "Modern, air-conditioned classrooms equipped with smartboards make every topic visual and easy to understand.",
    tag: "Tech Enabled",
  },
  {
    icon: <HelpCircle className="w-7 h-7" />,
    title: "Dedicated Doubt-Clearing",
    desc: "Dedicated doubt-clearing sessions make sure every question is answered patiently, so that no student is left behind.",
    tag: "1on1 Attention",
  },
  {
    icon: <IndianRupee className="w-7 h-7" />,
    title: "Friendly Learning Environment",
    desc: "An encouraging, friendly atmosphere where students feel free to ask questions and actually enjoy learning.",
    tag: "Student Friendly",
  },
];

const pillars2 = [
  {
    icon: <Users2 className="w-7 h-7" />,
    title: "Personalized Attention",
    desc: "Every child gets personal attention. Teachers understand each student's strengths and weak areas and guide them individually.",
    tag: "Focused Learning",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "School Exam Excellence",
    desc: "Focused academic support for CBSE and ICSE school exams from Class 6 up to Class 12.",
    tag: "CBSE & ICSE",
  },
  {
    icon: <AwardIcon className="w-7 h-7" />,
    title: "Strong Concepts in Science & Maths",
    desc: "Teaching that builds real understanding of Science and Mathematics instead of rote learning.",
    tag: "Concept First",
  },
  {
    icon: <CheckCircle2 className="w-7 h-7" />,
    title: "Competitive Foundation",
    desc: "Strong fundamentals that help students excel in foundational competitive tests along with their school exams.",
    tag: "Extra Edge",
  },
];

const vmv = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Our Vision",
    desc: "TSS Acharya ka sapna hai ki Prayagraj ke har CBSE aur ICSE student ko Class 6 se 12 tak strong concepts aur sahi guidance mile — ek aise friendly mahaul mein jahan padhai bojh nahi, confidence ban jaye.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Our Mission",
    desc: "Har student ke andar jo potential chhupa hai usko baahar nikaalna. Science aur Maths ke concepts itne strong banana ki baccha school exams aur foundational competitive tests dono mein confidently perform kare. Personal attention, doubt-clearing aur honest teaching — yehi hamara mission hai.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Our Values",
    desc: "Satyam — Shivam — Sundaram. Hamare har decision ke peeche sirf ek hi cheez hoti hai — student ki bhalai. Kabhi bhi education ke saath compromise nahi. Kabhi bhi jhootha promise nahi. Shiksha hamara dharam hai.",
  },
];

const stats = [
  { value: "6–12", label: "Classes Covered", icon: <Users className="w-5 h-5" /> },
  { value: "2", label: "Boards — CBSE & ICSE", icon: <Star className="w-5 h-5 fill-current" /> },
  { value: "AC", label: "Smartboard Classrooms", icon: <Award className="w-5 h-5" /> },
  { value: "1:1", label: "Doubt-Clearing Support", icon: <TrendingUp className="w-5 h-5" /> },
];

export default function DirectorSection() {
  return (
    <section id="director" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[12px] font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase" style={{ backgroundColor: `${SECONDARY}14`, color: SECONDARY }}>
            <Medal className="w-3.5 h-3.5" />
            About TSS ACHARYA
          </div>
          <h2 className="font-heading text-[24px] sm:text-[30px] md:text-[40px] font-extrabold leading-tight mb-3" style={{ color: PRIMARY }}>
            Prayagraj&apos;s Highly Rated{" "}
            <span style={{ color: SECONDARY }}>CBSE &amp; ICSE Coaching</span>
          </h2>
          <p className="text-[13px] sm:text-[15px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed hidden sm:block">
            TSS ACHARYA ki sthapna ek hi clear nishay ke saath hui hai —
            quality education Prayagraj ke har bacche tak, uski aam zindagi mein,
            uski bhasha mein, aur uske budget mein.
          </p>
          <p className="text-[13px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed sm:hidden">
            Quality education Prayagraj ke har bacche tak — uski bhasha mein, uske budget mein.
          </p>
        </div>

        <div className="rounded-3xl border border-[#EAE5DC] overflow-hidden card-shadow mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 flex items-stretch" style={{ backgroundColor: PRIMARY }}>
              <div className="p-8 md:p-10 flex flex-col justify-center w-full">
                <div className="inline-flex items-center gap-2 text-white/80 text-[11px] font-bold tracking-widest uppercase mb-4" style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "9999px", padding: "6px 14px", width: "fit-content" }}>
                  <Quote className="w-3.5 h-3.5" />
                  Director&apos;s Desk
                </div>
                <h3 className="font-heading text-[20px] md:text-[28px] font-extrabold text-white leading-tight mb-3">
                  &ldquo;Hamari priority sirf topper nahi,
                  <span style={{ color: "#93C5FD" }}> har baccha </span>
                  hai.&rdquo;
                </h3>
                <p className="text-[13px] text-white/70 leading-relaxed mb-4 hidden sm:block">
                  TSS ACHARYA mein hum kabhi bhi kisi student ko weak nahi kehte.
                  Hum kehte hain — &ldquo;abhi weak hai, par kal top karega.&rdquo;
                  Aur yahi hamara confidence hamare students mein bhi jaata hai.
                  Ek sahi teacher sirf padhta nahi, bacha banata hai.
                </p>
                <p className="text-[13px] text-white/70 leading-relaxed mb-4 sm:hidden">
                  &ldquo;Abhi weak hai, par kal top karega.&rdquo; — Yehi hamara confidence hai.
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden border-2 border-white/20 bg-white">
                    <Image
                      src="/logo.jpg"
                      alt="TSS ACHARYA Logo"
                      width={56}
                      height={56}
                      className="w-full h-full object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[16px] text-white leading-tight">
                      TSS ACHARYA
                    </div>
                    <div className="text-[12px] text-white/50 font-semibold mt-0.5">
                      The Skill Share · Katra, Prayagraj
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="md:col-span-3 space-y-5">
                  <div className="relative pl-5">
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: SECONDARY }}></div>
                    <p className="text-[13px] sm:text-[15px] text-[#374151] leading-[1.8] italic hidden sm:block">
                      &ldquo;हमारा लक्ष्य केवल सिलेबस पढ़ना नहीं, बल्कि हर उस छात्र को
                      आत्मविश्वास देना है जो अभी तक किसी ने seriously नहीं लिया।
                      TSS ACHARYA में सबसे पहले <strong>weakest student</strong> की फोकस करते हैं —
                      क्योंकि हमें पता है, एक सही मार्गदर्शन और सही environment से
                      हर बच्चा <strong style={{ color: SECONDARY }}>Top Rank</strong> ला सकता है।&rdquo;
                    </p>
                    <p className="text-[13px] text-[#374151] leading-[1.8] italic sm:hidden">
                      &ldquo;TSS ACHARYA में सबसे पहले <strong>weakest student</strong> की फोकस करते हैं —
                      एक सही मार्गदर्शन से हर बच्चा <strong style={{ color: SECONDARY }}>Top Rank</strong> ला सकता है।&rdquo;
                    </p>
                  </div>

                  <div className="hidden sm:grid grid-cols-1 gap-2.5">
                    {[
                "CBSE & ICSE — Class 6 to 12",
                       "Air-conditioned smartboard classrooms",
                       "Strong concepts in Science & Maths",
                       "Dedicated doubt-clearing sessions",
                       "Personalized attention for every student",
                       "Friendly, encouraging environment",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[13px] font-semibold text-[#374151]">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${SECONDARY}18`, color: SECONDARY }}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="relative rounded-2xl overflow-hidden h-56 md:h-full card-shadow border border-[#EAE5DC] group">
                    <Image
                      src={DIRECTOR_IMG}
                      alt="TSS ACHARYA mentor teaching students"
                      fill
                      className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59]/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                        <div className="font-heading font-bold text-[12px] text-[#0F2C59] leading-tight">
                          Ankit Sir
                        </div>
                        <div className="text-[10px] font-semibold" style={{ color: SECONDARY }}>
                          B.Sc. (Univ. of Allahabad) · M.Sc. (BHU)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <div className="relative overflow-hidden rounded-3xl card-shadow mb-10 border border-[#EAE5DC]">
            <div className="relative h-40 sm:h-52 md:h-60">
                <Image
                src={FACULTY_IMG}
                alt="TSS ACHARYA Faculty Team Prayagraj"
                fill
                className="object-cover w-full"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59]/90 via-[#0F2C59]/60 to-[#0F2C59]/40"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-[11px] sm:text-[12px] font-bold px-3 py-1 rounded-full mb-2 sm:mb-3 tracking-wider uppercase">
                    <Users className="w-3.5 h-3.5" />
                    Our Expert Faculty Team
                  </div>
                  <h3 className="font-heading text-[22px] sm:text-[28px] md:text-[34px] font-extrabold text-white leading-tight max-w-xl">
                    Supportive Mentors Who Care
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
              <h3 className="font-heading text-[24px] md:text-[30px] font-extrabold leading-tight mb-2" style={{ color: PRIMARY }}>
              The <span style={{ color: SECONDARY }}>Eight Pillars</span> of TSS ACHARYA
            </h3>
            <p className="text-[14px] text-[#6B7280]">Ye 8 cheezein humein Prayagraj ke baaki coaching se alag banati hain.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...pillars, ...pillars2].map((p, i) => (
              <div
                key={i}
                className="group relative bg-white border border-[#EAE5DC] rounded-2xl p-6 transition-all duration-200 hover:border-[#1D4ED8]/30 card-shadow card-shadow-hover"
              >
                <div className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${SECONDARY}12`, color: SECONDARY }}>
                  {p.tag}
                </div>
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 duration-200"
                  style={{ backgroundColor: `${SECONDARY}14`, color: SECONDARY, width: "52px", height: "52px" }}
                >
                  {p.icon}
                </div>
                <h4 className="font-heading font-bold text-[16px] leading-tight mb-2" style={{ color: PRIMARY }}>
                  {p.title}
                </h4>
                <p className="hidden sm:block text-[12.5px] text-[#6B7280] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14 bg-white border border-[#EAE5DC] rounded-3xl overflow-hidden card-shadow">
          <div className="px-8 md:px-10 pt-8 pb-6 border-b border-[#EAE5DC] text-center" style={{ backgroundColor: "#FFFFFF" }}>
            <h3 className="font-heading text-[22px] md:text-[26px] font-extrabold mb-2" style={{ color: PRIMARY }}>
              Vision <span style={{ color: SECONDARY }}>•</span> Mission <span style={{ color: SECONDARY }}>•</span> Values
            </h3>
            <p className="text-[13px] text-[#6B7280]">Jo hamare har decision ki base hai — har din, har class mein.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#EAE5DC]">
            {vmv.map((item, i) => (
              <div key={i} className="p-5 sm:p-8 flex flex-col gap-3 hover:bg-white transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${SECONDARY}14`, color: SECONDARY }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-heading font-extrabold text-[18px]" style={{ color: PRIMARY }}>
                    {item.title}
                  </h4>
                </div>
                <p className="hidden sm:block text-[13px] sm:text-[14px] text-[#4B5563] leading-[1.75]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white border border-[#EAE5DC] rounded-2xl p-5 md:p-7 card-shadow">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center py-3 last:pr-5"
              style={{ borderRight: i === stats.length - 1 ? 'none' : '1px solid #EAE5DC' }}
            >
              <div
                className="text-[30px] md:text-[34px] font-extrabold leading-tight flex items-center justify-center gap-2 mb-1.5 font-heading"
                style={{ color: SECONDARY }}
              >
                <span style={{ color: PRIMARY, opacity: 0.6 }}>{stat.icon}</span>
                {stat.value}
              </div>
              <div className="text-[11.5px] text-[#6B7280] font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
