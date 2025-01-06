import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ChevronRight } from "lucide-react";
import AtelierSoi from "@/public/assets/images/ateliersoi.png";
import ZoneGrise from "@/public/assets/images/zoneGrise.png";
import xpertOne from "@/public/assets/images/xpertOne.png";
import JiffyPrep from "@/public/assets/images/jiffyPrep.png";
import OkFormation from "@/public/assets/images/OkFormation.png";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MockupToolbar from "../mockup/mockup_bar";
import { useTranslations } from 'next-intl';

const getCards = (t: any) => [
  {
    title: t('xpertone.title'),
    subtitle: t('xpertone.subtitle'),
    description: t('xpertone.description'),
    buttonText: t('xpertone.buttonText'),
    bgColor: "bg-blue-100",
    projectUrl: "https://www.xpertone.fr/",
    image: xpertOne.src,
  },
  {
    title: t('okformation.title'),
    subtitle: t('okformation.subtitle'),
    description: t('okformation.description'),
    buttonText: t('okformation.buttonText'),
    bgColor: "bg-indigo-100",
    projectUrl: "https://www.okformation.online/",
    image: OkFormation.src,
  },
  {
    title: t('jiffyprep.title'),
    subtitle: t('jiffyprep.subtitle'),
    description: t('jiffyprep.description'),
    buttonText: t('jiffyprep.buttonText'),
    bgColor: "bg-purple-100",
    projectUrl: "https://jiffyprepinterviews.com/fr",
    image: JiffyPrep.src,
  },
  {
    title: t('zonegrise.title'),
    subtitle: t('zonegrise.subtitle'),
    description: t('zonegrise.description'),
    buttonText: t('zonegrise.buttonText'),
    bgColor: "bg-indigo-100",
    projectUrl: "https://www.zonagri.com/",
    image: ZoneGrise.src,
  },
  {
    title: t('ateliersoi.title'),
    subtitle: t('ateliersoi.subtitle'),
    description: t('ateliersoi.description'),
    buttonText: t('ateliersoi.buttonText'),
    bgColor: "bg-violet-100",
    projectUrl: "https://www.atelier-soi.fr/",
    image: AtelierSoi.src,
  },
];


