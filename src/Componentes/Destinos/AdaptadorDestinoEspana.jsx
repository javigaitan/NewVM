import React from 'react';
import DestinoEspana from './DestinoEspana.jsx';
import DestinoEspanaResponsive from './DestinoEspanaResponsive.jsx'


const AdaptadorDestinosEspana = () => {
  return (
    <div>
    {/* Componente de escritorio */}
    <div className="hidden md:block">
        <DestinoEspana />
    </div>

    {/* Componente responsive para móviles */}
    <div className="block md:hidden">
        <DestinoEspanaResponsive />
    </div>
</div>  )
}

export default AdaptadorDestinosEspana