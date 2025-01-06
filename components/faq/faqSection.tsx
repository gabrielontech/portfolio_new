"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from 'next-intl';

function getTextColor(backgroundColor: string) {
  const rgb = backgroundColor.match(/\d+/g);
  if (!rgb) return "text-black";
  const brightness =
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
    1000;
  return brightness > 128 ? "text-black" : "text-white";
}

export default function FAQSection() {
  const t = useTranslations('faq');
  const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)");
  const textColor = getTextColor(backgroundColor);

  const faqs = [
    {
      question: t('questions.website_time.question'),
      answer: t('questions.website_time.answer'),
    },
    {
      question: t('questions.website_cost.question'),
      answer: t('questions.website_cost.answer'),
    },
    {
      question: t('questions.existing_design.question'),
      answer: t('questions.existing_design.answer'),
    },
    {
      question: t('questions.design_satisfaction.question'),
      answer: t('questions.design_satisfaction.answer'),
    },
  
  ];

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const intersectionRatio = entry.intersectionRatio;
          const progress = Math.max(0, (intersectionRatio - 0.2) / 0.8); // Normalize progress

          // Interpolate between white and the footer color
          const r = Math.round(255 - progress * (255 - 17));
          const g = Math.round(255 - progress * (255 - 24));
          const b = Math.round(255 - progress * (255 - 39));

          setBackgroundColor(`rgb(${r}, ${g}, ${b})`);
        } else {
          setBackgroundColor("rgb(255, 255, 255)");
        }
      },
      {
        threshold: new Array(101).fill(0).map((_, i) => i / 100),
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`py-20 transition-colors  duration-500 ${textColor}`}
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-indigo-600 text-2xl mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('section_title')}
        </motion.h2>
        <motion.h3
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('section_subtitle')}
        </motion.h3>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <motion.div
                  className="text-xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {faq.question}
                </motion.div>
              </AccordionTrigger>
              <AccordionContent>
                <AnimatePresence>
                  <motion.div
                    className="text-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
