import React from 'react';
import { Beef, Fish, Egg } from 'lucide-react';
import { MultipleChoice } from '../MultipleChoice';
import { AnimatedIcon } from '../AnimatedIcon';

interface FoodQuestionProps {
  type: string;
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function FoodQuestion({ type, value, onChange, onNext }: FoodQuestionProps) {
  const questions = {
    general: {
      title: 'How often do you eat animal-based products?',
      subtitle: 'Examples: beef, pork, chicken, fish, eggs, dairy products',
      icon: <Beef className="w-16 h-16 text-green-500" />,
    },
    beef: {
      title: 'How often do you eat beef or lamb?',
      subtitle: 'These have the highest carbon footprint among meats',
      icon: <Beef className="w-16 h-16 text-red-500" />,
    },
    fish: {
      title: 'How often do you eat fish?',
      subtitle: 'Including all types of seafood',
      icon: <Fish className="w-16 h-16 text-blue-500" />,
    },
    dairy: {
      title: 'How often do you consume dairy products?',
      subtitle: 'Including milk, cheese, yogurt, etc.',
      icon: <Egg className="w-16 h-16 text-yellow-500" />,
    },
  };

  const currentQuestion = questions[type as keyof typeof questions];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <AnimatedIcon>{currentQuestion.icon}</AnimatedIcon>
        <div>
          <h2 className="text-2xl font-bold">{currentQuestion.title}</h2>
          <p className="text-gray-600">{currentQuestion.subtitle}</p>
        </div>
      </div>

      <MultipleChoice
        choices={[
          { value: 'never', label: 'Never' },
          { value: 'infrequently', label: 'Infrequently' },
          { value: 'occasionally', label: 'Occasionally' },
          { value: 'often', label: 'Often' },
          { value: 'very-often', label: 'Very Often' },
        ]}
        selected={value}
        onSelect={(newValue) => {
          onChange(newValue);
          onNext();
        }}
      />
    </div>
  );
}