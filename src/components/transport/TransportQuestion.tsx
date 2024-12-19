import React from 'react';
import { Car, Bus, Plane } from 'lucide-react';
import { Slider } from '../common/Slider';
import { AnimatedIcon } from '../common/AnimatedIcon';
import { TransportQuestionConfig } from './TransportQuestionConfig';

interface TransportQuestionProps {
  type: 'car' | 'public' | 'flight';
  value: number;
  onChange: (value: number) => void;
  onNext?: () => void;
}

export function TransportQuestion({ type, value, onChange, onNext }: TransportQuestionProps) {
  const currentQuestion = TransportQuestionConfig[type];

  const handleChange = (newValue: number) => {
    onChange(newValue);
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <AnimatedIcon>{currentQuestion.icon}</AnimatedIcon>
        <div>
          <h2 className="text-2xl font-bold">{currentQuestion.title}</h2>
          <p className="text-gray-600">{currentQuestion.subtitle}</p>
        </div>
      </div>

      <Slider
        value={value}
        onChange={handleChange}
        min={currentQuestion.min}
        max={currentQuestion.max}
        step={currentQuestion.step}
        label={`${value} ${currentQuestion.unit}`}
      />
    </div>
  );
}