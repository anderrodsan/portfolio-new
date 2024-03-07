"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/utils/types/types";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useTheme } from "next-themes";

type Props = {
  project: Project;
  delay: number;
};

const ProjectCard: React.FC<Props> = ({ project, delay }) => {
  //detect theme
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay }}
    >
      <BackgroundGradient className="p-5 bg-slate-50 dark:bg-slate-950 rounded-[12px]">
        <div className="">
          <Link href={project.link} target="_blank">
            <div className="relative w-full h-[200px] mb-5 overflow-hidden">
              <Image
                alt="Video Image"
                src={`${theme == "dark" ? project.darkimg : project.lightimg}`}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  borderRadius: "6px",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="hover:scale-110 cursor-pointer"
              />
            </div>
          </Link>

          <p className="text-slate-500 font-bold text-sm">{project.date}</p>
          <p className="font-bold text-lg">{project.title}</p>
          <p className="text-sm">{project.text}</p>
          <div className="flex-start gap-2 flex-wrap pt-3">
            {project.badges.map((badge, index) => (
              <div key={index}>
                <Badge>{badge}</Badge>
              </div>
            ))}
          </div>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
};

export default ProjectCard;
