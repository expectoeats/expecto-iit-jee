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
  title: "TRI-S CLASSES | त्रि-स क्लासेज — JEE, NEET & Foundation Coaching in Varanasi",
  description:
    "Premier offline & hybrid coaching institute in Gilat Bazar, Shivpur, Varanasi. Expert mentors for JEE Main, JEE Advanced, NEET UG & Class 6–10 Foundation. Admissions open for 2026–27.",
  keywords:
    "coaching institute varanasi, jee coaching varanasi, neet coaching varanasi, tri-s classes, shivpur coaching, gilat bazar coaching",
  openGraph: {
    title: "TRI-S CLASSES | त्रि-स क्लासेज",
    description:
      "Premier JEE, NEET & Foundation coaching in Varanasi. Smart classrooms, expert faculty, personal mentorship.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#FDFBF7] antialiased">{children}</body>
    </html>
  );
}
