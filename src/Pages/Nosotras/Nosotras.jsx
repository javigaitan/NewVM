import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Componentes/Navbar/Navbar';
import Footer from '../../Componentes/Footer/Footer';
import LINEAPUNTEADA from '../../assets/Nosotros/lineapunteada.png';
import IMG1 from '../../assets/Nosotros/nosotros1.png';
import IMG2 from '../../assets/Nosotros/nosotros2.png';
import IMG3 from '../../assets/Nosotros/nosotros3.png';
import IMG4 from '../../assets/Nosotros/nosotros5.png';
import { useTranslation } from "react-i18next";
import BGF from "../../assets/Textura/backdeskprueba.svg";
import INTA from '../../assets/iconsRedes/ig.png';
import FB from '../../assets/iconsRedes/fb.png';
import LINK from '../../assets/iconsRedes/link.png';
import YT from '../../assets/iconsRedes/yt.png';
import TIK from '../../assets/iconsRedes/tiktok.png';
import BGFG from '../../assets/Textura/Footermovile1 1.png';
import ICEF from '../../Componentes/ICEF/iceflogo.svg';
import Logo2 from "../../assets/Textura/English Education logo.svg";
import Logo3 from "../../assets/Textura/ST_ReferenceChecked-CMYK 1.svg";


const Nosotras = () => {
  const [t, i18n] = useTranslation("navbar");

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen pb-4">
        {/* Imagen punteada visible solo en lg 
        <img
          src={LINEAPUNTEADA}
          alt="Línea punteada"
          className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"
          style={{ height: '96%', width: '97%' }}
        />*/}
        <div className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container relative z-10">
          <div className="md:flex items-center justify-between w-full">
            <div className="w-full text-left mb-8">
              <h1 className="lg:text-5xl text-4xl b-10 lg:pb-10 lg:text-start text-center font-bold text-primaryVio">{t("about.title")}</h1>
            </div>
          </div>

          {/* Bloque de texto-imagen para lg, texto primero en mobile */}
          <div className="flex flex-col md:flex-row items-center w-full p-6 space-y-8 md:space-y-0 md:space-x-8 relative z-10">
            <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <p className="lg:text-2xl  text-xl text-primaryVio">{t("about.text1")}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={IMG1}
                alt="Nosotros"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Invertir texto-imagen en responsive */}
          <div className="flex flex-col-reverse md:flex-row items-center w-full p-6 space-y-8 md:space-y-0 md:space-x-8 relative z-10">
            <div className="w-full md:w-1/2">
              <img
                src={IMG2}
                alt="Nosotros"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mb-2 md:mb-0 p-2">
              <p className="lg:text-xl text-xl text-primaryVio pl-0 md:pl-14">{t("about.text2")}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center w-full p-6 space-y-8 md:space-y-0 md:space-x-8 relative z-10">
            <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <p className="lg:text-2xl text-xl text-primaryVio">{t("about.text3")}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={IMG3}
                alt="Nosotros"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center w-full p-6 space-y-8 md:space-y-0 md:space-x-8 relative z-10 pb-6">
            <div className="w-full md:w-1/2">
              <img
                src={IMG4}
                alt="Nosotros"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-4 pb-8">
              <p className="lg:text-2xl  text-xl text-primaryVio pl-0 md:pl-5">{t("about.text4")}</p>
            </div>
          </div>

          {/* Video */}
          <div className="relative z-10 pt-6 pb-3">
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-8 text-primaryVio mt-6 text-center">
              {t("about.title2")}</h1>
            <div className="flex justify-center mt-8">
              <div className="w-full md:w-2/3 lg:w-1/2">
                <div className="relative overflow-hidden pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/vF9afFz-xTw?si=HfC_RY0uJsE0uqk0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Webinar de Malta vs Irlanda"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
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
    </>
  );
};

export default Nosotras;
