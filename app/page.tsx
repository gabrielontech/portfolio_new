import React from 'react';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import HowItWorks from '@/components/HowItWorks';
import WhyMe from '@/components/WhyMe';
import CaseStudies from '@/components/CaseStudies';
import ContactCTA from '@/components/ContactCTA';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyMe />
      <TechStack />
      <CaseStudies />
      <ContactCTA />
    </main>
  );
}