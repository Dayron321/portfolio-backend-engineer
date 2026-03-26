"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function AnimatedContainer({ 
  children, 
  staggerDelay = 0.15,
  className = ""
}: AnimatedContainerProps) {
  
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay },
    },
  };

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Helper to wrap individual items inside the container
export function AnimatedItem({ children, className = "" }: { children: ReactNode, className?: string }) {
  const itemVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <motion.div variants={itemVars} className={className}>
      {children}
    </motion.div>
  );
}
