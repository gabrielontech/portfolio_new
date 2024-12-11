"use client";

import { useRef } from "react";
import LandingPage from "@/components/front_page/frontPageSection";
import PresentationSection from "@/components/presentation/presentationPageSection";
import ServiceSection from "@/components/service/serviceSection";
import WhyNextJsSection from "@/components/why_next/whyNext";
import WorkShowcaseSection from "@/components/work-showcase/workShowCaseSection";
import FAQSection from "@/components/faq/faqSection";
import Footer from "@/components/footer/footer";

export default function Home() {
  const whyMeRef = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <LandingPage
        whyMeRef={whyMeRef}
        workRef={workRef}
        processRef={processRef}
        faqsRef={faqsRef}
        presentationRef={presentationRef}
      />
      
      <div ref={whyMeRef}>
        <ServiceSection />
      </div>
      <div ref={presentationRef}>
        <PresentationSection />
      </div>
      <WhyNextJsSection />
      <div ref={workRef}>
        <WorkShowcaseSection />
      </div>
      <div ref={faqsRef}>
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}