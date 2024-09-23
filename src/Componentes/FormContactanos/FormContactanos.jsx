import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BGF from "../../assets/Textura/footerExp.png";
import INTA from '../../assets/iconsRedes/ig.png';
import FB from '../../assets/iconsRedes/fb.png';
import LINK from '../../assets/iconsRedes/link.png';
import YT from '../../assets/iconsRedes/yt.png';
import TIK from '../../assets/iconsRedes/tiktok.png';

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
      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-secondaryTur/70 to-secondaryTur2/70 rounded-t-full -z-10 h-full"></div>

      {/* Contenedor para el h1 */}
      <div className="absolute top-20 text-center z-20 w-full">
        <h1 className="text-primaryVio text-4xl font-bold mb-4">ESCRÍBENOS</h1>
      </div>

      {/* Contenedor del formulario con margen superior */}
      <div className="relative z-10 bg-white rounded-2xl p-8 w-full max-w-lg mt-40 pb-30"> {/* Añadido mt-16 para margen superior */}
        <div id="hubspotForm" className="w-full"></div>
      </div>

      <div className="relative w-full h-[750px] mt-35" style={{ marginTop: '50px' }}>
      <img
        src={BGF}
        alt="Footer background image"
        className="object-cover w-full h-[850px] absolute inset-0 z-0 "
      />
      <div className="p-6  text-center absolute inset-0 z-10 flex flex-col items-center pt-30" style={{ paddingTop: '55px' }}>
        <div className="flex space-x-4 pt-50">
          <a href="https://www.instagram.com/vagamundo_travellers/" target="_blank" rel="noopener noreferrer">
            <img src={INTA} alt="Instagram icon" className="w-16 h-16" />
          </a>
          <a href="https://www.facebook.com/VagaMundoTravellers/" target="_blank" rel="noopener noreferrer">
            <img src={FB} alt="Facebook icon" className="w-16 h-16" />
          </a>
          <a href="https://www.linkedin.com/company/vaga-mundo/" target="_blank" rel="noopener noreferrer">
            <img src={LINK} alt="Link icon" className="w-16 h-16" />
          </a>
          <a href="https://www.youtube.com/@vaga-mundo" target="_blank" rel="noopener noreferrer">
            <img src={YT} alt="YouTube icon" className="w-16 h-16" />
          </a>
          <a href="https://www.tiktok.com/@vaga_mundo_travellers" target="_blank" rel="noopener noreferrer">
            <img src={TIK} alt="TikTok icon" className="w-16 h-16" />
          </a>
        </div>
        <div className="text-center relative " style={{ paddingLeft: '460px' }} >
          <div className="flex flex-col items-center mt-60">
            <div className="w-full">
              <ul className="menu-list">
                <li className="menu-item">
                  <Link to="/" className="text-colorWhite">
                    <p className="text-2xl font-bold">Inicio</p>
                    <hr className="line" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/contacto" className="text-colorWhite">
                    <p className="text-2xl font-semibold">Contáctanos</p>
                    <hr className="line" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="https://blog.vaga-mundo.com/es/terminos-y-condiciones-0" className="text-colorWhite">
                    <p className="text-2xl font-semibold">Términos y condiciones</p>
                    <hr className="line" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="https://blog.vaga-mundo.com/es/politicas-privacidad" className="text-colorWhite">
                    <p className="text-2xl font-semibold">Políticas de privacidad</p>
                    <hr className="line" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>



      </div>
    </div>

    </div>


    );
}

export default FormContactanos;
