import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white py-2">
      <div className="container mx-auto px-4 flex items-center justify-center space-x-2">
        <span>Developed by</span>
        <a 
          href="https://github.com/dspraneeth07" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-semibold hover:text-green-400 transition-colors flex items-center gap-2"
        >
          DHADI SAI PRANEETH REDDY
          <Github className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}