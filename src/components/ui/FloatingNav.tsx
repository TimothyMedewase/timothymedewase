"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex max-w-md relative inset-x-0 mx-auto pr-8 pl-8 py-4 items-center justify-center space-x-8 mt-4",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={clsx(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-500 dark:hover:text-neutral-900 hover:text-neutral-900",
            {
              " text-slate-950": pathname === navItem.link,
            }
          )}
        >
          <div className="has-tooltip">
            <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-sm -mt-8">
              {navItem.name}
            </span>
            <span className="block sm:hidden">{navItem.icon}</span>
          </div>
          <span className="hidden sm:block text-md">{navItem.name}</span>
        </Link>
      ))}
    </div>
  );
};
