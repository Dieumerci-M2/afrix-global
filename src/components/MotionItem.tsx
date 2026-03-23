"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { ReactNode } from "react";

type MotionItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  itemVariants?: Variants;
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function MotionItem({
  children,
  itemVariants = defaultItemVariants,
  ...props
}: MotionItemProps) {
  return (
    <motion.div variants={itemVariants} {...props}>
      {children}
    </motion.div>
  );
}
