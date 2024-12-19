export const TRANSPORT_EMISSIONS = {
  car: 0.2, // CO2 grams per km
  publicTransport: 0.05, // CO2 grams per km
  flight: 90, // CO2 grams per hour
};

export function calculateTransportEmissions(
  carTravel: number,
  publicTransport: number,
  flightHours: number
): number {
  return (
    carTravel * TRANSPORT_EMISSIONS.car +
    publicTransport * TRANSPORT_EMISSIONS.publicTransport +
    flightHours * TRANSPORT_EMISSIONS.flight
  );
}