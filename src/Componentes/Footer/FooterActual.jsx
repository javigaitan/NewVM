import React from "react";

const FooterActual = () => {
  return (
    <div className="relative w-full h-[500px] bg-primaryVio flex items-center justify-center rounded-t-[100%] overflow-hidden">
      {/* Sección superior con fondo verde */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[200px] bg-secondaryTur2 rounded-b-full"></div>
      
      {/* Línea horizontal */}
      <div className="absolute bottom-1/3 w-[80%] border-t border-secondaryTur2"></div>
    </div>
  );
};

export default FooterActual;
