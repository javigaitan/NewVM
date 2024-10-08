import React from 'react';
import DestinoIrlanda from './DestinoIrlanda';
import DestinoIrlandaResponsive from './DestinoIrlandaResponsive';


const AdaptadorDestinos = () => {
  return (
    <div>
    {/* Componente de escritorio */}
    <div className="hidden md:block">
        <DestinoIrlanda />
    </div>

    {/* Componente responsive para móviles */}
    <div className="block md:hidden">
        <DestinoIrlandaResponsive />
    </div>
</div>  )
}

export default AdaptadorDestinos