"use client";

import * as React from "react";
import { Code2, GraduationCap, Mail, Palette, User } from "lucide-react";
import Link from "next/link";

type Props = {};

const NavBarBottom: React.FC<Props> = ({}) => {
  const items = [
    {
      label: "About",
      path: "about",
      icon: <User size={25} />,
    },
    {
      label: "Background",
      path: "bg",
      icon: <GraduationCap size={25} />,
    },
    {
      label: "Projects",
      path: "projects",
      icon: <Code2 size={25} />,
    },
    {
      label: "Art",
      path: "art",
      icon: <Palette size={25} />,
    },
    {
      label: "Contact",
      path: "contact",
      icon: <Mail size={25} />,
    },
  ];

  return (
    <div className="md:hidden px-5 flex-between border-t">
      {items.map((item, index) => (
        <Link
          key={index}
          href={`#${item.path}`}
          className="flex flex-col items-center gap-1 py-3"
        >
          {item.icon}
          <p className="text-xs">{item.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavBarBottom;
