"use client";

import * as React from "react";
import ProjectCard from "./ProjectCard";
import { Code2 } from "lucide-react";
import AnimatedTitle from "@/components/framer-motion/AnimatedTitle";
import AnimatedText from "@/components/framer-motion/AnimatedText";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const Projects: React.FC = () => {
  const [expand, setExpand] = React.useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const visibleProjects = expand ? projects : projects.slice(0, 3);

  return (
    <section
      className={`flex flex-col items-center gap-5 w-full gradient2 py-14 px-5 lg:px-20 border-y`}
      id="projects"
    >
      <AnimatedTitle className="title flex-between gap-2">
        <Code2 size={35} strokeWidth={2.5} />
        <p>Projects</p>
      </AnimatedTitle>
      <AnimatedText className="flex-center w-full">
        <p className="flex-1 text-center text-sm pb-5">
          A list of projects using frameworks as nextjs 14, tailwindcss, etc.
        </p>
      </AnimatedText>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {visibleProjects.map((project, index) => (
          <div key={index} className="h-full">
            <ProjectCard project={project} delay={0.1 * index} />
          </div>
        ))}
      </div>
      <Button
        size={"sm"}
        variant={"secondary"}
        onClick={handleExpand}
        className="z-40 mt-5"
      >
        {expand ? "Hide" : `See All ${!expand && `(${projects.length})`}`}
      </Button>
    </section>
  );
};

export default Projects;
