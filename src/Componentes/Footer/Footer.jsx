import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BGF from "../../assets/Textura/footerdesk.png"; {/*backdeskprueba.svg*/}
import BGFM from '../../assets/Textura/Footermovile1 1.png';
import INTA from '../../assets/iconsRedes/ig.png';
import FB from '../../assets/iconsRedes/fb.png';
import LINK from '../../assets/iconsRedes/link.png';
import YT from '../../assets/iconsRedes/yt.png';
import TIK from '../../assets/iconsRedes/tiktok.png';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("navbar");

  useEffect(() => {
    // Crear un script y agregarlo al footer
    const script = document.createElement('script');
    script.src = "https://www-cdn.icef.com/scripts/iasbadgeid.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";

    document.body.appendChild(script);

    return () => {
      // Remover el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className="relative w-full h-[850px] lg:h-auto mt-5"> {/* Added explicit height */}
      {/* Imagen de fondo para pantallas grandes */}
      <img
        src={BGF}
        alt="Footer background image"
        className="object-cover w-full h-[850px] absolute inset-0 z-0 hidden lg:block"
      />

      {/* Imagen de fondo para pantallas medianas y pequeñas */}
      <img
        src={BGFM}
        alt="Footer background image mobile"
        className="object-cover lg:hidden"
      />
<div className='absolute  left-0 z-20 p-4'>
        {/* Contenedor del badge en la esquina inferior izquierda */}
        <div className=" left-0 z-20 ">
          <span id="iasBadge" data-account-id="5281"></span>
        </div>
        </div>

      <div className="p-6 text-center absolute inset-0 z-10 flex flex-col items-center lg:pt-8 md:pt-1 ">
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
        
{/* Contenedor del badge en la esquina inferior izquierda */}
<div className="absolute bottom-0 left-0 z-20 p-4"> {/* Only ONE badge container */}
        <span id="iasBadge" data-account-id="5281"></span>
        </div>
      </div>
        
    </div>
    
  );
};

export default Footer;
