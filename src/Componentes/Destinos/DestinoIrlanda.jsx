import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import Idiomas from '../../assets/ServiciosVM/curso idioma.png';
import WyS from '../../assets/ServiciosVM/estudio y trabajo en el exterior.png';
import universitarios from '../../assets/ServiciosVM/posgrados.png';
import Logo from "../../assets/Logos/LogoTurquesa.png";
import Flecha from '../../assets/Textura/Vector.png';
import BannerIrlanda from '../../assets/Experiencias/Foto de Irlanda.png';
import FondoVioleta from '../../assets/Textura/texturafondoexperienciairlanda.png';
import MapIrlanda from '../../Componentes/Destinos/DestinosImg/mapairlanda2.png';
import Cork from '../../Componentes/Destinos/DestinosImg/cork.png';
import Dublin from '../../Componentes/Destinos/DestinosImg/DublinExperiencia.png';
import Galway from '../../Componentes/Destinos/DestinosImg/galway.png';
import Foto1 from '../../Componentes/Destinos/DestinosImg/Trebol.png';
import Foto2 from '../../Componentes/Destinos/DestinosImg/cerveza.png';
import Icon from '../../Componentes/Destinos/DestinosImg/icontext.png';
import Avion from '../../Componentes/Destinos/DestinosImg/avionvolando.png';
import Footer from "../Footer/Footer";
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
import {useTranslation} from "react-i18next";
import BtnIdiomas from "../../Componentes/BtnIdioma/BtnIdiomas";




