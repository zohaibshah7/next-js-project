"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const gymSchoolContent = [
  {
    title: "Achieve Your Peak Performance with Us: A Personal Fitness Journey",
    description:
      "Start a fitness journey tailored just for you. Our personalized training adapts to your needs, helping you reach new levels of strength and endurance. At our gym, your goals meet expert guidance, creating the perfect path to success.",
  },
  {
    title: "Transform Your Body, Transform Your Life",
    description:
      "Our programs are designed to help you build muscle, burn fat, and improve overall fitness. No matter where you are in your journey, we provide the right tools and support to help you succeed.",
  },
  {
    title: "Unlock Your True Strength with Expert Coaching",
    description:
      "Train smarter, not harder! Our experienced trainers provide step-by-step guidance to help you maximize results, avoid injuries, and stay motivated on your fitness journey.",
  },
  {
    title: "Live Feedback & Real-Time Progress Tracking",
    description:
      "Engage in an interactive workout experience where progress is tracked in real-time. Our trainers offer instant feedback, helping you stay on track and make adjustments as needed.",
  },
  {
    title: "Cutting-Edge Training Programs",
    description:
      "Our workout plans are always updated with the latest fitness trends and science-backed techniques, ensuring you train efficiently and effectively. No outdated routines, just results-driven methods.",
  },
  {
    title: "Endless Growth & Training Opportunities",
    description:
      "From strength training to endurance workouts, our platform offers a variety of programs to keep your fitness journey exciting. Stay challenged and push past your limits with our ever-evolving training options.",
  },
  {
    title: "Reach Your Full Potential with Tailored Fitness Plans",
    description:
      "Unlock your true potential with fitness plans designed specifically for your body. Our customized training regimens ensure steady progress and maximum results. Get ready to challenge yourself and crush your goals.",
  },
  {
    title: "Elevate Your Workout with Personalized Guidance",
    description:
      "Experience a new level of fitness with one-on-one coaching. Whether you're new to the gym or an experienced athlete, our personalized approach will help you perform at your best and achieve your fitness goals.",
  },
  {
    title: "Transform Your Fitness Routine with Expert Advice",
    description:
      "Say goodbye to boring workouts! Our fitness experts will guide you through every step, ensuring each session is effective, fun, and challenging. Get ready to see real results with the right direction and motivation.",
  },
  {
    title: "Track Your Progress, See Your Success",
    description:
      "Stay motivated and on track with our advanced progress tracking tools. Monitor your improvements, celebrate your achievements, and adjust your training to keep pushing your limits and reaching new heights."
  },
  {
    title: "",
    description: ""
  }
  
];

function ChooseUs() {
  return (
    <div id="choose">\
      <StickyScroll content={gymSchoolContent} />
    </div>
  );
}

export default ChooseUs;
