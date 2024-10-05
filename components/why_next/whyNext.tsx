"use client";

import React from "react";
import Image from "next/image";
import { Gauge, Zap, RefreshCw, Award, Box, Palette } from "lucide-react";
import { motion } from "framer-motion";

// Updated AnimatedIcon component
const AnimatedIcon = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {React.cloneElement(children, {
        size: 48,
        strokeWidth: 1,
        children: React.Children.map(children.props.children, (child) => (
          <motion.path
            key={child.props.d}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            {...child.props}
          />
        )),
      })}
    </motion.div>
  );
};

const features = [
  {
    icon: (
      <AnimatedIcon>
        <Gauge className="text-indigo-500" />
      </AnimatedIcon>
    ),
    title: "Optimised for performance",
    description:
      "Next.js is built for speed. With automatic code splitting, server-side rendering, and static site generation, your site will be blazing fast.",
  },
  {
    icon: (
      <AnimatedIcon>
        <Zap className="text-indigo-500" />
      </AnimatedIcon>
    ),
    title: "Rapid development",
    description:
      "Next.js enables quick development with features like hot module replacement and automatic routing. Launch your project in weeks, not months.",
  },
  {
    icon: (
      <AnimatedIcon>
        <RefreshCw className="text-indigo-500" />
      </AnimatedIcon>
    ),
    title: "Easy updates and maintenance",
    description:
      "With API routes and incremental static regeneration, keeping your site up-to-date is as simple as pushing new content to your CMS.",
  },
  {
    icon: (
      <AnimatedIcon>
        <Award className="text-indigo-500" />
      </AnimatedIcon>
    ),
    title: "Used by industry leaders",
    description:
      "Trusted by top companies like Netflix, TikTok, Twitch, and more for building high-performance web applications.",
  },
  {
    icon: (
      <AnimatedIcon>
        <Box className="text-indigo-500" />
      </AnimatedIcon>
    ),
    title: "Scalable architecture",
    description:
      "Built on strong foundations, Next.js allows your website to grow and scale effortlessly with your business needs.",
  },
  {
    icon: (
      <AnimatedIcon>
        <Palette className="text-indigo-500" />
      </AnimatedIcon>
    ),
    title: "Flexible development",
    description:
      "Whether you prefer static sites, server-side rendering, or a hybrid approach, Next.js provides the flexibility to build exactly what you need.",
  },
];

const companyLogos = [
  {
    name: "Netflix",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "TikTok",
    src: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
  },
  {
    name: "Twitch",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Twitch_logo.svg",
  },
  {
    name: "Notion",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },
];

export default function WhyNextJsSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">WHY NEXT.JS</h2>
          <h3 className="text-5xl font-bold mb-8">
            The future of web development
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-2xl font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h4 className="text-2xl font-bold text-center mb-8">
            Trusted by industry leaders
          </h4>
          <div className="flex justify-center items-center h-20 relative">
            {companyLogos.map((logo, index) => (
              <div key={logo.name} className="mx-4">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
