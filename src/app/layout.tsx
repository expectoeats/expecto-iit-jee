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
  title: "High Q Academy — IIT JEE, NEET & Foundation Coaching in Bharatpur",
  description:
    "Premier coaching institute in Bharatpur, Rajasthan. Expert mentors for IIT JEE, NEET, NTSE, Olympiads & Class 6–12 Foundation. Admissions open for 2026–27.",
  keywords:
    "coaching institute bharatpur, jee coaching bharatpur, neet coaching bharatpur, high q academy, nti olympiad coaching bharatpur, foundation classes bharatpur",
  openGraph: {
    title: "High Q Academy — IIT JEE, NEET & Foundation Coaching",
    description:
      "Premier IIT JEE, NEET, NTSE, Olympiad & Foundation coaching in Bharatpur. Smart classrooms, expert faculty, personal mentorship.",
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
