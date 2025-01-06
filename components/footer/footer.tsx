"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const footerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersectionRatio = entry.intersectionRatio;
        const newProgress = Math.max(0, (intersectionRatio - 0.2) / 0.8); // Normalize progress
        setProgress(newProgress);
      },
      {
        threshold: new Array(101).fill(0).map((_, i) => i / 100),
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const backgroundColor = `rgb(
    ${Math.round(255 - progress * (255 - 17))},
    ${Math.round(255 - progress * (255 - 24))},
    ${Math.round(255 - progress * (255 - 39))}
  )`;

  return (
    <footer
      ref={footerRef}
      style={{ backgroundColor }}
      className="flex flex-col justify-center items-center text-white h-screen transition-colors duration-500 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p
            className="text-lg transition-colors duration-500"
            style={{ color: progress > 0.5 ? "white" : "black" }}
          >
            {t('email_intro')}{" "}
            <a
              href="mailto:gabriel@gabrielontech.com"
              className="text-[#7c3aed] hover:underline"
            >
              gabriel@gabrielontech.com
            </a>
          </p>
        </div>
        <div
          className={`bg-[#262a34] rounded-lg p-12 mb-8 transition-opacity duration-300 ${
            progress > 0.3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-[#7c3aed]"></div>
            <div className="absolute bottom-0 right-0 w-16 h-1 bg-[#7c3aed]"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              {t('cta_title')}
              <br />
              {t('cta_subtitle')}
            </h2>
            <div className="text-center">
              <Link
                href="https://calendly.com/gkitoko-pro"
                target="_blank"
                className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300"
              >
                {t('cta_button')}
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex mt-56 flex-col md:flex-row justify-between items-center transition-opacity duration-300 ${
            progress > 0.7 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="mb-4 md:mb-0">{t('made_with')}</p>
          <p>
            {t('question')}{" "}
            <a
              href="mailto:gabriel@gabrielontech.com"
              className="text-[#7c3aed] hover:underline"
            >
              gabriel@gabrielontech.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
