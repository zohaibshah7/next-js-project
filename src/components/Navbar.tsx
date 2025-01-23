"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Beginner's Weightlifting</HoveredLink>
            <HoveredLink href="/courses">Yoga for Flexibility</HoveredLink>
            <HoveredLink href="/courses">
              Advanced Strength Training
            </HoveredLink>
            <HoveredLink href="/courses">Cardio Mastery</HoveredLink>
            <HoveredLink href="/courses">HIIT Workouts</HoveredLink>
            <HoveredLink href="/courses">Nutrition for Fitness</HoveredLink>
            <HoveredLink href="/courses">Functional Training</HoveredLink>
            <HoveredLink href="/courses">CrossFit Basics</HoveredLink>
            <HoveredLink href="/courses">Mobility and Recovery</HoveredLink>
            <HoveredLink href="/courses">Powerlifting Techniques</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
