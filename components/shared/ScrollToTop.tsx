"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { ArrowUp, ChevronUp } from "lucide-react";
import AnimatedTitle from "../framer-motion/AnimatedTitle";

const ScrollUp: React.FC = () => {
  const [show, setShow] = React.useState<boolean | null>(false);

  React.useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hide whenever the hero section appears
          if (entry.target.id == "hero") {
            setShow(false);
          } else {
            setShow(true);
          }
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleClick = () => {
    // Scroll to the section with the corresponding id
    const targetSection = document.getElementById("hero");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    // Conditionally render the ScrollUp component based on state
    <>
      {show && (
        <div
          className="z-50 group absolute bottom-5 right-5 md:bottom-10 md:right-10 w-10 h-10 bg-stone-100 hover:bg-stone-200 dark:bg-slate-900 dark:hover:bg-slate-800 border rounded-full flex-center cursor-pointer bg-opacity-20"
          onClick={handleClick}
        >
          <AnimatedTitle>
            <ChevronUp className="group-hover:-translate-y-1 transition duration-300" />
          </AnimatedTitle>
        </div>
      )}
    </>
  );
};

export default ScrollUp;
