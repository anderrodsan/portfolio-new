"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Experience } from "@/utils/types/types";
import { BackgroundGradient } from "@/components/ui/background-gradient";

type Props = {
  item: Experience;
  delay: number;
};

const BgCard: React.FC<Props> = ({ item, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 relative"
    >
      <BackgroundGradient className="p-5 w-full flex-start gap-5 bg-stone-100 dark:bg-slate-900 group rounded-[12px]">
        <div className="hidden lg:block w-1/5 rounded-md overflow-hidden">
          <Link href={item.clink} target="_blank">
            <Image
              alt="Logo"
              src={item.logo}
              height={100}
              width={100}
              sizes="100vw"
              style={{
                backgroundColor: "white",
                padding: "8px",
                objectFit: "cover",
                borderRadius: "6px",
                transition: "transform 0.3s ease-in-out",
              }}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="lg:w-4/5 space-y-2">
          <Link href={item.link} target="_blank">
            <p className="font-bold text-lg hover:opacity-90 cursor-pointer">
              {item.title}
            </p>
          </Link>
          <Link href={item.clink} target="_blank">
            <p className="hover:opacity-90 cursor-pointer">{item.company}</p>
          </Link>
          <Badge className="bg-stone-200 dark:bg-slate-700 text-black dark:text-white">
            {item.city}
          </Badge>
        </div>
      </BackgroundGradient>
      {item.type ? (
        <div>
          <div className="hidden md:block absolute top-3 -left-[155px] text-right font-bold text-sm">
            {item.date}
          </div>
          <div
            className={`absolute top-0 -left-[51px] md:-left-[56px] w-12 h-12 rounded-full bg-stone-100 dark:bg-slate-900 flex-col-center`}
          >
            <Briefcase size={27} />
          </div>
        </div>
      ) : (
        <div>
          <div className="hidden md:block absolute top-3 -right-[155px] text-right font-bold text-sm">
            {item.date}
          </div>
          <div
            className={`absolute top-0 -left-[50px] md:left-auto md:-right-[62px] w-12 h-12 rounded-full bg-stone-100 dark:bg-slate-900 flex-col-center`}
          >
            <GraduationCap size={30} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BgCard;
