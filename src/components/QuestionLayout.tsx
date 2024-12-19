import React, { ReactNode } from 'react';

interface QuestionLayoutProps {
  children: ReactNode;
  background: string;
}

export function QuestionLayout({ children, background }: QuestionLayoutProps) {
  return (
    <div 
      className="min-h-screen w-full transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="min-h-screen w-full bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}