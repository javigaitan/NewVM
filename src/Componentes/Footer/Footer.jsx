import React from 'react';
import { FaInstagram, FaYoutube, FaPhone, FaFacebook, FaTiktok, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from "../../assets/Logotipo_vagamundo_RGB_v1-01.png";


const Footer = () => {
    return (
        <>
            <div className="py-10 xl:px-15 lg:px-12 sm:px-6 px-4 bg-purple-900">


            <div className="flex flex-col items-center justify-center">
                <div>
                   
                    <div className=" flex items-center">
                                    <img src={Logo} alt="Logo" className="h-auto w-24 md:w-75 md:h-65 mr-3" />
                                </div>
                </div>
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8 text-white">
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white">About</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white">Contactanos</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white">Terminos y condiciones</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white">Politicas de privacidad</p>
                </div>
                <div className="flex items-center gap-x-8 mt-6">
                <a href="https://www.instagram.com/vagamundo_travellers/" className="opacity-50 w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@vaga-mundo/featured" className="opacity-50 w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <FaYoutube />
                        </a>
                        <a href="https://www.facebook.com/VagaMundoTravellers/" className="opacity-50 w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <FaFacebook />
                        </a>
                        <a href="https://www.tiktok.com/@vaga_mundo_travellers" className="opacity-50 w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <FaTiktok />
                        </a>
                        <a href="https://www.linkedin.com/company/vaga-mundo/" className="opacity-50 w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/VagaMun02520247" className="opacity-50 w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <FaTwitter />
                        </a>
                        <a href="tel:+54%209%2011%203875-0336" className="opacity-50 w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <FaPhone />
                        </a>
                </div>
                <div className="flex items-center mt-6">
                    <p className="text-base leading-4 text-white">
                    Copyright © 2024 <span className="font-semibold">Vaga - Mundo</span>
                    </p>
                    <div className="border-l border-white pl-2 ml-2">
                        <p className="text-base leading-4 text-white"> All righys reserved</p>
                    </div>
                </div>
            </div>



            </div>
        </>
    )
}

export default Footer;
