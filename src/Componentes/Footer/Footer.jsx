import React, { useEffect } from 'react';
import { FaInstagram, FaYoutube, FaPhone, FaFacebook, FaTiktok, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/shell.js';
        document.head.appendChild(script);

        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '26265942',
                    formId: 'cf3978f2-3112-41f2-917c-9100a946a4c3',
                    target: '#hubspotForm'
                });
            }
        };
        return () => {
            document.head.removeChild(script);
        };
    }, []);


    return (
        <>
            <div className=" py-16 xl:px-20 lg:px-12 sm:px-6 px-4 bg-purple-900">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
                    <div className="flex flex-col flex-shrink-0">

                        <p className="text-sm leading-none text-white mt-4">Copyright © 2024 Vaga-Mundo</p>
                        <p className="text-sm leading-none text-white mt-4">All rights reserved</p>
                        <p className="text-sm leading-none text-white mt-4">2 Dublin Landings, North Dock, Dublín Irlanda</p>


                        <div className="flex items-center gap-x-4 mt-12">
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
                    </div>

                    <div>
                        <h2 className="text-base font-semibold leading-4 text-white">Soporte</h2>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">Politicas de privacidad</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">Terminos y condiciones</p>
                    </div>
                    <div className="mt-10 lg:block hidden">
                        <div>
                        <h2 className="text-base font-semibold leading-4 text-white">Soporte</h2>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">Politicas de privacidad</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">Terminos y condiciones</p>
                    </div>
                        <label className="text-xl font-medium leading-5 text-white">Newsletter</label>
                        <div
                            id="hubspotForm"
                            className="  flex-col sm:flex-row flex items-center lg:w-13/13 w-full mt-8 space-y-4 sm:space-y-0"
                            style={{ maxWidth: "800px", minHeight: "200px" }}
                        >
                            {/* Contenido del formulario de HubSpot */}
                        </div>
                    </div>
                </div>
                <div className="mt-45 lg:hidden">
                    <label className="text-xl font-medium leading-5 text-white">Newsletter</label>
                    <div id="hubspotForm" className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                        {/* Contenedor para el formulario de HubSpot */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer