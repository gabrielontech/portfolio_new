'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import GabrielPics from '@/public/assets/avatar/gabrielpics.jpeg';

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Case Studies', href: '#case-studies' },
];

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

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
      <div className="flex items-center backdrop-blur-md rounded-full shadow-2xl px-4 md:px-10 py-3 gap-2 md:gap-8 border border-gray-700">
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
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => smoothScrollTo(link.href.slice(1))}
                className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 hover:text-blue-400 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* CTA */}
        <button
          onClick={() => smoothScrollTo('contact')}
          className="hidden md:inline-flex items-center ml-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-5 rounded-full shadow-lg text-base transition-all duration-200"
        >
          <span className='text-center'>Let's Build Yours</span>
          <span className="ml-2 text-xl">→</span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 backdrop-blur-md bg-black/80 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
          <div className="py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => smoothScrollTo(link.href.slice(1))}
                className="block w-full text-left px-6 py-3 text-white font-medium hover:bg-white/10 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => smoothScrollTo('contact')}
              className="block w-full text-left px-6 py-3 text-white font-medium hover:bg-white/10 hover:text-blue-400 transition-colors border-t border-gray-600 mt-2"
            >
              Let's Build Yours →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;