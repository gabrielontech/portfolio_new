'use client'
import React from 'react';
import AnimatedPill from './AnimatedPill';

const techStack = [
  { name: 'Next.js', logo: '/assets/logos/nextjs.svg' },
  { name: 'Supabase', logo: '/assets/logos/supabase.svg' },
  { name: 'Stripe', logo: '/assets/logos/stripe.svg' },
  { name: 'OpenAI', logo: '/assets/logos/openai.svg' },
  { name: 'Vercel', logo: '/assets/logos/vercel.svg' },
  { name: 'Tailwind CSS', logo: '/assets/logos/tailwindcss.svg' },
  { name: 'Shadcn', logo: '/assets/logos/shadcn.svg' },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-8">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <AnimatedPill key={tech.name} label={tech.name} icon={tech.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;