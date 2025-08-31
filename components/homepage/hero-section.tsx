import React from 'react';
import { cn } from "@/lib/utils";
import { Component as RaycastAnimatedBackground } from "@/components/ui/raycast-animated-background";
import HeroText from "./hero-text";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function HeroSection({ 
  title,
  subtitle,
  className 
}: HeroSectionProps) {
  return (
    <section className={cn(
      "relative w-full h-screen overflow-hidden",
      className
    )}>
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0">
        <RaycastAnimatedBackground />
      </div>
      
      {/* Hero Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <HeroText 
          title={title}
          subtitle={subtitle}
        />
      </div>
      
      {/* Optional gradient overlay for better text readability */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </section>
  );
}
