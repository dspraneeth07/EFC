import React from 'react';
import { Footprints, Leaf, Activity, Info } from 'lucide-react';
import { GlobeContainer } from '../components/GlobeContainer';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-green-900 via-green-800 to-blue-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="leaf absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
            }}
          >
            <Leaf className="text-green-300 w-4 h-4" />
          </div>
        ))}
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-4 py-12">
        {/* 3D Globe */}
        <div className="mb-8">
          <GlobeContainer />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 animate-pulse">
            Discover Your Environmental Impact
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-blue-200 animate-fade-in">
              How many cigarettes would it be like if everyone lived like you?
            </p>
            <p className="text-lg md:text-xl text-green-200 animate-fade-in-delay">
              When is your personal Earth Overshoot Day?
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              icon={<Activity className="w-8 h-8 text-red-400" />}
              title="Track Impact"
              description="Measure your daily activities' environmental footprint"
            />
            <FeatureCard
              icon={<Info className="w-8 h-8 text-blue-400" />}
              title="Get Insights"
              description="Understand how your lifestyle affects the planet"
            />
            <FeatureCard
              icon={<Leaf className="w-8 h-8 text-green-400" />}
              title="Take Action"
              description="Receive personalized tips to reduce your impact"
            />
          </div>

          <div className="relative mt-12">
            <Footprints className="w-24 h-24 mx-auto text-green-300 animate-bounce" />
            <button
              onClick={onStart}
              className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl px-12 py-4 rounded-full
                shadow-lg transform transition-all hover:scale-105 hover:from-green-500 hover:to-blue-600
                active:scale-95 animate-pulse"
            >
              Calculate Your Footprint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all hover:scale-105">
      <div className="flex flex-col items-center text-center space-y-3">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}