"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FullStack from "@/public/assets/images/computer_full_stack.jpg";
import MobileWeb from "@/public/assets/images/stats_growth.jpg";
import clientFocused from "@/public/assets/images/close-up-employee-with-headphones.jpg";
import TestimonialSection from "../favorite_testimonial/favoriteTestimonial";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader } from "../ui/card";
import { Frown, HelpCircle, RefreshCw, Star, Gem, DollarSign } from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
  },
  {
    name: "Supabase",
    logo: "https://supabase.com/favicon/favicon-196x196.png",
  },
  {
    name: "Flutter",
    logo: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
  },
  {
    name: "Tailwind CSS",
    logo: "https://tailwindcss.com/favicons/apple-touch-icon.png",
  },
  {
    name: "AWS",
    logo: "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png",
  },
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
  },
];

interface ServicePageProps {
  whyMeRef: React.RefObject<HTMLDivElement>;
}

export default function ServiceSection({
  whyMeRef
} : ServicePageProps) {
  const [activeToggle, setActiveToggle] = useState("full-stack");
  const sectionRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const sectionsContainerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('services');

  const toggleOptions = [
    { id: "full-stack", label: t('toggle_options.full_stack'), image: FullStack },
    { id: "mobile-web", label: t('toggle_options.mobile_web'), image: MobileWeb },
    { id: "tech-stack", label: t('toggle_options.tech_stack'), image: FullStack },
    {
      id: "client-focused",
      label: t('toggle_options.client_focused'),
      image: clientFocused,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionsContainerRef.current && toggleRef.current) {
        const viewportHeight = window.innerHeight;
        const toggleHeight = toggleRef.current.offsetHeight;
        
        // Get all section elements
        const sections = toggleOptions.map(option => document.getElementById(option.id)).filter(Boolean);
        
        // Find which section is most visible
        let maxVisibleRatio = 0;
        let mostVisibleSection = activeToggle;

        sections.forEach((section) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            
            // Calculate visibility ratio
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, toggleHeight);
            const totalHeight = rect.height;
            const visibilityRatio = Math.max(0, visibleHeight / totalHeight);

            // Update if this section is more visible
            if (visibilityRatio > maxVisibleRatio) {
              maxVisibleRatio = visibilityRatio;
              mostVisibleSection = section.id;
            }
          }
        });

        // Only update if we have a new most visible section
        if (mostVisibleSection !== activeToggle && maxVisibleRatio > 0.3) {
          setActiveToggle(mostVisibleSection);
        }
      }
    };

    // Add scroll listener with throttling for performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [activeToggle, toggleOptions]);

  const handleToggleClick = (id: string) => {
    setActiveToggle(id);
    const element = document.getElementById(id);
    if (element) {
      const toggleHeight = toggleRef.current?.offsetHeight || 0;
      const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        toggleHeight -
        16;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <section  className="bg-gray-900 text-white py-20">

    <div className="max-w-7xl mx-auto py-16 md:py-24">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          {t('service_problem_global_title1')}
            <br />
            {t('service_problem_global_title2')}
          <br />
            into leads.
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl">
          {t("service_problem_global_paragraph")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none bg-transparent">
            <CardHeader>
              <HelpCircle className="w-12 h-12 text-white mb-4" />
              <h2 className="text-xl font-semibold text-white">{t('service_problem_title1')}</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                {t('service_problem_details1')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-transparent">
            <CardHeader>
              <Frown className="w-12 h-12 text-white mb-4" />
              <h2 className="text-xl font-semibold text-white">{t('service_problem_title2')}</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
              {t('service_problem_details2')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-transparent">
            <CardHeader>
              <RefreshCw className="w-12 h-12 text-white mb-4" />
              <h2 className="text-xl font-semibold text-white">{t('service_problem_title3')}</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
              {t('service_problem_details3')}
              </p>
            </CardContent>
          </Card>
        </div>
    
      </div>



      <div className="max-w-7xl mx-auto py-16 md:py-24">
        <Card className="border-2 border-white/20 bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-2xl transform hover:scale-[1.01] transition-all duration-300 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
          
          <div className="text-center mb-16 space-y-6 relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold max-w-4xl mx-auto leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
            {t('service_solution_global_title1')}
              <br />
              {t('service_solution_global_title2')}
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl">
            {t('service_solution_global_paragraph1')}
              <br />
              {t('service_solution_global_paragraph2')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <Card className="border border-white/10 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader>
                <Star className="w-12 h-12 text-white mb-4" />
                <h2 className="text-xl font-semibold text-white">{t('service_solution_title1')}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
              {t('service_solution_details1')}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader>
                <Gem className="w-12 h-12 text-white mb-4" />
                <h2 className="text-xl font-semibold text-white">{t('service_solution_title2')}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                {t('service_solution_details2')}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-white mb-4" />
                <h2 className="text-xl font-semibold text-white">{t('service_solution_title3')}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                {t('service_solution_details3')}
                </p>
              </CardContent>
            </Card>
          </div>
        </Card>
      </div>

      <div ref={whyMeRef} className="container bg-gray-100 mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <h3 className="text-gray-900 text-5xl font-bold mb-16">
          {t('main_service_title1')}
          <br />
          {t('main_service_title2')}
        </h3>

        <div className="sticky top-4 z-10 hidden md:block">
          <div
            ref={toggleRef}
            className="bg-gray-800 p-2 rounded-full mb-12 w-full max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center space-x-8 items-center gap-2">
              {toggleOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleToggleClick(option.id)}
                  className={`px-4 py-2 rounded-full transition-colors text-md sm:text-md whitespace-nowrap ${
                    activeToggle === option.id
                      ? "bg-white text-gray-900"
                      : "text-white hover:bg-gray-700"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div ref={sectionsContainerRef}>
          {toggleOptions.map((option) => (
            <div 
              key={option.id} 
              id={option.id} 
              className="mb-20 min-h-[500px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 pr-8">
                    <h4 className="text-3xl font-bold mb-4 text-gray-900">{option.label}</h4>
                    {option.id === "full-stack" && (
                      <>
                        <p className="mb-4 text-xl text-gray-700">
                       {t('main_service_paragraph1')} 
                        </p>
                        <Link href="https://calendly.com/gkitoko-pro" target="_blank">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                          >
                           {t('cta_buttons.boost_conversions')}
                          </motion.button>
                        </Link>
                      </>
                    )}
                    {option.id === "mobile-web" && (
                      <>
                        <p className="mb-4 text-xl text-gray-700">
                        {t('main_service_paragraph2')} 
                        </p>
                        <Link href="https://calendly.com/gkitoko-pro" target="_blank">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                          >
                            {t('cta_buttons.upgrade_website')}
                           
                          </motion.button>
                        </Link>
                      </>
                    )}
                    {option.id === "tech-stack" && (
                      <>
                        <p className="mb-4 text-xl text-gray-700">
                        {t('main_service_paragraph3')} 
                        </p>
                        <Link href="https://calendly.com/gkitoko-pro" target="_blank">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                          >
                            {t('cta_buttons.modernize_tech')}
                          
                          </motion.button>
                        </Link>
                      </>
                    )}
                    {option.id === "client-focused" && (
                      <div>
                        <p className="mb-4 text-xl text-gray-700">
                          {t('main_service_paragraph4')} 
                        </p>
                        
                        <Link href="https://calendly.com/gkitoko-pro" target="_blank">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                          >
                            {t('cta_buttons.book_call')}
                          </motion.button>
                        </Link>
                      </div>
                    )}
                  </div>

                  {option.id !== "tech-stack" && (
                    <div className="md:w-1/2 mt-8 md:mt-0 w-full">
                      <motion.div
                        className="w-full h-full overflow-hidden rounded-lg"
                        whileHover={{
                          boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        <Image
                          src={option.image}
                          alt={option.label}
                          
                          width={400}
                          height={300}
                          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                        {/* <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 mix-blend-overlay"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "linear",
                          }}
                        /> */}
                      </motion.div>
                    </div>
                  )}

                  {option.id === "tech-stack" && (
                    <div className="md:w-1/2 mt-8 md:mt-0">
                      <div className="grid grid-cols-3 gap-4">
                        {technologies.map((tech) => (
                          <motion.div
                            key={tech.name}
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <motion.div
                              className="w-16 h-16 mb-2 relative overflow-hidden rounded-lg"
                              whileHover={{
                                boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.3)",
                              }}
                            >
                              <Image
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: 'contain' }}
                              />
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 mix-blend-overlay"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 3,
                                  ease: "linear",
                                }}
                              />
                            </motion.div>
                            <span className="text-sm text-gray-700 text-center font-medium">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

