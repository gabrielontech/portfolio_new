'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import GabrielPics from '@/public/assets/avatar/gabrielpics.jpeg';

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Case Studies', href: '#case-studies' },
];

const Navbar = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 40) {
        setShow(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center backdrop-blur-md rounded-full shadow-2xl px-10 py-3 gap-8 border border-gray-700">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
          <Image
            src={GabrielPics.src}
            alt="Gabriel Ontech"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        {/* Links */}
        <ul className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center ml-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-5 rounded-full shadow-lg text-base transition-all duration-200"
        >
          <span className='text-center'>Let’s Build Yours</span>
          <span className="ml-2 text-xl">→</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;