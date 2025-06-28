'use client'
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your SaaS MVP?</h2>
        <p className="mb-8">
          Let’s turn your idea into reality. Whether you have a concept or a fully fleshed-out plan, I'm here to help you every step of the way.
        </p>
        <div className="flex justify-center">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300">
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
            </a>
          </Button>
          <span className="mx-4">or</span>
          <Button asChild className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300">
            <a href="mailto:your-email@example.com">
              Email Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;