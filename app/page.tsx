'use client';
import React, { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import HowItWorks from '@/components/HowItWorks';
import WhyMe from '@/components/WhyMe';
import CaseStudies from '@/components/CaseStudies';
import ContactCTA from '@/components/ContactCTA';
import Navbar from '@/components/Navbar';
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';

export default function HomePage() {
  // Custom cursor effect
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <main className="relative bg-gradient-to-br from-[#0a1124] via-[#101c36] to-black text-white min-h-screen overflow-hidden">
      {/* Animated grid overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <svg className="w-full h-full opacity-10 animate-pulse" style={{ position: 'absolute', inset: 0 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="w-full h-full bg-gradient-radial from-[#1a2a4f66] via-transparent to-transparent opacity-60 blur-2xl" />
      </div>
      {/* Custom glowing cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 w-8 h-8 rounded-full bg-blue-400 opacity-40 blur-2xl"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <CaseStudies />
        <HowItWorks />
        <WhyMe />
        <ContactCTA />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}