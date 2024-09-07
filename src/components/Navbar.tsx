"use client";
import React from "react";
import { FloatingNav } from "./ui/FloatingNav";
import {
  IconHome,
  IconBook,
  IconUser,
  IconBriefcase2,
  IconFileDescription,
} from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Research",
      link: "/research",
      icon: <IconBook className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <IconBriefcase2 className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Resume↗",
      link: "/resume",
      icon: (
        <IconFileDescription className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
