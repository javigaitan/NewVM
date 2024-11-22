import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import Gastronomia from '../../assets/ServiciosVM/España/practicas profesionales(1).png';
import Doctorados from '../../assets/ServiciosVM/España/Master y doctorado1.png';
import Diplomaturas from '../../assets/ServiciosVM/España/cursos y diploma superiores (1).png';
import Logo from "../../assets/Logos/LogoTurquesa.png";
import Flecha from '../../assets/Textura/Vector.png';
import BannerIrlanda from '.././Destinos/DestinosImg/bannerirlanda.png';
import MapIrlanda from '../../Componentes/Destinos/DestinosImg/bannerespanamovil.svg';
import Foto1 from '../../Componentes/Destinos/DestinosImg/Trebol.png';
import Foto2 from '../../Componentes/Destinos/DestinosImg/birra.png';
import Icon from '../../Componentes/Destinos/DestinosImg/icontext.png';
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


const DestinoEspana = () => {
  const [showMenu, setShowMenu] = useState(false);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Función para manejar el clic en el botón del dropdown
    const handleDropdownClick = () => {
        setDropdownOpen(prevState => !prevState);
    };

    // Función para cerrar el dropdown cuando se selecciona una opción
    const handleOptionClick = () => {
        setDropdownOpen(false);
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
            setDropdownOpen(false);
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

            {/* Imagen de fondo con opacidad */}
            <div className="relative absolute">

                <div className="w-full h-full  absolute  " />
                <img
                    src={BannerIrlanda}
                    className="lg:hidden md:hidden block "
                    alt="Banner Background"
                />
            </div>

            {/* Contenido sobre la imagen de fondo */}
            <div className="absolute top-0 left-0 w-full ">
                <div className="container mx-auto flex items-center justify-between text-start py-6">
                    <h1 className="md:w-2/12 cursor-pointer" aria-label="Vaga Mundo">
                        <div className="mr-10 flex items-center">
                            <Link to='/'>
                                <img src={Logo} alt="Logo" className="h-auto w-24 md:w-auto md:h-auto ml-3" />
                            </Link>
                        </div>
                    </h1>

                    <ul className="hidden w-8/12 md:flex items-center text-left justify-center space-x-12 font-semibold text-colorWhite">
                        <li>
                            <Link to='/nosotros'>
                                <button className="font-semibold dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                ¿Quiénes somos?
                                </button>
                            </Link>
                        </li>

                        <li className="relative">
                            <div className="flex items-center" onClick={handleDropdownClick}>
                                <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    ¡Quiero viajar!
                                </button>
                                <img src={Flecha} alt="Flecha" className="ml-2" />
                            </div>

                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-1 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                    <Link to='/destino-irlanda' className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100" onClick={handleOptionClick}>
                                        <img src={Irlanda} alt="Irlanda" className="w-24 h-18 object-cover rounded-lg mr-3" />
                                        <span className="text-primaryVio">Irlanda</span>
                                        <img src={IrlandaBandera} alt="BanderaIrlanda" className="w-10 h-6 rounded-lg mr-3" />
                                    </Link>
                                    <hr className="border-gray-300" />
                                    <Link to='/destino-malta' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                        <img src={Malta} alt="Malta" className="w-24 h-18 rounded-lg mr-3" />
                                        <span className="text-primaryVio">Malta</span>
                                        <img src={MaltaBandera} alt="BanderaMalta" className="w-10 h-6 rounded-lg mr-3" />
                                    </Link>
                                    <hr className="border-gray-300" />
                                    <Link to='/destino-espana' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                        <img src={Espana} alt="ESPAÑA" className="w-24 h-18 rounded-lg mr-3" />
                                        <span className="text-primaryVio">España</span>
                                        <img src={EspanaBandera} alt="ESPAÑA" className="w-10 h-6 rounded-lg mr-3" />
                                    </Link>
                                    <hr className="border-gray-300" />
                                    <Link to='/not-found' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                        <img src={Francia} alt="FRANCIA" className="w-24 h-18 rounded-lg mr-3" />
                                        <span className="text-primaryVio">Francia</span>
                                        <img src={FranciaBandera} alt="BanderaFrancia" className="w-10 h-6 rounded-lg mr-3" />
                                    </Link>
                                    <hr className="border-gray-300" />
                                    <Link to='/not-found' className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100" onClick={handleOptionClick}>
                                        <img src={Alemania} alt="ALEMANIA" className="w-24 h-18 rounded-lg mr-3" />
                                        <span className="text-primaryVio">Alemania</span>
                                        <img src={AlemaniaBandera} alt="BanderaAlemania" className="w-10 h-6 rounded-lg mr-3" />
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li className="relative">
                            <Link to='/ahorro'>
                                <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    Financia tu viaje
                                </button>
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to='/servicios'>
                                <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    Otros servicios
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
                    <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8 mr-3">
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
                                        Nosotros
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <button onClick={toggleDropdown} className="dark:text-colorWhite text-white text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline flex items-center">
                                    ¡Quiero viajar!
                                    <img src={Flecha} alt="Flecha" className="ml-2" />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                        <Link to='/destino-irlanda' onClick={handleLinkClick} className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100">
                                            <img src={Irlanda} alt="Irlanda" className="w-24 h-18 object-cover rounded-lg mr-3" />
                                            <span className="text-primaryVio">Irlanda</span>
                                            <img src={IrlandaBandera} alt="BanderaIrlanda" className="w-10 h-6 rounded-lg mr-3" />
                                        </Link>
                                        <hr className="border-gray-300" />
                                        <Link to='/destino-malta' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                            <img src={Malta} alt="Malta" className="w-24 h-18 rounded-lg mr-3" />
                                            <span className="text-primaryVio">Malta</span>
                                            <img src={MaltaBandera} alt="BanderaMalta" className="w-10 h-6 rounded-lg mr-3" />
                                        </Link>
                                        <hr className="border-gray-300" />
                                        <Link to='/destino-espana' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                            <img src={Espana} alt="ESPAÑA" className="w-24 h-18 rounded-lg mr-3" />
                                            <span className="text-primaryVio">España</span>
                                            <img src={EspanaBandera} alt="ESPAÑA" className="w-10 h-6 rounded-lg mr-3" />
                                        </Link>
                                        <hr className="border-gray-300" />
                                        <Link to='/not-found' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                            <img src={Francia} alt="FRANCIA" className="w-24 h-18 rounded-lg mr-3" />
                                            <span className="text-primaryVio">Francia</span>
                                            <img src={FranciaBandera} alt="BanderaFrancia" className="w-10 h-6 rounded-lg mr-3" />
                                        </Link>
                                        <hr className="border-gray-300" />
                                        <Link to='/not-found' onClick={handleLinkClick} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                            <img src={Alemania} alt="ALEMANIA" className="w-24 h-18 rounded-lg mr-3" />
                                            <span className="text-primaryVio">Alemania</span>
                                            <img src={AlemaniaBandera} alt="BanderaAlemania" className="w-10 h-6 rounded-lg mr-3" />
                                        </Link>
                                    </div>
                                )} 
                            </li>

                            <li>
                                <Link to='/ahorro' onClick={() => setShowMenu(false)}>
                                    <button className="focus:outline-none text-white text-left  text-lg focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Financia tu viaje
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link to='/servicios' onClick={() => setShowMenu(false)}>
                                    <button className="focus:outline-none text-white text-left  text-lg focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Otros servicios
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

                </div>
                <div className="flex items-center justify-center md:justify-start relative mt-12" style={{ top: '75px' }}>
                    <h1 className="text-white text-4xl  font-bold text-center" style={{ lineHeight: '2.5rem' }}>
                        ¡Bienvenidos a España
                        <img src={EspanaBandera} alt="Bandera de España" className="w-10 h-8 md:w-15 md:h-11 inline-block mx-2" />
                        <span style={{ display: 'block', lineHeight: '3rem' }}>la maravilla Ibérica!</span>
                    </h1>
                </div>






            </div>
            {/*  Mapa */}

            <div className="relative w-full h-full">
                {/* Contenedor para la imagen del mapa */}
                <img
                    src={MapIrlanda}
                    className="relative z-10 lg:hidden md:hidden block "
                    alt="Mapa de Irlanda"
                />

            </div>

            <div className="w-full flex flex-col items-start pl-6 pr-6 pt-7 pb-10 text-start md:w-full md:max-w-lg md:mx-auto"> {/* Cambia w-1/2 a w-full y añade max-w-lg para el tamaño máximo */}
                <h2 className="text-primaryVio text-3xl font-semibold pb-8 text-center md:pl-0"> {/* Alineación centrada y ajuste del padding */}
                    ¿Por qué es el <br />destino más elegido?
                </h2>
                <div className="max-w-[100%] mr-0 md:max-w-full"> {/* Ajusta el ancho del contenedor en móvil */}
                    {/* Ajusta cada párrafo para centrar la imagen y el texto */}
                    <p className="flex items-start text-primaryVio text-base mt-4">
                        <img src={Icon} alt="Viñeta" className="mr-2" />
                        <span>Su <strong>ubicación geográfica</strong> te permitirá viajar y conocer otros países de Europa en cuestión de horas y de forma económica.</span>
                    </p>
                    <br />
                    <p className="flex items-start text-primaryVio text-base mt-2">
                        <img src={Icon} alt="Viñeta" className="mr-2" />
                        <span>España se encuentra en un punto privilegiado dentro de Europa, con un clima mediterráneo agradable y una diversidad cultural abierta, ideal para latinos que buscan un entorno cálido y acogedor.</span>
                        </p>
                    <br />
                    <p className="flex items-start text-primaryVio text-base mt-2">
                        <img src={Icon} alt="Viñeta" className="mr-2" />
                        <span>Con el español como lengua oficial, adaptarse a la vida en España es mucho más fácil para estudiantes latinos, lo que mejora tanto la experiencia social como académica desde el primer día.</span>
                        </p>
                    <br />
                    <p className="flex items-start text-primaryVio text-base mt-2">
                        <img src={Icon} alt="Viñeta" className="mr-2" />
                        <span>El país cuenta con una economía estable en comparación con muchas regiones de América Latina, lo que ofrece una calidad de vida excepcional, y un entorno seguro.
                        </span>
                    </p>
                    <br />

                    <p className="flex items-start text-primaryVio text-base mt-2">
                        <img src={Icon} alt="Viñeta" className="mr-2" />
                        <span>Las universidades en España gozan de reconocimiento mundial por su excelencia académica.
                        
                        </span>
                    </p>
                    <br />

                </div>
                <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-1/2 pt-5">
                    <div className="flex justify-start w-full md:w-1/2 p-2"> {/* Contenedor para la imagen izquierda */}
                        <img src={Foto1} alt="Imagen 1" className="w-1/2 " /> {/* Ajusta el ancho de Foto1 */}
                        <img src={Foto2} alt="Imagen 2" className="w-1/3 ml-5" /> {/* Ajusta el ancho de Foto2 */}
                    </div>

                </div>
            </div>
            {/* Parte Experiencias */}



            <div className="container mx-auto px-4 pb-20">
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-8 text-colorText mt-6 text-center">
                    ¿Qué experiencia educativa <br />te gustaría hacer?
                </h1>
                <div className="flex flex-wrap justify-center mt-8">

                    <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                            <div className="relative">
                                <img
                                    src={Gastronomia}
                                    alt="Prácticas Profesionales en el área de Gastronomía y Turismo"
                                    className="w-full h-auto rounded-lg "
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full">
                                <Link to='/diplomaturas'>
                                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-semibold leading-none text-center text-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                    Prácticas Profesionales en el área de Gastronomía y Turismo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                            <div className="relative">
                                <img
                                    src={Diplomaturas}
                                    alt="Cursos y Diplomas Superiores"
                                    className="w-full h-auto rounded-lg "
                                />
                                <div className="absolute bottom-0 left-0 w-full">
                                    <Link to='/diplomaturas'>
                                        <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-semibold leading-none text-center text-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                        Cursos y Diplomas Superiores
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                            <div className="relative">
                                <img
                                    src={Doctorados}
                                    alt="Másters y Doctorados"
                                    className="w-full h-auto rounded-lg "
                                />
                                <div className="absolute bottom-0 left-0 w-full">
                                    <Link to='/doctorados'>
                                        <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-semibold leading-none text-center text-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                            Carreras y posgrados universitarios
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-6 mb-8 ">
                <div className="flex items-center justify-center m-4 ">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio text-center ">
                        Comunidad VM en España
                    </h1>
                    <div className=" mt-7">
                    <img src={EspanaBandera} alt="Bandera de Irlanda" className="w-14 h-9 " />
                    </div>
                </div>



                <div className="flex justify-center mt-8 p-3">
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


    )
}

export default DestinoEspana