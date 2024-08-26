import React from 'react';
import BGR from '../../assets/BannerHome/FOTO BANNER.png';
import './BannerCTA.css'; 

const Banner = () => {
    return (
        <div className="relative inset-0 mx-auto text-start lg:max-w-[1440px] md:max-w-[1440px] max-w-[800px]">
            <div className="relative">
                <img
                    src={BGR}
                    className="w-full h-auto object-cover lg:h-[500px] lg:block md:hidden hidden rounded-bl-custom"
                    alt="Banner Background"
                />
                <div className="w-full h-full bg-black opacity-40 absolute top-0 left-0 rounded-bl-custom-overlay" />
                <img
                    src={BGR}
                    className="lg:hidden md:block hidden w-full h-auto object-cover md:h-[500px] rounded-bl-custom"
                    alt="Banner Background"
                />
                <img
                    src={BGR}
                    className="lg:hidden md:hidden block w-full h-auto object-cover rounded-bl-custom"
                    alt="Banner Background"
                />
                <div className="absolute lg:bottom-0 md:bottom-0 bottom-0 lg:px-7 md:px-10 px-4 py-4 lg:left-[50px] lg:pl-[55px] md:left-[50px] md:pl-[55px] pl-4 left-4">
                    <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold leading-tight text-white">
                        ¡El mundo te espera!
                    </h1>
                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-normal leading-snug text-white">
                        Vive, estudia y trabaja en el extranjero
                    </h2>
                    <div className="inline-block py-8">
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