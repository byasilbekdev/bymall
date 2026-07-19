"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../ui/button";

const carouselImages = [
  "/images/carouselImgs/hero_image_1.png",
  "/images/carouselImgs/hero_image_2.png",
  "/images/carouselImgs/hero_image_3.png",
  "/images/carouselImgs/hero_image_4.png",
  "/images/carouselImgs/hero_image_5.png",
  "/images/carouselImgs/hero_image_6.png",
];

export default function HeroSection() {
  return (
    <section className="container relative h-125">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={700}
        className="rounded-2xl"
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="relative h-125 w-full">
              <Image
                src={image}
                alt={`Hero Banner ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        aria-label="Previous slide"
        className="absolute left-12 top-[46%] w-12 h-12 z-50 -translate-y-0.5 prev-btn rounded-full text-primary-foreground shadow"
      >
        <ChevronLeft className="size-6" aria-hidden />
      </Button>

      <Button
        aria-label="Next slide"
        className="absolute right-12 top-[46%] w-12 h-12 z-50 -translate-y-0.5 next-btn rounded-full text-primary-foreground shadow"
      >
        <ChevronRight className="size-6" aria-hidden />
      </Button>
    </section>
  );
}
