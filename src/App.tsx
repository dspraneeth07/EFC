import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { QuestionLayout } from './components/QuestionLayout';
import { FoodQuestion } from './components/food/FoodQuestion';
import { HouseTypeQuestion } from './components/housing/HouseTypeQuestion';
import { TransportQuestion } from './components/transport/TransportQuestion';
import { ResultsPage } from './components/results/ResultsPage';
import { ProgressBar } from './components/ProgressBar';
import { Footer } from './components/Footer';

type Step = 
  | 'landing' 
  | 'food' 
  | 'food-detail' 
  | 'housing' 
  | 'transport-car' 
  | 'transport-public' 
  | 'transport-flight' 
  | 'result';

function App() {
  const [step, setStep] = useState<Step>('landing');
  const [answers, setAnswers] = useState({
    foodFrequency: '',
    foodDetails: {
      beef: '',
      fish: '',
      dairy: '',
    },
    houseType: '',
    houseMaterial: '',
    houseSize: '',
    residents: 1,
    trash: '',
    carTravel: 0,
    fuelEconomy: 0,
    publicTransport: 0,
    flightHours: 0,
  });

  const backgrounds = {
    food: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
    housing: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233',
    transport: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f',
    result: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
  };

  const handleStart = () => setStep('food');
  const handleRestart = () => {
    setStep('landing');
    setAnswers({
      foodFrequency: '',
      foodDetails: { beef: '', fish: '', dairy: '' },
      houseType: '',
      houseMaterial: '',
      houseSize: '',
      residents: 1,
      trash: '',
      carTravel: 0,
      fuelEconomy: 0,
      publicTransport: 0,
      flightHours: 0,
    });
  };

  if (step === 'landing') {
    return (
      <>
        <LandingPage onStart={handleStart} />
        <Footer />
      </>
    );
  }

  const currentStep = step.split('-')[0];
  const progress = 
    currentStep === 'food' ? 1 :
    currentStep === 'housing' ? 2 :
    currentStep === 'transport' ? 3 : 4;

  return (
    <>
      <QuestionLayout background={backgrounds[currentStep as keyof typeof backgrounds]}>
        {step !== 'result' && (
          <ProgressBar current={progress} total={4} />
        )}
        
        {step === 'food' && (
          <FoodQuestion
            type="general"
            value={answers.foodFrequency}
            onChange={(value) => setAnswers({ ...answers, foodFrequency: value })}
            onNext={() => setStep('food-detail')}
          />
        )}

        {step === 'food-detail' && (
          <FoodQuestion
            type="beef"
            value={answers.foodDetails.beef}
            onChange={(value) => 
              setAnswers({ 
                ...answers, 
                foodDetails: { ...answers.foodDetails, beef: value } 
              })
            }
            onNext={() => setStep('housing')}
          />
        )}

        {step === 'housing' && (
          <HouseTypeQuestion
            value={answers.houseType}
            onChange={(value) => setAnswers({ ...answers, houseType: value })}
            onNext={() => setStep('transport-car')}
          />
        )}

        {step === 'transport-car' && (
          <TransportQuestion
            type="car"
            value={answers.carTravel}
            onChange={(value) => setAnswers({ ...answers, carTravel: value })}
            onNext={() => setStep('transport-public')}
          />
        )}

        {step === 'transport-public' && (
          <TransportQuestion
            type="public"
            value={answers.publicTransport}
            onChange={(value) => setAnswers({ ...answers, publicTransport: value })}
            onNext={() => setStep('transport-flight')}
          />
        )}

        {step === 'transport-flight' && (
          <TransportQuestion
            type="flight"
            value={answers.flightHours}
            onChange={(value) => {
              setAnswers({ ...answers, flightHours: value });
              setStep('result');
            }}
          />
        )}

        {step === 'result' && (
          <ResultsPage answers={answers} onRestart={handleRestart} />
        )}
      </QuestionLayout>
      <Footer />
    </>
  );
}

export default App;