"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ComputerMockup from "@/public/assets/images/developer.png";
import GabrielPicture from "@/public/assets/images/gabriel_chill.png";
import Flutter from "@/public/assets/images/flutter.png";
import NextJs from "@/public/assets/images/Next-JS.png";

interface LandingPageProps {
  whyMeRef: React.RefObject<HTMLDivElement>;
  workRef: React.RefObject<HTMLDivElement>;
  processRef: React.RefObject<HTMLDivElement>;
  faqsRef: React.RefObject<HTMLDivElement>;
  presentationRef: React.RefObject<HTMLDivElement>;
}

export default function LandingPage({
  presentationRef,
  whyMeRef,
  workRef,
  processRef,
  faqsRef,
}: LandingPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
      <motion.div
        className="hidden md:block w-6 h-6 rounded-full bg-indigo-500 fixed mix-blend-difference"
        style={{
          pointerEvents: "none",
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16  rounded-full overflow-hidden">
                <Image
                  src={GabrielPicture.src}
                  alt="Profile"
                  width={50}
                  height={50}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Gabriel Kitoko</h1>
                <p className="  text-sm text-green-500 flex space-x-2 items-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="">Ready to help</span>
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
                    Why me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(workRef)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Work
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
                  <a
                    href="https://calendly.com/gkitoko-pro"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Work with me
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
                    Why me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(workRef)}
                    className="block py-2 text-gray-600 hover:text-gray-900"
                  >
                    Work
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
                  <motion.a
                    href="https://calendly.com/gkitoko-pro"
                    target="_blank"
                    className="block py-2 text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Work with me
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            High-end full-stack
            <br />
            website / mobile developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10"
          >
            Agency-quality NextJs websites / Flutter App with the personal touch
            of a freelancer.
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
              className="group bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              Work with me
              <motion.span
                className="ml-2 inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 700, damping: 15 }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.div
              className="group bg-white text-gray-900 px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <button onClick={() => scrollToSection(presentationRef)}>
                Learn more
                <motion.span
                  className="ml-2 inline-block"
                  initial={{ y: 0 }}
                  whileHover={{ y: 5 }}
                  transition={{ type: "spring", stiffness: 700, damping: 15 }}
                >
                  ↓
                </motion.span>
              </button>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <div className="mt-20 relative">
            <Image
              src={ComputerMockup.src}
              alt="Laptop mockup"
              width={800}
              height={500}
              className="mx-auto rounded-lg shadow-2xl"
            />
            <motion.img
              src={NextJs.src}
              alt="NextJs"
              className="absolute -top-10 -left-10 w-20 h-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              src={Flutter.src}
              alt="Flutter"
              className="absolute -bottom-0 -right-10 w-24 h-24"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
