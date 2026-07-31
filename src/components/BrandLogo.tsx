import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number | string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "w-11 h-11", size }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0`}
      style={size ? { width: size, height: size } : undefined}
    >
      {/* Blue Circular Background */}
      <circle cx="250" cy="250" r="250" fill="#3B7EB9" />

      {/* Orange Sun / Top Dot */}
      <circle cx="250" cy="98" r="25" fill="#F09A38" />

      {/* Gentle Steps Wing / Flame Motif */}
      <path
        d="M 142 120 
           C 175 200, 215 280, 226 355 
           C 240 260, 270 170, 282 112 
           C 310 200, 360 300, 350 378 
           C 340 435, 230 445, 175 410 
           C 130 380, 100 365, 100 362 
           C 105 320, 120 210, 142 120 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};
