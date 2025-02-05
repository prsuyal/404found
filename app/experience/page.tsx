"use client";
import React from "react";
import { Navigation } from "../components/nav";

const timelineEvents = [
  {
    year: "march 2024—present",
    title: "engineering",
    company: "greenstick",
    description: "fixing how people learn the stock market. building stuff from scratch. learning a lot.",
  },
  {
    year: "may 2024—present",
    title: "research",
    company: "kellis lab @ mit",
    description: "working with ppl 10x smarter than me on interactive visualizations for high-dimensional data.",
  },
  {
    year: "sept 2021—present",
    title: "school",
    company: "high technology high school",
    description: "learned to code. did some research. made some awesome friends!",
  },
  {
    year: "summmer 2024",
    title: "research",
    company: "hein lab @ cornell",
    description: "built an app to help scientists track fish",
  },
  {
    year: "fall 2024",
    title: "engineering",
    company: "at&t labs",
    description: "built an app to automate network configurations",
  },

];

export default function ExperiencePage() {
  return (
    <div className="relative bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen h-full">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            lore
          </h2>
          <p className="mt-4 text-zinc-400">my journey so far...</p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        
        <div className="mx-auto lg:mx-0">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-8 mb-10">
              <div className="absolute left-0 top-0 h-full w-px bg-zinc-800" />
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-400" />
              <div className="space-y-2">
                <span className="text-sm text-zinc-500">{event.year}</span>
                <h3 className="text-xl font-bold text-zinc-100">{event.title}</h3>
                <p className="text-zinc-400">{event.company}</p>
                <p className="text-sm text-zinc-500">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
