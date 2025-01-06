"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ComputerMockup from "@/public/assets/images/developer.png";
import GabrielPicture from "@/public/assets/images/gabriel_nobg.png";
import Flutter from "@/public/assets/images/flutter.png";
import NextJs from "@/public/assets/images/Next-JS.png";
import AnimatedCodeEditor from "../animatedCode/animatedCode";
import FloatingCTA from "../FloatingCTA";
import LanguageChanger from "../language-changer/LangageChanger";
import  JuliaPics from "@/public/assets/images/founders/julia.png";
import lamala from "@/public/assets/images/founders/lamala.png";
import olivier from "@/public/assets/images/founders/olivier.jpg";
import stanley from "@/public/assets/images/founders/stanley.png";
import { useTranslations } from 'next-intl';

interface LandingPageProps {
  whyMeRef: React.RefObject<HTMLDivElement>;
  workRef: React.RefObject<HTMLDivElement>;
  processRef: React.RefObject<HTMLDivElement>;
  faqsRef: React.RefObject<HTMLDivElement>;
  presentationRef: React.RefObject<HTMLDivElement>;
  locale : string;

}

export default function LandingPage({
  presentationRef,
  whyMeRef,
  workRef,
  processRef,
  faqsRef,
  locale,
}: LandingPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const socialProofBannerRef = useRef<HTMLDivElement>(null);
  const sociaProofArray = ["LAZONEGRISE", "ATELIER-SOI", "JIFFYPREP-INTERVIEWS", "OKPROD", "GROF", "LAZONEGRISE"];
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations('navbar');
  const h = useTranslations('hero')

  useEffect(() => {
    const ProofBanner = socialProofBannerRef.current;
    if (ProofBanner) {
      let scrollPosition = 0;
      const scrollSpeed = 0.3;
      const totalWidth = ProofBanner.scrollWidth;

      const scroll = () => {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= totalWidth / 2) {
          scrollPosition = 0;
        }
        ProofBanner.style.transform = `translateX(${-scrollPosition}px)`;
        requestAnimationFrame(scroll);
      };

      const animation = requestAnimationFrame(scroll);

      return () => cancelAnimationFrame(animation);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFloatingCTA(scrollPosition > 300); // Show after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c7befb] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-soft-light"></div>

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Mouse follower */}

      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-indigo-100  rounded-full overflow-hidden">
                <Image
                  src={GabrielPicture.src}
                  alt="Profile"
                  width={64}
                  height={64}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Gabriel Kitoko</h1>
                <p className="  text-sm text-green-500 flex space-x-2 items-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="">{t('presence')}</span>
                </p>
              </div>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <button
                    onClick={() => scrollToSection(whyMeRef)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {t('section1')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(workRef)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {t('section2')}
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => scrollToSection(faqsRef)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <LanguageChanger locale={locale}/>
                </li>
                
                <li>
                  
                  <a
                    href="https://calendly.com/gkitoko-pro"
                    target="_blank"
                    className="text-white font-semibold text-lg bg-indigo-600 hover:bg-indigo-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t('cta_button')}
                    <motion.span
                      className="ml-2 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 15,
                      }}
                    >
                      →
                    </motion.span>
                  </a>
            
                </li>
              </ul>
            </nav>
          </div>
          {isMenuOpen && (
            <nav className="mt-4 md:hidden">
              <ul className="flex flex-col space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(whyMeRef)}
                    className="block py-2 text-gray-600 hover:text-gray-900"
                  >
                     {t('section1')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(workRef)}
                    className="block py-2 text-gray-600 hover:text-gray-900"
                  >
                     {t('section2')}
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => scrollToSection(faqsRef)}
                    className="block py-2 text-gray-600 hover:text-gray-900"
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <LanguageChanger locale={locale}/>
                </li>
                <li>
                  <motion.a
                    href="https://calendly.com/gkitoko-pro"
                    target="_blank"
                    className="text-white font-semibold text-lg bg-indigo-600 hover:bg-indigo-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t('cta_button')}
                    <motion.span
                      className="ml-2 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 15,
                      }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </li>
              </ul>
            </nav>
          )}
        </header>

        <main className="container mx-auto px-4 mt-20 text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-1 mb-8"
          >
            <div className="flex -space-x-2">
              <img src={JuliaPics.src} alt="business owner" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src={lamala.src} alt="business owner" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src={olivier.src} alt="business owner" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src={stanley.src} alt="business owner" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <div className="flex flex-col gap-1 text-sm font-medium">
              <div className="flex justify-center md:justify-start text-lg">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-lg">{h('social_proof')}</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {h('main_hook1')}
            <br />
            {h('main_hook2')}
          </motion.h2>
         
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10"
          >
            {locale === 'fr' ? (
              <>
                En utilisant <span className="line-through">des outils no-code</span> les derniers outils d'ingénierie et les meilleures pratiques, je crée des sites web qui{' '}
                <span className="font-bold text-black">augmentent la confiance</span>{' '}
                et <span className="font-bold text-black">l'engagement des visiteurs</span>.
              </>
            ) : (
              <>
                Using <span className="line-through">no-code tools</span> last engineering tools and best practices, I create websites that{' '}
                <span className="font-bold text-black">increase visitor trust</span>{' '}
                and <span className="font-bold text-black">engagement</span>.
              </>
            )}
          </motion.p>
              
            
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
          >
            <motion.a
              href="https://calendly.com/gkitoko-pro"
              target="_blank"
              className="group bg-indigo-600 hover:bg-indigo-800 text-white px-16 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
            {h('cta_principal')}
              <motion.span
                className="ml-3 inline-block text-2xl"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 700, damping: 15 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Decorative elements */}
        </main>
        <section className="container mx-auto px-4 py-16">
          <div className="h-[400px] overflow-hidden">
            {" "}
            {/* Add this wrapper */}
            <AnimatedCodeEditor />
          </div>
        </section>
        <div className="mx-20 py-2 overflow-hidden relative pb-10">
          <div 
            ref={socialProofBannerRef} 
            className="whitespace-nowrap inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {Array(20).fill(null).map((_, index) => (
              <span 
                key={index} 
                className={`
                  mx-4 text-xl md:text-3xl font-extrabold tracking-wider
                  relative
                  text-black
                  transition-all duration-300
                  ${isHovered ? 'scale-105' : 'scale-100'}
                  after:absolute after:inset-0
                  after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent
                  after:translate-x-[-100%]
                  after:animate-[shine_3s_infinite]
                  after:pointer-events-none
                `}
                style={{
                  WebkitBackgroundClip: 'text',
                }}
              >
                {index % 5 === 0 && "LAZONEGRISE"}
                {index % 5 === 1 && "ATELIER-SOI"}
                {index % 5 === 2 && "GROF"}
                {index % 5 === 3 && "OKPROD"}
                {index % 5 === 4 && "JIFFYPREP"}
              </span>
            ))}
          </div>
        </div>
      </div>
      <FloatingCTA isVisible={showFloatingCTA} />
    </div>
  );
}
