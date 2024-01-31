import React from 'react';

const Card = ({ imageSrc, team, country, description, link }) => {
  return (
    <div>
      <img src={imageSrc} className="w-full h-42" alt={country} />
      <div className="bg-white">
        <div className="flex items-center justify-between px-3 pt-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bookmark"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
          </div>
          <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
            <p className="text-xs text-yellow-500">{team}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <h2 className="text-lg  font-semibold">{country}</h2>
          </div>
          <p className="text-xs text-gray-600 mt-2">{description}</p>
          <div className="flex mt-4">
            {/* Additional content if needed */}
          </div>
          <div className="flex items-center justify-between py-4">
            <a
              href={link}
              className="text-indigo-700 text-xl font-semibold hover:text-indigo-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer mas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;