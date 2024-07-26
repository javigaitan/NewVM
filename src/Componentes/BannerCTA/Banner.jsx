import React from 'react';
import BGR from '../../assets/BannerHome/FOTO BANNER.png';
import './BannerCTA.css'; // Asegúrate de que la ruta sea correcta

const Banner = () => {
    return (
      <div className="lg:max-w-[1440px] relative inset-0 md:max-w-[1440px] max-w-[800px] mx-auto text-start" >
      <div className="relative" >
          <img
              src={BGR}
              className="w-full h-auto object-cover lg:h-[500px] lg:block md:hidden hidden rounded-bl-custom"
              alt="Banner Background"
          />
          <div className="w-full h-full bg-black opacity-40 absolute top-0 left-0 rounded-bl-custom-overlay" /> {/* Ajuste aquí */}
          <img
              src={BGR}
              className="lg:hidden md:block hidden rounded-bl-custom"
              alt="Banner Background"
          />
          <img
              src={BGR}
              className="lg:hidden md:hidden block rounded-bl-custom"
              alt="Banner Background"
          />
                <div className="absolute lg:bottom-0 md:bottom-0 bottom-0 lg:px-7 md:px-10 px-4 py-4" style={{ paddingLeft: '55px', left: '50px' }}
                > 
                    <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold leading-tight text-white">
                        ¡El mundo te espera!
                    </h1>
                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-normal leading-snug text-white">
                        Vive, estudia y trabaja en el extranjero
                    </h2>

                    <div className="inline-block py-8"> {/* Aumentar el padding */}
                        <button className="elementor-button bg-secondaryTur2 text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                            Solicita tu cotización
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
