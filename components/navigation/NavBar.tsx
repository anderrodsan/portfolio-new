"use client";

import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";
import { Code2, GraduationCap, Mail, Palette, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import useStore from "@/store/store";

type Props = {};

const NavBar: React.FC<Props> = ({}) => {
  const items = [
    { label: "About", path: "about", icon: <User size={25} /> },
    { label: "Background", path: "bg", icon: <GraduationCap size={25} /> },
    { label: "Projects", path: "projects", icon: <Code2 size={25} /> },
    { label: "Art", path: "art", icon: <Palette size={25} /> },
    { label: "Contact", path: "contact", icon: <Mail size={25} /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center w-full px-5 lg:px-20 h-16 border-b bg-white dark:bg-black">
      <Link className="cursor-pointer font-bold text-3xl" href={"#hero"}>
        &R
      </Link>
      <div className="hidden md:flex  justify-center items-center h-full">
        {items.map((item, index) => (
          <Link
            key={index}
            href={`#${item.path}`}
            className="cursor-pointer px-2 h-full flex items-center hover:font-bold"
          >
            <Button variant={"ghost"}>{item.label}</Button>
          </Link>
        ))}
      </div>
      <div className="flex justify-end items-center gap-5 lg:gap-10">
        <div className="flex-between gap-3">
          <Link href={"https://github.com/anderrodsan"} target="_blank">
            <FaGithub className="h-6 w-6 opacity-50 hover:scale-105 hover:opacity-100 hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-in-out" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/anderrodsan/"}
            target="_blank"
          >
            <FaLinkedin className="h-6 w-6 opacity-50 hover:scale-105 hover:opacity-100 hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-in-out" />
          </Link>
        </div>

        <ThemeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
