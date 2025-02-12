import React, { useEffect } from 'react';


const ICEF = () => {

  useEffect(() => {
    // Crear un script y agregarlo al footer
    const script = document.createElement('script');
    script.src = "https://www-cdn.icef.com/scripts/iasbadgeid.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    
    document.body.appendChild(script);

    return () => {
      // Remover el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  
  return (
    <div className="relative w-full h-auto mt-5">
      
      {/* Contenedor del badge en la esquina inferior izquierda */}
<div className="absolute bottom-0 left-4 z-20 mb-2">
  <span id="iasBadge" data-account-id="5281"></span>
</div>

      </div>
  );
};

export default ICEF;
