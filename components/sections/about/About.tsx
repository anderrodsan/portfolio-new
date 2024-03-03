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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Signature } from "./Signature";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const About: React.FC = () => {
  const text1 =
    "I‘m an international master‘s graduate who is ambitious and passionate about constantly learning, exploring diverse areas, and applying my knowledge in engineering and business to drive innovative solutions. With huge interest on sustainability iniciatives.";

  const text2 =
    "With a strong educational foundation spanning engineering, IT, data and business, I bring diverse expertise and adaptability. Experience and interest on working with the latest SW development frameworks such as NextJs (React), TailwindCSS, Typescript, JavaScript, Python, SQL, etc. Also familiar with Cloud and Machine Learning. Plus working in teams with projects through the project-based-learning methodology. Great communication and interpersonal skills, and fluent in many languages.";

  const tech = [
    {
      text: "Web development",
      badges: [
        "React",
        "Nextjs 14",
        "Typescript",
        "Tailwind CSS",
        "Shadcn UI",
        "Supabase",
      ],
    },
    {
      text: "Machine Learning",
      badges: ["Python", "Dash", "APIs", "OpenAI"],
    },
    {
      text: "Hosting",
      badges: ["Github", "Vercel"],
    },
  ];

  const tools = [
    {
      text: "UX Design",
      badges: ["Figma", "Canva", "Shadcn"],
    },
    {
      text: "Adobe Bundle",
      badges: ["Photoshop", "Premiere Pro", "Illustrator"],
    },
    {
      text: "Microsoft 365",
      badges: ["Word", "Excel", "PowerPoint", "Visio"],
    },
  ];

  return (
    <div
      className="flex flex-col items-center py-14 gap-5 w-full gradient2 px-5 lg:px-20 border-b"
      id="about"
    >
      <AnimatedTitle className="title flex-between gap-2">
        <Palette size={30} strokeWidth={2.5} />
        <p>About</p>
      </AnimatedTitle>
      <AnimatedText className="grid grid-cols-1 gap-5 lg:grid-cols-2 w-full pt-5 lg:pt-10">
        <div className="flex flex-col justify-start items-center gap-2">
          <Avatar className="h-60 w-60">
            <AvatarImage src="avatar-light.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Signature className="w-56 pt-2" />
          <p className="text-lg opacity-60">24, Spain</p>
        </div>
        <div className="space-y-5 col-span-1">
          <Tabs
            defaultValue="text"
            className="flex flex-col items-center lg:items-start w-full px-5 lg:px-0"
          >
            <TabsList>
              <TabsTrigger value="text">Description</TabsTrigger>
              <TabsTrigger value="tech">Tech Stacks</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="text" asChild className="pt-5">
              <AnimatedText className="space-y-3 leading-7">
                <p className="max-w-[65ch] opacity-80">{text1}</p>
                <p className="max-w-[65ch] opacity-80">{text2}</p>
              </AnimatedText>
            </TabsContent>
            <TabsContent value="tech" className="space-y-3 pt-5 w-full">
              {tech.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                >
                  <BackgroundGradient className="p-3 bg-stone-100 dark:bg-slate-900 rounded-[12px] space-y-2 w-full">
                    <p className="text-sm">{item.text}</p>
                    <div className="flex-start gap-2 flex-wrap">
                      {item.badges.map((badge, index2) => (
                        <div key={index2} className="">
                          <Badge variant={"secondary"}>{badge}</Badge>
                        </div>
                      ))}
                    </div>
                  </BackgroundGradient>
                </motion.div>
              ))}
            </TabsContent>
            <TabsContent value="tools" className="space-y-3 pt-5 w-full">
              {tools.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                >
                  <BackgroundGradient className="p-3 bg-stone-100 dark:bg-slate-900 rounded-[12px] space-y-2">
                    <p className="text-sm">{item.text}</p>
                    <div className="flex-start gap-2 flex-wrap">
                      {item.badges.map((badge, index2) => (
                        <div key={index2} className="">
                          <Badge variant={"secondary"}>{badge}</Badge>
                        </div>
                      ))}
                    </div>
                  </BackgroundGradient>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedText>
    </div>
  );
};

export default About;
