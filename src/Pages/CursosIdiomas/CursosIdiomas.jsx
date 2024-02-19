import React, { useState } from 'react';
import Navbar from '../../Componentes/Navbar/Navbar'
import Footer from '../../Componentes/Footer/Footer'
import Cursos from '../../assets/Img/javier-trueba-iQPr1XkF5F0-unsplash.jpg'
import countriesData from './countries.json';
import CursoDetail from './CursoDetail'


const CursosIdiomas = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    return (
        <div>
            <Navbar />

            <div className='overflow-y-hidden'>
                <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
                    <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
                        <div className>
                            <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">Cursos de Idioma</p>
                            <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">VIVIR un IDIOMA es una experiencia de por vida!​ </p>
                            <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                                <img src={Cursos} alt="ongoing meeting" className="w-full obejct-fit object-center object-fill h-full" />
                            </div>
                            <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 relative">
                                        <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg" alt="clock" />
                                        </div>
                                    </div>
                                    <div className="flex items-start flex-col ml-6 pt-8">
                                        <h2 className="text-lg font-semibold leading-4 text-gray-800">Cursos de 12 semanas</h2>
                                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Cursos cortos de idioma</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-16 h-16 relative">
                                        <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg" alt="Friendly" />
                                        </div>
                                    </div>
                                    <div className="flex items-start flex-col ml-6 pt-8">
                                        <h2 className="text-lg font-semibold leading-4 text-gray-800">Fluidez</h2>
                                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">A responder ante situaciones de la vida como un local</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-16 h-16 relative">
                                        <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg" alt="Creative" />
                                        </div>
                                    </div>
                                    <div className="flex items-start flex-col ml-6 pt-8">
                                        <h2 className="text-lg font-semibold leading-4 text-gray-800">Creatividad</h2>
                                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Ser capaz de pensar y hablar en varios idiomas distintos te proporciona creatividad para diferentes aspectos de la vida</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-16 h-16 relative">
                                        <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg" alt="Achievments" />
                                        </div>
                                    </div>
                                    <div className="flex items-start flex-col ml-6 pt-8">
                                        <h2 className="text-lg font-semibold leading-4 text-gray-800">Certificaciones</h2>
                                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Obtene tus certificados para sumar a tu curriculum para tu entorno laboral</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                            <img src={Cursos} alt="ongoing meeting" className="w-full obejct-fit object-center object-fill h-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-20 flex flex-col items-center justify-center">
                <div className="xl:w-1/2 w-11/12">
                    <h1 role="heading" tabIndex={0} className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
                        Cursos disponibles                 </h1>
                    <h2 role="contentinfo" tabIndex={0} className="text-base leading-normal text-center text-gray-600 mt-5">
                        Las clases comienzan todos los lunes, ¡vos elegís cuándo viajar!
                        Y NO SE REQUIERE CONOCIMIENTO PREVIO                    </h2>

                </div>
                <div className='py-6'>

                <select  onChange={handleChange} value={selectedCountry}>
                <option value="">Selecciona un Idioma</option>
                {countriesData.map((country, index) => (
                    <option key={index} value={country.Name}>{country.Name}</option>
                ))}
            </select>
            </div>
            <div>
            
            {selectedCountry && <CursoDetail country={selectedCountry} />}

            </div>
            </div>


            <Footer />
        </div>
    )
}

export default CursosIdiomas