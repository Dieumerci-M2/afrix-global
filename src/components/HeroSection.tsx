"use client";

import image from "@/public/images/herosection/hero_section.png";
import Image from "next/image";
import LogoAfrix from "@/public/images/herosection/logo-afrix3.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { MotionContainer } from "./MotionContainer";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center md:pl-20 w-full min-h-screen bg-afrix-dark pt-20 md:pt-30 lg:pl-10 lg:pr-10  overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 100%, rgba(244, 180, 0, 0.05), transparent 35%), radial-gradient(circle at 100% 0%, rgba(219, 68, 55, 0.3), transparent 35%)",
      }}
    >
<<<<<<< HEAD
      <div className="container mx-auto px-4 flex flex-col lg:flex-row md:gap-48 md:text-center  items-center gap-8 lg:gap-[5vw] relative md:static top-0 md:top-40">
        {/* Left side */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl  text-center md:text-start sm:text-5xl md:text-6xl lg:text-[6vw] font-black  md:italic  leading-tight text-white"
            style={{ fontFamily: "var(--font-roboto-slab)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            We Train. <br />
            We Create. <br />
            We Connect.
          </motion.h1>

          {/* buttons hero section  */}
<<<<<<< HEAD
          <MotionContainer className="flex flex-col sm:flex-row justify-center md:justify-start px-4 sm:px-10 md:px-0 gap-4 sm:gap-8 mt-6 sm:mt-8 ml-5">
            <Link href="/apropos">
              {" "}
              <Button
                variant={"default"}
                size={"lg"}
                className="w-full md:w-45 p-6  bg-afrix-blue  hover:bg-afrix-blue/80 cursor-pointer"
              >
                Savoir plus
              </Button>
            </Link>

            <Link href="/contact">
              <Button className="w-full md:w-45 p-6 bg-transparent border border-afrix-blue hover:bg-afrix-blue cursor-pointer">
                Nous contacter
              </Button>
            </Link>
          </MotionContainer>
        </motion.div>

        {/* Right side - Container with relative positioning */}

<<<<<<< HEAD
        <div className="relative -top-20 md:-top-36 lg:top-28 w-full h-full md:w-[80%] lg:w-1/2 flex items-center justify-center min-h-87.5 sm:min-h-100 lg:min-h-[35vw]">
          <motion.div
            className=" relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Image
              src={LogoAfrix}
              alt="Logo Afrix Global"
              priority
              className="opacity-65"
            />
          </motion.div>
          <motion.div
            className="absolute top-2/12 z-2"
            initial={{ opacity: 1, x: "120%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.2,
              duration: 1.2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <Image
              src={image}
              alt="Illustration d’une équipe innovante travaillant sur la transformation digitale"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
