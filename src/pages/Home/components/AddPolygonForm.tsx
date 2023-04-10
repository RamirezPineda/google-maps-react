import { useState, ChangeEvent, FormEvent } from "react";
import {
  GoogleAreaPolygon,
  PositionType,
} from "../../../models/areaPolygon.model";

interface Props {
  addAreaPolygon: (newPolygon: GoogleAreaPolygon) => void;
}

function AddPolygonForm({ addAreaPolygon }: Props) {
  const [pointOne, setPointOne] = useState<PositionType>({ lat: 1, lng: 1 });
  const [pointTwo, setPointTwo] = useState<PositionType>({ lat: 1, lng: 1 });
  const [pointThree, setPointThree] = useState<PositionType>({
    lat: 1,
    lng: 1,
  });
  const [pointFour, setPointFour] = useState<PositionType>({ lat: 1, lng: 1 });
  const [pointFive, setPointFive] = useState<PositionType>({ lat: 1, lng: 1 });

  const handleSubmitAddAreaPolygon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPolygon: GoogleAreaPolygon = [
      pointOne,
      pointTwo,
      pointThree,
      pointFour,
      pointFive,
    ];
    addAreaPolygon(newPolygon);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmitAddAreaPolygon}
        className="w-full max-w-lg ml-5 bg-white text-gray-500 rounded-md"
      >
        {/* POINT ONE */}
        <div className="flex flex-wrap -mx-3  p-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Point One Latitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPointOne({ ...pointOne, lat: parseFloat(e.target.value) })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              step={0.000001}
              placeholder="-17.785511"
              required={true}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Point One Longitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPointOne({ ...pointOne, lng: parseFloat(e.target.value) })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              step={0.000001}
              placeholder="-63.181606"
              required={true}
            />
          </div>
        </div>
        {/* POINT TWO */}
        <div className="flex flex-wrap -mx-3 p-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Point Two Latitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPointTwo({ ...pointTwo, lat: parseFloat(e.target.value) })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              step={0.000001}
              placeholder="-17.785511"
              required={true}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Point Two Longitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPointTwo({ ...pointTwo, lng: parseFloat(e.target.value) })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              step={0.000001}
              placeholder="-63.181606"
              required={true}
            />
          </div>
        </div>
        {/* POINT THREE */}
        <div className="flex flex-wrap -mx-3 p-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Point Three Latitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPointThree({
                  ...pointThree,
                  lat: parseFloat(e.target.value),
                })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              step={0.000001}
              placeholder="-17.785511"
              required={true}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Point Three Longitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPointThree({
                  ...pointThree,
                  lng: parseFloat(e.target.value),
                })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              step={0.000001}
              placeholder="-63.181606"
              required={true}
            />
          </div>
        </div>
        {/* POINT FOUR */}
        <div className="flex flex-wrap -mx-3 p-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Point Four Latitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPointFour({ ...pointFour, lat: parseFloat(e.target.value) })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              step={0.000001}
              placeholder="-17.785511"
              required={true}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Point Four Longitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPointFour({ ...pointFour, lng: parseFloat(e.target.value) })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              step={0.000001}
              placeholder="-63.181606"
              required={true}
            />
          </div>
        </div>
        {/* POINT FIVE */}
        <div className="flex flex-wrap -mx-3 p-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Point Five Latitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPointFive({ ...pointFive, lat: parseFloat(e.target.value) })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              step={0.000001}
              placeholder="-17.785511"
              required={true}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Point Five Longitud
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPointFive({ ...pointFive, lng: parseFloat(e.target.value) })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              step={0.000001}
              placeholder="-63.181606"
              required={true}
            />
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Polygon
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPolygonForm;