export default function WorkShowcaseSection() {
  const t = useTranslations('work');
  const w = useTranslations('work_cards')
  const [currentCard, setCurrentCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const newCard = Math.floor(latest * cards.length);
      if (newCard !== currentCard && newCard < cards.length) {
        setCurrentCard(newCard);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, currentCard]);

  const cards = getCards(w);

  return (
    <div
      ref={containerRef}
      className="h-[300vh] relative bg-gradient-to-br from-white to-[#c7befb] py-20"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-indigo-600 text-2xl mb-4 text-center relative z-10">
          {t('section_title')}
        </h2>
        <h3 className="text-5xl font-bold mb-16 text-center relative z-10">
          {t('section_subtitle')}
        </h3>
      </div>
      <div className="sticky top-0 h-screen overflow-hidden">
        <AnimatePresence>
          {cards.map((card, index) => {
            const isActive = index === currentCard;
            const isPrevious = index === currentCard - 1;

            return (
              <motion.div
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                  y: isActive ? 0 : isPrevious ? "-5%" : "100%",
                  opacity: isActive ? 1 : isPrevious ? 0.7 : 0,
                  scale: isActive ? 1 : isPrevious ? 0.95 : 1,
                  zIndex: isActive ? cards.length - index : 0,
                }}
                exit={{
                  y: "-100%",
                  opacity: 0,
                  transition: { duration: 0.5 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
              >
                <Card
                  className={`w-full max-w-7xl h-[90vh] ${card.bgColor} shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 relative`}
                >
                  <CardContent className="h-full flex flex-col lg:flex-row p-0">
                    <div className="w-full lg:w-1/2 h-48 sm:h-64 lg:h-full relative overflow-hidden">
                      <div className="absolute inset-0  overflow-hidden">
                        {" "}
                        {/* Added overflow-hidden */}
                        <div className="relative w-full h-full transition-transform duration-500 hover:scale-105">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover object-center shadow-xl"
                            style={{ transform: "translateZ(50px)" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-white p-6 sm:p-8">
                      <h2 className="text-xl sm:text-2xl text-indigo-600 font-bold mb-2 sm:mb-4 tracking-wide">
                        {card.title}
                      </h2>
                      <h3 className="text-3xl sm:text-4xl text-gray-900 lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
                        {card.subtitle}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 lg:text-xl mb-6 sm:mb-8 leading-relaxed pr-16">
                        {card.description}
                      </p>
                      {/* {card.inProgress ? (
                        <motion.div
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Button
                            onClick={() => {
                              window.open(card.projectUrl, "_blank");
                            }}
                            className="self-start text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-300 text-gray-700"
                          >
                            In progress...
                          </Button>
                        </motion.div>
                      ) : ( */}
                        <Button
                          onClick={() => {
                            window.open(card.projectUrl, "_blank");
                          }}
                          className="self-start text-base sm:text-lg px-6  sm:px-8 py-3 sm:py-4 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300"
                        >
                          {card.buttonText}
                          <ChevronRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                        </Button>
                      {/* )} */}
                    </div>
                  </CardContent>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-4">
                    {cards.map((_, i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                          i === index
                            ? "bg-white text-gray-900 scale-110"
                            : "bg-white/30 text-white"
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ("use client");

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import MockupToolbar from "../mockup/mockup_bar";

// import { motion } from "framer-motion";

// interface Project {
//   tag: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   projectUrl: string;
//   inProgress?: boolean; // New property
// }

// const projects: Project[] = [
//   {
//     tag: "SITE E-COM",
//     title: "La Zone Grise",
//     description:
//       "I developed an e-commerce website for a lifestyle coach, featuring the sale of e-training courses. The site integrates Stripe for secure payment processing, providing a seamless shopping experience for customers purchasing digital products.",
//     imageUrl: ZoneGrise.src,
//     projectUrl: "",
//     inProgress: true, // Mark this project as in progress
//   },
//   {
//     tag: "LANDING PAGE",
//     title: "Atelier Soi",
//     description:
//       "I crafted a sleek and professional landing page for a client specializing in helping business professionals overcome burnout, manage work-related stress, and regain control of their lives. This project was built using Next.js and Tailwind CSS, ensuring a seamless user experience and modern design aesthetics.",
//     imageUrl: AtelierSoi.src,
//     projectUrl: "https://www.atelier-soi.fr/",
//   },
//   {
//     tag: "CRM & LANDING PAGE",
//     title: "X-pert One",
//     description:
//       "I developed a website that connects expert professionals with businesses. This project included creating a dynamic landing page and implementing a custom CRM system to manage client relationships and expert profiles.",
//     imageUrl: xpertOne.src,
//     projectUrl: "https://www.xpertone.fr/",
//   },
//   {
//     tag: "MICRO SASS",
//     title: "JIffyPrep Interviews",
//     description:
//       "JiffyPrep interviews is a web platform that uses the power of AI to help candidates prepare for job interviews. The platform provides a PDF containing the resources needed to prepare for a job interview.",
//     imageUrl: JiffyPrep.src,
//     projectUrl: "https://jiffyprepinterviews.com/fr",
//   },
// ];

// export default function WorkShowcaseSection() {
//   const [rotation, setRotation] = useState({ x: 0, y: 0, index: -1 });

//   const handleMouseMove = (
//     event: React.MouseEvent<HTMLDivElement>,
//     index: number
//   ) => {
//     const card = event.currentTarget;
//     const rect = card.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
//     const rotateX = (y - centerY) / 20;
//     const rotateY = (centerX - x) / 20;

//     setRotation({ x: rotateX, y: rotateY, index });
//   };

//   const handleMouseLeave = () => {
//     setRotation({ x: 0, y: 0, index: -1 });
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-white to-[#c7befb] py-20">
//       <div className="container mx-auto px-4 relative">
//         <div className="absolute inset-0 bg-noise opacity-50 mix-blend-soft-light pointer-events-none"></div>
//         <h2 className="text-indigo-600 text-2xl mb-4 text-center relative z-10">
//           WORK
//         </h2>
//         <h3 className="text-5xl font-bold mb-16 text-center relative z-10">
//           A taste of what I can do for you
//         </h3>

//         {projects.map((project, index) => (
//           <div
//             key={project.title}
//             className={`flex flex-col md:flex-row items-center mb-20 ${
//               index % 2 !== 0 ? "md:flex-row-reverse" : ""
//             } relative z-10`}
//           >
//             <div className="md:w-1/2 mb-8 md:mb-0 px-4 md:px-8 lg:px-12">
//               <p className="text-indigo-600 font-semibold mb-2">
//                 {project.tag}
//               </p>
//               <h4 className="text-4xl font-bold mb-4">{project.title}</h4>
//               <p className="text-gray-600 text-xl mb-6">
//                 {project.description}
//               </p>
//               {project.inProgress ? (
//                 <motion.div
//                   className="inline-block bg-gray-300 text-gray-700 px-6 py-3 rounded-md cursor-not-allowed"
//                   animate={{ opacity: [0.6, 1, 0.6] }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   In progress...
//                 </motion.div>
//               ) : (
//                 <motion.a
//                   href={project.projectUrl}
//                   target="_blank"
//                   className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
//                 >
//                   View project
//                   <motion.span
//                     className="ml-2 inline-block"
//                     initial={{ x: 0 }}
//                     whileHover={{ x: 5 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 700,
//                       damping: 15,
//                     }}
//                   >
//                     →
//                   </motion.span>
//                 </motion.a>
//               )}
//             </div>
//             <div
//               className="md:w-1/2 px-4 md:px-8 lg:px-12 perspective-1000"
//               onMouseMove={(e) => handleMouseMove(e, index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div
//                 className="relative rounded-lg shadow-xl transition-transform duration-200 ease-out"
//                 style={{
//                   transform:
//                     rotation.index === index
//                       ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
//                       : "none",
//                   transformStyle: "preserve-3d",
//                 }}
//               >
//                 {" "}
//                 <div className="flex flex-col">
//                   <MockupToolbar />

//                   <Image
//                     src={project.imageUrl}
//                     alt={`${project.title} screenshot`}
//                     width={800}
//                     height={600}
//                     className="rounded-lg shadow-xl"
//                     style={{ transform: "translateZ(50px)" }}
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-200 rounded-lg"></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