const DestinoIrlanda = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [t, i18n] = useTranslation("navbar");


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Función para manejar el clic en el botón del dropdown
    const handleDropdownClick = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    // Función para cerrar el dropdown cuando se selecciona una opción
    const handleOptionClick = () => {
        setIsDropdownOpen(false);
    };
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = () => {
        setDropdownOpen(false);
        setShowMenu(false);
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

    useEffect(() => {
        ScrollReveal().reveal('.card', {
            delay: 300,
            distance: '50px',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });
    }, []);


    return (


        
        <div className="dark:bg-gray-900 relative z-10 " >
            <div style={{
                backgroundImage: `url(${FondoVioleta})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderBottomLeftRadius: '48%',
                borderBottomRightRadius: '48%',
                overflow: 'hidden',
                paddingBottom: '9rem',
            }}>
                {/* Imagen de fondo con opacidad */}
                <div className="relative">
                    <img
                        src={BannerIrlanda}
                        className="w-full h-auto object-cover lg:h-[500px] lg:block md:hidden hidden rounded-bl-custom"
                        alt="Banner Background"
                    />
                    <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0 rounded-bl-custom" />
                    <img
                        src={BannerIrlanda}
                        className="lg:hidden md:block hidden rounded-bl-custom"
                        alt="Banner Background"
                    />
                    <img
                        src={BannerIrlanda}
                        className="lg:hidden md:hidden block rounded-bl-custom"
                        alt="Banner Background"
                    />
                </div>

                {/* Contenido sobre la imagen de fondo */}
                <div className="absolute top-0 left-0 w-full ">
                    <div className="container mx-auto flex items-center justify-between text-start py-6">
                        <h1 className="md:w-2/12 cursor-pointer" aria-label="Vaga Mundo">
                            <div className="mr-10 flex items-center">
                                <Link to='/'>
                                    <img src={Logo} alt="Logo" className="h-auto w-24 md:w-auto md:h-auto mr-3" />
                                </Link>
                            </div>
                        </h1>

                        <ul className="hidden w-8/12 md:flex items-center text-left justify-center space-x-12 font-semibold text-colorWhite">
                            <li>
                                <Link to='/nosotros'>
                                    <button className="font-semibold dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    {t("navbar.about")}                                    </button>
                                </Link>
                            </li>

                            <li className="relative">
                                <div className="flex items-center" onClick={handleDropdownClick}>
                                    <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    {t("navbar.i-want-to-travel")}                                     </button>
                                    <img src={Flecha} alt="Flecha" className="ml-2" />
                                </div>

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
                            <li className="relative">
                                <Link to='/ahorro'>
                                    <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    {t("navbar.finance-your-trip")}
                                    </button>
                                </Link>
                            </li>
                            <li className="relative">
                                <Link to='/servicios'>
                                    <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    {t("navbar.other-services")}                                     </button>
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
                                    {t("navbar.i-want-to-travel")} 
                                        <img src={Flecha} alt="Flecha" className="ml-2" />
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
                                        {t("navbar.other-services")}                                          </button>
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
                    </div>




                    {/* Título en Banner para pantallas grandes (lg) */}
                    <div className="hidden lg:flex items-center text-7xl justify-start ml-12 pl-9 relative mt-8" style={{ top: '90px' }}> {/* Se oculta en pantallas más pequeñas */}
                        <h1 className="text-white text-8xl md:text-6xl font-bold text-start" style={{ lineHeight: '2.5rem' }}>
                        {t("irlanda.title")}

                            <img src={IrlandaBandera} alt="Bandera de Irlanda" className="w-15 h-11 inline-block mx-2" />
                            <span style={{ display: 'block', lineHeight: '5rem' }}>{t("irlanda.title2")}</span>
                        </h1>
                    </div>

                    {/* Título en Banner para pantallas medianas (md) */}
                    <div className="lg:hidden flex items-center text-5xl md:text-6xl justify-center md:justify-start relative mt-4 md:ml-8 md:pl-5"> {/* Visible solo en pantallas medianas */}
                        <h1 className="text-white text-6xl md:text-5xl font-bold text-center md:text-start" style={{ lineHeight: '2rem' }}>
                        {t("irlanda.title")}
                            <img src={IrlandaBandera} alt="Bandera de Irlanda" className="w-12 h-10 inline-block mx-2" />
                            <span style={{ display: 'block', lineHeight: '3.5rem' }}>{t("irlanda.title2")}</span>
                        </h1>
                    </div>





                </div>



                {/* Fondo violeta debajo del contenido */}
                <div className="flex pt-14">
                    {/* Parte izquierda */}
                    <div className="w-1/2 flex flex-col justify-center items-end p-8 ml-3">
                        <h1 className="text-white text-5xl font-bold self-end pb-10 text-end">{t("irlanda.title3")}</h1>

                        <img src={MapIrlanda} alt="Mapa de Irlanda" className="mt-4 w-3/4 self-end" /> {/* Ajuste de tamaño */}
                    </div>

                    {/* Parte derecha con 3 imágenes en columna */}
                    <div className="w-1/2 flex flex-col justify-center items-center p-8">
                        <img src={Dublin} alt="Dublín" className="mb-4 w-1/3" />
                        <img src={Cork} alt="Cork" className="mb-4 w-1/3" />
                        <img src={Galway} alt="Galway" className="mb-4 w-1/3" />
                    </div>
                </div>



            </div>

            {/* Dividido en dos partes */}
            <div className="flex my-10 py-12 ml-6 ">
                {/* Parte izquierda con el texto */}
                <div className="w-1/2 flex flex-col justify-center items-center p-8 pb-10 text-left pt-0">
                    <h2 className="text-primaryVio text-5xl font-semibold pl-12 pt-0 mt-0 pb-9">{t("irlanda.opcion-title")}<br />{t("irlanda.opcion-title2")}</h2>
                    <div className="max-w-[60%] mr-7"> {/* Ajuste del ancho del contenedor de los párrafos */}
                        <p className="flex items-start text-primaryVio text-base mt-4">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>
                            {t("irlanda.item1")}
                            </span>
                        </p>
                        <br />
                        <p className="flex items-start text-primaryVio text-base mt-2">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>
                            {t("irlanda.item2")}
                            </span>
                        </p>
                        <br />
                        <p className="flex items-start text-primaryVio text-base mt-2">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>
                            {t("irlanda.item3")}
                            </span>
                        </p>
                        <br />
                        <p className="flex items-start text-primaryVio text-base mt-2">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>{t("irlanda.item4")}

                            </span>
                        </p>
                    </div>
                </div>


                {/* Parte derecha con las imágenes en diagonal */}
                <div className="w-1/2 flex flex-col justify-between  mr-9">
                    <img src={Foto1} alt="Imagen 1" className="w-1/2 self-start pt-4" />
                    <img src={Foto2} alt="Imagen 2" className="w-1/2 self-end mr-10" />
                </div>
            </div>





            {/* Parte Experiencias */}



            <div className="container mx-auto px-4 pt-10 pb-20">
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-colorText mt-6 text-center">
                {t("irlanda.title4")} <br />{t("irlanda.title4-2")}
                </h1>
                <div className="flex flex-wrap justify-center mt-8">

                    <div className=" w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                            <div className="relative">
                                <img
                                    src={Idiomas}
                                    alt="Trabajo"
                                    className="w-full h-auto rounded-lg "
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full">
                                <Link to='/curso-de-idiomas'>
                                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-semibold leading-none text-center text-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                    {t("service.tipe1")}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                            <div className="relative">
                                <img
                                    src={WyS}
                                    alt="Viajes Grupales"
                                    className="w-full h-auto rounded-lg "
                                />
                                <div className="absolute bottom-0 left-0 w-full">
                                    <Link to='/work&study'>
                                        <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-semibold leading-none text-center text-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                        {t("service.tipe2")}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                            <div className="relative">
                                <img
                                    src={universitarios}
                                    alt="Carreras Universitarias"
                                    className="w-full h-auto rounded-lg "
                                />
                                <div className="absolute bottom-0 left-0 w-full">
                                    <Link to='/carreras-universitarias'>
                                        <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-semibold leading-none text-center text-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                        {t("service.tipe3")}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-6 mb-8">
                <div className="flex items-center justify-center">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio text-center mr-2">
                    {t("irlanda.title5")}                    </h1>
                    <img src={IrlandaBandera} alt="Bandera de Irlanda" className="w-14 h-9 " />
                </div>



                <div className="flex justify-center mt-8">
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <div className="relative overflow-hidden pb-[56.25%] h-0">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/wPG3UiqACSU?si=RcgT5wDjcL0i5RCw"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                title="YouTube video player"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />



        </div>

    );
}

export default DestinoIrlanda;
