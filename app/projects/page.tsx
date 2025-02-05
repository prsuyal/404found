"use client"
import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Github } from "lucide-react";

const projects = [
  {
    title: "greenstick",
    description: (
      <>
        democratizing stock market education so anyone can learn—no fluff, no gatekeeping. just personalized, interactive clarity. built for beginners, optimized for the curious. try it out for free, no strings attached.
      </>
    ),
    link: "https://greenstickusa.com",
    repository: "https://github.com/prsuyal/greenstick",
    featured: true,
  },
  {
    title: "binge-next",
    description: "to find that show with the guy who does the thing.",
    link: "https://binge-next.vercel.app",
    repository: "https://github.com/prsuyal/binge-next",
  },
  {
    title: "404 found",
    description: "the site you're on rn!",
    link: "https://404found.vercel.app",
    repository: "https://github.com/prsuyal/404found",
  },
];
interface Project {
  title: string;
  description: string | JSX.Element;
  link: string;
  repository: string;
  featured: boolean;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card key={project.title}>
      <div className="p-4 relative flex flex-col h-full hover:bg-zinc-800/50">
        <div className="flex justify-between items-start">
          <Link
            href={project.link}
            target="_blank"
            className="text-2xl font-bold text-zinc-100 group-hover:text-white"
          >
            {project.title}
          </Link>
          <Link
            href={project.repository}
            target="_blank"
            className="flex items-center text-zinc-400 gap-2 hover:text-zinc-100"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
        <p className="mt-4 text-sm text-zinc-400 group-hover:text-zinc-300">
          {project.description}
        </p>
      </div>
    </Card>
  );
};

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            side quests
          </h2>
          <p className="mt-4 text-zinc-400">
            when im not in school, im buildling stuff. right now, its a humble collection. but trust me, the list is about to level up. big things coming soon. 
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
          <div className="col-span-1 space-y-8">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}