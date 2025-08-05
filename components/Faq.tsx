'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How long does it take to build an MVP?",
    answer: "Most MVPs are delivered within 2-4 weeks, depending on complexity and requirements.",
  },
  {
    question: "Do you work with non-technical founders?",
    answer: "Absolutely! My process is tailored for non-technical founders, providing clarity and guidance at every step.",
  },
  {
    question: "What technologies do you use?",
    answer: "I use modern stacks like Next.js, React, Tailwind CSS, and scalable cloud solutions.",
  },
  {
    question: "Can you sign an NDA?",
    answer: "Yes, I’m happy to sign an NDA to protect your idea and business.",
  },
];

const cardColors = [
  'from-indigo-500 to-blue-500',
  'from-pink-500 to-purple-500',
  'from-green-400 to-cyan-400',
  'from-yellow-400 to-orange-400',
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 cursor-pointer transition-transform hover:scale-105 hover:shadow-indigo-500/40 relative group`}
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${cardColors[idx % cardColors.length]} opacity-30 blur-xl group-hover:opacity-60 transition-opacity`}></div>
              <h3 className={`text-lg font-semibold flex justify-between items-center bg-gradient-to-r ${cardColors[idx % cardColors.length]} bg-clip-text text-transparent drop-shadow`}>
                {faq.question}
                <span className="ml-4 text-blue-400">{open === idx ? '-' : '+'}</span>
              </h3>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.p
                    className="mt-4 text-gray-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
// ...existing code...