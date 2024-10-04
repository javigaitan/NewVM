import React from 'react';
import Navbar from '../../Componentes/Navbar/Navbar';
import CURSO from '../../assets/ServiciosVM/estudio y trabajo en el exterior.png';
import WyS from '../../assets/ServiciosVM/curso idioma.png';
import universitarios from '../../assets/ServiciosVM/UNIVERSIDAD.png';
import { Link } from 'react-router-dom';
import FormContactanos from '../../Componentes/FormContactanos/FormContactanos';

const Universidades = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-start">
                    <div className="w-full lg:w-1/2 p-4 flex justify-center">
                        <img src={universitarios} alt="Curso de Idiomas" className="w-full h-auto" />
                    </div>
                    <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <h1 className="text-4xl font-bold mb-4 text-primaryVio">Carreras y posgrados universitarios</h1>
                        <p className="text-lg text-colorText">
                            Este tipo de experiencia es ideal para quienes tienen un buen nivel de inglés y desean comenzar una carrera de grado en el extranjero.
                            <br/> También es una excelente opción para aquellos que ya tienen un título universitario en su país de origen e invierten en su desarrollo profesional realizando un posgrado o máster en el extranjero.
                            <br/>
                            Asimismo, dependiendo del destino elegido, algunas opciones académicas permiten que el interesado adquiera experiencia laboral con la misma visa de estudiante luego de finalizada la cursada.
                        </p>
                        <div className="pt-10 pb-8">
                            <Link to='https://wa.me/541138750336/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20cotizar%20mi%20viaje!'>
                                <button className="elementor-button bg-secondaryTur2 text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300 hover:scale-105">
                                    Solicita tu cotización
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="lg:text-5xl md:text-5xl text-3xl font-semibold leading-10 text-primaryVio mt-6 text-center">
                    Otras experiencias
                </h1>

                <div className="flex flex-wrap justify-center mt-8">
                    <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                            <div className="relative">
                                <img
                                    src={CURSO}
                                    alt="curso-de-idiomas"
                                    className="w-full h-auto rounded-lg" />
                                <div className="absolute bottom-0 left-0 w-full">
                                    <Link to='/work&study'>
                                        <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-lg shadow-lg">
                                            Estudio y trabajo en el exterior
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                            <div className="relative">
                                <img
                                    src={WyS}
                                    alt="Cursos de Idiomas"
                                    className="w-full h-auto rounded-lg" />
                                <div className="absolute bottom-0 left-0 w-full">
                                    <Link to='/curso-de-idiomas'>
                                        <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-lg shadow-lg">
                                            Cursos de Idiomas
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <FormContactanos/>
        </div>
    );
}

export default Universidades;
