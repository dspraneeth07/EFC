import React from 'react';
import { Home, Building, Building2 } from 'lucide-react';
import { MultipleChoice } from '../MultipleChoice';
import { HouseAnimation } from './HouseAnimation';

interface HouseTypeQuestionProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function HouseTypeQuestion({ value, onChange, onNext }: HouseTypeQuestionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">
        Which housing type describes your home best?
      </h2>
      
      <MultipleChoice
        choices={[
          { value: 'no-water', label: 'Freestanding, no running water' },
          { value: 'water', label: 'Freestanding, running water' },
          { value: 'apartment', label: 'Multi-storey apartment' },
          { value: 'duplex', label: 'Duplex or row house' },
          { value: 'luxury', label: 'Luxury condominium' },
        ]}
        selected={value}
        onSelect={(newValue) => {
          onChange(newValue);
          onNext();
        }}
      />

      <HouseAnimation type={value} />
    </div>
  );
}