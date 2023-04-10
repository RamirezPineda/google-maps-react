export interface PositionType {
  lat: number;
  lng: number;
}

export type GoogleAreaPolygon = [
  pointOne: PositionType,
  pointTwo: PositionType,
  pointThree: PositionType,
  pointFour: PositionType,
  pointFive: PositionType
];

const polygonCoords = [
  { lat: 37.7749, lng: -122.4194 }, // Punto 1
  { lat: 37.7749, lng: -123.4194 }, // Punto 2
  { lat: 38.7749, lng: -123.4194 }, // Punto 3
  { lat: 38.7749, lng: -122.4194 }, // Punto 4
];
