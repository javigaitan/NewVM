import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import ScrollReveal from 'scrollreveal';
import Logo from "../../assets/Logos/LogoTurquesa.png";
import WhatsAppButton from "../BtnWs/WhatsAppButton";
import Flecha from '../../assets/Textura/Vector.png';
import Irlanda from '../../assets/PaisesDesplegables/IRLANDA.png';
import Malta from "../../assets/PaisesDesplegables/MALTA.png";
import Espana from '../../assets/PaisesDesplegables/ESPAÑA.png';
import Francia from '../../assets/PaisesDesplegables/FRANCIA.png';
import Alemania from '../../assets/PaisesDesplegables/ALEMANIA.png';
import IrlandaBandera from '../../assets/PaisesDesplegables/BanderaIrlanda.png';
import MaltaBandera from "../../assets/PaisesDesplegables/BanderaMalta.png";
import EspanaBandera from '../../assets/PaisesDesplegables/BanderaEspa.png';
import FranciaBandera from '../../assets/PaisesDesplegables/BanderaFrancia.png';
import AlemaniaBandera from '../../assets/PaisesDesplegables/BanderaAlemani.png';
import BtnIdiomas from "../BtnIdioma/BtnIdiomas"


function Navbar() {
    const [t, i18n] = useTranslation("navbar");
    const [showMenu, setShowMenu] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = () => {
        setDropdownOpen(false);
        setShowMenu(false);
    };

    const handleScroll = () => {
        setDropdownOpen(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        ScrollReveal().reveal('.card', {
            delay: 300,
            distance: '50px',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });

        ScrollReveal().reveal('.item', {
            delay: 300,
            distance: '50px',
            origin: 'top',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });

        ScrollReveal().reveal('.text', {
            delay: 300,
            distance: '50px',
            origin: 'left',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });
    }, []);

    return (
        <div className="dark:bg-gray-900">
            <div>
                <div className="relative">
                    {/* For large screens */}
                    <div className="relative z-10 bg-primaryVio px-7 py-6">
                        <div className="item container mx-auto flex items-center justify-between">
                            <h1 className="md:w-2/12 cursor-pointer" aria-label="Vaga Mundo">
                                <div className="mr-10 flex items-center">
                                    <Link to='/'>
                                        <img src={Logo} alt="Logo" className="h-auto w-24 md:w-auto md:h-auto mr-3" />
                                    </Link>
                                </div>
                            </h1>

                            <ul className="hidden w-8/12 md:flex items-center justify-center space-x-12 font-semibold text-colorWhite">
                                <li>
                                    <Link to='/nosotros'>
                                        <button className="font-semibold dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.about")}
                                        </button>
                                    </Link>
                                </li>

                                <li className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="dark:text-colorWhite text-lg flex items-center focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                                    >
                                        <span>{t("navbar.i-want-to-travel")}</span>
                                        <img src={Flecha} alt="Flecha" className="ml-2" />
                                    </button>


                                    {isDropdownOpen && (
                                        <div className="absolute left-0 mt-1 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                            <Link to='/destino-irlanda' onClick={handleLinkClick} className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100">
                                                <img src={Irlanda} alt="Irlanda" className="w-24 h-18 object-cover rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.ireland")}</span>
                                                <img src={IrlandaBandera} alt="BanderaIrlanda" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/destino-malta' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src={Malta} alt="Malta" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.malta")}</span>
                                                <img src={MaltaBandera} alt="BanderaMalta" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/not-found' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src={Espana} alt="ESPAÑA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.españa")}</span>
                                                <img src={EspanaBandera} alt="ESPAÑA" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/not-found' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src={Francia} alt="FRANCIA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.france")}</span>
                                                <img src={FranciaBandera} alt="BanderaFrancia" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/not-found' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src={Alemania} alt="ALEMANIA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.germany")}</span>
                                                <img src={AlemaniaBandera} alt="BanderaAlemania" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                        </div>
                                    )}
                                </li>

                                <li>
                                    <Link to='/ahorro'>
                                        <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.finance-your-trip")}
                                        </button>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/servicios'>
                                        <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.other-services")}
                                        </button>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/blogs'>
                                        <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Blog
                                        </button>
                                    </Link>
                                </li>
                            </ul>

                            




                            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8"></div>
                                <div className="flex lg:hidden">
                                    <button aria-label="open menu" onClick={() => setShowMenu(!showMenu)} className="text-white dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* boton de traduccion*/}
                            <BtnIdiomas/>

                        </div>
                    </div>




                    {/* Mobile nav */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-gray-900 z-50 inset-0 md:hidden bg-primaryVio flex-col h-screen w-full`}>
                        <div className="dark:bg-gray-900 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <Link to='/'>
                                        <img src={Logo} alt="Logo" className="w-24 h-auto md:w-auto md:h-auto" />
                                    </Link>
                                </div>
                            </div>
                            <div className="ml-auto"> {/* Añadir ml-auto para empujar el botón a la derecha */}
                                <div onClick={() => setShowMenu(false)} className="text-white">
                                    <button aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 mx-4">
                            <ul className="flex flex-col space-y-4 items-center">
                                <li>
                                    <Link to='/nosotros' onClick={() => setShowMenu(false)}>
                                        <button className="focus:outline-none text-white  text-lg text-left focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.about")}
                                        </button>
                                    </Link>
                                </li>

                                <li>
                                    <button onClick={toggleDropdown} className="dark:text-colorWhite text-white text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline flex items-center">
                                    {t("navbar.i-want-to-travel")}                                        <img src={Flecha} alt="Flecha" className="ml-2" />
                                    </button>

                                    {isDropdownOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                            <Link to='/destino-irlanda' onClick={handleLinkClick} className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100">
                                                <img src={Irlanda} alt="Irlanda" className="w-24 h-18 object-cover rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.ireland")}</span>
                                                <img src={IrlandaBandera} alt="BanderaIrlanda" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/destino-malta' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src={Malta} alt="Malta" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.malta")}</span>
                                                <img src={MaltaBandera} alt="BanderaMalta" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/not-found' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src={Espana} alt="ESPAÑA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.españa")}</span>
                                                <img src={EspanaBandera} alt="ESPAÑA" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/not-found' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src={Francia} alt="FRANCIA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.france")}</span>
                                                <img src={FranciaBandera} alt="BanderaFrancia" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/not-found' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src={Alemania} alt="ALEMANIA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.germany")}</span>
                                                <img src={AlemaniaBandera} alt="BanderaAlemania" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                        </div>
                                    )}
                                </li>

                                <li>
                                    <Link to='/ahorro' onClick={() => setShowMenu(false)}>
                                        <button className="focus:outline-none text-white text-left  text-lg focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.finance-your-trip")}
                                        </button>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/servicios' onClick={() => setShowMenu(false)}>
                                        <button className="focus:outline-none text-white text-left  text-lg focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.other-services")}
                                        </button>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/blogs' onClick={() => setShowMenu(false)}>
                                        <button className="focus:outline-none text-white text-left  text-lg focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Blog
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <WhatsAppButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
