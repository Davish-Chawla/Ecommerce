import React from "react";

const Card = ({ name, description, image }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
      <img className="w-full h-48 object-cover rounded-xl" src={image} alt={name} />
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
