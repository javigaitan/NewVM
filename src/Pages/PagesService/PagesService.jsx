import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
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
                                            Nosotros
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
                                    <img src="/src/assets/PaisesDesplegables/IRLANDA.png" alt="Irlanda" className="w-24 h-18 object-cover rounded-lg mr-3" />
                                    <span className="text-primaryVio">Irlanda</span>
                                    <img src="/src/assets/PaisesDesplegables/BanderaIrlanda.png" alt="BanderaIrlanda" className="w-10 h-6 rounded-lg mr-3" />
                                </Link>
                                <hr className="border-gray-300" />
                                <Link to='/destino-malta' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                    <img src="/src/assets/PaisesDesplegables/MALTA.png" alt="Malta" className="w-24 h-18 rounded-lg mr-3" />
                                    <span className="text-primaryVio">Malta</span>
                                    <img src="/src/assets/PaisesDesplegables/BanderaMalta.png" alt="BanderaMalta" className="w-10 h-6 rounded-lg mr-3" />
                                </Link>
                                <hr className="border-gray-300" />
                                <Link to='/not-found' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                    <img src="/src/assets/PaisesDesplegables/ESPAÑA.png" alt="ESPAÑA" className="w-24 h-18 rounded-lg mr-3" />
                                    <span className="text-primaryVio">España</span>
                                    <img src="/src/assets/PaisesDesplegables/BanderaEspa.png" alt="ESPAÑA" className="w-10 h-6 rounded-lg mr-3" />
                                </Link>
                                <hr className="border-gray-300" />
                                <Link to='/not-found' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
                                    <img src="/src/assets/PaisesDesplegables/FRANCIA.png" alt="FRANCIA" className="w-24 h-18 rounded-lg mr-3" />
                                    <span className="text-primaryVio">Francia</span>
                                    <img src="/src/assets/PaisesDesplegables/BanderaFrancia.png" alt="BanderaFrancia" className="w-10 h-6 rounded-lg mr-3" />
                                </Link>
                                <hr className="border-gray-300" />
                                <Link to='/not-found' className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100" onClick={handleOptionClick}>
                                    <img src="/src/assets/PaisesDesplegables/ALEMANIA.png" alt="ALEMANIA" className="w-24 h-18 rounded-lg mr-3" />
                                    <span className="text-primaryVio">Alemania</span>
                                    <img src="/src/assets/PaisesDesplegables/BanderaAlemani.png" alt="BanderaAlemania" className="w-10 h-6 rounded-lg mr-3" />
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
                        </div>
                    </div>




                    {/* Mobile nav */}
                    {/* For small screen */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}>
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                            <div className="flex items-center space-x-3">

                            </div>
                            <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 p-4">
                            <ul className="flex flex-col space-y-6">
                                <li>
                                    <Link to='/' onClick={handleMenuClick}>

                                        <a href="javascript:void(0)" className="dark:text-colorWhite flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Inicio
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-colorWhite" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </a>
                                    </Link>

                                </li>
                                <li>
                                    <Link to='/nosotros'>

                                        <a href="javascript:void(0)" className="dark:text-colorWhite flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Nosotros
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-colorWhite" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                                <Link to='/experiencias'>

                                    <li>
                                        <a href="javascript:void(0)" className="dark:text-colorWhite flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            ¡Quiero viajar!
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-colorWhite" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </a>
                                    </li>
                                </Link>
                                <Link to='/ahorro'>

                                    <li>
                                        <a href="javascript:void(0)" className="dark:text-colorWhite flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Financia tu viaje
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-colorWhite" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </a>
                                    </li>
                                </Link>

                                <li>
                                    <Link to='/servicios'>

                                        <a href="javascript:void(0)" className="dark:text-colorWhite flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Servicios Extras
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-colorWhite" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </a>
                                    </Link>

                                </li>
                                <Link to='/blogs'>
                                    <li>
                                        <a href="javascript:void(0)" className="dark:text-colorWhite flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Blog
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-colorWhite" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </a>
                                    </li>
                                </Link>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="text w-full bg-secondariVerde px-4 py-8 text-left rounded-b-[50px]  " style={{ paddingLeft: '80px' }}>
                    <h1 className="text-5xl font-bold text-primaryVio dark:text-white mb-10 pt-14">Otros Servicios</h1>
                    <div className="w-4/5">
                        <p className="text-lg text-primaryVio dark:text-primaryVio pb-5">
                            En <strong>Vaga-Mundo</strong> nos enfocamos en la satisfacción integral de nuestros clientes. Por eso, ofrecemos soluciones <strong>360º</strong> diseñadas para maximizar su experiencia de viaje.
                        </p>
                    </div>
                </div>

            </div>

           {/* Comienza los contenedores */}
