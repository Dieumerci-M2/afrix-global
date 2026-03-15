"use client";

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
  const partners = [
  "/images/partner-1.webp",
  "/images/partner-2.jpg",
  "/images/partner-3.jpg",
  "/images/partner-4.jpg",
  ];
export default function PartnersSection() {

  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 200
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }
  return (
    <section
      className="w-full min-h-[50vh] py-16 bg-afrix-dark flex flex-col items-center gap-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 0%, rgba(15, 157, 88, 0.3), transparent 35%), radial-gradient(circle at 0% 0%, rgba(245, 180, 0, 0.302), transparent 35%)",
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
        NOS <span className="text-[#4285f4]">PARTENAIRES</span>
      </h2>

      <div className="relative w-[90%] max-w-[1200px] flex items-center justify-center">
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-8 lg:gap-[5vw] overflow-x-auto scroll-smooth py-4 px-16 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...partners, ...partners].map((src, i) => (
            <div
              key={i}
              className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[10vw] lg:h-[10vw] flex-shrink-0 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Partenaire ${i + 1}`}
                width={150}
                height={150}
                className="object-contain w-full h-full p-2"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
