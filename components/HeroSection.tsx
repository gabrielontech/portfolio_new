'use client'
import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const markers = [
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "NYC", lat: 40.7128, lng: -74.006 },
  { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093 },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
];

const globeMarkers = markers.map(m => ({
  lat: m.lat,
  lng: m.lng,
  size: 0.6,
  color: 'red',
  label: m.name
}));

const companies = [
  { name: 'Xpert One', logo: '/logos/xpertone.png' },
  { name: 'RTE France', logo: '/logos/rte.png' },
  { name: '42 Entrepreneurs', logo: '/logos/42.png' },
  { name: 'Grof', logo: '/logos/grof.png' },
];

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen text-white p-4">
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left max-w-2xl mx-auto md:mx-0">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-xs font-semibold tracking-widest shadow-lg uppercase">
            GABRIEL ONTECH
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            Build Your SaaS MVP in <span className="underline decoration-blue-400">2 Weeks</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            No more guesswork. I guide you from idea to launch—step by step, side by side. Let’s turn your vision into a product, fast.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl text-lg transition-all duration-300 transform hover:scale-105"
          >
            Curious how it works? <span className="ml-2">→</span>
          </a>
        </motion.div>
        {/* Social Proof */}
        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-3">
            {companies.map((company) => (
              <div key={company.name} className="flex items-center space-x-2">
                <img src={company.logo} alt={company.name} className="h-8 w-auto object-contain grayscale" />
                <span className="text-xs text-gray-300">{company.name}</span>
              </div>
            ))}
            <span className="text-xl font-bold text-purple-400 ml-2">+ more</span>
          </div>
          <p className="text-sm text-gray-400">
            I provide value to <span className="font-semibold text-blue-400">20+ founders</span> worldwide.
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-12 md:mt-0 gap-6">
        {/* Interactive 3D Map */}
        <div className="w-[350px] h-[350px] rounded-full shadow-2xl overflow-hidden bg-black flex items-center justify-center">
          <Globe
            width={320}
            height={320}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            pointsData={globeMarkers}
            pointLat="lat"
            pointLng="lng"
            pointColor="color"
            pointAltitude={0.02}
            pointLabel="label"
            pointRadius="size"
            atmosphereColor="blue"
            atmosphereAltitude={0.15}
          />
        </div>
        {/* Illustration + Encouragement */}
        <div className="flex items-center gap-4 mt-4">
          {/* Example SVG illustration */}
         
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <p className="text-base text-gray-200">
              <span className="font-bold text-blue-400">You don't need to be a developer</span> to launch your SaaS.<br />
              Most of my clients are non-technical founders : if you have an idea, I’ll help you make it real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;