import React from 'react';
import Navbar from '../../Navbar/Navbar';
import CURSO from '../../../assets/ServiciosVM/cursodeidiomas.png';
import WyS from '../../../assets/ServiciosVM/estudio y trabajo en el exterior.png';
import universitarios from '../../../assets/ServiciosVM/posgrados.png';
import { Link } from 'react-router-dom';
import FormContactanos from '../../FormContactanos/FormContactanos';
import {useTranslation} from "react-i18next";


const CursoDeIdiomas = () => {

    const [t, i18n] = useTranslation("navbar");

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-7">
                {/* Flex layout for lg, centered for md */}
                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:hidden">
                    <h1 className="text-4xl font-bold mb-4 text-primaryVio">{t("experiences.experiences1.title")} </h1>
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-start">
                    <div className="w-full lg:w-1/2 p-4 flex justify-center">

                        <img src={CURSO} alt="Curso de Idiomas" className="w-full h-auto" />
                    </div>
                    <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left ">
                    <h1 className="text-4xl font-bold mb-4 text-primaryVio hidden lg:block">
                    {t("experiences.experiences1.title")}</h1>

                        <p className="text-lg text-colorText">
                        {t("experiences.experiences1.text1")}
                        <br /><br />
                        {t("experiences.experiences1.text2")}                            <br /><br />
                        {t("experiences.experiences1.text3")}                        </p>
                        <div className='pt-10 pb-8'>
                            <Link to='https://wa.me/541170585095/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20cotizar%20mi%20viaje!'>
                                <button className="elementor-button bg-secondaryTur2 text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300 hover:scale-105">
                                {t("experiences.experience.btn")}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Centered content for md */}
            <div>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-primaryVio mt-6 text-center">
                {t("experiences.experiences1.title2")}
                </h1>

                <div className="flex flex-wrap justify-center mt-8">
                    <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                            <div className="relative">
                                <img
                                    src={WyS}
                                    alt="work&study"
                                    className="w-full h-auto rounded-lg mx-auto"
                                />
                                <div className="absolute bottom-0 left-0 w-full">
                                    <Link to='/work&study'>
                                        <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                        {t("experiences.experiences2.title")}                                        </button>
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
                                    className="w-full h-auto rounded-lg mx-auto"
                                />
                                <div className="absolute bottom-0 left-0 w-full">
                                    <Link to='/carreras-universitarias'>
                                        <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                        {t("experiences.experiences3.title")}
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
    );
}

export default CursoDeIdiomas;