<div className="card dark:bg-[#F2F2F2] pt-12 mb-10"> 
    <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2] overflow-visible h-[700px]"> {/* Añadido overflow-visible y altura */}
        <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4 ml-5"> {/* Ajustado para el contenido principal */}
            <div>
                <img src={Icons1} alt="Icono de seguro" className="w-16 h-auto rounded-lg mb-2 mx-auto ml-4" />
            </div>
            <div className="md:mt-3 pl-4">
                <h2 className="text-colorText dark:text-white text-left lg:text-3xl text-2xl font-extrabold leading-9">Seguros y asistencias al viajero</h2>
            </div>
            <div className="md:mt-3 pl-4">
                <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                    Los imprevistos médicos como pueden ser una urgencia odontológica o bien uno no médico como la pérdida de equipaje, suelen formar parte de nuestros viajes y alterar nuestra planificación.
                    <br />
                    <br />
                    Por eso, desde Vaga-Mundo tenemos alianzas con los principales proveedores de seguros y asistencias al viajero, para que tu única preocupación sea la de disfrutar. Todas ellas ofrecen planes de pago a medida
                    y asistencia médica 24/7 en tu mismo idioma.
                    <br />
                    <br />
                    Ya sea que viajes a estudiar, de vacaciones, por trabajo, solo o acompañado, tenemos la cobertura ideal para ti.
                </p>
            </div>
            <div className="pl-4 mt-8">
                <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                    Solicita más información
                </button>
            </div>
        </div>
        <div className="flex justify-center items-start lg:w-2/5 mt-10 md:mt-0 overflow-visible"> {/* Ajuste en la posición y estilos de la imagen */}
            <img src={Seguros} alt="Foto de viajera" className="w-334 h-[704px] object-cover rounded-3xl" style={{ marginLeft: '35px', marginTop: '-2px' }} /> {/* Ajustes de redondeo y márgenes */}
        </div>
    </div>
</div>
{/* Fin de los contenedores */}




          {/* Comienza los contenedores */}
<div className="dark:bg-[#F2F2F2] pt-12 mb-10"> 
    <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2] overflow-visible h-[700px]"> {/* Añadido overflow-visible y altura */}
        <div className="flex justify-center items-start lg:w-2/5 mt-10 md:mt-0 overflow-visible "> {/* Añadido overflow-visible para la imagen */}
            <img src={Pass} alt="Descripción de la imagen derecha" className="w-334 h-[704px] object-cover rounded-3xl" style={{ marginRight: '35px', marginTop: '-2px' }} /> {/* Ajustes de redondeo y márgenes */}
        </div>
        <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4 mr-5"> {/* Ajuste de contenido principal */}
            <div>
                <img src={Icons2} alt="Icono de pass" className="w-16 h-auto rounded-lg mb-2 mx-auto ml-4" />
            </div>
            <div className="md:mt-3 pl-4">
                <h2 className="text-colorText dark:text-white text-left lg:text-3xl text-2xl font-extrabold leading-9">
                    Tickets aéreos, alquiler de autos, atracciones y mucho más.
                </h2>
            </div>
            <div className="md:mt-3 pl-4">
                <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                    Uno de los primeros pasos que realizamos para materializar el viaje de nuestros sueños es la compra del boleto de avión, ya sea que viajes solo, acompañado, en familia o con amigos.
                    <br />
                    <br />
                    Por eso, en Vaga-Mundo tenemos las mejores opciones en tickets aéreos, alquileres de auto, atracciones y mucho más, dentro o fuera de Europa.
                </p>
            </div>
            <div className="pl-4 mt-8">
                <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                    Solicita más información
                </button>
            </div>
        </div>
    </div>
</div>
{/* Fin de los contenedores */}


           {/* Comienza los contenedores */}
<div className="dark:bg-[#F2F2F2] pt-12 mb-10">
    <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2] overflow-visible h-[700px]"> {/* Añadido overflow-visible y altura */}
        <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4 ml-5"> {/* Ajuste de contenido principal */}
            <div>
                <img src={Icons3} alt="Icono de Alojamiento" className="w-16 h-auto rounded-lg mb-2 mx-auto ml-4" />
            </div>
            <div className="md:mt-3 pl-4">
                <h2 className="text-colorText dark:text-white text-left lg:text-3xl text-2xl font-extrabold leading-9">
                    Alojamiento propio y externos
                </h2>
            </div>
            <div className="md:mt-3 pl-4">
                <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                    Un gran miedo que enfrentamos al momento de vivir una experiencia en el exterior es el saber dónde nos alojaremos.
                    <br />
                    <br />
                    Por eso, en Vaga-Mundo contamos con alojamiento propio en Dublín, Irlanda para que nuestros estudiantes se sientan como en casa, una vez arribados a la isla verde.
                    <br />
                    <br />
                    Asimismo, tanto en Irlanda como en otros destinos del mundo tenemos convenios con partners como pueden ser alojamientos estudiantiles, host family o las mismas escuelas de inglés, para que nuestros estudiantes se sientan cómodos.
                </p>
            </div>
            <div className="pl-4 mt-8">
                <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                    Solicita más información
                </button>
            </div>
        </div>
        <div className="flex justify-center items-start lg:w-2/5 mt-10 md:mt-0 overflow-visible"> {/* Añadido overflow-visible para la imagen */}
            <img src={Resi} alt="Descripción de la imagen derecha" className="w-334 h-[704px] object-cover rounded-3xl" style={{ marginLeft: '35px', marginTop: '-2px' }} /> {/* Ajustes de redondeo y márgenes */}
        </div>
    </div>
