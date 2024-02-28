import React from 'react';
import { FaInstagram, FaYoutube, FaPhone, FaFacebook, FaTiktok, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from "../../assets/Mesa de trabajo 192.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="py-10 xl:px-15 lg:px-12 sm:px-6 px-4 bg-primaryVio">
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <div className="flex items-center">
                            <img src={Logo} alt="Logo de la marca VM" className="h-auto w-24 md:w-75 md:h-65 mr-3" />
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8 text-white">
                        <Link to='/'>
                        <a className="hover:text-secondaryTur2 text-base cursor-pointer leading-4 text-white">Inicio</a>
                        </Link>
                        <Link to='/contactanos'>
                        <a className="hover:text-secondaryTur2 text-base cursor-pointer leading-4 text-white">Contáctanos</a>
                        </Link>
                        <Link to='/'>
                        <a className="hover:text-secondaryTur2 text-base cursor-pointer leading-4 text-white">Términos y condiciones</a>
                        </Link>

                        <Link to='/'>
                        <a className="hover:text-secondaryTur2 text-base cursor-pointer leading-4 text-white">Políticas de privacidad</a>
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-10 mt-8">
                        <a href="https://www.instagram.com/vagamundo_travellers/" className=" w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-secondaryTur2 rounded-full flex items-center justify-center">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@vaga-mundo/featured" className=" w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-secondaryTur2 rounded-full flex items-center justify-center">
                            <FaYoutube />
                        </a>
                        <a href="https://www.facebook.com/VagaMundoTravellers/" className=" w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-secondaryTur2 rounded-full flex items-center justify-center">
                            <FaFacebook />
                        </a>
                       
                        <a href="https://www.linkedin.com/company/vaga-mundo/" className=" w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-secondaryTur2 rounded-full flex items-center justify-center">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/VagaMun02520247" className=" w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-secondaryTur2 rounded-full flex items-center justify-center">
                            <FaTwitter />
                        </a>
                        <a href="tel:+54%209%2011%203875-0336" className=" w-8 h-8 flex-shrink-0 bg-white cursor-pointer hover:bg-secondaryTur2 rounded-full flex items-center justify-center">
                            <FaPhone />
                        </a>
                    </div>
                    <div className="flex items-center mt-6">
                        <div className="pl-2 ml-2">
                            <p className="text-base leading-4 text-white">Todos los derechos reservados</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-6">
                        <p className="text-base leading-4 text-white">
                            Derechos de autor © 2024 <span className="font-semibold">Vaga - Mundo</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
