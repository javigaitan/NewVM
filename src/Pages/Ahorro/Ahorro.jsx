import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Logo from "../../assets/Logos/LogoTurquesa.png";
import Flecha from '../../assets/Textura/Vector.png';
import Ahorro1 from '../../assets/Ahorro/Ahorro1.png';
import Ahorro2 from '../../assets/Ahorro/Ahorro2.png';
import Ahorro3 from '../../assets/Ahorro/Ahorro3.png';
import Ahorro4 from '../../assets/Ahorro/Ahorro4.png';
import AhorroFoto1 from '../../assets/Ahorro/AhorroFoto1.png';
import AhorroFoto2 from '../../assets/Ahorro/AhorroFoto2.png';
import AhorroFoto3 from '../../assets/Ahorro/AhorroFoto3.png';
import AhorroFoto4 from '../../assets/Ahorro/AhorroFoto4.png';
import Footer from "../../Componentes/Footer/Footer";


const Ahorro = () => {
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showExperienciasMenu, setShowExperienciasMenu] = useState(false);
    const [showAhorroMenu, setShowAhorroMenu] = useState(false);
    const [showServiceMenu, setShowServiceMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };


    const handleSubMenuToggle = (menu) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);

    }
    const handleMenuClick = () => {
        setShowMenu(false); // Esto ocultará el menú cuando se hace clic en cualquier enlace del menú
    };

    return (
        <div className="dark:bg-gray-900 items-center">
            <div>
                <div className="relative">
                    {/* For large screens */}
                    <div className="relative z-10 bg-primaryVio px-7 py-6">
                        <div className="container mx-auto flex items-center justify-between pb-12">
                            <h1 className="md:w-2/12 cursor-pointer" aria-label="Vaga Mundo">
                                <div className="mr-10 flex items-center">
                                    <Link to='/'>

                                        <img src={Logo} alt="Logo" className="h-auto w-24 md:w-auto md:h-auto mr-3" />
                                    </Link>

                                </div>
                            </h1>

                            <ul className="hidden w-8/12 md:flex items-center justify-center space-x-12 font-semibold  text-colorWhite"
                            >
                                <li>
                                    <Link to='/nosotras'>

                                        <button href="javascript:void(0)" className="font-semibold dark:text-colorWhite text-base  focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Nosotros
                                        </button>
                                    </Link>
                                </li>

                                <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <Link to='/experiencias'>
                                        <div className="flex items-center">
                                            <button className="dark:text-colorWhite text-base focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                                ¡Quiero viajar!
                                            </button>
                                            <img src={Flecha} alt="Flecha" className="ml-2" />
                                        </div>
                                    </Link>

                                    {isDropdownOpen && (
                                        <div className="absolute left-0 mt-1 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                            <Link to='/pais1' className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100">
                                                <img src="/src/assets/PaisesDesplegables/IRLANDA.png" alt="Irlanda" className="w-24 h-18 object-cover rounded-lg mr-3" />
                                                <span className="text-primaryVio">Irlanda</span>
                                                <img src="/src/assets/PaisesDesplegables/BanderaIrlanda.png" alt="BanderaIrlanda" className="w-10 h-6 rounded-lg mr-3" />
                                            </Link>

                                            <hr className="border-gray-300" />
                                            <Link to='/pais2' className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src="/src/assets/PaisesDesplegables/MALTA.png" alt="Malta" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">Malta</span>
                                                <img src="/src/assets/PaisesDesplegables/BanderaMalta.png" alt="BanderaMalta" className="w-10 h-6 rounded-lg mr-3" />

                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/pais3' className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src="/src/assets/PaisesDesplegables/ESPAÑA.png" alt="ESPAÑA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio">España</span>
                                                <img src="/src/assets/PaisesDesplegables/BanderaEspa.png" alt="ESPAÑA" className="w-10 h-6 rounded-lg mr-3" />

                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/pais4' className="flex items-center px-4 py-3 hover:bg-gray-100">
                                                <img src="/src/assets/PaisesDesplegables/FRANCIA.png" alt="FRANCIA" className="w-24 h-18 rounded-lg mr-3" />
                                                <span className="text-primaryVio" >Francia</span>
                                                <img src="/src/assets/PaisesDesplegables/BanderaFrancia.png" alt="BanderaFrancia" className="w-10 h-6 rounded-lg mr-3" />

                                            </Link>
                                            <hr className="border-gray-300" />
                                            <Link to='/pais5' className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100">
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
                                            className="dark:text-colorWhite text-base focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
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
                                            className="dark:text-colorWhite text-base focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                                        >
                                            Otros servicios
                                        </button>
                                    </Link>


                                </li>
                                <li>
                                    <Link to='/blogs'>
                                        <a href="javascript:void(0)" className="dark:text-colorWhite text-base  focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
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
                                    <Link to='/nosotras'>

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

                <div className="w-full bg-primaryVio px-4 py-8 text-left rounded-b-[50px]  " style={{ paddingLeft: '80px' }}>
                    <h1 className="text-3xl font-bold text-secondariVerde dark:text-white mb-10 pt-14">Financia tu viaje</h1>
                    <div className="w-4/5">
                        <p className="text-lg text-colorWhite dark:text-primaryVio pb-5">
                            En <strong>Vaga-Mundo</strong> queremos ayudarte a cumplir el <strong>viaje de tus sueños</strong>, por eso creamos planes a medida para que puedas financiar tu experiencia educativa en el extranjero en cuotas o plazos.
                            No olvides consultar a tu asesor sobre los medios de pagos que mejor se adapten a tus necesidades y país de origen.                        </p>
                    </div>
                </div>

            </div>

            {/* Comienza los contenedores */}
            <div className="dark:bg-[#F2F2F2] pt-12">
                <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2]"> {/* Cambiado max-w-5xl a max-w-4xl */}
                    <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4"> {/* Ajusté lg:w-2/5 a lg:w-3/5 y añadí lg:px-4 */}
                        <div>
                            <img src={Ahorro1} alt="Descripción de la imagen" className="w-16 h-auto rounded-lg mb-2 mx-auto" />
                        </div>
                        <div className="md:mt-3 pl-4"> {/* Añadí pl-4 */}
                            <h2 className="text-colorText dark:text-white  text-left lg:text-3xl text-2xl font-extrabold leading-9">Programa de Referidos</h2>
                        </div>
                        <div className="md:mt-3 pl-4"> {/* Añadí pl-4 */}
                            <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                                Creamos este programa con el objetivo de recompensar económicamente a nuestra comunidad.
                                <br />
                                <br />
                                Pueden participar estudiantes que estén próximos a viajar, quienes estén en los distintos destinos o incluso aquellos que ya culminaron su experiencia y volvieron a su país de origen.
                                <br />
                                <br />
                                Queremos que los estudiantes nos refieran entre sus amigos y familiares, para que otros puedan sentir la misma satisfacción que sintieron al viajar con nosotros.</p>
                        </div>
                        <div className="pl-4 mt-8"> {/* Añadí pl-4 y mt-8 */}
                            <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                                Solicita más información
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
                        <img src={AhorroFoto1} alt="Descripción de la imagen derecha" className="w-334 h-704 object-cover rounded-r-lg" />
                    </div>
                </div>
            </div>
            {/* Fin de los contenedores */}



            {/* Comienza los contenedores */}
            <div className="dark:bg-[#F2F2F2] pt-12">
                <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2]"> {/* Cambiado max-w-5xl a max-w-4xl */}
                    <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
                        <img src={AhorroFoto2} alt="Descripción de la imagen derecha" className="w-334 h-704 object-cover rounded-r-lg" />
                    </div>
                    <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4"> {/* Ajusté lg:w-2/5 a lg:w-3/5 y añadí lg:px-4 */}

                        <div>
                            <img src={Ahorro2} alt="Descripción de la imagen" className="w-16 h-auto rounded-lg mb-2 mx-auto" />
                        </div>
                        <div className="md:mt-3 pl-4"> {/* Añadí pl-4 */}
                            <h2 className="text-colorText dark:text-white  text-left lg:text-3xl text-2xl font-extrabold leading-9">Programa de Rifas</h2>
                        </div>
                        <div className="md:mt-3 pl-4"> {/* Añadí pl-4 */}
                            <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                                Una vez elegido tu curso de inglés y abonada la seña, puedes acceder al beneficio de financiar tu curso con rifas.
                                <br />
                                <br />
                                Para ello, nos aliamos con <strong>Planet01</strong> para brindarte la posibilidad de que tus familiares, amigos y conocidos puedan ayudarte económicamente a cumplir tu sueño de vivir una experiencia de estudios en el exterior.
                                <br />
                                <br />
                                ¿Cómo funciona el programa?<br />
                                Te inscribes y haces la seña de tu curso con Vaga-Mundo.
                                Coordinas con tu asesor la cantidad de boletas de reserva.
                                Retiras tus rifas en las oficinas de Uruguay y empiezas a venderlas.
                            </p>
                        </div>
                        <div className="pl-4 mt-8"> {/* Añadí pl-4 y mt-8 */}
                            <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                                Solicita más información
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {/* Fin de los contenedores */}

            {/* Comienza los contenedores */}
            <div className="dark:bg-[#F2F2F2] pt-12">
                <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2]"> {/* Cambiado max-w-5xl a max-w-4xl */}
                    <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4"> {/* Ajusté lg:w-2/5 a lg:w-3/5 y añadí lg:px-4 */}
                        <div>
                            <img src={Ahorro3} alt="Descripción de la imagen" className="w-16 h-auto rounded-lg mb-2 mx-auto" />
                        </div>
                        <div className="md:mt-3 pl-4"> {/* Añadí pl-4 */}
                            <h2 className="text-colorText dark:text-white  text-left lg:text-3xl text-2xl font-extrabold leading-9">Programa “Me caso con viajar”</h2>
                        </div>
                        <div className="md:mt-3 pl-4"> {/* Añadí pl-4 */}
                            <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                                A través de este programa de crowdfunding puedes recaudar dinero en eventos como tu cumpleaños, navidad, etc.
                                <br />
                                <br />
     A través de un enlace que te enviaremos, tus familiares y amigos van a poder regalarte el dinero equivalente a un producto o servicio para tu experiencia educativa en el extranjero como pueden ser los tickets aéreos, seguros médicos, alojamiento, curso de idioma o lo que consideres necesario.
                            </p>
                        </div>
                        <div className="pl-4 mt-8"> {/* Añadí pl-4 y mt-8 */}
                            <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                                Solicita más información
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
                        <img src={AhorroFoto3} alt="Descripción de la imagen derecha" className="w-334 h-704 object-cover rounded-r-lg" />
                    </div>
                </div>
            </div>
            {/* Fin de los contenedores */}
            {/* Comienza los contenedores */}
