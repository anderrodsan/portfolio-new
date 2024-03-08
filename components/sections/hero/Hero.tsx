"use client";

import * as React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import AnimatedText from "@/components/framer-motion/AnimatedText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MovingButton } from "@/components/ui/moving-border";
import ScrollIndicator from "./ScrollDown";

const Hero: React.FC = () => {
  const title = [
    "Hey, I'm Ander.",
    1000,
    "Hey, I'm And",
    500,
    "Hey, I'm AndR",
    1000,
    "Hey, I'm &R.",
    3000,
    "",
    1000,
    "Hola, soy Ander.",
    1000,
    "Hola, soy And",
    500,
    "Hola, soy AndR",
    1000,
    "Hola, soy &R",
    3000,
    "",
    1000,
    "Hej, jeg er Ander.",
    1000,
    "Hej, jeg er And",
    500,
    "Hej, jeg er AndR",
    1000,
    "Hej, jeg er &R.",
    3000,
    "",
    1000,
    "Kaixo, ni Ander naiz.",
    1000,
    "Kaixo, ni And",
    500,
    "Kaixo, ni AndR",
    1000,
    "Kaixo, ni &R naiz.",
    3000,
    "",
    1000,
    "Salut, je suis Ander.",
    1000,
    "Salut, je suis And",
    500,
    "Salut, je suis AndR",
    1000,
    "Salut, je suis &R.",
    3000,
    "",
    1000,
  ];

  const text =
    "MSc in IT, Innovation & Business | Electronics Engineer | AI , Machine Learning & Data | Web & Software Development | Sustainability";

  const headline = {
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

  const description = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        type: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="relative flex-col-center w-full px-10 lg:px-20 gradient1 border-b"
      style={{ height: "calc(100% - 20px)" }}
      id="hero"
    >
      <ScrollIndicator />
      <motion.div
        variants={headline}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="z-40 font-bold text-4xl md:text-5xl lg:text-6xl text-center h-[100px]"
      >
        <TypeAnimation
          sequence={title}
          wrapper="div"
          speed={20}
          cursor={true}
          repeat={Infinity}
        />
      </motion.div>
      <motion.p
        variants={description}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="z-40 lg:w-1/2 text-center text-sm lg:text-base"
      >
        {text}
        <AnimatedText className="flex-center pt-5 gap-5">
          <Link href={"#projects"}>
            <MovingButton>See Projects</MovingButton>
          </Link>
          <Link href={"#contact"}>
            <Button size={"sm"} variant={"ghost"}>
              Contact Me
            </Button>
          </Link>
        </AnimatedText>
      </motion.p>
      <BackgroundBeams />
    </section>
  );
};

export default Hero;
