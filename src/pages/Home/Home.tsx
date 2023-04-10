import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
  Polygon,
} from "@react-google-maps/api";

import { usePositionUser } from "../../hooks/usePositionUser";
import { GoogleMarker } from "../../models/marker.model";
import { GoogleAreaCircle } from "../../models/areaCircle.model";
import AddAreaCircleForm from "./components/AddAreaCircleForm";
import AddMarkerForm from "./components/AddMarkerForm";
import AddPolygonForm from "./components/AddPolygonForm";
import { GoogleAreaPolygon } from "../../models/areaPolygon.model";
import AddModal from "./components/AddModal";

function Home() {
  const { positionUser, geofence } = usePositionUser();
  const [imageSelect, setImageSelect] = useState(
    "https://cdn-icons-png.flaticon.com/512/4287/4287661.png"
  );
  const [markers, setMarkers] = useState<GoogleMarker[]>([]);
  const [areasCircle, setAreasCircle] = useState<GoogleAreaCircle[]>([]);
  const [areasPolygon, setAreasPolygon] = useState<GoogleAreaPolygon[]>([]);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds(positionUser);
      map.fitBounds(bounds);
      setMap(map);
    },
    [positionUser]
  );

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  const mapClickAddMarker = (e: google.maps.MapMouseEvent) => {
    const { latLng } = e;
    const lat = latLng ? latLng.lat() : -17.777029;
    const lng = latLng ? latLng?.lng() : -63.200623;

    const size = new window.google.maps.Size(40, 40);
    const options = { icon: { url: imageSelect, scaledSize: size } };
    const newMarker = { lat, lng, options };

    setMarkers([...markers, newMarker]);
  };

  const changeImageSelect = (image: string) => {
    setImageSelect(image);
  };

  const handleSubmitAddMarker = (newMarker: GoogleMarker) => {
    setMarkers([...markers, newMarker]);
  };

  const handleSubmitAddAreaCircle = (newAreaCircle: GoogleAreaCircle) => {
    setAreasCircle([...areasCircle, newAreaCircle]);
  };

  const handleSubmitAddAreaPolygon = (newPolygon: GoogleAreaPolygon) => {
    setAreasPolygon([...areasPolygon, newPolygon]);
  };

  return (
    <div className="bg-[#1E1F25] rounded ">
      <div className="flex justify-center items-center gap-2 p-5">
        <div className="">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "800px", height: "500px" }}
              zoom={10}
              center={positionUser}
              onLoad={onLoad}
              onUnmount={onUnmount}
              onClick={mapClickAddMarker}
            >
              {geofence.center && (
                <Circle
                  center={geofence.center}
                  radius={geofence.radius}
                  options={{
                    strokeColor: "#7CB9E8", // Color del borde del círculo
                    strokeOpacity: 0.8, // Opacidad del borde del círculo (0 a 1)
                    strokeWeight: 2, // Grosor del borde del círculo
                    fillColor: "#7CB9E8", // Color de relleno del círculo
                    fillOpacity: 0.35, // Opacidad del relleno del círculo (0 a 1)
                  }}
                  onClick={mapClickAddMarker}
                />
              )}
              {areasCircle.map((areaCircle, index) => (
                <Circle
                  key={index}
                  center={areaCircle.center}
                  radius={areaCircle.radius}
                  options={{
                    strokeColor: "#7CB9E8",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#7CB9E8",
                    fillOpacity: 0.35,
                  }}
                />
              ))}
              {areasPolygon.map((areaPolygon, index) => (
                <Polygon
                  key={index}
                  path={areaPolygon}
                  options={{
                    strokeColor: "#7CB9E8",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#7CB9E8",
                    fillOpacity: 0.35,
                  }}
                />
              ))}
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  visible={!!map}
                  options={marker.options}
                  // label={"Hello world"}
                />
              ))}
              {/* Marker of User */}
              <Marker
                position={{
                  lat: positionUser ? positionUser.lat : -17.785511,
                  lng: positionUser ? positionUser.lng : -63.181606,
                }}
                visible={!!map}
                options={{
                  icon: {
                    url: "https://cdn-icons-png.flaticon.com/512/5216/5216456.png",
                    scaledSize: new window.google.maps.Size(50, 50),
                  },
                }}
              />
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
        <div className=" flex justify-center items-center gap-2">
          {/* Add Markers */}
          <AddMarkerForm
            addMarker={handleSubmitAddMarker}
            changeImage={changeImageSelect}
          />
          {/* Add Area Circle */}
          <AddAreaCircleForm addAreaCircle={handleSubmitAddAreaCircle} />
        </div>
        {/*  */}
      </div>
      {/* Add Area Polygon */}
      <AddPolygonForm addAreaPolygon={handleSubmitAddAreaPolygon} />
      {/* <AddModal /> */}
    </div>
  );
}

export default Home;

