import React from 'react';
import { cn } from "@/lib/utils";
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
      {/* Hero Text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <HeroText 
          title={title}
          subtitle={subtitle}
        />
      </div>
    </section>
  );
}
