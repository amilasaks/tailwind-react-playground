import React from "react";

function Destination({destination}) {
  return (
    <div className="flex items-center bg-gray-100 rounded overflow-hidden border hover:-translate-y-2 transform transition">
      <img
        src={destination.imgUrl}
        className="h-40 w-44 flex-shrink-0 object-cover object-center"
        alt=""
      />
      <div className="px-5">
        <h3 className="text-lg font-semibold ">{destination.city}</h3>
        <p className="text-gray-700">
          ${destination.averagePrice} / night average
        </p>
        <a href="" className="inline-block text-indigo-600 font-semibold mt-5 ">
          Explore {destination.propertyCount} properties
        </a>
      </div>
    </div>
  );
}

export default Destination;
