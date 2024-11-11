import React, { useState } from 'react';
import Linea from '../../Componentes/Destinos/DestinosImg/lineablanca.png';
import IconoMundo from '../../Componentes/Destinos/DestinosImg/iconoidioma.png';
import Flecha from '../../assets/Textura/Vector.png';
import i18n from 'i18next';

const BtnIdiomas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ES'); // Estado para el idioma seleccionado

  // Función para alternar el menú desplegable
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang.toUpperCase()); // Actualiza el estado con el idioma seleccionado
    setIsOpen(false); // Cerrar el menú al seleccionar un idioma
  };

  return (
    <div className="relative inline-block flex items-center space-x-2">
      {/* Imágenes y botón */}
      <img src={Linea} alt="Línea" className="ml-2" />
      <img src={IconoMundo} alt="Icono Mundo" className="ml-2" />
      
      {/* Botón que muestra el idioma seleccionado */}
      <button className="dark:text-colorWhite text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
        {selectedLanguage}
      </button>

      <img 
        src={Flecha} 
        alt="Flecha" 
        className="ml-2 cursor-pointer" 
        onClick={toggleMenu} 
      />

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-full right-0 bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2">
          <button 
            className="block w-full px-4 py-2 text-left  hover:bg-gray-700"
            onClick={() => changeLanguage('es')}
          >
            ES
          </button>
          <button 
            className="block w-full px-4 py-2 text-left  hover:bg-gray-700"
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
};

export default BtnIdiomas;
