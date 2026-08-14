import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LeadFormSection from "./components/LeadFormSection";
import CoursesGrid from "./components/CoursesGrid";
import DirectorSection from "./components/DirectorSection";
import InfraSection from "./components/InfraSection";
import ReviewsSection from "./components/ReviewsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <LeadFormSection />
      <CoursesGrid />
      <DirectorSection />
      <InfraSection />
      <ReviewsSection />
      <AboutSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
