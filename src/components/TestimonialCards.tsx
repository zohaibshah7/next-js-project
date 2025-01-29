'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const gymTestimonials = [
    {
      quote:
        "Joining this gym completely changed my fitness journey. The trainers are top-notch, and the workouts are super effective!",
      name: "Alex Johnson",
      title: "Strength Training Enthusiast",
    },
    {
      quote:
        "The supportive community and expert guidance have helped me push beyond my limits. I feel stronger and more confident than ever!",
      name: "Samantha Lee",
      title: "CrossFit Athlete",
    },
    {
      quote:
        "This gym gave me the tools and motivation to transform my body and mindset. The trainers truly care about your progress!",
      name: "Michael Chen",
      title: "Weightlifting Beginner",
    },
    {
      quote:
        "I've tried many gyms before, but this one stands out. The structured workouts and nutrition advice made a huge difference!",
      name: "Emily Taylor",
      title: "HIIT Specialist",
    },
    {
      quote:
        "From functional training to recovery techniques, this gym has it all. Highly recommend it to anyone serious about fitness!",
      name: "Chris Morales",
      title: "Powerlifting Competitor",
    },
];

function GymTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden" id='testimonials'>
        <h2 className="text-3xl text-white font-bold text-center mb-8 z-10">Strength in Numbers: Stories of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={gymTestimonials}
                direction="right"
                speed="slow"
            />
            </div>
        </div>
    </div>
  )
}

export default GymTestimonials
