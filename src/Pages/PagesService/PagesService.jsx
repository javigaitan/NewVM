import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import {useTranslation} from "react-i18next";
import Logo from "../../assets/Logos/LogoVioleta.png";
import Flecha from '../../assets/Textura/Vector.png';
import Icons1 from '../../assets/OtrosServicios/Icono1.png';
import Seguros from '../../assets/OtrosServicios/Asistencia médica en viajes 1.png';
import Pass from '../../assets/OtrosServicios/Tickets aereos.png'
import Icons2 from '../../assets/OtrosServicios/Iconspass.png';
import Icons3 from '../../assets/OtrosServicios/Icons3.png';
import Resi from '../../assets/OtrosServicios/Residencia VM 2024.png';
import Icons4 from '../../assets/OtrosServicios/Icons4.png';
import TRABAJO from '../../assets/OtrosServicios/Job Workshop (documento) 1.png';
import Icons5 from '../../assets/OtrosServicios/Icons5.png';
import Grupal from '../../assets/OtrosServicios/grupalvm.png';
import Footer from "../../Componentes/Footer/Footer";
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
import BtnIdiomas from "../../Componentes/BtnIdioma/BtnIdiomas";





const PagesService = () => {

    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showExperienciasMenu, setShowExperienciasMenu] = useState(false);
    const [showAhorroMenu, setShowAhorroMenu] = useState(false);
    const [showServiceMenu, setShowServiceMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [t, i18n] = useTranslation("navbar");


    // Función para manejar el clic en el botón del dropdown
    const handleDropdownClick = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    // Función para cerrar el dropdown cuando se selecciona una opción
    const handleOptionClick = () => {
        setIsDropdownOpen(false);
    };

    // Función para cerrar el dropdown al hacer scroll
    const handleScroll = () => {
        if (isDropdownOpen) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDropdownOpen]);
    const handleMenuClick = () => {
        setShowMenu(false); // Esto ocultará el menú cuando se hace clic en cualquier enlace del menú
    };

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

    })

    return (
        <div className="dark:bg-gray-900 items-center">
            <div>
                <div className="relative">
                    {/* For large screens */}
                    <div className="relative z-10 bg-secondariVerde px-7 py-6">
                        <div className="item container mx-auto flex items-center justify-between pb-12">
                            <h1 className="md:w-2/12 cursor-pointer" aria-label="Vaga Mundo">
                                <div className="mr-10 flex items-center">
                                    <Link to='/'>

                                        <img src={Logo} alt="Logo" className="  h-auto w-24 md:w-auto md:h-auto mr-3" />
                                    </Link>

                                </div>
                            </h1>

                            <ul className="hidden w-8/12 md:flex items-center justify-center space-x-12 font-semibold  text-primaryVio"
                            >
                                <li>
                                    <Link to='/nosotros'>

                                        <button href="javascript:void(0)" className="font-semibold dark:text-colorWhite text-lg  focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.about")}                                        </button>
                                    </Link>
                                </li>

                                <li className="relative">
                                    <div className="flex items-center" onClick={handleDropdownClick}>
                                        <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.i-want-to-travel")}                                        </button>
                                        <img src={Flecha} alt="Flecha" className="ml-2" />
                                    </div>

                                    {isDropdownOpen && (
                                        <div className="absolute left-0 mt-1 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                           <Link to='/destino-irlanda' className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100" onClick={handleOptionClick}>
                                                <img src={Irlanda} alt="Irlanda" className="w-24 h-18 object-cover rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.ireland")}</span>
                                                <img src={IrlandaBandera} alt="BanderaIrlanda" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/destino-malta' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                                <img src={Malta} alt="Malta" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.malta")}</span>
                                                <img src={MaltaBandera} alt="BanderaMalta" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/destino-espana' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                                <img src={Espana} alt="ESPAÑA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.españa")}</span>
                                                <img src={EspanaBandera} alt="ESPAÑA" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/not-found' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                                <img src={Francia} alt="FRANCIA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.france")}</span>
                                                <img src={FranciaBandera} alt="BanderaFrancia" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/not-found' className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100" onClick={handleOptionClick}>
                                                <img src={Alemania} alt="ALEMANIA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.germany")}</span>
                                                <img src={AlemaniaBandera} alt="BanderaAlemania" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                        </div>
                                    )}
                                </li>
                                <li
                                    className="relative"
                                ><Link to='/ahorro'>
                                        <button
                                            className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                                        >
                                        {t("navbar.finance-your-trip")}
                                        </button>
                                    </Link>
                                </li>
                                <li
                                    className="relative"
                                >
                                    <Link to='/servicios'>

                                        <button
                                            className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                                        >
{t("navbar.other-services")}                                        </button>
                                    </Link>


                                </li>
                                <li>
                                    <Link to='/blogs'>
                                        <a href="javascript:void(0)" className="dark:text-colorWhite text-lg  focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Blog

                                        </a>
                                    </Link>
                                </li>
                            </ul>






                            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">

                                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">


                                </div>
                                <div className="flex lg:hidden">
                                    <button aria-label="show options" onClick={() => setMdOptionsToggle(!mdOptionsToggle)} className="text-white dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-white dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
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
                    {/* For small screen */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-gray-900 z-50 inset-0 md:hidden bg-secondariVerde flex-col h-screen w-full`}>
                        <div className="dark:bg-gray-900 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <Link to='/'>
                                        <img src={Logo} alt="Logo" className="w-24 h-auto md:w-auto md:h-auto" />
                                    </Link>
                                </div>

                            </div>
                            <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 p-4">
                            <ul className="flex flex-col space-y-6 items-center">

                                <li>
                                    <Link to='/nosotros' onClick={() => setShowMenu(false)}>
                                        <button className="focus:outline-none text-primaryVio  text-lg text-left focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.about")}                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={handleDropdownClick} className="dark:text-colorWhite text-primaryVio text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline flex items-center">
                                    {t("navbar.i-want-to-travel")}                                         <img src={Flecha} alt="Flecha" className="ml-2" />
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                           <Link to='/destino-irlanda' className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100" onClick={handleOptionClick}>
                                                <img src={Irlanda} alt="Irlanda" className="w-24 h-18 object-cover rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.ireland")}</span>
                                                <img src={IrlandaBandera} alt="BanderaIrlanda" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/destino-malta' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                                <img src={Malta} alt="Malta" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.malta")}</span>
                                                <img src={MaltaBandera} alt="BanderaMalta" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/destino-espana' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                                <img src={Espana} alt="ESPAÑA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.españa")}</span>
                                                <img src={EspanaBandera} alt="ESPAÑA" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/not-found' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                                <img src={Francia} alt="FRANCIA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.france")}</span>
                                                <img src={FranciaBandera} alt="BanderaFrancia" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/not-found' className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100" onClick={handleOptionClick}>
                                                <img src={Alemania} alt="ALEMANIA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">{t("countries.germany")}</span>
                                                <img src={AlemaniaBandera} alt="BanderaAlemania" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>
                                        </div>
                                    )}
                                </li>


                                <li>
                                    <Link to='/ahorro' onClick={() => setShowMenu(false)}>
                                        <button className="focus:outline-none text-primaryVio text-left  text-lg focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.finance-your-trip")}                                          </button>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/servicios' onClick={() => setShowMenu(false)}>
                                        <button className="focus:outline-none text-primaryVio text-left  text-lg focus:ring-2 focus:ring-gray-800 hover:underline">
                                        {t("navbar.other-services")}                                          </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/blogs' onClick={() => setShowMenu(false)}>
                                        <button className="focus:outline-none text-primaryVio text-left  text-lg focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Blog
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

                <div className="text w-full bg-secondariVerde px-4 py-8 text-left rounded-b-[50px]  " style={{ paddingLeft: '80px' }}>
                    <h1 className="text-5xl font-bold text-primaryVio dark:text-white mb-10 pt-14">{t("other-services.title")}</h1>
                    <div className="w-4/5">
                        <p className="text-lg text-primaryVio dark:text-primaryVio pb-5">
                        {t("other-services.banner")}                        </p>
                    </div>
                </div>

            </div>



            {/* Comienza MODELO los contenedores */}
            <div className="card dark:bg-[#F2F2F2] pt-16 md:pt-24"> {/* Aumentado el padding top para móviles */}
                <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between md:px-0 px-6 lg:px-0 rounded-3xl bg-[#F2F2F2] overflow-visible h-auto md:h-auto lg:h-[700px]">
                    <div className="flex flex-col justify-start items-start lg:w-3/5  px-2 lg:px-4 lg:ml-5 md:pt-[20px]" style={{
                        paddingTop: '30px',
                        '@media (min-width: 768px) and (max-width: 1023px)': {
                            paddingTop: '30px',
                        }
                    }}>
                        <div>
                            <img src={Icons1} alt="Descripción de la imagen" className="w-16 h-auto rounded-lg mb-2 mx-auto ml-4 md:pt-8" />
                        </div>
                        <div className="md:mt-3 pl-4 ">
                            <h2 className="text-colorText dark:text-white text-left lg:text-3xl text-2xl font-extrabold leading-9 md:mb-4">{t("other-services.seccion1-title")}  </h2>
                        </div>
                        <div className="md:mt-3 pl-4">
                            <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                            {t("other-services.seccion1.text1")}                                <br />
                                <br />
                                {t("other-services.seccion1.text2")} 
                                <br />
                                <br />
                                {t("other-services.seccion1.text3")}                             </p>
                        </div>
                        <div className="lg:pl-4 mt-8" style={{
                            marginBottom: '20px',
                            '@media (min-width: 768px) and (max-width: 1023px)': {
                                paddingBottom: '20px',
                            }
                        }}>
                            <Link to='https://wa.me/541171366335/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20tener%20más%20info%20del%20programa%20de%20referido!'>
                                <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                                {t("other-services.seccion1.btn")}                                 </button>
                            </Link>
                        </div>
                    </div>
                    {/* Solo visible en la versión lg */}
                    <div className="hidden lg:flex justify-start items-center lg:w-2/5 mt-10 md:mt-0 overflow-visible">
                        <img src={Seguros} alt="Foto de grupo vm" className="w-335 h-[705px] object-cover rounded-3xl" style={{ marginLeft: '40px', marginTop: '-2px' }} />
                    </div>
                </div>
            </div>
            {/* Fin de los contenedores */}

            

            {/* Comienza los contenedores */}
            <div className="card dark:bg-[#F2F2F2] pt-12 mb-10">
                <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2] overflow-visible h-auto md:h-auto lg:h-[700px]"> {/* Añadido h-auto para md */}
                    {/* Imagen mostrada solo en lg, oculta en dispositivos md y más pequeños */}
                    <div className="hidden lg:flex justify-center items-start lg:w-2/5 mt-10 md:mt-0 overflow-visible"> {/* Añadido overflow-visible */}
                        <img src={Pass} alt="Descripción de la imagen derecha" className="w-334 h-[704px] object-cover rounded-3xl" style={{ marginRight: '37px', marginTop: '-2px' }} /> {/* Ajustes de redondeo y márgenes */}
                    </div>
                    <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4 lg:ml-5" style={{
                        paddingTop: '30px',
                        '@media (min-width: 768px) and (max-width: 1023px)': {
                            paddingTop: '30px',
                        }
                    }}>
                        <div>
                            <img src={Icons2} alt="Descripción de la imagen" className="w-16 h-auto rounded-lg mb-2 mx-auto ml-4" />
                        </div>
                        <div className="md:mt-3 pl-4">
                            <h2 className="text-colorText dark:text-white text-left lg:text-3xl text-2xl font-extrabold leading-9">
                                {t("other-services.seccion2-title")} 
                            </h2>
                        </div>
                        <div className="md:mt-3 pl-4">
                        <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                        {t("other-services.seccion2.text1")}                                <br />
                                <br />
                                {t("other-services.seccion2.text2")}                            </p>
                        </div>
                        <div className="lg:pl-4 mt-8" style={{
                            marginBottom: '20px',
                            '@media (min-width: 768px) and (max-width: 1023px)': {
                                paddingBottom: '20px',
                            }
                        }}>
                            <Link to='https://wa.me/541171366335/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20tener%20más%20info%20de%20Tickets%20aéreos!'>
                                <button className=" elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-7 transition-all duration-300 w-full md:w-auto"  >
                                {t("other-services.seccion2.btn")}                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin de los contenedores */}





            {/* Comienza MODELO los contenedores */}
            <div className="card dark:bg-[#F2F2F2] pt-16 md:pt-24"> {/* Aumentado el padding top para móviles */}
                <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between md:px-0 px-6 lg:px-0 rounded-3xl bg-[#F2F2F2] overflow-visible h-auto md:h-auto lg:h-[700px]">
                    <div className="flex flex-col justify-start items-start lg:w-3/5  px-2 lg:px-4 lg:ml-5 md:pt-[20px]" style={{
                        paddingTop: '30px',
                        '@media (min-width: 768px) and (max-width: 1023px)': {
                            paddingTop: '30px',
                        }
                    }}>
                        <div>
                            <img src={Icons3} alt="Descripción de la imagen" className="w-16 h-auto rounded-lg mb-2 mx-auto ml-4 md:pt-8" />
                        </div>
                        <div className="md:mt-3 pl-4 ">
                            <h2 className="text-colorText dark:text-white text-left lg:text-3xl text-2xl font-extrabold leading-9 md:mb-4">                                
                            {t("other-services.seccion3-title")} 
                            </h2>
                        </div>
                        <div className="md:mt-3 pl-4">
                        <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                        {t("other-services.seccion3-text1")}                                 <br />
                                <br />
                                {t("other-services.seccion3-text2")}                                <br />
                                <br />
                                {t("other-services.seccion3-text3")}                            </p>
                        </div>
                        <div className="lg:pl-4 mt-8" style={{
                            marginBottom: '20px',
                            '@media (min-width: 768px) and (max-width: 1023px)': {
                                paddingBottom: '20px',
                            }
                        }}>
                            <Link to='https://wa.me/541171366335/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20tener%20más%20info%20de%20alojamientos!'>
                                <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                                {t("other-services.seccion2.btn")}                                 </button>
                            </Link>
                        </div>
                    </div>
                    {/* Solo visible en la versión lg */}
                    <div className="hidden lg:flex justify-start items-center lg:w-2/5 mt-10 md:mt-0 overflow-visible">
                        <img src={Resi} alt="Foto de grupo vm" className="w-335 h-[705px] object-cover rounded-3xl" style={{ marginLeft: '40px', marginTop: '-2px' }} />
                    </div>
                </div>
            </div>
            {/* Fin de los contenedores */}

             {/* Comienza los contenedores */}
             <div className="card dark:bg-[#F2F2F2] pt-12 mb-10">
                <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2] overflow-visible h-auto md:h-auto lg:h-[700px]"> {/* Añadido h-auto para md */}
                    {/* Imagen mostrada solo en lg, oculta en dispositivos md y más pequeños */}
                    <div className="hidden lg:flex justify-center items-start lg:w-2/5 mt-10 md:mt-0 overflow-visible"> {/* Añadido overflow-visible */}
                        <img src={TRABAJO} alt="Descripción de la imagen derecha" className="w-334 h-[704px] object-cover rounded-3xl" style={{ marginRight: '37px', marginTop: '-2px' }} /> {/* Ajustes de redondeo y márgenes */}
                    </div>
                    <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4 lg:ml-5" style={{
                        paddingTop: '30px',
                        '@media (min-width: 768px) and (max-width: 1023px)': {
                            paddingTop: '30px',
                        }
                    }}>
                        <div>
                            <img src={Icons4} alt="Descripción de la imagen" className="w-16 h-auto rounded-lg mb-2 mx-auto ml-4" />
                        </div>
                        <div className="md:mt-3 pl-4">
                            <h2 className="text-colorText dark:text-white text-left lg:text-3xl text-2xl font-extrabold leading-9">
                            {t("other-services.seccion4-title")}
                            </h2>
                        </div>
                        <div className="md:mt-3 pl-4">
                        <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                        {t("other-services.seccion4-text1")}                                <br />
                                <br />
                                {t("other-services.seccion4-text2")}                                 <br />
                                <br />
                                {t("other-services.seccion4-text3")}                             </p>
                        </div>
                        <div className="lg:pl-4 mt-8" style={{
                            marginBottom: '20px',
                            '@media (min-width: 768px) and (max-width: 1023px)': {
                                paddingBottom: '20px',
                            }
                        }}>
                            <Link to='https://wa.me/541171366335/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20tener%20más%20info%20de%20Tickets%20aéreos!'>
                                <button className=" elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-7 transition-all duration-300 w-full md:w-auto"  >
                                {t("other-services.seccion2.btn")}                                 </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin de los contenedores */}




             {/* Comienza MODELO los contenedores */}
             <div className="card dark:bg-[#F2F2F2] pt-16 md:pt-24"> {/* Aumentado el padding top para móviles */}
                <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between md:px-0 px-6 lg:px-0 rounded-3xl bg-[#F2F2F2] overflow-visible h-auto md:h-auto lg:h-[700px]">
                    <div className="flex flex-col justify-start items-start lg:w-3/5  px-2 lg:px-4 lg:ml-5 md:pt-[20px]" style={{
                        paddingTop: '30px',
                        '@media (min-width: 768px) and (max-width: 1023px)': {
                            paddingTop: '30px',
                        }
                    }}>
                        <div>
                            <img src={Icons5} alt="Descripción de la imagen" className="w-16 h-auto rounded-lg mb-2 mx-auto ml-4 md:pt-8" />
                        </div>
                        <div className="md:mt-3 pl-4 ">
                            <h2 className="text-colorText dark:text-white text-left lg:text-3xl text-2xl font-extrabold leading-9 md:mb-4"> 
                            {t("other-services.seccion5-title")}
                            </h2>
                        </div>
                        <div className="md:mt-3 pl-4">
                        <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                        {t("other-services.seccion5-text1")}
                                <br />
                                <br />
                                {t("other-services.seccion5-text2")}                                <br />
                                <br />
                                {t("other-services.seccion5-text3")}                            </p>
                        </div>
                        <div className="lg:pl-4 mt-8" style={{
                            marginBottom: '20px',
                            '@media (min-width: 768px) and (max-width: 1023px)': {
                                paddingBottom: '20px',
                            }
                        }}>
                            <Link to='https://wa.me/541171366335/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20tener%20más%20info%20de%20viajes%20grupales!'>
                                <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                                {t("other-services.seccion2.btn")}                                 </button>
                            </Link>
                        </div>
                    </div>
                    {/* Solo visible en la versión lg */}
                    <div className="hidden lg:flex justify-start items-center lg:w-2/5 mt-10 md:mt-0 overflow-visible">
                        <img src={Grupal} alt="Foto de grupo vm" className="w-335 h-[705px] object-cover rounded-3xl" style={{ marginLeft: '40px', marginTop: '-2px' }} />
                    </div>
                </div>
            </div>
            {/* Fin de los contenedores */}



            <Footer />
        </div>
    )
}

export default PagesService