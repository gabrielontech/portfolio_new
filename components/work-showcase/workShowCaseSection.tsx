"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import BrowserFrame from "../mockup/browser-frame";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


// Import images
import AtelierSoi from "@/public/assets/images/ateliersoi.png";
import ZoneGrise from "@/public/assets/images/zoneGrise.png";
import xpertOne from "@/public/assets/images/xpertOne.png";
import JiffyPrep from "@/public/assets/images/grof.png";
import OkFormation from "@/public/assets/images/okformation.png";

const getCards = (t: any) => [
  {
    title: t('xpertone.title'),
    subtitle: t('xpertone.subtitle'),
    description: t('xpertone.description'),
    buttonText: t('xpertone.buttonText'),
    projectUrl: "https://www.xpertone.fr/",
    image: xpertOne.src,
  },
  {
    title: t('okformation.title'),
    subtitle: t('okformation.subtitle'),
    description: t('okformation.description'),
    buttonText: t('okformation.buttonText'),
    projectUrl: "https://www.okformation.online/",
    image: OkFormation.src,
  },
  {
    title: t('Grof.title'),
    subtitle: t('Grof.subtitle'),
    description: t('Grof.description'),
    buttonText: t('Grof.buttonText'),
    projectUrl: "https://grof-site.vercel.app/",
    image: JiffyPrep.src,
  },
  {
    title: t('zonegrise.title'),
    subtitle: t('zonegrise.subtitle'),
    description: t('zonegrise.description'),
    buttonText: t('zonegrise.buttonText'),
    projectUrl: "https://www.zonagri.com/",
    image: ZoneGrise.src,
  },
  {
    title: t('ateliersoi.title'),
    subtitle: t('ateliersoi.subtitle'),
    description: t('ateliersoi.description'),
    buttonText: t('ateliersoi.buttonText'),
    projectUrl: "https://www.atelier-soi.fr/",
    image: AtelierSoi.src,
  },
];

export default function WorkShowcaseSection() {
  const t = useTranslations('work');
  const w = useTranslations('work_cards');
  const cards = getCards(w);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#c7befb]">
      <div className="container mx-auto px-4">
        <h2 className="text-indigo-600 text-2xl mb-4 text-center">
          {t('section_title')}
        </h2>
        <h3 className="text-5xl font-bold mb-16 text-center">
          {t('section_subtitle')}
        </h3>

        <div className="relative">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full py-12"
          >
            {cards.map((card, index) => (
              <SwiperSlide
                key={index}
                className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[55%] h-auto"
              >
                <div className="flex flex-col h-[600px] sm:h-[700px]">
                  <div className="relative flex-1">
                    <BrowserFrame>
                      <div className="relative w-full h-full">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                          quality={90}
                        />
                      </div>
                    </BrowserFrame>
                  </div>
                  
                  <div className="p-8 bg-gray-100 rounded-b-xl">
                    <h4 className="text-xl text-indigo-600 font-semibold mb-2">
                      {card.title}
                    </h4>
                    <h5 className="text-3xl font-bold text-gray-900 mb-4">
                      {card.subtitle}
                    </h5>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {card.description}
                    </p>
                    <Button
                      onClick={() => window.open(card.projectUrl, "_blank")}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300"
                    >
                      {card.buttonText}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper {
          padding: 2rem 0;
        }
        
        .swiper-slide {
          transition: transform 0.3s;
        }
        
        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.5;
          transform: scale(0.9);
        }
        
        .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
          background: #4f46e5;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: #4f46e5;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }
      `}</style>
    </section>
  );
}