</div>
{/* Fin de los contenedores */}

            {/* Comienza los contenedores */}
<div className="dark:bg-[#F2F2F2] pt-12 mb-10">
    <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2] overflow-visible h-[700px]"> {/* Añadido overflow-visible y altura */}
        <div className="flex justify-center items-start lg:w-2/5 mt-10 md:mt-0 overflow-visible"> {/* Añadido overflow-visible */}
            <img src={TRABAJO} alt="Descripción de la imagen derecha" className="w-334 h-[704px] object-cover rounded-3xl" style={{ marginRight: '35px', marginTop: '-2px' }} /> {/* Ajustes de redondeo y márgenes */}
        </div>
        <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4 mr-5"> {/* Ajuste de contenido principal */}
            <div>
                <img src={Icons4} alt="Icono de Inserción" className="w-16 h-auto rounded-lg mb-2 mx-auto ml-4" />
            </div>
            <div className="md:mt-3 pl-4">
                <h2 className="text-colorText dark:text-white text-left lg:text-3xl text-2xl font-extrabold leading-9">
                    Programas de inserción laboral
                </h2>
            </div>
            <div className="md:mt-3 pl-4">
                <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                    Una experiencia de estudio en el extranjero se termina de resignificar si a esta le sumamos una experiencia laboral.
                    <br />
                    <br />
                    Por eso, desde Vaga-Mundo, además de los talleres que brindamos de forma gratuita para ayudar a nuestros estudiantes a conseguir empleo en Europa, ofrecemos este programa de inserción laboral.
                    <br />
                    <br />
                    La propuesta consiste en un diagnóstico situacional del aplicante para poder ofrecer una eficiente proximidad con el mercado laboral postulante. El proceso inicia con el interés de la persona y finaliza concretando entrevistas con empresas del rubro seleccionado.
                </p>
            </div>
            <div className="pl-4 mt-8">
                <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                    Solicita más información
                </button>
            </div>
        </div>
    </div>
</div>
{/* Fin de los contenedores */}


            {/* Comienza los contenedores */}
<div className="dark:bg-[#F2F2F2] pt-12 pb-10">
    <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2] overflow-visible h-[700px]"> {/* Añadido overflow-visible y altura */}
        <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4"> {/* Ajuste de contenido principal */}
            <div>
                <img src={Icons5} alt="Descripción de la imagen" className="w-16 h-auto rounded-lg mb-2 mx-auto ml-4" />
            </div>
            <div className="md:mt-3 pl-4">
                <h2 className="text-colorText dark:text-white text-left lg:text-3xl text-2xl font-extrabold leading-9">
                    Viajes grupales y actividades en comunidad
                </h2>
            </div>
            <div className="md:mt-3 pl-4">
                <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                    En Vaga-Mundo sabemos la importancia de hacer comunidad en los diferentes destinos y una forma de mantener vivo este espíritu son los viajes grupales.
                    Ya sea una escapada de fin de semana al interior de los países donde están estudiando, o bien un viaje a otro continente, como puede ser conocer la multisensorial Marruecos.
                    <br />
                    <br />
                    En Vaga-Mundo siempre estamos planificando una próxima experiencia viajera en comunidad.
                    <br />
                    <br />
                    Para conocer más sobre las actividades y beneficios de ser miembros de la comunidad VM visita aquí.
                </p>
            </div>
            <div className="pl-4 mt-8">
                <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                    Solicita más información
                </button>
            </div>
        </div>
        <div className="flex justify-center items-start lg:w-2/5 mt-10 md:mt-0 overflow-visible"> {/* Añadido overflow-visible */}
            <img src={Grupal} alt="Descripción de la imagen derecha" className="w-334 h-[704px] object-cover rounded-3xl" style={{ marginLeft: '35px', marginTop: '-2px' }} /> {/* Ajustes de redondeo y márgenes */}
        </div>
    </div>
</div>
{/* Fin de los contenedores */}




            <Footer />
        </div>


    )
}

export default PagesService