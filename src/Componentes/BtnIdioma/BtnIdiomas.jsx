import React from 'react'
import Linea from '../../Componentes/Destinos/DestinosImg/lineablanca.png';
import IconoMundo from '../../Componentes/Destinos/DestinosImg/iconoidioma.png';
import Flecha from '../../assets/Textura/Vector.png';

const BtnIdiomas = () => {
  return (
    <div className="inline-block flex items-center space-x-2">
        
    <img src={Linea} alt="Línea" className="ml-2" />
    <img src={IconoMundo} alt="Icono Mundo" className="ml-2" />
    <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
        ES
    </button>
    <img src={Flecha} alt="Flecha" className="ml-2" />

    </div>
  )
}

export default BtnIdiomas