import React from 'react';
import Navbar from '../../Componentes/Navbar/Navbar';
import CURSO from '../../assets/ServiciosVM/estudioytrabajoexterior.png';
import WyS from '../../assets/ServiciosVM/curso idioma.png';
import universitarios from '../../assets/ServiciosVM/posgrados.png';
import { Link } from 'react-router-dom';
import FormContactanos from '../../Componentes/FormContactanos/FormContactanos';

const WorkandStudy = () => (
    <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 p-4">
                    <img src={CURSO} alt="Curso de Idiomas" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-4xl font-bold mb-3 pb-5 text-start text-primaryVio">Estudio y trabajo en el exterior</h1>
                    <div className="text-left">
                        <p className="text-lg text-colorText">
                            Esta experiencia es ideal para quienes quieren aprender o mejorar un idioma mientras tienen la posibilidad de trabajar medio tiempo en el destino para solventar sus gastos.
                            <br/>
                            <br/> Dependiendo del destino elegido, este tipo de visado puede extenderse por uno o dos períodos adicionales, y su gestión se puede realizar antes o al momento de llegar al destino.
                            <br/> 
                            <br/>Los interesados no tienen restricciones de edad y no necesitan tener conocimientos previos en inglés.
                            <br/>
                        </p>
                    </div>
                    <div className='text-start pt-10 pb-8'>
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
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio mt-6 text-center">
                Otras experiencias            </h1>


            <div className="flex flex-wrap justify-center mt-8">



                <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                        <div className="relative">
                            <img
                                src={WyS}
                                alt="curso-de-idiomas"
                                className="w-full h-auto rounded-lg " />
                            <div className="absolute bottom-0 left-0 w-full">
                                <Link to='/curso-de-idiomas'>
                                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-base font-semibold leading-none text-center text-gray-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                        Cursos de Idiomas
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
                                className="w-full h-auto rounded-lg " />
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

        <FormContactanos />





    </div>
)

export default WorkandStudy