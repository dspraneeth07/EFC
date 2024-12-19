import React from 'react';
import { Car, Bus, Plane } from 'lucide-react';

interface TransportConfig {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  min: number;
  max: number;
  step: number;
  unit: string;
}

export const TransportQuestionConfig: Record<'car' | 'public' | 'flight', TransportConfig> = {
  car: {
    title: 'How far do you travel by car each week?',
    subtitle: 'Include all car and motorcycle travel',
    icon: <Car className="w-16 h-16 text-blue-500" />,
    min: 0,
    max: 1000,
    step: 10,
    unit: 'km',
  },
  public: {
    title: 'How far do you travel by public transport?',
    subtitle: 'Include bus, train, and tram travel',
    icon: <Bus className="w-16 h-16 text-green-500" />,
    min: 0,
    max: 500,
    step: 5,
    unit: 'km',
  },
  flight: {
    title: 'How many hours do you fly each year?',
    subtitle: 'Include all flights, both domestic and international',
    icon: <Plane className="w-16 h-16 text-purple-500" />,
    min: 0,
    max: 200,
    step: 1,
    unit: 'hours',
  },
};