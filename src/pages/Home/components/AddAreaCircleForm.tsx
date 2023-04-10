import { useState, ChangeEvent, FormEvent } from "react";
import { GoogleAreaCircle } from "../../../models/areaCircle.model";

interface Props {
  addAreaCircle: (newAreaCircle: GoogleAreaCircle) => void;
}

function AddAreaCircleForm({ addAreaCircle }: Props) {
  const [latGeocerca, setLatGeocerca] = useState(0);
  const [lngGeocerca, setLngGeocerca] = useState(0);
  const [radioGeocerca, setRadioGeocerca] = useState(0);

  const handleSubmitAddAreaCircle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newAreaCircle = {
      radius: radioGeocerca,
      center: { lat: latGeocerca, lng: lngGeocerca },
    };
    addAreaCircle(newAreaCircle);
  };

  return (
    <div>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmitAddAreaCircle}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Latitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLatGeocerca(parseFloat(e.target.value))
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
                setLngGeocerca(parseFloat(e.target.value))
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="long"
              type="number"
              step={0.000001}
              placeholder="-63.181606"
              required={true}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Radio
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRadioGeocerca(parseFloat(e.target.value))
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="radio"
              name="radio"
              type="number"
              placeholder="1000"
              required={true}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add circle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAreaCircleForm;
