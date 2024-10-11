import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BGF from "../../assets/Textura/footerExp.png";
import INTA from '../../assets/iconsRedes/ig.png';
import FB from '../../assets/iconsRedes/fb.png';
import LINK from '../../assets/iconsRedes/link.png';
import YT from '../../assets/iconsRedes/yt.png';
import TIK from '../../assets/iconsRedes/tiktok.png';
import BGFG from '../../assets/Textura/footerbackgris.png';

const FormContactanos = () => {
    useEffect(() => {
        const existingScript = document.querySelector('script[src="//js-eu1.hsforms.net/forms/embed/v2.js"]');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
            script.type = "text/javascript";
            script.charset = "utf-8";
            script.onload = () => {
                if (window.hbspt) {
                    window.hbspt.forms.create({
                        region: "eu1",
                        portalId: "26265942",
                        formId: "d6f4e4f2-54c7-491d-b121-9c55701e02f6",
                        target: "#hubspotForm"
                    });
                }
            };
            document.body.appendChild(script);
        } else {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "eu1",
                    portalId: "26265942",
                    formId: "d6f4e4f2-54c7-491d-b121-9c55701e02f6",
                    target: "#hubspotForm"
                });
            }
        }
    }, []);

    return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Fondo con gradiente */}
      <div className=" absolute inset-x-0 top-0 bg-gradient-to-b from-secondaryTur/70 to-secondaryTur2/70 rounded-t-full -z-10 h-full" ></div>

      {/* Contenedor para el h1 */}
      <div className="absolute top-20 text-center z-20 w-full">
        <h1 className="text-primaryVio text-4xl font-bold mb-4">ESCRÍBENOS</h1>
      </div>

      {/* Contenedor del formulario con margen superior */}
      <div className="relative z-10 bg-white rounded-2xl p-8 w-full max-w-lg mt-40 pb-30"> 
        <div id="hubspotForm" className="w-full"></div>
      </div>



      {/* Contenedor del footer */}
      <div className="relative w-full h-auto mt-5">
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
        className="object-cover lg:hidden"
      />

      <div className="p-6 text-center absolute inset-0 z-10 flex flex-col items-center lg:pt-8 md:pt-1">        
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
                    <p className="text-2xl font-bold hover:text-secondaryTur2">Inicio</p>
                    <hr className="line" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/contacto" className="text-colorWhite">
                    <p className="text-2xl font-semibold hover:text-secondaryTur2">Contáctanos</p>
                    <hr className="line" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="https://blog.vaga-mundo.com/es/terminos-y-condiciones-0" className="text-colorWhite">
                    <p className="text-2xl font-semibold hover:text-secondaryTur2">Términos y condiciones</p>
                    <hr className="line" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="https://blog.vaga-mundo.com/es/politicas-privacidad" className="text-colorWhite">
                    <p className="text-2xl font-semibold hover:text-secondaryTur2">Política de privacidad</p>
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
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-xl text-colorWhite font-semibold hover:text-secondaryTur2">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link to="https://blog.vaga-mundo.com/es/terminos-y-condiciones-0" className="text-xl text-colorWhite font-semibold hover:text-secondaryTur2">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="https://blog.vaga-mundo.com/es/politicas-privacidad" className="text-xl text-colorWhite font-semibold hover:text-secondaryTur2">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

      



    </div>


    );
}

export default FormContactanos;
