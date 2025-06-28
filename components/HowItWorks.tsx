'use client'
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Idea Validation',
    description: 'We start by understanding your vision and validating your idea to ensure it meets market needs.',
  },
  {
    title: 'Prototyping',
    description: 'We create a prototype to visualize your idea, allowing for feedback and adjustments before development.',
  },
  {
    title: 'Development',
    description: 'Our team develops your MVP using the latest technologies, ensuring a robust and scalable solution.',
  },
  {
    title: 'Testing',
    description: 'We conduct thorough testing to ensure your MVP is functional, user-friendly, and ready for launch.',
  },
  {
    title: 'Launch',
    description: 'Finally, we help you launch your MVP, providing support and guidance to ensure a successful entry into the market.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-700 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;