import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Inclusions from "./components/Inclusions";
import Niches from "./components/Niches";
import HowItWorks from "./components/HowItWorks";
import Offer from "./components/Offer";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#f5f5f7] font-sans overflow-x-hidden selection:bg-gold-500 selection:text-black">
      
      {/* Main navigation header */}
      <Header />

      {/* Structured thematic content pipeline */}
      <main>
        
        {/* HERO SECTION */}
        <Hero />

        {/* PROBLEM TO RESOLUTION NARRATIVE */}
        <Problems />

        {/* PACKAGE INCLUSIONS DETAILS */}
        <Inclusions />

        {/* MARKET NICHES TARGET GRID */}
        <Niches />

        {/* HOW TO SECURE TIMELINE */}
        <HowItWorks />

        {/* LAUNCH PRICING & SLOTS BARGAIN BOX */}
        <Offer />

        {/* COMPREHENSIVE CLOSING CALL TO ACTION */}
        <FinalCTA />

      </main>

      {/* SITE FOOTER & DIRECTORY LINKS */}
      <Footer />

      {/* FLOATING ACTION TRIGGER */}
      <FloatingWhatsApp />

    </div>
  );
}
