"use client";

import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowDown, ChevronDown } from "lucide-react";

const ScrollIndicator: React.FC = () => {
  const arrowControls = useAnimation();

  const animateArrow = () => {
    // Use framer-motion's animation controls to create a bouncing effect
    arrowControls.start({
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    });
  };

  React.useEffect(() => {
    animateArrow();
  }, []); // Run the animation once on mount

  const handleClick = () => {
    // Scroll to the section with the corresponding id
    const targetSection = document.getElementById("about");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="absolute z-50 bottom-10 left-1/2 transform -translate-x-1/2 w-20 text-center flex-col-center">
      <motion.div
        animate={arrowControls}
        className="w-10 h-10 bg-stone-100 hover:bg-stone-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-full flex-center cursor-pointer opacity-85"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown />
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;
