"use client"
import React from "react";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";

export default function BlogPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            brain dump
          </h2>
          <p className="mt-4 text-zinc-400">
            where i dump my thoughts. first blog post coming soon...
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        
        <div className="mx-auto lg:mx-0">
          <Card>
            <div className="p-4">
              <p className="text-zinc-400">
                Stay tuned! Content brewing in my mind...
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}