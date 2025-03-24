import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import Logo from "../../../assets/Logos/LogoTurquesa.png";
import Flecha from '../../../assets/Textura/Vector.png';
import Footer from "../../../Componentes/Footer/Footer";
import Error404 from '../../../assets/Textura/404error.jpg';
import Irlanda from '../../../assets/PaisesDesplegables/IRLANDA.png';
import Malta from "../../../assets/PaisesDesplegables/MALTA.png";
import Espana from '../../../assets/PaisesDesplegables/ESPAÑA.png';
import Francia from '../../../assets/PaisesDesplegables/FRANCIA.png';
import Alemania from '../../../assets/PaisesDesplegables/ALEMANIA.png';
import IrlandaBandera from '../../../assets/PaisesDesplegables/BanderaIrlanda.png';
import MaltaBandera from "../../../assets/PaisesDesplegables/BanderaMalta.png";
import EspanaBandera from '../../../assets/PaisesDesplegables/BanderaEspa.png';
import FranciaBandera from '../../../assets/PaisesDesplegables/BanderaFrancia.png';
import AlemaniaBandera from '../../../assets/PaisesDesplegables/BanderaAlemani.png';
import { useTranslation } from "react-i18next";
import BtnIdiomas from "../../../Componentes/BtnIdioma/BtnIdiomas";
import Foto1 from '../../../assets/Blogs-Img/Irla-bar.png';
import Icon from '../../../Componentes/Destinos/DestinosImg/icontext.png';
import BGF from "../../../assets/Textura/backdeskprueba.svg";
import INTA from '../../../assets/iconsRedes/ig.png';
import FB from '../../../assets/iconsRedes/fb.png';
import LINK from '../../../assets/iconsRedes/link.png';
import YT from '../../../assets/iconsRedes/yt.png';
import TIK from '../../../assets/iconsRedes/tiktok.png';
import BGFG from '../../../assets/Textura/Footermovile1 1.png';
import ICEF from '../../../Componentes/ICEF/iceflogo.svg';
import Logo2 from "../../../assets/Textura/English Education logo.svg";
import Logo3 from "../../../assets/Textura/ST_ReferenceChecked-CMYK 1.svg";




