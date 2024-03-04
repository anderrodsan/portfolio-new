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
import { Palette } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/framer-motion/AnimatedTitle";
import AnimatedText from "@/components/framer-motion/AnimatedText";
import useIsActive from "@/hooks/useIsActive";

const Paintings: React.FC = () => {
  const paintings = [
    "/images/paintings/enric.png",
    "/images/paintings/giant.png",
    "/images/paintings/lemons.png",
    "/images/paintings/nemo.png",
    "/images/paintings/parrots.png",
    "/images/paintings/red-car.png",
    "/images/paintings/swan.png",
    "/images/paintings/tentacle.png",
  ];

  return (
    <section
      className="flex flex-col items-center py-14 gap-5 w-full h-full gradient1 px-20 border-b mb-1"
      id="art"
    >
      <AnimatedTitle className="title flex-between gap-2">
        <Palette size={30} strokeWidth={2.5} />
        <p>Art</p>
      </AnimatedTitle>
      <AnimatedText className="text-center text-sm pb-5 -mx-10">
        Showcase of my latest artworks using watercolors and markers.
      </AnimatedText>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {paintings.map((image, index) => (
            <CarouselItem key={index} className="overflow-hidden basis-1/1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="h-[350px] sm:h-[400px] overflow-hidden rounded-md"
              >
                <Image
                  alt="Video Image"
                  src={image}
                  height={100}
                  width={100}
                  sizes="100vw"
                  style={{
                    width: "auto",
                    height: "100%",
                    borderRadius: "6px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="md:hover:scale-110 cursor-pointer"
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Paintings;
