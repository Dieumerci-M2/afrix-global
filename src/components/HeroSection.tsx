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
      className="grid justify-items-center w-full h-screen px-10 md:px-0  pt-24 md:pt-36 mx-auto bg-afrix-dark overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 100%, rgba(244, 180, 0, 0.05), transparent 35%), radial-gradient(circle at 100% 0%, rgba(219, 68, 55, 0.3), transparent 35%)",
      }}
    >
      <div className="container w-full flex flex-col md:flex-row justify-between items-center relative">
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
          <MotionContainer className="flex flex-col md:flex-row justify-center md:justify-start  gap-8 mt-8">
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

        <div className="absolute right-0 -bottom-[1%] w-full md:w-1/2 mt-0 md:mt-12">
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
