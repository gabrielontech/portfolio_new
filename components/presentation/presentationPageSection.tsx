"use client";

import Image from "next/image";
import profilePicture from "@/public/assets/images/profile_picture.png";
import ComputerMockup from "@/public/assets/images/developer.png";

export default function PresentationSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center mb-20">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={profilePicture.src}
              alt="Gabriel Kitoko"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <blockquote className="text-3xl font-bold italic mb-4">
              "The future belongs to those who believe in the beauty of their
              dreams."
            </blockquote>
            <p className="text-xl">
              As a passionate web developer with over 5 years of experience, I
              strive to turn innovative ideas into reality. My goal is to create
              seamless, user-friendly experiences that make a lasting impact.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            5+ YEARS OF WEB DEVELOPMENT EXPERIENCE
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          <span className="text-3xl font-extrabold tracking-wider text-gray-300 opacity-80 hover:opacity-100 transition-opacity duration-200">
            LAZONEGRISE
          </span>
          <span className="text-3xl font-extrabold tracking-wider text-gray-300 opacity-80 hover:opacity-100 transition-opacity duration-200">
            ATELIER-SOI
          </span>
          <span className="text-3xl font-extrabold tracking-wider text-gray-300 opacity-80 hover:opacity-100 transition-opacity duration-200">
            JIFFYPREP-INTERVIEWS
          </span>
        </div>
      </div>
    </section>
  );
}
