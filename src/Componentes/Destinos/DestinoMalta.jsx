import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import Idiomas from '../../assets/ServiciosVM/curso idioma.png';
import WyS from '../../assets/ServiciosVM/estudio y trabajo en el exterior.png';
import universitarios from '../../assets/ServiciosVM/posgrados.png';
import Logo from "../../assets/Logos/LogoTurquesa.png";
import Flecha from '../../assets/Textura/Vector.png';
import BannerIrlanda from '../../Componentes/Destinos/DestinosImg/bannerMalta.png';
import FondoVioleta from '../../Componentes/Destinos/DestinosImg/fondomalta.png';
import MapIrlanda from '../../Componentes/Destinos/DestinosImg/mapamalta.png';
import Sliema from '../../Componentes/Destinos/DestinosImg/sliema.png';
import Julian from '../../Componentes/Destinos/DestinosImg/julian.png';
import Valletta from '../../Componentes/Destinos/DestinosImg/valletta.png';
import Foto1 from '../../Componentes/Destinos/DestinosImg/foto1palmera.png';
import Foto2 from '../../Componentes/Destinos/DestinosImg/foto2ventana.png';
import Icon from '../../Componentes/Destinos/DestinosImg/icontext.png';
import BanderaMalta from '../../Componentes/Destinos/DestinosImg/banderamalta.png'
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



const DestinoMalta = () => {
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
            reset: true
        });
    }, []);

    const dropdownMemoized = useMemo(() => {
        return isDropdownOpen ? (
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
                <Link to='/not-found' className="flex items-center px-4 py-3 hover:bg-gray-100" onClick={handleOptionClick}>
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
                                    {t("navbar.about")} 
                                    </button>
                                </Link>
                            </li>

                            <li className="relative">
                                <div className="flex items-center" onClick={handleDropdownClick}>
                                    <button className="dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    {t("navbar.i-want-to-travel")} 
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
                                    {t("navbar.finance-your-trip")}                                    </button>
                                </Link>
                            </li>
                            <li className="relative">
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
                         {/* boton de traduccion*/}
                         <BtnIdiomas/>


                    </div>

                    {/* Titulo en Banner */}

                    <div className="flex items-center justify-start ml-12 pl-9 relative mt-8" style={{ top: '90px' }}> {/* Ajusta el valor de top */}
                        <h1 className="text-white text-8xl md:text-6xl font-bold text-start" style={{ lineHeight: '2.5rem' }}>
                        {t("malta.title")}
                            <img src={BanderaMalta} alt="Bandera de Irlanda" className="w-13 h-9 inline-block mx-2" />
                            <span style={{ display: 'block', lineHeight: '5rem' }}>{t("malta.title2")}</span>
                        </h1>
                    </div>


                </div>



                {/* Fondo violeta debajo del contenido */}
                <div
                    className="flex pt-14" // Agrega más espacio en la parte superior con `pt-8`
                >
                    {/* Parte izquierda */}
                    <div className="w-1/2 flex flex-col justify-center items-end p-8">
                        <h1 className="text-primaryVio text-5xl font-bold self-end pb-10 text-end">{t("malta.title3")}</h1>
                        <img src={MapIrlanda} alt="Mapa de Malta" className="mt-4 w-3/4 self-end" />
                    </div>

                    {/* Parte derecha con 3 imágenes en columna */}
                    <div className="w-1/2 flex flex-col justify-center items-center p-8">
                        <img src={Julian} alt="Julian" className="mb-4 w-1/3" />
                        <img src={Sliema} alt="Sliema" className="mb-4 w-1/3" />
                        <img src={Valletta} alt="Valletta" className="mb-4 w-1/3" />
                    </div>
                </div>


            </div>

            {/* Dividido en dos partes */}
            <div className="flex my-10 py-12 ml-6">

                {/* Parte izquierda con el texto */}
                <div className="w-1/2 flex flex-col justify-center items-center p-8 pb-10 text-left pt-0">
                    <h2 className="text-primaryVio text-5xl font-semibold pl-12 pt-0 mt-0 pb-9">{t("malta.opcion-title")} <br />{t("malta.opcion-title2")}</h2>
                    <div className="max-w-[60%] mr-7"> {/* Ajuste del ancho del contenedor de los párrafos */}
                        <p className="flex items-start  text-start text-primaryVio text-base mt-4">
                            <img src={Icon} alt="Viñeta" className="mr-2" />

                            {t("malta.item1")}                        </p>        <br />

                        <p className="flex items-start text-primaryVio text-base mt-2 text-start">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            {t("malta.item2")}                        </p>        <br />

                        <p className="flex items-start text-primaryVio text-base mt-2 text-start">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            {t("malta.item3")}                        </p>        <br />

                        <p className="flex items-start text-primaryVio text-base mt-2 text-start">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            {t("malta.item4")}                        </p>
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
                {t("malta.title4")} <br />{t("malta.title4-2")}
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
                                    {t("service.tipe1")}                                    </button>
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
                                        {t("service.tipe2")}                                        </button>
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
                                        {t("service.tipe3")}                                        </button>
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
                    {t("malta.title5")}                     </h1>
                    <img src={BanderaMalta} alt="Bandera de Irlanda" className="w-14 h-9" />
                </div>



                <div className="flex justify-center mt-8">
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <div className="relative overflow-hidden pb-[56.25%] h-0">
                            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/LIakpVh7BgQ?si=GBS6UrWJlD3nb46l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />



        </div>

    );
}

export default DestinoMalta