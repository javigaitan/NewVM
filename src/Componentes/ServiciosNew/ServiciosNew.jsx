import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import Idiomas from '../../assets/ServiciosVM/curso idioma.png';
import WyS from '../../assets/ServiciosVM/estudio y trabajo en el exterior.png';
import universitarios from '../../assets/ServiciosVM/posgrados.png';

const ServiciosNew = () => {
    useEffect(() => {
        ScrollReveal().reveal('.card', {
            delay: 300,
            distance: '50px',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });
    }, []);

    return (
        <div className="container mx-auto px-4 pt-10 pb-20">
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio mt-6 text-center">
                ¿Qué experiencias ofrecemos?
            </h1>
            <div className="flex flex-wrap justify-center mt-8">

                <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                        <div className="relative">
                            <img 
                                src={Idiomas} 
                                alt="Trabajo" 
                                className="w-full h-auto rounded-lg " 
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full">
                            <Link to='/work&study'>
                                <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-semibold leading-none text-center text-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                    Cursos de Idiomas
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

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
                                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-semibold leading-none text-center text-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
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
                                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-semibold leading-none text-center text-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                        Carreras y posgrados universitarios
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiciosNew;
