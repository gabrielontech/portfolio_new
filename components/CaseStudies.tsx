"use client";

import React, { useState } from 'react';
import CaseStudyCard, { CaseStudy } from './CaseStudyCard';
import XpertOne from '@/public/assets/projects/xpertOne.webp';
import zoneGrise from '@/public/assets/projects/zoneGrise.webp';
import okFormation from '@/public/assets/projects/okformation1.webp';
import grof1 from '@/public/assets/projects/grof1.webp';
import fitnezzy from '@/public/assets/projects/fitnezzy.jpg';
import ateliersoi from '@/public/assets/projects/ateliersoi.webp';
import eurosia from '@/public/assets/projects/eurosia.png';



const projects: CaseStudy[] = [
  {
    title: 'Xpert One',
    description:
      'I developed a website that connects expert professionals with businesses. This project included creating a dynamic landing page and implementing a custom CRM system to manage client relationships and expert profiles.',
    image: XpertOne.src,
    type: 'SaaS',
    tag: 'WEB DESIGN & DEV',
    link: 'https://www.xpertone.fr/',
  },
  {
    title: 'Zone Grise',
    description:
      'I developed an e-commerce site for a life coach, offering online training courses. The site integrates Stripe for secure payment processing, providing a smooth purchasing experience for customers buying digital products.',
    image: zoneGrise.src,
    type: 'Websites',
    tag: 'WEB DESIGN & E-COMMERCE',
    link: 'https://www.zonagri.com/en',
  },
  {
    title: 'Ok Formation',
    description:
      'I designed and developed a high-converting landing page for OkFormation, a leading online training platform. This page showcases their expert-led courses on popular design tools like Adobe XD, Figma, and Canva.',
    image: okFormation.src,
    type: 'Websites',
    tag: 'WEB DESIGN & DEV',
    link: 'https://www.okformation.online/',
  },
  {
    title: 'Grof',
    description:
      'Grof, sales ops agency dedicated to sales performance. They help to connect directly with decision-makers and accelerate sales cycles.',
    image: grof1.src,
    type: 'Websites',
    tag: 'WEB DESIGN & DEV',
    link: 'https://grof-site.vercel.app/',
  },
  {
    title: 'Fitnezzy App',
    description: 'A fitness app that allows users to book on-demand workout sessions with personal trainers and gym classes.',
    image: fitnezzy.src,
    type: 'Mobile App',
    tag: 'MOBILE APP',
    status: 'shutdown',
  },
  {
    title: 'Eurosia',
    description:
      'A dating app with live location sharing for swingers.This project has been shutdown due to app store policy.',
    image: eurosia.src,
    type: 'Mobile App',
    tag: 'MOBILE APP',
    status: 'shutdown',
  },
];

const filters = ['All', 'Mobile App', 'Websites', 'SaaS'] as const;

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="case-studies" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600 bg-clip-text text-transparent text-center leading-tight">
          Recent Work
        </h2>
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-gray-900 bg-opacity-60 rounded-full px-3 py-2 md:px-6 flex flex-wrap justify-center gap-2 md:gap-4 text-gray-300 text-xs md:text-sm font-medium shadow-lg max-w-sm md:max-w-none">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 md:px-4 rounded-full transition font-semibold text-center whitespace-nowrap
                  ${filter === activeFilter
                    ? 'bg-blue-900 text-blue-400 shadow'
                    : 'hover:text-blue-300'}
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        {filteredProjects.length === 0 ? (
          <div className="text-center text-gray-400 py-12 md:py-20 text-sm md:text-base">No projects to display.</div>
        ) : (
          filteredProjects.map((project, idx) => (
            <CaseStudyCard key={idx} project={project} />
          ))
        )}
      </div>
    </section>
  );
};

export default CaseStudies;