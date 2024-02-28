import React from 'react';

const CardBlog = ({ foto, destino, fecha, titulo, resumen }) => {
  return (
    <div>
      <img className="w-full" src={foto} alt="Blog" /> {/* Usar la URL de la imagen proporcionada en el JSON */}
      <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
        <p className="text-sm text-white font-semibold tracking-wide">{destino}</p> {/* Mostrar el destino del blog */}
        <p className="text-sm text-white font-semibold tracking-wide">{fecha}</p> {/* Mostrar la fecha del blog */}
      </div>
      <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
        <h1 className="text-lg text-gray-900 font-semibold tracking-wider">{titulo}</h1> {/* Mostrar el título del blog */}
        <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">{resumen}</p> {/* Mostrar el resumen del blog */}
      </div>
    </div>
  );
};

export default CardBlog;
