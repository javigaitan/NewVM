import React from 'react';
import Navbar from '../../Componentes/Navbar/Navbar';
import Footer from '../../Componentes/Footer/Footer';
import LINEAPUNTEADA from '../../assets/Nosotros/lineapunteada.png';
import IMG1 from '../../assets/Nosotros/nosotros1.png';
import IMG2 from '../../assets/Nosotros/nosotros2.png';
import IMG3 from '../../assets/Nosotros/nosotros3.png';
import IMG4 from '../../assets/Nosotros/nosotros5.png';
import {useTranslation} from "react-i18next";


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
        <Footer />
      </div>
    </>
  );
};

export default Nosotras;
