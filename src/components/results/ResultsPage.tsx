import React from 'react';
import { Cigarette, RefreshCw, Share2 } from 'lucide-react';
import { calculateTotalEmissions, calculateCigaretteEquivalent } from '../../utils/calculations';
import { AnimatedNumber } from './AnimatedNumber';

interface ResultsPageProps {
  answers: any;
  onRestart: () => void;
}

export function ResultsPage({ answers, onRestart }: ResultsPageProps) {
  const totalEmissions = calculateTotalEmissions(answers);
  const cigarettes = calculateCigaretteEquivalent(totalEmissions);

  const handleShare = async () => {
    const shareData = {
      title: 'My Ecological Footprint',
      text: `My lifestyle is equivalent to smoking ${cigarettes} cigarettes per day in CO2 emissions! Calculate yours:`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support the Web Share API
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        alert('Results copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="space-y-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Your Ecological Footprint</h1>
      
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
        <div className="relative bg-white rounded-2xl p-8 shadow-xl">
          <Cigarette className="w-20 h-20 mx-auto mb-4 text-red-500" />
          <p className="text-2xl mb-2">Your lifestyle is equivalent to smoking</p>
          <div className="flex items-center justify-center gap-2 text-6xl font-bold text-red-500">
            <AnimatedNumber value={cigarettes} />
            <span>cigarettes</span>
          </div>
          <p className="text-gray-600 mt-2">per day in terms of CO2 emissions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
          Calculate Again
        </button>
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Share2 className="w-5 h-5" />
          Share Results
        </button>
      </div>
    </div>
  );
}