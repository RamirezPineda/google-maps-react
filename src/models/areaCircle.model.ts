interface PositionType {
  lat: number;
  lng: number;
}

export interface GoogleAreaCircle {
  center: PositionType;
  radius: number;
}
