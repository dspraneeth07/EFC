import React, { ReactNode } from 'react';

interface AnimatedIconProps {
  children: ReactNode;
}

export function AnimatedIcon({ children }: AnimatedIconProps) {
  return (
    <div className="transform transition-all duration-300 hover:scale-110 hover:rotate-6">
      {children}
    </div>
  );
}