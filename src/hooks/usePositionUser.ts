import { useState, useEffect } from "react";

type PositionType = { lat: number; lng: number };

export const usePositionUser = () => {
  const [positionUser, setPositionUser] = useState<PositionType | undefined>(
    undefined
  );
  
  const [geofence, setGeofence] = useState<{
    center: PositionType;
    radius: number;
  }>({
    center: { lat: -1, lng: -6 },
    radius: 1000,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setPositionUser({ lat, lng });
          setGeofence({
            ...geofence,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        },
        (error) => console.error("Error de geolocalización:", error)
      );
    } else {
      console.error("Tu navegador no admite geolocalización.");
    }
  }, []);

  return { positionUser, setPositionUser, geofence, setGeofence };
};
