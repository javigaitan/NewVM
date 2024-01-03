import React, { useEffect } from 'react';

const Newsletter = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/shell.js';
    document.head.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '26265942',
          formId: 'cf3978f2-3112-41f2-917c-9100a946a4c3',
          target: '#hubspotForm'
        });
      }
    };
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (


    <>
      <div className="2xl:mx-auto 2xl:container mx-4 py-16">
        <div className=" w-full  relative flex items-center justify-center">
          <img src="https://i.ibb.co/4sYZ8gC/img-2.png" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
          <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
          <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0  sm:hidden " />
          <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
            <h1 className="text-4xl font-semibold leading-9 text-white text-center">No te pierdas nuestras promociones, sorteos y beneficios!</h1>
            <p className="text-base leading-normal text-center text-white mt-6">
              Suscribite para estar al dia con todos los beneficios y promociones. <br />No te quedes afuera de nada!
            </p>

            <div id="hubspotForm" className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
              {/* Contenedor para el formulario de HubSpot */}
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Newsletter