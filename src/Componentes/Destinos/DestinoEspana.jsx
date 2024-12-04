import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import Gastronomia from '../../assets/ServiciosVM/España/practicas profesionales(1).png';
import Doctorados from '../../assets/ServiciosVM/España/Master y doctorado1.png';
import Diplomaturas from '../../assets/ServiciosVM/España/cursos y diploma superiores (1).png';
import Logo from "../../assets/Logos/LogoTurquesa.png";
import Flecha from '../../assets/Textura/Vector.png';
import BannerIrlanda from '../../Componentes/Destinos/DestinosImg/bannerespana.png';
import FondoVioleta from '../../assets/Textura/texturafondoexperienciairlanda.png';
import MapIrlanda from '../../Componentes/Destinos/DestinosImg/mapaespana.png';
import Madrid from '../../Componentes/Destinos/DestinosImg/madrid.png';
import Barcelona from '../../Componentes/Destinos/DestinosImg/barcelona.png';
import Murcia from '../../Componentes/Destinos/DestinosImg/murcia.png';
import Valencia from '../../Componentes/Destinos/DestinosImg/valencia.png';
import Foto1 from '../../Componentes/Destinos/DestinosImg/Espanafoto1.svg';
import Foto2 from '../../Componentes/Destinos/DestinosImg/espanafoto2.svg';
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
import {useTranslation} from "react-i18next";
import BtnIdiomas from "../../Componentes/BtnIdioma/BtnIdiomas";


const DestinoEspana = () => {
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
            reset: false
        });
    }, []);

    const dropdownMemoized = useMemo(() => {
        return isDropdownOpen ? (
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
        ) : null
    }, [isDropdownOpen])

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
                                {dropdownMemoized}
                                {/* {isDropdownOpen && (
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
                        )} */}
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
                        {/* boton de traduccion*/}
                        <BtnIdiomas/>


                    </div>

                    {/* Titulo en Banner */}

                    <div className="flex items-center justify-start ml-12 pl-9 relative mt-8" style={{ top: '90px' }}> {/* Ajusta el valor de top */}
                        <h1 className="text-white text-8xl md:text-6xl font-bold text-start" style={{ lineHeight: '2.5rem' }}>
                            ¡Bienvenidos a España
                            <img src={EspanaBandera} alt="Bandera de Irlanda" className="w-13 h-9 inline-block mx-2" />
                            <span style={{ display: 'block', lineHeight: '5rem' }}>la maravilla Ibérica! </span>
                        </h1>
                    </div>


                </div>



                {/* Fondo violeta debajo del contenido */}
                <div
                    className="flex pt-14" // Agrega más espacio en la parte superior con `pt-8`
                >
                    {/* Parte izquierda */}
                    <div className="w-1/2 flex flex-col justify-center items-end p-8">
                        <h1 className="text-white text-5xl font-bold self-end pb-10 text-end">Exploremos España</h1>
                        <img src={MapIrlanda} alt="Mapa de Irlanda" className="mt-4 w-3/4 self-end" />
                    </div>

                    <div className="w-1/2 grid grid-cols-2 gap-2 p-8">
    <img src={Madrid} alt="Madrid" className="w-2/3 object-cover" />
    <img src={Murcia} alt="Murcia" className="w-2/3 object-cover" />
    <img src={Barcelona} alt="Barcelona" className="w-2/3 object-cover" />
    <img src={Valencia} alt="Valencia" className="w-2/3 object-cover" />
</div>

                </div>


            </div>

            {/* Dividido en dos partes */}
            <div className="flex my-10 py-12 ml-6">

                {/* Parte izquierda con el texto */}
                <div className="w-1/2 flex flex-col justify-center items-center p-8 pb-10 text-left pt-0">
                    <h2 className="text-primaryVio text-5xl font-semibold pl-12 pt-0 mt-0 pb-9">¿Por qué es el <br />destino más elegido?</h2>
                    <div className="max-w-[60%] mr-7"> {/* Ajuste del ancho del contenedor de los párrafos */}
                        <p className="flex items-start  text-start text-primaryVio text-base mt-4">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>España se encuentra en un punto privilegiado dentro de Europa, con un clima mediterráneo agradable y una diversidad cultural abierta, ideal para latinos que buscan un entorno cálido y acogedor.</span>
                        </p>        <br />

                        <p className="flex items-start text-primaryVio text-base mt-2 text-start">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>Con el español como lengua oficial, adaptarse a la vida en España es mucho más fácil para estudiantes latinos, lo que mejora tanto la experiencia social como académica desde el primer día.</span>
                        </p>        <br />

                        <p className="flex items-start text-primaryVio text-base mt-2 text-start">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>El país cuenta con una economía estable en comparación con muchas regiones de América Latina, lo que ofrece una calidad de vida excepcional, y un entorno seguro.
                            </span>
                        </p>        <br />

                        <p className="flex items-start text-primaryVio text-base mt-2 text-start">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>Las universidades en España gozan de reconocimiento mundial por su excelencia académica.</span>
                        </p>
                    </div>

                </div>

                {/* Parte derecha con las imágenes en diagonal */}
                <div className="w-1/2 flex flex-col justify-between mr-9">
                    <img src={Foto1} alt="Imagen 1" className="w-1/2 self-start pt-4" />
                    <img src={Foto2} alt="Imagen 2" className="w-1/2 self-end mr-10" />
                </div>
            </div>




            {/* Parte Experiencias */}



            <div className="container mx-auto px-4 pt-10 pb-20">
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-colorText mt-6 text-center">
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
                                <Link to='/gastronomia'>
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
                                        Másters y Doctorados
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


          

            <Footer />



        </div>

    );
}

export default DestinoEspana