"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedTitle: React.FC<Props> = ({ children, className }) => {
  const title = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={title}
      initial="initial"
      whileInView="animate"
      className={className}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTitle;
