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




const DestinoIrlanda = () => {
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
                                <Link to='/nosotras'>
                                    <button className="font-semibold dark:text-colorWhite text-lg focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
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


                    </div>

                    {/* Titulo en Banner */}

                    <div className="flex items-center text-7xl justify-start ml-12 pl-9 relative mt-8" style={{ top: '90px' }}> {/* Ajusta el valor de top */}
                        <h1 className="text-white text-8xl md:text-6xl font-bold text-start" style={{ lineHeight: '2.5rem' }}>
                            ¡Bienvenidos a Irlanda
                            <img src="/src/assets/PaisesDesplegables/BanderaIrlanda.png" alt="Bandera de Irlanda" className="w-15 h-11 inline-block mx-2" />
                            <span style={{ display: 'block', lineHeight: '5rem' }}>la isla esmeralda!</span>
                        </h1>
                    </div>






                </div>



                {/* Fondo violeta debajo del contenido */}
                <div className="flex pt-14">
                    {/* Parte izquierda */}
                    <div className="w-1/2 flex flex-col justify-center items-end p-8 ml-3">
                        <h1 className="text-white text-5xl font-bold self-end pb-10 text-end">Exploremos Irlanda</h1>

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
                <div className="w-1/2 flex flex-col justify-center items-center p-8 pb-9 text-left">
                    <h2 className="text-primaryVio text-5xl font-semibold pl-12">¿Por qué es el <br />destino más elegido?</h2>
                    <div className="max-w-[60%] mr-7"> {/* Ajuste del ancho del contenedor de los párrafos */}
                        <p className="flex items-start text-primaryVio text-base mt-4">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>Su <strong>ubicación geográfica</strong> te permitirá viajar y conocer otros países de Europa en cuestión de horas y de forma económica.</span>
                        </p>
                        <br />
                        <p className="flex items-start text-primaryVio text-base mt-2">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>Es un <strong>destino multicultural</strong> con su población proveniente de todas partes del mundo y con un fuerte <strong>legado vikingo</strong>.</span>
                        </p>
                        <br />
                        <p className="flex items-start text-primaryVio text-base mt-2">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>El <strong>inglés</strong> es su <strong>lengua oficial</strong>, por lo que estarás en contacto con el idioma todo el tiempo.</span>
                        </p>
                        <br />
                        <p className="flex items-start text-primaryVio text-base mt-2">
                            <img src={Icon} alt="Viñeta" className="mr-2" />
                            <span>Tiene buena <strong>calidad de vida</strong>, siendo uno de los países más seguros del mundo y con una <strong>economía en crecimiento</strong>.</span>
                        </p>
                    </div>
                </div>


                {/* Parte derecha con las imágenes en diagonal */}
                <div className="w-1/2 flex flex-col justify-between  mr-9">
                    <img src={Foto1} alt="Imagen 1" className="w-1/2 self-start" />
                    <img src={Foto2} alt="Imagen 2" className="w-1/2 self-end" />
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
                                    src={Idiomas}
                                    alt="Trabajo"
                                    className="w-full h-auto rounded-lg "
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full">
                                <Link to='/curso-de-idiomas'>
                                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-semibold leading-none text-center text-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                        Cursos de Idiomas
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
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
                                            Estudio y trabajo en el exterior
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
                                    src={universitarios}
                                    alt="Carreras Universitarias"
                                    className="w-full h-auto rounded-lg "
                                />
                                <div className="absolute bottom-0 left-0 w-full">
                                    <Link to='/carreras-universitarias'>
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


            <div className="mt-6 mb-8">
                <div className="flex items-center justify-center">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio text-center mr-2">
                        Comunidad VM en Irlanda
                    </h1>
                    <img src="/src/assets/PaisesDesplegables/BanderaIrlanda.png" alt="Bandera de Irlanda" className="w-14 h-9 " />
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
