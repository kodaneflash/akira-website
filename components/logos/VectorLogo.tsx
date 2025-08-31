import React from "react";
import Image from "next/image";

interface VectorLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const VectorLogo: React.FC<VectorLogoProps> = ({
  width = 120,
  height = 22,
  className = "",
}) => {
  return (
    <Image
      src="/akira.love.svg"
      alt="Akira Logo"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};