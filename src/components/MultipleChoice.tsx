import React from 'react';

interface Choice {
  value: string;
  label: string;
}

interface MultipleChoiceProps {
  choices: Choice[];
  selected: string;
  onSelect: (value: string) => void;
}

export function MultipleChoice({ choices, selected, onSelect }: MultipleChoiceProps) {
  return (
    <div className="space-y-3">
      {choices.map((choice) => (
        <button
          key={choice.value}
          onClick={() => onSelect(choice.value)}
          className={`w-full p-4 rounded-lg text-left transition-all ${
            selected === choice.value
              ? 'bg-green-500 text-white shadow-lg scale-[1.02]'
              : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
          }`}
        >
          {choice.label}
        </button>
      ))}
    </div>
  );
}