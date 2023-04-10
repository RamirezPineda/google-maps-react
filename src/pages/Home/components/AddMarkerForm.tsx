import { useState, FormEvent, ChangeEvent } from "react";
import { GoogleMarker } from "../../../models/marker.model";

interface Props {
  addMarker: (newMarker: GoogleMarker) => void;
  changeImage: (image: string) => void;
}

function AddMarkerForm({ addMarker, changeImage }: Props) {
  const [latMarker, setLatMarker] = useState(0);
  const [lngMarker, setLngMarker] = useState(0);
  const [imageSelect, setImageSelect] = useState(
    "https://cdn-icons-png.flaticon.com/512/4287/4287661.png"
  );

  const handleSubmitAddMarker = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const size = new window.google.maps.Size(40, 40);
    const options = { icon: { url: imageSelect, scaledSize: size } };
    const newMarker = { lat: latMarker, lng: lngMarker, options };
    addMarker(newMarker);
  };

  return (
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
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setImageSelect(e.target.value);
              changeImage(e.target.value);
            }}
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
  );
}

export default AddMarkerForm;
