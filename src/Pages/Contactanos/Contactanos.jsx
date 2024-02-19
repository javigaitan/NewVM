import React, { useEffect } from 'react';
import Navbar from '../../Componentes/Navbar/Navbar';
import Footer from '../../Componentes/Footer/Footer';

const Contactanos = () => {

    useEffect(() => {
        // Obtener una referencia al script de HubSpot por su id
        const script = document.createElement('script');
        script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);

        // Limpia el script cuando el componente se desmonta
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <Navbar />
            <div>
                <div className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50" style={{ height: 900 }}>
                    <div className="md:flex items-center justify-between w-full bg-gray-50">
                        <div className="xl:w-1/3 md:w-1/2 w-full">
                            <h1 role="heading" className="focus:outline-none md:w-60 font- md:text-4xl text-l leading-tight text-primaryVio">
                                Hora de comenzar tu aventura
                            </h1>
                            <div className="mt-5">
                                <p className="flex items-center md:p-3 p-1 focus:outline-none text-l font- leading-5 text-colorText focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                    Todes necesitamos un empujón, una palabra de aliento que nos haga confiar en nosotres mismes. Nuestro equipo está preparado para eso. Déjanos tus datos y te acompañamos en la decisión. <br />
                                    Una vez completado el formulario, una de nuestras consultoras se contactará a la brevedad. Somos cracks en las nuevas tecnologías. ¿Zoom, WhatsApp, Google Meet…? Nos adaptamos a tí. Nuestra oficina está ubicada en Dublín (Irlanda). Tenemos representantes en todo el mundo viviendo las mismas experiencias que puedes vivir tú y, por esa razón, podemos atenderte en cualquier lugar, en cualquier momento, brindando información valiosa y actualizada sobre cada destino.
                                </p>
                                <h2 role="heading" className="focus:outline-none md:w-60 font-bold md:text-2xl text-l leading-tight text-primaryVio">
                                    Informacion
                                </h2>
                                <p className="flex items-center md:p-3 p-1 focus:outline-none text-l font- leading-5 text-colorText focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                    Teléfono: +54 9 11 3875-0336<br />
                                    Email: consultas@vaga-mundo.com<br />
                                    Dirección: 1 Thomastown House, Spencer Dock, IFSC, Dublin 1.<br />
                                </p>
                                <div className="inline-block py-5">
                                    <button className="elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                                        Solicita tu cotización
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-1">
                        {/* Contenido derecho */}
                        {/* Aquí se mostrará el formulario de HubSpot */}


                        <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
                        <div className="hubspot-form" id="my-hubspot-form"></div>

                            <div className="w-full">

                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contactanos;
