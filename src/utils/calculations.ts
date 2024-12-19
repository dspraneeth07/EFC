// CO2 equivalents in grams
export const CO2_EQUIVALENTS = {
  food: {
    never: 0,
    infrequently: 500,
    occasionally: 1000,
    often: 2000,
    'very-often': 3000,
  },
  housing: {
    'no-water': 500,
    water: 1000,
    apartment: 1500,
    duplex: 2000,
    luxury: 3000,
  },
  transport: {
    car: 0.2, // per km
    publicTransport: 0.05, // per km
    flight: 90, // per hour
  },
};

export function calculateTotalEmissions(answers: any): number {
  let total = 0;

  // Food emissions
  total += CO2_EQUIVALENTS.food[answers.foodFrequency as keyof typeof CO2_EQUIVALENTS.food] || 0;
  
  // Housing emissions
  total += CO2_EQUIVALENTS.housing[answers.houseType as keyof typeof CO2_EQUIVALENTS.housing] || 0;
  
  // Transport emissions
  total += (answers.carTravel || 0) * CO2_EQUIVALENTS.transport.car;
  total += (answers.publicTransport || 0) * CO2_EQUIVALENTS.transport.publicTransport;
  total += (answers.flightHours || 0) * CO2_EQUIVALENTS.transport.flight;

  return total;
}

export function calculateCigaretteEquivalent(co2Grams: number): number {
  const CO2_PER_CIGARETTE = 14; // grams
  return Math.round(co2Grams / CO2_PER_CIGARETTE);
}