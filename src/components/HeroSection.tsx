"use client";
import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = "Master the Art of Fitness"

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto pt-60">
      <Spotlight/>
      <div className="p-4 relative z-10 w-full text-center">
      <TextGenerateEffect words={words} />
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our expert-led fitness courses and transform your fitness
          journey today. Whether you're a beginner or an advanced athlete, join
          us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
          <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore courses
      </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