<div className="dark:bg-[#F2F2F2] pt-12 mb-10"> 
    <div className="border-2 border-[#606060] container max-w-4xl mx-auto flex items-center md:flex-row flex-col justify-between px-6 lg:px-0 rounded-3xl bg-[#F2F2F2]"> {/* Cambiado max-w-5xl a max-w-4xl */}
        <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
            <img src={AhorroFoto4} alt="Descripción de la imagen derecha" className="w-334 h-704 object-cover rounded-r-lg" />
        </div>
        <div className="flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-4"> {/* Ajusté lg:w-2/5 a lg:w-3/5 y añadí lg:px-4 */}

            <div>
                <img src={Ahorro4} alt="Descripción de la imagen" className="w-16 h-auto rounded-lg mb-2 mx-auto" />
            </div>
            <div className="md:mt-3 pl-4"> {/* Añadí pl-4 */}
                <h2 className="text-colorText dark:text-white  text-left lg:text-3xl text-2xl font-extrabold leading-9">Programas de inserción laboral</h2>
            </div>
            <div className="md:mt-3 pl-4"> {/* Añadí pl-4 */}
                <p className="lg:text-base text-sm leading-normal text-colorText dark:text-gray-300 text-left">
                Este programa está diseñado para aquellas personas que crean contenidos sobre viajes y quieran monetizar su canal a través de la promoción de las experiencias educativas de Vaga-Mundo, bien sea que hayan contratado o no con nosotros.
                <br />
                <br />
                Quienes sean seleccionados como embajadores de VM podrán no solo ganar dinero, sino también acceder a descuentos preferenciales en todos nuestros servicios a través de nuestras VM Coins.
                </p>
            </div>
            <div className="pl-4 mt-8"> {/* Añadí pl-4 y mt-8 */}
                <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                    Solicita más información
                </button>
            </div>
        </div>
    </div>
</div>
{/* Fin de los contenedores */}

  <Footer />
        </div > 

)}
export default Ahorro