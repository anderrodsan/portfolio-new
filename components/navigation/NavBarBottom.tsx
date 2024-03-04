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

  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set the name of the active section in the state
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleClick = (path: string) => {
    setTimeout(() => {
      setActiveSection(path);
    }, 1000);

    // Scroll to the section with the corresponding id
    const targetSection = document.getElementById(path);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="md:hidden px-5 grid grid-cols-5 border-t">
      {items.map((item, index) => (
        <Link
          key={index}
          href={`#${item.path}`}
          className={`flex flex-col items-center gap-1 py-3 border-t-4 ${
            activeSection == item.path
              ? "border-t-stone-300 dark:border-t-slate-600 font-bold"
              : "border-t-white dark:border-t-black"
          }`}
          onClick={() => handleClick(item.path)}
        >
          {item.icon}
          <p className="text-xs">{item.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavBarBottom;
