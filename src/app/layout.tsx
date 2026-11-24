import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TSS Acharya — CBSE & ICSE Coaching for Class 6 to 12 in Prayagraj",
  description:
    "TSS Acharya is a highly rated coaching institute in the Katra area of Prayagraj for CBSE and ICSE students from Class 6 to 12. Air-conditioned smartboard classrooms, supportive faculty, strong concepts in Science and Mathematics, and dedicated doubt-clearing sessions.",
  keywords:
    "tss acharya, tss acharya prayagraj, coaching in katra prayagraj, cbse coaching prayagraj, icse coaching prayagraj, class 6 to 12 tuition prayagraj, science maths coaching prayagraj, ankit sir",
  openGraph: {
    title: "TSS Acharya — CBSE & ICSE Coaching for Class 6 to 12 in Prayagraj",
    description:
      "Highly rated CBSE & ICSE coaching for Class 6 to 12 in Katra, Prayagraj. Smartboard classrooms, supportive faculty, personal attention.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white antialiased">{children}</body>
    </html>
  );
}
