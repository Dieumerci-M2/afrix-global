"use client";

import AnimatedCounter from "../../components/AnimatedCounter";
import { MotionContainer } from "./MotionContainer";
import { MotionItem } from "./MotionItem";

const counters = [
  {
    value: 5,
    prefix: "+",
    color: "text-[#ea4335]",
    label: "Années d'expérience",
  },
  {
    value: 10,
    prefix: "+",
    color: "text-[#30b43f]",
    label: "Formations disponibles",
  },
  {
    value: 500,
    prefix: "+",
    color: "text-[#2898c5]",
    label: "Apprenants formés",
  },
  {
    value: 100,
    prefix: "+",
    color: "text-[#fbbc05]",
    label: "Certificats délivrés",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function CounterSection() {
  return (
    <section className="bg-afrix-dark">
      <MotionContainer
        className="w-full flex flex-wrap justify-around items-center gap-8 px-[10%] md:px-40 py-12"
        stagger={0.2}
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 50%, rgba(219, 68, 55, 0.3), transparent 35%)",
        }}
      >
        {counters.map((counter) => (
          <MotionItem
            key={counter.label}
            className="text-center flex-1 min-w-[140px]"
            itemVariants={itemVariants}
          >
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${counter.color}`}
            >
              <AnimatedCounter target={counter.value} prefix={counter.prefix} />
            </h2>

            <p className="text-white/80 text-sm sm:text-base mt-2">
              {counter.label}
            </p>
          </MotionItem>
        ))}
      </MotionContainer>
    </section>
  );
}
