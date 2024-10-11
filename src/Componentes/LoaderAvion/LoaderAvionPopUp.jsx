import React from "react";
import { Link } from "react-router-dom";
import Avion from './avionsinlineas.png';
import './LoaderAvionPopUp.css';
import Back from './bgPopup.png';

const LoaderAvionPopUp = ({ onClose }) => {
    return (
        <div className="loader-popup">
            <div className="relative flex justify-center items-center">
                <div id="menu" className="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0">
                    <div className="2xl:container 2xl:mx-auto py-40 lg:px-3 md:px-28 flex justify-center items-center">
                        {/* Reemplaza el fondo blanco con la imagen de fondo */}
                        <div 
                            className="w-50 md:w-auto relative flex flex-col justify-center items-center py-8 md:px-20 xl:py-20 xl:px-36"
                            style={{
                                backgroundImage: `url(${Back})`,
                                backgroundSize: 'cover', // Asegura que cubra todo el contenedor
                                backgroundPosition: 'center', // Centra la imagen
                                backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
                            }}
                        >
                            <div className="mt-12">
                                <h1 role="main" className="text-4xl lg:text-5xl font-semibold leading-11 lg:leading-9 text-center text-primaryVio">
                                    ¡No dejes pasar el avión!
                                </h1>
                            </div>
                            <div role="banner">
                                <img
                                    src={Avion}
                                    alt="Avion"
                                    className="w-32 md:w-40 lg:w-48 animate-spin-slow"
                                />
                            </div>
                            
                            <div className="pb-5">
                                <p className="mt-6 sm:w-85 text-xl leading-7 text-center text-back">
                                    Conoce cómo llegar a tu destino de la mano de <strong>Vaga-Mundo</strong>
                                </p>
                            </div>
                            <Link to='https://wa.me/541138750336/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20cotizar%20mi%20viaje!'>
                                <button className="elementor-button bg-primaryVio text-colorWhite rounded-full text-2xl font-medium font-semibold py-3 px-8  transition-all duration-300 hover:scale-105">
                                    Contáctanos
                                </button>
                            </Link>

                            <button
                                onClick={onClose}  // Cierra el popup cuando se hace clic
                                className="absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                                aria-label="close"
                            >
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 6L6 18"
                                        stroke="#1F2937"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6 6L18 18"
                                        stroke="#1F2937"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoaderAvionPopUp;
