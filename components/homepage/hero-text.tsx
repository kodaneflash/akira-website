import React from 'react';
import { cn } from "@/lib/utils";

interface HeroTextProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function HeroText({ 
  title = "Your shortcut to everything.",
  subtitle = "A collection of powerful productivity tools all within an extendable launcher. Fast, ergonomic and reliable.",
  className 
}: HeroTextProps) {
  return (
    <div className={cn(
      "relative z-10 flex flex-col items-center justify-center text-center space-y-6 px-4",
      className
    )}>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
        {title}
      </h1>
      <p className="text-bodytext">
        {subtitle}
      </p>
    </div>
  );
}
