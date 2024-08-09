import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Logo from "../../assets/Logos/LogoTurquesa.png";
import WhatsAppButton from "../BtnWs/WhatsAppButton";
import Flecha from '../../assets/Textura/Vector.png'



function Navbar() {
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showExperienciasMenu, setShowExperienciasMenu] = useState(false);
    const [showAhorroMenu, setShowAhorroMenu] = useState(false);
    const [showServiceMenu, setShowServiceMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

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
        <div className="dark:bg-gray-900">
            <div>
                <div className="relative">
                    {/* For large screens */}
                    <div className="relative z-10 bg-primaryVio px-7 py-6">
                        <div className="container mx-auto flex items-center justify-between">
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
                                    <Link to='/not-found'>
                                        <div className="flex items-center">  
                                            <button className="dark:text-colorWhite text-base focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                                ¡Quiero viajar!
                                            </button>
                                            <img src={Flecha} alt="Flecha" className="ml-2" />  
                                        </div>
                                    </Link>

                                    {isDropdownOpen && (
                                        <div className="absolute left-0 mt-1 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                        <Link to='/destino-irlanda' className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100">
                                          <img src="/src/assets/PaisesDesplegables/IRLANDA.png" alt="Irlanda" className="w-24 h-18 object-cover rounded-lg mr-3" />
                                          <span className="text-primaryVio">Irlanda</span>
                                          <img src="/src/assets/PaisesDesplegables/BanderaIrlanda.png" alt="BanderaIrlanda" className="w-10 h-6 rounded-lg mr-3" />
                                        </Link>

                                            <hr className="border-gray-300" />
                                            <Link to='/destino-malta' className="flex items-center px-4 py-3 hover:bg-gray-100">
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
                    <a
                        href="javascript:void(0)"
                        className="dark:text-colorWhite flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                        onClick={toggleDropdown}
                    >
                        ¡Quiero viajar!
                        <img src={Flecha} alt="Flecha" className="ml-2" />
                        <div>
                            <svg
                                className="fill-stroke text-black dark:text-colorWhite"
                                width={12}
                                height={12}
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.5 3L7.5 6L4.5 9"
                                    stroke="currentColor"
                                    strokeWidth="0.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </a>
                </li>
            </Link>

            {isDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                    <Link to='/destino-irlanda' className="flex items-center px-4 py-3 hover:bg-gray-100">
                        <img
                            src="/src/assets/PaisesDesplegables/BanderaIrlanda.png"
                            alt="Bandera de Irlanda"
                            className="w-10 h-6 rounded-lg mr-3"
                        />
                        <span className="text-primaryVio">Irlanda</span>
                    </Link>
                    <hr className="border-gray-300" />
                    <Link to='/destino-malta' className="flex items-center px-4 py-3 hover:bg-gray-100">
                        <img
                            src="/src/assets/PaisesDesplegables/BanderaMalta.png"
                            alt="Bandera de Malta"
                            className="w-10 h-6 rounded-lg mr-3"
                        />
                        <span className="text-primaryVio">Malta</span>
                    </Link>
                    <hr className="border-gray-300" />
                    <Link to='/pais3' className="flex items-center px-4 py-3 hover:bg-gray-100">
                        <img
                            src="/src/assets/PaisesDesplegables/BanderaEspa.png"
                            alt="Bandera de España"
                            className="w-10 h-6 rounded-lg mr-3"
                        />
                        <span className="text-primaryVio">España</span>
                    </Link>
                    <hr className="border-gray-300" />
                    <Link to='/pais4' className="flex items-center px-4 py-3 hover:bg-gray-100">
                        <img
                            src="/src/assets/PaisesDesplegables/BanderaFrancia.png"
                            alt="Bandera de Francia"
                            className="w-10 h-6 rounded-lg mr-3"
                        />
                        <span className="text-primaryVio">Francia</span>
                    </Link>
                    <hr className="border-gray-300" />
                    <Link to='/pais5' className="flex items-center px-4 py-3 hover:bg-gray-100">
                        <img
                            src="/src/assets/PaisesDesplegables/BanderaAlemani.png"
                            alt="Bandera de Alemania"
                            className="w-10 h-6 rounded-lg mr-3"
                        />
                        <span className="text-primaryVio">Alemania</span>
                    </Link>
                </div>
            )}
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
            </div>
            <WhatsAppButton />

        </div>




    );
}

export default Navbar;