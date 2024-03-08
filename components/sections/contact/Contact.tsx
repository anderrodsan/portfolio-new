"use client";

import Image from "next/image";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Clipboard,
  Copyright,
  Mail,
  MailPlus,
  MessageCircle,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/framer-motion/AnimatedTitle";
import AnimatedText from "@/components/framer-motion/AnimatedText";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Contact: React.FC = () => {
  const [copy, setCopy] = React.useState<boolean>(false);

  const handleButtonClick = () => {
    setCopy(true);
    navigator.clipboard.writeText("anderrodsan@gmail.com");

    // After 2 seconds, reset 'copy' to false
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <section
      className="relative bg-white dark:bg-black flex-col-center items-center py-32 gap-14 w-full gradient3 px-5 border-b dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      id="contact"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <AnimatedTitle className="title flex-between gap-2">
        <MessageCircle size={30} strokeWidth={2.5} />
        <p>Contact</p>
      </AnimatedTitle>
      <AnimatedText className="flex-col-center gap-5 w-full">
        <div className="flex flex-col items-center lg:flex-row gap-8 lg:gap-4 ">
          <Link href={"https://github.com/anderrodsan"} target="_blank">
            <Button
              variant={"ghost"}
              className="flex-start gap-2 group text-lg"
            >
              <FaGithub className="h-6 w-6 opacity-50 group-hover:scale-105 group-hover:opacity-100 group-hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-in-out" />
              <p>Github</p>
            </Button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/anderrodsan/"}
            target="_blank"
          >
            <Button
              variant={"ghost"}
              className="flex-start gap-2 group text-lg"
            >
              <FaLinkedin className="h-6 w-6 opacity-50 group-hover:scale-105 group-hover:opacity-100 group-hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-in-out" />
              <p>LinkedIn</p>
            </Button>
          </Link>
          <TooltipProvider delayDuration={0}>
            <Tooltip open={copy}>
              <TooltipTrigger>
                <Button
                  variant={"ghost"}
                  className="group flex-start gap-2 group text-lg"
                  onClick={handleButtonClick}
                >
                  <MailPlus className="h-6 w-6 opacity-50 group-hover:scale-105 group-hover:opacity-100 group-hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-in-out" />
                  <p className="">anderrodsan@gmail.com</p>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="flex-start gap-2">
                <div className="flex-start gap-2">
                  <Clipboard size={"16"} />
                  <p>Copied!</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </AnimatedText>
      <div className="absolute bottom-5 left-5 md:left-16 flex-center gap-5 opacity-50 text-sm">
        <p className="flex-start gap-2">
          <Copyright size={16} /> March 2024
        </p>
        <p>Ander Rodriguez</p>
        <p>&R</p>
      </div>
    </section>
  );
};

export default Contact;
