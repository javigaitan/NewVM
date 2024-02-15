import React from 'react'
import BGR from '../../assets/Img/fondoBanner.jpg'


const Banner = () => {
    return (
        <div className="lg:max-w-[1440px] relative inset-0 md:max-w-[1440px] max-w-[800px] mx-auto">
          <div className="relative">
            <img
              src={BGR}
              className="w-full h-auto object-cover lg:h-[500px] lg:block md:hidden hidden"
              alt="Banner Background"
            />
            <div className="w-full h-full bg-black opacity-40 absolute top-0 left-0" />
            <img
              src={BGR}
              className="lg:hidden md:block hidden"
              alt="Banner Background"
            />
            <img
              src={BGR}
              className="lg:hidden md:hidden block"
              alt="Banner Background"
            />
            <div className="absolute lg:bottom-8 md:bottom-3 bottom-0 lg:px-7 md:px-10 px-4 py-4">
              <h1 className="lg:text-4xl md:text-2xl text-2xl font-bold leading-9 text-white">
                ¡El mundo te espera!
              </h1>
              <h2 className="lg:text-3xl md:text-xl text-g font-normal leading-7 text-white">
                Estudia y trabaja en el exterior
              </h2>
      
              <div className="inline-block py-5">
                <button className="elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                  Solicita tu cotización
                </button>
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default Banner