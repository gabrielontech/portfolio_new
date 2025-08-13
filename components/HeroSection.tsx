'use client'
import React, { useState, useEffect } from 'react';
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
  { name: 'Xpert One' },
  { name: 'RTE France' },
  { name: '42 Entrepreneurs' },
  { name: 'Grof' },
];

const HeroSection = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const getGlobeSize = () => {
    if (windowSize.width < 640) return 220;
    if (windowSize.width < 768) return 260;
    return 300;
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen text-white p-4 md:p-6 lg:p-8 pt-28 sm:pt-24 md:pt-16 pb-8 md:pb-12">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mb-12 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-xs font-semibold tracking-widest shadow-lg uppercase">
            GABRIEL ONTECH
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg leading-tight">
            Build Your SaaS MVP in <span className="underline decoration-blue-400">2 Weeks</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-gray-200 max-w-lg mx-auto lg:mx-0">
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
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl shadow-xl text-base md:text-lg transition-all duration-300 transform hover:scale-105"
          >
            Curious how it works? <span className="ml-2">→</span>
          </a>
        </motion.div>
        {/* Social Proof */}
        <div className="mt-8 md:mt-10">
          <p className="text-xs text-gray-400 mb-4 font-semibold tracking-wide uppercase">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-6 mb-4">
            {companies.map((company) => (
              <span key={company.name} className="text-sm md:text-lg font-bold text-gray-300 hover:text-white transition-colors duration-200">
                {company.name}
              </span>
            ))}
            <span className="text-sm md:text-lg font-bold text-purple-400">+ more</span>
          </div>
          <p className="text-sm text-gray-400">
            Helping <span className="font-semibold text-blue-400">20+ founders</span> launch their SaaS products worldwide.
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-4 md:gap-6">
        {/* Interactive 3D Map */}
        <div className="w-[250px] h-[250px] sm:w-[290px] sm:h-[290px] md:w-[330px] md:h-[330px] rounded-full shadow-2xl overflow-hidden bg-black flex items-center justify-center">
          <Globe
            width={getGlobeSize()}
            height={getGlobeSize()}
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
        <div className="flex items-center gap-4 mt-4 px-4 max-w-md">
          {/* Example SVG illustration */}
         
          <div className="p-3 md:p-4 bg-gray-800 rounded-lg shadow-lg">
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
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