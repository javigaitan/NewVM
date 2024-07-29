import React from 'react';

const TestimoniaCard = ({ imageSrc, name, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-[389px] h-[376px] mx-auto">
      <img 
        src={imageSrc} 
        alt={name} 
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 text-center">{text}</p>
    </div>
  );
};

export default TestimoniaCard;
