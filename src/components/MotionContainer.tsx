"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { ReactNode } from "react";

type MotionContainerProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  containerVariants?: Variants;
  stagger?: number;
};

export function MotionContainer({
  children,
  containerVariants,
  stagger = 0.15,
  ...props
}: MotionContainerProps) {
  const defaultContainerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants || defaultContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
