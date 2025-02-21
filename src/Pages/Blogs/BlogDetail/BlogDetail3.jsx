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
import Blog3Carrucel from "./Blog3Carrucel";




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

    const steps = [
        {
            title: "1. Elige tu ciudad ideal en Irlanda",
            description:
                "El primer paso para tu aventura irlandesa es decidir dónde te gustaría vivir. Dublín, la capital, es famosa por su dinamismo y su vibrante vida social, pero otras ciudades como Cork, Galway o Limerick también tienen mucho que ofrecer. Cada una tiene su propio encanto, por lo que seguro encontrarás la que más se adapte a tu estilo.",
        },
        {
            title: "2. Selecciona tu curso y matrícula",
            description:
                "Irlanda es hogar de una amplia variedad de opciones educativas. Puedes optar por cursos de inglés o estudios superiores en instituciones de prestigio. Antes de solicitar tu visa, es esencial estar matriculado en un curso, lo que garantiza que puedas estudiar y trabajar legalmente mientras te sumerges en la cultura irlandesa.",
        },
        {
            title: "3. Solicita tu visa de estudiante",
            description:
                "Con tu matrícula en mano, el siguiente paso es solicitar la visa de estudiante. Existen diferentes tipos de visas dependiendo de la duración del curso y si deseas trabajar durante tu estancia. Nos aseguramos de orientarte sobre cuál es la visa más adecuada para tu situación.",
        },
        {
            title: "4. Prepárate para tu aventura en Irlanda",
            description:
                "Antes de tu partida, asegúrate de tener todos los documentos necesarios y revisa el clima irlandés para saber qué empacar. Aunque es impredecible, lleva ropa cómoda y apropiada. Y recuerda, tendrás tiempo para hacer compras cuando llegues.",
        },
        {
            title: "5. Gestiona tu IRP y PPSN",
            description:
                "Una vez en Irlanda, hay dos trámites esenciales que deberás realizar: el IRP (permiso de residencia) y el PPSN (número para acceder a servicios sociales y empleo). Es importante gestionarlos a tu llegada.",
        },
        {
            title: "6. Abre una cuenta bancaria y obtén tu número telefónico irlandés",
            description:
                "Abrir una cuenta bancaria irlandesa y obtener un número de teléfono local te resultarán muy útiles. Con una cuenta bancaria podrás gestionar tu dinero de forma eficiente y, con un número irlandés, te será más fácil comunicarte con posibles empleadores.",
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
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio mt-6 text-center">Descubre Dublín sin gastar un euro:<br /> Lugares y experiencias gratuitas</h1>
                </div>

                <p className=" text-lg leading-6 text-colorText mt-6">
                    Al llegar a Dublín, es normal preguntarse qué hacer sin gastar demasiado, ya que la ciudad puede parecer costosa a primera vista. Pero la realidad es que hay muchas opciones para explorar sin necesidad de abrir la cartera.
                    <br />                 <br />

                    En <strong>Vaga-Mundo, agencia de turismo educativo </strong>Vespecializada en cursos de inglés y estudios superiores en Irlanda, sabemos que cada euro cuenta cuando estás viviendo una experiencia en el extranjero. Por eso, hemos preparado una lista de los mejores lugares y actividades gratuitas para que disfrutes de Dublín al máximo.
                </p>


            </div>

            {/* Contenedor central */}

            <Blog3Carrucel />








            {/* FIN Contenedor central */}


            <div className="container mx-auto px-4 py-7">
                {/* Flex layout for lg, centered for md */}
                <div className=" w-full  px-4 py-8 text-center">

                    <h1 className="lg:text-5xl md:text-4xl text-2xl  leading-10 text-primaryVio mt-6 text-center">

                        Parques gratuitos en Dublín</h1>
                </div>

                <div className="py-8 relative flex ">
                    <div className="mx-auto container grid grid-cols-3 grid-rows-1 ">

                        <div className="w-72 bg-white shadow-lg rounded-lg">
                            <img src="https://www.theirishroadtrip.com/wp-content/uploads/2021/09/Merrion-Square-Dublin-by-Giovanni-Marineo.jpg" alt="Merrion Square" className="w-full h-44 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">Merrion Square</h2>
                                <p className="text-xs text-gray-600 mt-2">Un parque georgiano famoso por su estatua de Oscar Wilde y sus hermosos jardines.
                                </p>
                            </div>
                        </div>

                        <div className="w-72 bg-white shadow-lg rounded-lg">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Dublin_Stephen%27s_Green.jpg" alt="St. Stephen’s Green" className="w-full h-44 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">St. Stephen’s Green</h2>
                                <p className="text-xs text-gray-600 mt-2">Uno de los parques más visitados de Dublín. En el siglo XVII era un campo de pastoreo hasta que fue transformado en un espacio verde exclusivo para la alta sociedad. Hoy, es un lugar perfecto para relajarse.

                                </p>
                            </div>
                        </div>

                        <div className="w-72 bg-white shadow-lg rounded-lg">
                            <img src="https://www.culturedatewithdublin8.ie/content/images/_1010x520_crop_center-center_95_none_ns/Pheonix-park.jpg?v=1729152481" alt="Phoenix Park" className="w-full h-44 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">Phoenix Park</h2>
                                <p className="text-xs text-gray-600 mt-2">Uno de los parques urbanos más grandes de Europa, con 712 hectáreas de extensión. Es hogar de una manada de ciervos salvajes y ofrece paisajes espectaculares.

                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="p-6 md:p-12 max-w-4xl mx-auto">
                    <h2 className="text-primaryVio text-3xl md:text-5xl font-semibold text-center mb-6">
                        Calles y edificios históricos
                    </h2>
                    <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                        <li><strong>Henry Street:</strong> Después de Grafton, es la segunda calle comercial más popular de la ciudad.</li>
                        <li><strong>City Hall:</strong> Ubicado en Parliament Street, este edificio histórico fue sede del gobierno británico en Irlanda hasta 1922.</li>
                        <li><strong>Bank of Ireland:</strong> Fundado en 1783, este banco sigue operando en pleno centro de Dublín.</li>
                        <li><strong>Huguenot Cemetery:</strong> Un pequeño cementerio del siglo XVII, ubicado cerca de St. Stephen’s Green.</li>
                    </ul>

                    <h2 className="text-primaryVio text-3xl md:text-5xl font-semibold text-center mt-10 mb-6">
                        Monumentos gratuitos en Dublín
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-base md:text-lg">
                        {[
                            "The Famine Sculpture",
                            "Molly Malone Statue",
                            "Dublin Spire",
                            "O’Connell Monument",
                            "James Joyce Statue",
                            "Charles S. Parnell Monument",
                            "Phil Lynott Statue",
                            "Duke of Wellington Monument",
                            "Brendan Behan Sculpture",
                            "The Last Supper Mural",
                            "The Hungry Tree"
                        ].map((monument, index) => (
                            <li key={index} className="p-4 bg-white shadow-md rounded-lg text-center">{monument}</li>
                        ))}
                    </ul>
                </div>





                <div className="container mx-auto px-4 py-7">
                    {/* Flex layout for lg, centered for md */}
                    <div className=" w-full  px-4 py-8 text-center">

                        <h1 className="lg:text-5xl md:text-4xl text-2xl  leading-10 text-primaryVio mt-6 text-center">

                            Consejos para disfrutar Dublín sin gastar de más                         </h1>
                    </div>

                    <div className="space-y-6 max-w-[980px] mx-auto pl-5">
                        <div className="flex items-start">
                            <span className="text-secondaryTur2 text-2xl font-bold">✓</span>
                            <p className="text-gray-700 text-left w-full md:w-[100%] pl-3">
                                <span className="font-semibold">Únete a un Free Walking Tour:</span>
                                Puedes reservarlo online y solo dejar una propina voluntaria al guía. Es una forma increíble de conocer la historia y los puntos clave de la ciudad. Además, con el código Vaga-Mundo podrás obtener un 5% de descuento en los tours de nuestros amigos de Irlanda Oculta.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <span className="text-secondaryTur2 text-2xl font-bold">✓</span>
                            <p className="text-gray-700 text-left w-full md:w-[100%] pl-3">
                                <span className="font-semibold">Lleva tu credencial de estudiante:</span>
                                Muchos museos y atracciones ofrecen descuentos o entrada gratuita para estudiantes.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <span className="text-secondaryTur2 text-2xl font-bold">✓</span>
                            <p className="text-gray-700 text-left w-full md:w-[100%] pl-3">
                                <span className="font-semibold">Visita museos los domingos:</span>
                                La mayoría de los museos en Dublín son gratuitos este día de la semana.
                            </p>
                        </div>
                    </div>

                    <p className=" text-lg leading-6 text-colorText mt-6">


                        <br />¿Listo para comenzar tu viaje educativo? Contáctanos y planifica con nosotros esta experiencia que cambiará tu vida.

                    </p>
                    <p className=" text-lg leading-6 text-colorText mt-6">


                        ¡Nos vemos en la próxima aventura! 🌍✈️

                    </p>

                    <div className="inline-block py-8 lg:pl-0 pl-8">
                        <Link to='https://wa.me/541171366335/?text=Hola%20Vaga-Mundo,%20quisiera%20explorar%20opciones%20educativas%20en%20el%20extranjero'>
                            <button className="elementor-button bg-secondaryTur2 text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300 hover:scale-105">
                                {t("banner.btn")}                        </button>
                        </Link>
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

export default PagesBlogs