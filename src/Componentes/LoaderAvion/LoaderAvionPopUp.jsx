import React from "react";
import { Link } from "react-router-dom";
import Avion from './avionsinlineas.png';
import './LoaderAvionPopUp.css';

const LoaderAvionPopUp = ({ onClose }) => {
    return (
        <div className="loader-popup">
            <div className="relative flex justify-center items-center ">
                <div id="menu" className="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0">
                    <div className="2xl:container 2xl:mx-auto py-40 px-3 md:px-28 flex justify-center items-center">
                        <div className="w-96 md:w-auto relative flex flex-col justify-center items-center bg-white py-12 px-4 md:px-24 xl:py-24 xl:px-36">
                            <div role="banner">
                                <img
                                    src={Avion}
                                    alt="Avion"
                                    className="w-32 md:w-40 lg:w-48 animate-spin-slow"
                                />
                            </div>
                            <div className="mt-12">
                                <h1 role="main" className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-colorText">
                                    ¡No dejes pasar el avión!
                                </h1>
                            </div>
                            <div className="pb-5">
                                <p className="mt-6 sm:w-80 text-base leading-7 text-center text-colorText">
                                    Conoce cómo llegar a tu destino de la mano de Vaga-Mundo
                                </p>
                            </div>
                            <Link to='https://wa.me/541138750336/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20cotizar%20mi%20viaje!'>
                                <button className="elementor-button bg-secondaryTur2 text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8  transition-all duration-300 hover:scale-105">
                                    Contáctanos
                                </button>
                            </Link>

                            <button
                                onClick={onClose}  // Close the popup when clicked
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
