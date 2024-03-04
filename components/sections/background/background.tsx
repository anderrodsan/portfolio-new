"use client";

import AnimatedText from "@/components/framer-motion/AnimatedText";
import AnimatedTitle from "@/components/framer-motion/AnimatedTitle";
import { GraduationCap, List, Map } from "lucide-react";
import React, { useRef, useState } from "react";
import BgCard from "./BgCard";
import { Experience } from "@/utils/types/types";
import { experience } from "@/data/experience";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./BgMap"), {
  ssr: false, // Disable server-side rendering
});

const Background: React.FC = () => {
  const [map, setMap] = useState<boolean>(false);

  return (
    <section
      className={`flex flex-col items-center py-14 gap-5 w-full gradient1 px-5 lg:px-20 ${
        map ? "h-full" : ""
      }`}
      id="bg"
    >
      <AnimatedTitle className="title flex-between gap-2">
        <GraduationCap size={30} strokeWidth={2.5} />
        <p>Background</p>
      </AnimatedTitle>
      <AnimatedText className="flex flex-col md:grid grid-cols-6 items-center gap-2 w-full">
        <div />
        <p className="flex-1 text-center col-span-4 text-sm">
          A list of my education and working experience
        </p>
        <div className="flex justify-end">
          <Button size={"sm"} variant={"default"} onClick={() => setMap(!map)}>
            {map ? (
              <div className="flex-start gap-2">
                <List /> See List
              </div>
            ) : (
              <div className="flex-start gap-2">
                <Map /> See Map
              </div>
            )}
          </Button>
        </div>
      </AnimatedText>

      {map ? (
        <div className="w-full h-full lg:h-[600px] rounded-md overflow-hidden">
          <MapComponent />
        </div>
      ) : (
        <div className="relative w-full flex flex-col gap-5">
          <div className="absolute top-0 left-5 md:left-1/2 w-1 bg-slate-800 dark:bg-slate-200 h-full" />
          {experience.map((item: Experience, index: number) => (
            <div
              key={index}
              className={`flex w-full pl-[49px] ${
                item.type ? "justify-end md:pl-[70px]" : "md:pl-0 md:pr-[70px]"
              }`}
            >
              <BgCard item={item} delay={0.1 * index} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Background;
