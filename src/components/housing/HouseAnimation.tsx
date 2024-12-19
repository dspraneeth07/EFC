import React from 'react';
import { Home, Building, Building2 } from 'lucide-react';

interface HouseAnimationProps {
  type: string;
}

export function HouseAnimation({ type }: HouseAnimationProps) {
  const animations = {
    'no-water': <Home className="animate-bounce" />,
    'water': <Home className="animate-pulse" />,
    'apartment': <Building className="animate-bounce" />,
    'duplex': <Building2 className="animate-pulse" />,
    'luxury': (
      <div className="relative">
        <Building2 className="animate-pulse text-gold" />
        <span className="absolute -top-2 -right-2 text-yellow-500">✨</span>
      </div>
    ),
  };

  if (!type) return null;

  return (
    <div className="flex justify-center items-center h-32 text-4xl">
      {animations[type as keyof typeof animations]}
    </div>
  );
}