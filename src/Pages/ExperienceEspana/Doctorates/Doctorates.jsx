import React from 'react';
import Navbar from '../../../Componentes/Navbar/Navbar';
import Gastronomia from '../../../assets/ServiciosVM/España/practicas profesionales(1).png';
import Diplomaturas from '../../../assets/ServiciosVM/España/cursos y diploma superiores (1).png';
import Doctorados from '../../../assets/ServiciosVM/España/Master y doctorado.png';
import { Link } from 'react-router-dom';
import FormContactanos from '../../../Componentes/FormContactanos/FormContactanos';
import {useTranslation} from "react-i18next";


const Doctorates = () => {
  const [t, i18n] = useTranslation("navbar");


    return(

    <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
            {/* Flex layout for lg, centered for md */}
            <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:hidden">
                    <h1 className="text-4xl font-bold mb-3  text-primaryVio">{t("experiencesEs.experiences3.title")}</h1>
                    </div>

            <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-start">
                <div className="w-full lg:w-1/2 p-4 flex justify-center">
                    <img src={Doctorados} alt="Diplomaturas" className="w-full h-auto" />
                </div>
                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <h1 className="text-4xl font-bold mb-3 pb-5 text-primaryVio hidden lg:block">{t("experiencesEs.experiences3.title")}</h1>
                    <p className="text-lg text-colorText">
                    {t("experiencesEs.experiences3.text1")}                        <br />
                        <br />{t("experiencesEs.experiences3.text2")}
                        <br />
                        
                    </p>
                    <div className='pt-10 pb-8'>
                        <Link to='https://wa.me/541171366335/?text=¡Hola,%20Vaga-Mundo!%20Quiero%20cotizar%20mi%20viaje!'>
                            <button className="elementor-button bg-secondaryTur2 text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300 hover:scale-105">
                            {t("experiences.experience.btn")}                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Centered content for md */}
        <div>
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold leading-10 text-primaryVio mt-6 text-center">
            {t("experiences.experiences1.title2")}            </h1>

            <div className="flex flex-wrap justify-center mt-8">
                <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                        <div className="relative">
                            <img src={Gastronomia} alt="Diplomaturas" className="w-full h-auto rounded-lg mx-auto" />
                            <div className="absolute bottom-0 left-0 w-full">
                                <Link to='/gastronomia'>
                                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-base font-semibold leading-none text-center text-gray-colorText py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                    {t("experiencesEs.experiences1.title")}                                     </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="relative bg-cover flex justify-center flex-col rounded-lg">
                        <div className="relative">
                            <img src={Diplomaturas} alt="Doctorados" className="w-full h-auto rounded-lg mx-auto" />
                            <div className="absolute bottom-0 left-0 w-full">
                                <Link to='/diplomaturas'>
                                    <button className="transition-transform duration-300 transform hover:scale-105 w-full hover:bg-secondaryTur2 transition duration-150 text-base font-semibold leading-none text-center text-gray-800 py-6 bg-white rounded-lg shadow-lg focus:outline-none">
                                    {t("service.tipe5")}                                     </button>
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
}

export default Doctorates