"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FullStack from "@/public/assets/images/computer_full_stack.jpg";
import MobileWeb from "@/public/assets/images/stats_growth.jpg";
import clientFocused from "@/public/assets/images/close-up-employee-with-headphones.jpg";
// import MobileWeb from "@/public/assets/images/mobile_web.jpg";
// import TechStack from "@/public/assets/images/tech_stack.jpg";
// import Reliability from "@/public/assets/images/reliability.jpg";
import TestimonialSection from "../favorite_testimonial/favoriteTestimonial";
import Link from "next/link";

const toggleOptions = [
  { id: "full-stack", label: "Full-Stack Solutions", image: FullStack },
  { id: "mobile-web", label: "Mobile & Web", image: MobileWeb },
  { id: "tech-stack", label: "Cutting-Edge Tech", image: FullStack },
  {
    id: "client-focused",
    label: "Client-Focused Approach",
    image: clientFocused,
  },
];

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

export default function ServiceSection() {
  const [activeToggle, setActiveToggle] = useState("full-stack");
  const sectionRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && toggleRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const toggleRect = toggleRef.current.getBoundingClientRect();

        // Add a buffer zone (e.g., 25% of the viewport height)
        const bufferZone = window.innerHeight * 0.25;

        // Update active toggle based on scroll position
        toggleOptions.forEach((option) => {
          const element = document.getElementById(option.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (
              rect.top <= toggleRect.height + bufferZone &&
              rect.bottom > toggleRect.height - bufferZone
            ) {
              setActiveToggle(option.id);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <section ref={sectionRef} className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-indigo-400 text-2xl mb-4">WHY CHOOSE ME</h2>
        <h3 className="text-5xl font-bold mb-8">
          Powerful software solutions,
          <br />
          tailored to your success
        </h3>

        <div className="sticky top-4 z-10">
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

        {toggleOptions.map((option) => (
          <div key={option.id} id={option.id} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 pr-8">
                  <h4 className="text-3xl font-bold mb-4">{option.label}</h4>
                  {option.id === "full-stack" && (
                    <p className="mb-4 text-xl">
                      As a full-stack developer, I offer end-to-end solutions
                      that seamlessly integrate front-end and back-end
                      technologies. From responsive user interfaces to robust
                      server-side applications, I ensure your project is built
                      with scalability and performance in mind.
                    </p>
                  )}
                  {option.id === "mobile-web" && (
                    <p className="mb-4 text-xl">
                      I specialize in creating responsive web applications and
                      native mobile apps that provide a consistent user
                      experience across all devices. Whether you need a
                      progressive web app or a native mobile solution, I can
                      deliver a product that meets your users' needs.
                    </p>
                  )}
                  {option.id === "tech-stack" && (
                    <p className="mb-4 text-xl">
                      I stay at the forefront of technology, leveraging the
                      latest tools and frameworks to build cutting-edge
                      applications. My expertise includes modern JavaScript
                      frameworks, cloud services, and emerging technologies to
                      ensure your project is built with the best tools for the
                      job.
                    </p>
                  )}
                  {option.id === "client-focused" && (
                    <div>
                      <p className="mb-4 text-xl">
                        I believe in true partnership with my clients. From the
                        initial concept to the final deployment, I'm committed
                        to accompanying you through every step of the project.
                        My approach is centered on open communication, regular
                        updates, and always finding time to discuss your needs
                        and concerns.
                      </p>
                      <p className="mb-4 text-xl">
                        By choosing to work with me, you're not just getting a
                        developer – you're getting a dedicated partner who is
                        invested in your project's success. I ensure that your
                        vision is realized while providing expert guidance and
                        support throughout the entire development process.
                      </p>
                      <Link
                        href="https://calendly.com/gkitoko-pro"
                        target="_blank"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                        >
                          Work with me
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
                        layout="responsive"
                        width={400}
                        height={300}
                        objectFit="cover"
                        className="rounded-lg"
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
                              layout="fill"
                              objectFit="contain"
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
                          <span className="text-sm text-center">
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

      <TestimonialSection />
    </section>
  );
}
