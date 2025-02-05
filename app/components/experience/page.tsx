"use client";
import React from "react";
import { Navigation } from "../../components/nav";

const timelineEvents = [
  {
    year: "2025",
    title: "hths",
    company: "high technology high school",
    description: "senior year, figuring stuff out one bug at a time",
  },
  {
    year: "2024",
    title: "ml intern",
    company: "at&t research labs",
    description: "built a multi-agent system to automate network configurations. ai but make it telecom",
  },
  {
    year: "2024",
    title: "intern + research",
    company: "mit kellis lab + csail engineers",
    description: "worked on interactive visualizations for high-dimensional data. basically made ai less of a black box",
  },
  {
    year: "2024",
    title: "software engineer + cpto",
    company: "greenstick",
    description: "started a company to fix how people learn the stock market. built everything from scratch",
  },
  {
    year: "2023",
    title: "wrassetrack sdfdev",
    company: "cornell klein lab",
    description: "made an app to help scientists track fish. human-in-the-loop ai is underrated",
  }
];

export default function ExperiencePage() {
  return (
    <div className="relative pb-16">
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
