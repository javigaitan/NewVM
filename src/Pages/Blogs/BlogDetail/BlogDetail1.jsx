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




const PagesBlogs = () => {
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
                    <h1 className="text-4xl font-bold text-colorWhite dark:text-white mb-10 pt-14">Vaga Mundo Blog
                    </h1>

                </div>


            </div>

            <div className="container mx-auto px-4 py-7">
                {/* Flex layout for lg, centered for md */}
                <div className=" w-full  px-4 py-8 text-center">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio mt-6 text-center">Descubre Irlanda<img src={IrlandaBandera} alt="Bandera de Irlanda" className="w-12 h-10 inline-block mx-2" />:
                        <br/> El Destino Perfecto para Aprender Inglés </h1>
                </div>

                <p className=" text-lg leading-6 text-colorText mt-6">Si estás buscando un destino que combine educación de calidad, una cultura fascinante y una experiencia de vida única, Irlanda es tu lugar ideal. En Vaga-Mundo, somos especialistas en turismo educativo y estamos aquí para ayudarte a dar el gran salto y estudiar inglés en este hermoso país.
                </p>

            </div>
           {/* Dividido en dos partes */}
<div className="flex my-10 py-12 ml-6 items-stretch">
    {/* Parte izquierda con el texto */}
    <div className="w-1/2 flex flex-col justify-center items-center p-8 pb-10 text-left pt-0">
        <h2 className="text-primaryVio text-5xl font-semibold pl-12 pt-0 mt-0 pb-9">
            ¿Cómo te ayudamos <br /> a estudiar en Irlanda?
        </h2>
        <div className="max-w-[60%] mr-7">
            <p className="flex items-start text-primaryVio text-base mt-4">
                <img src={Icon} alt="Viñeta" className="mr-2" />
                <span>
                    <strong>Asesoramiento personalizado</strong>: Analizamos tus intereses y presupuesto para encontrar el curso de inglés que mejor se ajuste a tus necesidades.
                </span>
            </p>
            <br />
            <p className="flex items-start text-primaryVio text-base mt-2">
                <img src={Icon} alt="Viñeta" className="mr-2" />
                <span>
                    <strong>Inscripción en escuelas acreditadas</strong>: Te ayudamos a inscribirte en las mejores escuelas de idiomas en Irlanda.
                </span>
            </p>
            <br />
            <p className="flex items-start text-primaryVio text-base mt-2">
                <img src={Icon} alt="Viñeta" className="mr-2" />
                <span>
                    <strong>Soporte en la gestión de visa</strong>: Aunque no tramitamos la visa directamente, te brindamos todo el apoyo necesario para que puedas gestionarla sin dificultades.
                </span>
            </p>
            <br />
            <p className="flex items-start text-primaryVio text-base mt-2">
                <img src={Icon} alt="Viñeta" className="mr-2" />
                <span>
                    <strong>Residencia propia para recibirte</strong>: Cuando llegues a Irlanda, te recibiremos en nuestra residencia, ofreciéndote un lugar cómodo y seguro mientras te instalas.
                </span>
            </p>
            <br />
            <p className="flex items-start text-primaryVio text-base mt-2">
                <img src={Icon} alt="Viñeta" className="mr-2" />
                <span>
                    <strong>Ayuda para encontrar tu hogar</strong>: Una vez que te hayas instalado, te apoyamos en la búsqueda de alojamiento permanente, para que encuentres el lugar ideal para vivir durante tu estancia.
                </span>
            </p>
        </div>
    </div>

    {/* Parte derecha con la imagen ajustada */}
    <div className="w-1/2 flex justify-center items-center">
        <img src={Foto1} alt="Imagen 1" className="max-w-[calc(100%-32px)] h-auto object-cover" />
    </div>
</div>


            <div className=" py-12 px-6 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-primaryVio text-5xl font-semibold pl-12 pt-0 mt-0 pb-9">Opciones de estudio en Irlanda</h1>
                    <p className="text-gray-600 mb-8">
                        En Vaga-Mundo, ofrecemos diversas opciones de estudio en Irlanda según tus necesidades y objetivos.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold text-colorText">Cursos de inglés general</h2>
                        <p className="text-gray-600 mt-2">
                            Disponibles para todos los niveles, desde principiantes hasta avanzados. Puedes elegir entre cursos cortos
                            de hasta 3 meses o programas más largos que te permiten obtener una visa de estudio y trabajo.
                        </p>
                    </div>

                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold text-colorText">Inglés especializado</h2>
                        <p className="text-gray-600 mt-2">
                            Si tienes objetivos más específicos, ofrecemos programas de inglés para negocios, comunicación profesional
                            y otros fines académicos y laborales.
                        </p>
                    </div>

                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold text-colorText">Inglés intensivo</h2>
                        <p className="text-gray-600 mt-2">
                            Si deseas avanzar rápidamente, los cursos intensivos son ideales. Con horarios más concentrados y clases intensas,
                            mejorarás tu nivel de inglés en poco tiempo.
                        </p>
                    </div>
                </div>


                <div className="bg-white shadow-lg rounded-lg p-8 mt-10">
  <h2 className="text-primaryVio text-5xl font-semibold pl-10 pt-0 mt-0 pb-9  mx-auto text-center">
    ¿Por qué elegir Irlanda para estudiar inglés?
  </h2>

  <div className="space-y-6 max-w-[980px] mx-auto">
    <div className="flex items-start">
      <span className="text-secondaryTur2 text-2xl font-bold mr-3">✓</span>
      <p className="text-gray-700">
        <span className="font-semibold">Educación de primera calidad:</span>
        Irlanda es hogar de algunas de las escuelas de idiomas más prestigiosas del mundo. Sus programas están diseñados para ofrecerte una formación dinámica y de alto nivel.
      </p>
    </div>

    <div className="flex items-start">
      <span className="text-secondaryTur2 text-2xl font-bold mr-3">✓</span>
      <p className="text-gray-700">
        <span className="font-semibold">Un destino acogedor y seguro:</span>
        Los irlandeses son famosos por su hospitalidad y calidez, creando un ambiente perfecto para que los estudiantes internacionales se adapten rápidamente y se sientan como en casa.
      </p>
    </div>

    <div className="flex items-start">
      <span className="text-secondaryTur2 text-2xl font-bold mr-3">✓</span>
      <p className="text-gray-700">
        <span className="font-semibold">Oportunidades laborales para estudiantes:</span>
        Como estudiante internacional en Irlanda, podrás trabajar medio tiempo mientras estudias. Esta oportunidad te permitirá ganar experiencia laboral, conocer la cultura local y cubrir parte de tus gastos.
      </p>
    </div>

    <div className="flex items-start">
      <span className="text-secondaryTur2 text-2xl font-bold mr-3">✓</span>
      <p className="text-gray-700">
        <span className="font-semibold">Inmersión lingüística total:</span>
        Estudiar en un país de habla inglesa acelera tu aprendizaje de manera natural y efectiva. La práctica diaria del idioma en tu entorno te ayudará a mejorar rápidamente.
      </p>
    </div>

    <div className="flex items-start">
      <span className="text-secondaryTur2 text-2xl font-bold mr-3">✓</span>
      <p className="text-gray-700">
        <span className="font-semibold">Paisajes impresionantes y cultura vibrante:</span>
        Irlanda es famosa por su belleza natural, desde sus castillos medievales hasta los acantilados sobre el océano Atlántico. Además, su rica cultura te brindará una experiencia única fuera del aula.
      </p>
    </div>
  </div>
</div>
</div>









            <div className="pt-12">
                <Footer />
            </div>
        </div >

    )
}

export default PagesBlogs