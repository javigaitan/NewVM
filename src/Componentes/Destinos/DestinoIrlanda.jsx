import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Logo from "../../assets/Logos/LogoTurquesa.png";
import Flecha from '../../assets/Textura/Vector.png';
import BannerIrlanda from '../../assets/Experiencias/Foto de Irlanda.png'

const DestinoIrlanda = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="dark:bg-gray-900 relative z-10">
            {/* Imagen de fondo con opacidad */}
            <div className="relative">
                <img
                    src={BannerIrlanda}
                    className="w-full h-auto object-cover lg:h-[500px] lg:block md:hidden hidden rounded-bl-custom  "
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
            <div className="absolute top-0 left-0 w-full">
                <div className="container mx-auto flex items-center justify-between py-6">
                    <h1 className="md:w-2/12 cursor-pointer" aria-label="Vaga Mundo">
                        <div className="mr-10 flex items-center">
                            <Link to='/'>
                                <img src={Logo} alt="Logo" className="h-auto w-24 md:w-auto md:h-auto mr-3" />
                            </Link>
                        </div>
                    </h1>

                    <ul className="hidden w-8/12 md:flex items-center justify-center space-x-12 font-semibold text-colorWhite">
                        <li>
                            <Link to='/nosotras'>
                                <button className="font-semibold dark:text-colorWhite text-base focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
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
                                        <span className="text-primaryVio">Francia</span>
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
                        <li className="relative">
                            <Link to='/ahorro'>
                                <button className="dark:text-colorWhite text-base focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    Financia tu viaje
                                </button>
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to='/servicios'>
                                <button className="dark:text-colorWhite text-base focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    Otros servicios
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/blogs'>
                                <button className="dark:text-colorWhite text-base focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    Blog
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-primaryVio opacity-5 h-24">
    <h1>
        fondo
    </h1>
</div>
        </div>
    );
}

export default DestinoIrlanda;
