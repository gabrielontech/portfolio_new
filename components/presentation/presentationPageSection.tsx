"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profilePicture from "@/public/assets/images/gabriel_nobg.png";
import TestimonialSection from "../favorite_testimonial/favoriteTestimonial";
import { useTranslations } from 'next-intl';

export default function PresentationSection() {
  const t = useTranslations('presentation');

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center mb-20">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 relative">
            <svg
              className="absolute inset-0 w-full h-full translate-x-4"
              style={{ top: "5%", height: "95%" }}
              viewBox="0 0 300 300"
              preserveAspectRatio="none"
            >
              <rect
                x="0"
                y="0"
                width="300"
                height="300"
                fill="#1D2A45"
                rx="12"
                ry="12"
              />
              <path
                d="M12 0 H288 A12 12 0 0 1 300 12 V288 A12 12 0 0 1 288 300 H12 A12 12 0 0 1 0 288 V12 A12 12 0 0 1 12 0 Z"
                fill="none"
                stroke="url(#border-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="1160"
                strokeDashoffset="1160"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="1160"
                  to="-1160"
                  dur="12s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.42, 0, 0.58, 1"
                />
              </path>
              <defs>
                <linearGradient
                  id="border-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00FFFF">
                    <animate
                      attributeName="offset"
                      values="0;1;0"
                      dur="12s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="50%" stopColor="#FF00FF">
                    <animate
                      attributeName="offset"
                      values="0.5;1.5;0.5"
                      dur="12s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#00FFFF">
                    <animate
                      attributeName="offset"
                      values="1;2;1"
                      dur="12s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 overflow-hidden "
              style={{
                width: "100%",
                height: "120%",
              }}
            >
              <Image
                src={profilePicture.src}
                alt="Gabriel Kitoko"
                width={800}
                height={450}
                className="w-full h-full object-cover "
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <blockquote className="text-3xl font-bold italic mb-4">
              {t('quote')}
            </blockquote>
            <p className="text-xl">
              {t('description')}
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            {t('experience')}
          </h2>
        </div>
        
        <TestimonialSection />
      </div>
    </section>
  );
}
