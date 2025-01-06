"use client";

import { useRef } from "react";
import LandingPage from "@/components/front_page/frontPageSection";
import PresentationSection from "@/components/presentation/presentationPageSection";
import ServiceSection from "@/components/service/serviceSection";
import WhyNextJsSection from "@/components/why_next/whyNext";
import WorkShowcaseSection from "@/components/work-showcase/workShowCaseSection";
import FAQSection from "@/components/faq/faqSection";
import Footer from "@/components/footer/footer";
import { useTranslations } from 'next-intl';


export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const whyMeRef = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('navbar');
  const h = useTranslations('hero')


  return (
    <div>
      <LandingPage
        whyMeRef={whyMeRef}
        workRef={workRef}
        processRef={processRef}
        faqsRef={faqsRef}
        presentationRef={presentationRef}
        locale={locale}
      />
      
      <div>
        <ServiceSection whyMeRef={whyMeRef} />
      </div>
      <div ref={presentationRef}>
        <PresentationSection />
      </div>
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