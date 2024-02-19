import React, { useEffect } from 'react';
import countriesData from './countries.json';
import CursosList from './CursosList';
import ScrollReveal from 'scrollreveal';
import RequisitosList from '../../Componentes/Experienciasvm/WorkStudy/RequisitosList';



const CursoDetail = ({ country }) => {
    const countryDetails = countriesData.find((c) => c.Name === country);

    if (!countryDetails) {
        return <div>Idioma no encontrado</div>;
    }

    useEffect(() => {
        // Configuración de ScrollReveal
        ScrollReveal().reveal('.detail-container', {
            delay: 300,
            distance: '50px',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });
    }, []);

    return (
        <div>


            <div className="detail-container 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
                <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                    {/* <!-- Description Div --> */}

                    <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                        <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{countryDetails.Name}</h2>
                        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{countryDetails.descripcion}</p>

                        <h3 className="font-semibold lg:text-3xl text-2xl lg:leading-9 leading-7 text-gray-800 mt-4">Destinos</h3>
                        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{countryDetails.Destinos}</p>



                        <div className='py-5'>
                            <button className=" py-3 elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                                Solicita mas informacion
                            </button>
                        </div>
                    </div>


                    {/* <!-- Preview Images Div For larger Screen--> */}

                    <div className=" w-3/4   sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">

                        <div className=" w-full lg:w-8/12 bg-white flex justify-center items-center">
                            <img src={countryDetails.foto} alt="Imagen ilustrativa del pais" />
                        </div>
                       

                    </div>
                </div>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">Tipos de cursos </h1>

                <RequisitosList requisitos={countryDetails.requisitos} /> {/* Renderiza los requisitos */}


            </div>
        </div>
    )
}

export default CursoDetail