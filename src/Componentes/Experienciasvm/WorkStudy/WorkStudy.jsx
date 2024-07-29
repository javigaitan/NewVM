import React from 'react';
import Navbar from '../../Navbar/Navbar';
import CURSO from '../../../assets/ServiciosVM/cursodeidiomas.png';
import WyS from '../../../assets/ServiciosVM/estudio y trabajo en el exterior.png';
import universitarios from '../../../assets/ServiciosVM/posgrados.png';
import { Link } from 'react-router-dom';
import FormContactanos from '../../FormContactanos/FormContactanos';

const WorkStudy = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 p-4">
                        <img src={CURSO} alt="Curso de Idiomas" className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <h1 className="text-3xl font-bold mb-4">Cursos de Idioma</h1>
                        <div className="text-left">
                            <p className="text-lg">
                                Este tipo de experiencia es ideal para quienes disponen de poco tiempo para viajar o desean integrar el aprendizaje o perfeccionamiento del idioma durante su próxima travesía.
                                También es una opción para aquellos que desean realizar un voluntariado o son nómadas digitales, ya que tienen un trabajo remoto que les permite trabajar desde cualquier parte del mundo.
                                Los interesados pueden optar por estudiar idiomas hasta por 12 semanas, ya sea en cursos generales o especializados en algún rubro o disciplina puntual.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio mt-6 text-center">
                    Otras experiencias            </h1>


                    <div className="flex flex-wrap justify-center mt-8">

                

                <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                        <div className="relative">
                            <img 
                                src={WyS} 
                                alt="Viajes Grupales" 
                                className="w-full h-auto rounded-lg " 
                            />
                            <div className="absolute bottom-0 left-0 w-full">
                                <Link to='/viajes-grupales'>
                                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-lg shadow-lg focus:outline-none">
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
                                src={universitarios} 
                                alt="Carreras Universitarias" 
                                className="w-full h-auto rounded-lg " 
                            />
                            <div className="absolute bottom-0 left-0 w-full">
                                <Link to='/carreras-universitarias'>
                                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                        Carreras y posgrados universitarios
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

export default WorkStudy;