const BlogDetail4 = () => {
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
    

    const steps = [
        {
            title: "1. Media Maratón de la Costa de Antrim, Condado de Antrim",
            description:
                "Esta carrera, certificada por la Asociación Mundial de Atletismo, recorre los impresionantes paisajes de la épica Costa de la Calzada de Irlanda del Norte.",
        },
        {
            title: "2. Quest Lough Derg, Condado de Tipperary",
            description:
                "Haz kayak, corre y pedalea por los bellos paisajes de las Hidden Heartlands de Irlanda en una carrera para recordar.",
        },
        {
            title: "3. SuperCupNI, Irlanda del Norte",
            description:
                "Contempla a las estrellas deportivas del mañana en uno de los torneos de fútbol juvenil más venerados del mundo.",
        },
        {
            title: "4. Irish Open",
            description:
                "Contempla a algunos de los mejores golfistas del mundo en impresionantes campos en el evento anual de golf más importante de Irlanda.",
        },
        {
            title: "5. Noroeste 200, Irlanda del Norte",
            description:
                "Contempla cómo algunos de los mejores pilotos del mundo recorren a toda velocidad la escarpada y hermosa costa de Irlanda del Norte en este festival de velocidad y sonido.",
        },
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const progressWidth = `${(currentStep / (steps.length - 1)) * 100}%`;

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


    }, []);

    



    return (
        <div className=" dark:bg-gray-900 items-center">
            <div>
                <div className="relative">
                    {/* For large screens */}
                    <div className=" relative z-10 bg-primaryVio px-7 py-6">
                        <div className="container mx-auto flex items-center justify-between pb-12">
                            <h1 className="md:w-2/12 cursor-pointer" aria-label="Vaga Mundo">
                                <div className="mr-10 flex items-center">
                                    <Link to='/'>

                                        <img src={Logo} alt="Logo" className="item h-auto w-24 md:w-auto md:h-auto mr-3" />
                                    </Link>

                                </div>
                            </h1>

                            <ul className="item hidden w-8/12 md:flex items-center justify-center space-x-12 font-semibold  text-colorWhite"
                            >
                                <li>
                                    <Link to='/nosotros'>

                                        <button href="javascript:void(0)" className="font-semibold dark:text-colorWhite text-lg  focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
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
                                <li
                                    className="relative"
                                ><Link to='/ahorro'>
                                        <button
                                            className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                                        >
                                            Financia tu viaje
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
                                            Otros servicios
                                        </button>
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
                            <BtnIdiomas />

                        </div>
                    </div>




                    {/* Mobile nav */}
                    {/* For small screen */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-gray-900 z-50 inset-0 md:hidden bg-primaryVio flex-col h-screen w-full`}>
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
                                        <button className="focus:outline-none text-white  text-lg text-left focus:ring-2 focus:ring-gray-800 hover:underline">
                                            ¿Quiénes somos?
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={handleDropdownClick} className="dark:text-colorWhite text-white text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline flex items-center">
                                        ¡Quiero viajar!
                                        <img src={Flecha} alt="Flecha" className="ml-2" />
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
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
                </div>

                <div className="text w-full bg-primaryVio px-4 py-8 text-center rounded-b-[50px]  " style={{ paddingLeft: '80px' }}>
                    <h1 className="text-6xl font-bold text-colorWhite dark:text-white mb-10 pt-14">Vaga Mundo Blog
                    </h1>

                </div>


            </div>

            <div className="container mx-auto px-4 py-7">
                {/* Flex layout for lg, centered for md */}
                <div className=" w-full  px-4 py-8 text-center">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio mt-6 text-center">
                    Irlanda: Un paraíso para los amantes del deporte                    </h1>
                </div>

                <p className=" text-lg leading-6 text-colorText mt-6">
                Desde tradiciones centenarias hasta aventuras acuáticas inolvidables, Irlanda es un destino que respira deporte en cada rincón. Ya sea en los vibrantes estadios donde se celebran los juegos gaélicos o en las costas salvajes donde las olas desafían a los surfistas, aquí hay algo para todos los entusiastas del deporte.
                </p>


            </div>

            <div className="container mx-auto px-4 py-7">
                {/* Flex layout for lg, centered for md */}
                <div className=" w-full  px-4 py-8 text-center">
                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio mt-6 text-center">
                    Juegos Gaélicos: El alma deportiva de Irlanda
                                       </h2>
                </div>

                <p className=" text-lg leading-6 text-colorText mt-6">
                Los juegos gaélicos son mucho más que deportes en Irlanda: son una tradición profundamente arraigada en la cultura del país. Entre los más populares se encuentran el fútbol gaélico, una combinación electrizante de fútbol y rugby, y el hurling, un rápido y dinámico juego que se considera uno de los deportes de campo más rápidos del mundo.                    <br />                 <br />

                Otros deportes tradicionales incluyen el camogie, una versión femenina del hurling, el handball gaélico, similar al squash pero jugado con la mano, y el rounders, un juego de bateo y carrera similar al béisbol. La mejor manera de experimentar la pasión por estos deportes es asistiendo a un partido en el legendario Croke Park de Dublín, sede de la Asociación Atlética Gaélica (GAA), donde miles de aficionados vibran con cada jugada.                </p>


            </div>
            <div className="container mx-auto px-4 py-7">
                {/* Flex layout for lg, centered for md */}
                <div className=" w-full  px-4 py-8 text-center">
                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio mt-6 text-center">
                    5 principales acontecimientos deportivos en Irlanda
                     </h2>
                </div>

            
            </div>


            {/* Contenedor central */}
            <div className="flex flex-col items-center w-full">


                {/* Carrusel de tarjetas */}
                <div className="flex flex-col items-center w-full">
                    {/* Barra de progreso */}
                    <div className="w-11/12 lg:w-2/6 mx-auto mt-8">
                        <div className="bg-gray-200 h-1 flex items-center justify-between relative">
                            <div
                                className="absolute bg-primaryVio h-1 transition-all duration-300"
                                style={{ width: progressWidth }}
                            />
                            {steps.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-6 w-6 rounded-full flex items-center justify-center shadow ${index <= currentStep ? "bg-primaryVio" : "bg-white"
                                        }`}
                                >
                                    {index < currentStep ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-check relative"
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#FFFFFF"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    ) : (
                                        <div className="h-3 w-3 bg-primaryVio rounded-full" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carrusel de tarjetas */}
                    <div className="relative overflow-hidden w-11/12 lg:w-2/6 mt-8">
                        <div
                            className="flex transition-transform duration-300"
                            style={{ transform: `translateX(-${currentStep * 100}%)` }}
                        >
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 bg-white shadow-lg rounded-lg p-6 text-center"
                                >
                                    <h1 className="text-2xl font-bold text-primaryVio">
                                        {step.title}
                                    </h1>
                                    <p className="text-gray-600 mt-2">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controles */}
                    <div className="mt-6 flex space-x-4">
                        <button
                            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 text-base font-medium leading-4  text-white rounded-full text-xl font-semibold py-3 px-8   hover:text-primaryVio"
                            disabled={currentStep === 0}
                        >
                            Anterior
                        </button>
                        <button
                            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
                            className="px-4 py-2   rounded-lg disabled:opacity-50 text-base font-medium leading-4 bg-secondaryTur2 text-primaryVio rounded-full text-xl font-semibold py-3 px-8  hover:bg-primaryVio hover:text-colorWhite"
                            disabled={currentStep === steps.length - 1}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>

            </div>






            {/* Contenedor del footer */}

            <div className="w-full h-[850px]  mt-11 sm:relative"> {/* Added explicit height */}
                {/* Imagen de fondo para pantallas grandes */}
                <img
                    src={BGF}
                    alt="Footer background image"
                    className="object-cover w-full h-[850px] absolute inset-0 z-0 hidden lg:block"
                />

                {/* Imagen de fondo para pantallas medianas y pequeñas */}
                <img
                    src={BGFG}
                    alt="Footer background image mobile"
                    className=" object-cover lg:hidden"
                />
                <div className='absolute  left-0 z-20 p-4'>
                    {/* Contenedor del badge en la esquina inferior izquierda */}
                    <div className=" left-0 z-20 ">
                        <span id="iasBadge" data-account-id="5281"></span>
                    </div>
                </div>

                <div className="p-6 text-center absolute inset-0 z-10 flex flex-col items-center lg:pt-8 md:pt-1 pt-[70px]">

                    {/* Íconos de redes sociales para pantallas grandes */}
                    <div className="hidden lg:flex space-x-4">
                        <a href="https://www.instagram.com/vagamundo_travellers/" target="_blank" rel="noopener noreferrer">
                            <img src={INTA} alt="Instagram icon" className="w-16 h-16 hover:scale-105" />
                        </a>
                        <a href="https://www.facebook.com/VagaMundoTravellers/" target="_blank" rel="noopener noreferrer">
                            <img src={FB} alt="Facebook icon" className="w-16 h-16 hover:scale-105" />
                        </a>
                        <a href="https://www.linkedin.com/company/vaga-mundo/" target="_blank" rel="noopener noreferrer">
                            <img src={LINK} alt="Link icon" className="w-16 h-16 hover:scale-105" />
                        </a>
                        <a href="https://www.youtube.com/@vaga-mundo" target="_blank" rel="noopener noreferrer">
                            <img src={YT} alt="YouTube icon" className="w-16 h-16 hover:scale-105" />
                        </a>
                        <a href="https://www.tiktok.com/@vaga_mundo_travellers" target="_blank" rel="noopener noreferrer">
                            <img src={TIK} alt="TikTok icon" className="w-16 h-16 hover:scale-105" />
                        </a>
                    </div>

                    {/* Menú para pantallas grandes */}
                    <div className="hidden lg:block text-center relative" style={{ paddingLeft: '460px' }}>
                        <div className="flex flex-col items-center mt-60">
                            <div className="w-full">
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <Link to="/" className="text-colorWhite">
                                            <p className="text-2xl font-bold hover:text-secondaryTur2">{t("end.opcion1")}</p>
                                            <hr className="line" />
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/contacto" className="text-colorWhite">
                                            <p className="text-2xl font-semibold hover:text-secondaryTur2">{t("end.opcion2")}</p>
                                            <hr className="line" />
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="https://blog.vaga-mundo.com/es/terminos-y-condiciones-0" className="text-colorWhite">
                                            <p className="text-2xl font-semibold hover:text-secondaryTur2">{t("end.opcion3")}</p>
                                            <hr className="line" />
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="https://blog.vaga-mundo.com/es/politicas-privacidad" className="text-colorWhite">
                                            <p className="text-2xl font-semibold hover:text-secondaryTur2">{t("end.opcion4")}</p>
                                            <hr className="line" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Íconos de redes sociales para pantallas medianas y pequeñas */}
                    <div className="lg:hidden flex flex-col items-center">
                        <div className="flex space-x-4 z-4 mb-5">
                            <a href="https://www.instagram.com/vagamundo_travellers/" target="_blank" rel="noopener noreferrer">
                                <img src={INTA} alt="Instagram icon" className="w-9 h-9 hover:scale-105" />
                            </a>
                            <a href="https://www.facebook.com/VagaMundoTravellers/" target="_blank" rel="noopener noreferrer">
                                <img src={FB} alt="Facebook icon" className="w-9 h-9 hover:scale-105" />
                            </a>
                            <a href="https://www.linkedin.com/company/vaga-mundo/" target="_blank" rel="noopener noreferrer">
                                <img src={LINK} alt="LinkedIn icon" className="w-9 h-9 hover:scale-105" />
                            </a>
                            <a href="https://www.youtube.com/@vaga-mundo" target="_blank" rel="noopener noreferrer">
                                <img src={YT} alt="YouTube icon" className="w-9 h-9 hover:scale-105" />
                            </a>
                            <a href="https://www.tiktok.com/@vaga_mundo_travellers" target="_blank" rel="noopener noreferrer">
                                <img src={TIK} alt="TikTok icon" className="w-9 h-9 hover:scale-105" />
                            </a>
                        </div>

                        {/* Menú para pantallas medianas y pequeñas */}
                        <div className="text-start pt-4 z-20">
                            <ul className="space-y-4">
                                <li>
                                    <Link to="/" className="text-xl text-colorWhite font-semibold hover:text-secondaryTur2">
                                        {t("end.opcion1")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contacto" className="text-xl text-colorWhite font-semibold hover:text-secondaryTur2">
                                        {t("end.opcion2")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://blog.vaga-mundo.com/es/terminos-y-condiciones-0" className="text-xl text-colorWhite font-semibold hover:text-secondaryTur2">
                                        {t("end.opcion3")}                </Link>
                                </li>
                                <li>
                                    <Link to="https://blog.vaga-mundo.com/es/politicas-privacidad" className="text-xl text-colorWhite font-semibold hover:text-secondaryTur2">
                                        {t("end.opcion4")}                </Link>
                                </li>

                            </ul>
                        </div>

                    </div>

                    {/* Contenedor de certificados solo visible en lg */}
                    <div className="absolute bottom-0 left-0 z-20 pl-14 flex space-x-8 curse-point w-full pb-6 hidden md:hidden lg:flex">
                        <a href="https://www.icef.com/agency/0016M00002KTcRTQA1" target="_blank" rel="noopener noreferrer">
                            <img
                                src={ICEF}
                                alt="ICEF Logo"
                                className="w-37 h-auto cursor-pointer transition-transform duration-300 hover:scale-110"
                            />
                        </a>
                        <img
                            src={Logo2}
                            alt="Otro Certificado"
                            className="w-37 h-auto cursor-pointer transition-transform duration-300 hover:scale-110"
                        />
                        <img
                            src={Logo3}
                            alt="Otro Certificado 2"
                            className="w-37 h-auto cursor-pointer transition-transform duration-300 hover:scale-110"
                        />
                        {/*
  <div className="text-2xl text-colorWhite pl-10">
    <p>©2024 Vaga-Mundo • Todos los derechos reservados</p>
  </div>
  */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail4