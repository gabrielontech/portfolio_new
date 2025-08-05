"use client"
import React from 'react';

type CaseStudy = {
  title: string;
  description: string;
  image: string;
  type: 'Mobile App' | 'Websites' | 'SaaS';
  tag: string;
  tagIcon?: React.ReactNode;
  link?: string;
  nda?: boolean;
  status?: 'active' | 'nda' | 'shutdown' | 'unavailable'; // Add status
};

const CaseStudyCard: React.FC<{ project: CaseStudy }> = ({ project }) => (
  <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#10151c] max-w-5xl mx-auto mb-12">
    {/* Left: Content */}
    <div className="relative z-10 flex-1 p-10 flex flex-col justify-center">
      <div className="mb-4">
        <span className="inline-block text-2xl mb-4">
          {project.tagIcon || (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill="#1e293b" />
              <circle cx="16" cy="16" r="6" fill="#38bdf8" />
            </svg>
          )}
        </span>
      </div>
      <h3 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
        {project.title}
      </h3>
      <p className="text-gray-300 text-lg mb-8 max-w-xl">
        {project.nda
          ? 'This project is under NDA. Details cannot be displayed publicly.'
          : project.description}
      </p>
      <div className="flex items-center gap-4">
        <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-400 text-blue-300 bg-gray-900 bg-opacity-60 text-sm font-semibold">
          {project.tagIcon && <span className="mr-2">{project.tagIcon}</span>}
          {project.tag}
        </span>
      </div>
    </div>
    {/* Right: Background Image */}
    <div className="absolute inset-0 md:relative md:w-1/2 h-72 md:h-auto">
      <div className="absolute inset-0 bg-gradient-to-l from-[#10151c] via-[#10151c]/80 to-transparent z-10" />
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full md:rounded-r-3xl"
        style={{ filter: 'brightness(0.7)' }}
      />
      {/* Action Button(s) */}
      <div className="absolute bottom-6 right-6 z-20 flex">
        {project.status === 'nda' || project.nda ? (
          <span className="px-8 py-3 rounded-full border-2 border-gray-600 text-gray-400 font-semibold text-lg bg-transparent cursor-not-allowed opacity-60">
            NDA Protected
          </span>
        ) : project.status === 'shutdown' ? (
          <span className="px-8 py-3 rounded-full border-2 border-red-400 text-red-300 font-semibold text-lg bg-transparent cursor-not-allowed opacity-60">
            Shut Down
          </span>
        ) : project.status === 'unavailable' ? (
          <span className="px-8 py-3 rounded-full border-2 border-gray-500 text-gray-300 font-semibold text-lg bg-transparent cursor-not-allowed opacity-60">
            Not Available
          </span>
        ) : project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border-2 border-blue-300 text-blue-200 font-semibold text-lg bg-transparent hover:bg-blue-400 hover:text-white transition"
          >
            View Project
          </a>
        ) : null}
      </div>
    </div>
  </div>
);

export type { CaseStudy };
export default CaseStudyCard;