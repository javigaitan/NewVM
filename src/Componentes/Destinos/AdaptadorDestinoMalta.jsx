import React from 'react';
import DestinoMalta from './DestinoMalta';
import DestinoMaltaResponsive from './DestinoMaltaResponsive'


const AdaptadorDestinos = () => {
  return (
    <div>
    {/* Componente de escritorio */}
    <div className="hidden md:block">
        <DestinoMalta />
    </div>

    {/* Componente responsive para móviles */}
    <div className="block md:hidden">
        <DestinoMaltaResponsive />
    </div>
</div>  )
}

export default AdaptadorDestinos