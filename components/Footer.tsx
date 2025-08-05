'use client';
import React from 'react';
import Image from 'next/image';
import GabrielPics from '@/public/assets/avatar/gabrielpics.jpeg';




const Footer = () => (
  <footer className=" text-gray-400 py-10 mt-20 border-t border-gray-800">
    <div className="container mx-auto px-4 flex flex-col items-center gap-6">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <Image
          src={GabrielPics.src}
          alt="Gabriel Kitoko"
          width={80}
          height={80}
          className="rounded-full border-2 border-gray-700 shadow-lg"
        />
        {/* Subtle separator line */}
        <div className="w-24 h-px bg-gray-700 my-4" />
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold text-white">Gabriel Kitoko</span>
        <span className="text-xs">© {new Date().getFullYear()}</span>
      </div>
      <div className="flex gap-6">
        {/* X (Twitter) */}
        <a
          href="https://x.com/your_x_username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          aria-label="X (Twitter)"
        >
          {/* Improved X Icon */}
          <svg width="24" height="24" viewBox="0 0 1200 1200" fill="none">
            <path d="M200 200L1000 1000M1000 200L200 1000" stroke="currentColor" strokeWidth="120" strokeLinecap="round"/>
          </svg>
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/your_twitter_username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          aria-label="Twitter"
        >
          {/* Official Twitter Logo */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99A12.14 12.14 0 013 5.1a4.29 4.29 0 001.33 5.72c-.7-.02-1.36-.21-1.93-.53v.05c0 2.01 1.43 3.69 3.33 4.07-.35.1-.72.16-1.1.16-.27 0-.53-.03-.78-.07.53 1.65 2.07 2.85 3.89 2.88A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0024 4.59a8.47 8.47 0 01-2.54.7z"/>
          </svg>
        </a>
        {/* TikTok */}
        <a
          href="https://tiktok.com/@your_tiktok_username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
          aria-label="TikTok"
        >
          {/* TikTok Icon */}
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M8 8v8a4 4 0 004 4 4 4 0 004-4V8h-2v8a2 2 0 01-4 0V8H8z" fill="currentColor"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;