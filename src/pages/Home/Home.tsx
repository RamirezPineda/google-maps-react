import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";

import { usePositionUser } from "../../hooks/usePositionUser";
import { GoogleMarker } from "../../models/marker.model";

function Home() {
  const [latMarker, setLatMarker] = useState(0);
  const [lngMarker, setLngMarker] = useState(0);
  const { positionUser, geofence } = usePositionUser();
  const [imageSelect, setImageSelect] = useState(
    "https://cdn-icons-png.flaticon.com/512/4287/4287661.png"
  );
  const [markers, setMarkers] = useState<GoogleMarker[]>([]);
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

  const handleSubmitAddMarker = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("click");
    const size = new window.google.maps.Size(40, 40);
    const options = { icon: { url: imageSelect, scaledSize: size } };
    const newMarker = { lat: latMarker, lng: lngMarker, options };

    setMarkers([...markers, newMarker]);
  };

  return (
    <div className="bg-[#1E1F25] rounded ">
      <div className="flex justify-center items-center gap-2 p-5">
        <div className="">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "1000px", height: "500px" }}
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
        <div>
          <div className="w-full max-w-xs">
            <form
              onSubmit={handleSubmitAddMarker}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Latitud
                </label>
                <input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLatMarker(parseFloat(e.target.value))
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  step={0.000001}
                  placeholder="-17.785511"
                  required={true}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Longitud
                </label>
                <input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLngMarker(parseFloat(e.target.value))
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="long"
                  type="number"
                  step={0.000001}
                  placeholder="-63.181606"
                  required={true}
                />
              </div>
              <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setImageSelect(e.target.value)
                }
                name="imageUrl"
                id="imageUrl"
                className="shadow border rounded mb-6 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="https://cdn-icons-png.flaticon.com/512/4287/4287661.png">
                  Marker image 1
                </option>
                <option value="https://cdn-icons-png.flaticon.com/512/5385/5385604.png">
                  Marker image 2
                </option>
                <option value="https://cdn-icons-png.flaticon.com/512/9805/9805408.png">
                  Marker image 3
                </option>
                <option value="https://cdn-icons-png.flaticon.com/512/10162/10162966.png">
                  Marker image 4
                </option>
                <option value="https://cdn-icons-png.flaticon.com/512/6984/6984992.png">
                  Marker image 5
                </option>
                <option value="https://cdn-icons-png.flaticon.com/512/9924/9924062.png">
                  Marker image 6
                </option>
                <option value="https://cdn-icons-png.flaticon.com/512/1301/1301472.png">
                  Marker image 7
                </option>
              </select>
              <div className="flex justify-center mb-6  ">
                <img
                  src={imageSelect}
                  alt="Imagen del marker"
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add marker
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// AIzaSyBzS9_7NpUEiB0sPkDVJo0ieas4heVaBxA
