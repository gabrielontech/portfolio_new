"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a website take to build?",
    answer:
      "The time it takes to build a website can vary depending on its complexity and your specific requirements. A simple website might take 2-4 weeks, while a more complex one could take 2-3 months or more. We'll provide a more accurate timeline after discussing your project in detail.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Website costs can vary widely based on your needs. A basic informational website might start around $2,500, while a complex e-commerce site could cost $20,000 or more. We offer customized quotes based on your specific requirements and budget.",
  },
  {
    question: "I have a design already. Can you build it?",
    answer:
      "We're happy to work with existing designs. Just provide us with your design files (e.g., Figma, Sketch, or PSD), and we'll bring them to life with clean, efficient code that matches your vision perfectly.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "Your satisfaction is our priority. We follow an iterative design process and welcome your feedback at every stage. If you're not happy with any aspect of the design, we'll work with you to revise it until it meets your expectations.",
  },
  {
    question: "Load time is important to me. Will the website load quickly?",
    answer:
      "We prioritize performance in all our projects. We use modern web technologies, optimize images, minimize HTTP requests, and follow best practices to ensure your website loads quickly. We also provide recommendations for hosting that will further enhance your site's speed.",
  },
];

function getTextColor(backgroundColor: string) {
  const rgb = backgroundColor.match(/\d+/g);
  if (!rgb) return "text-black";
  const brightness =
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
    1000;
  return brightness > 128 ? "text-black" : "text-white";
}

export default function FAQSection() {
  const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)");
  const textColor = getTextColor(backgroundColor);

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
          FAQS
        </motion.h2>
        <motion.h3
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frequently Asked Questions
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
