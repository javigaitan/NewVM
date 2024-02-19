import React from 'react'
import Navbar from '../../Componentes/Navbar/Navbar'
import Footer from '../../Componentes/Footer/Footer'
import BannerIMG from '../../assets/Img/universidades-reino-unido-queens-university-belfast-1024x512.jpg'
import OFERTA from '../../assets/ofrecemos.png'


const Universidades = () => {
    return (
        <div>
            <Navbar />
            <div className>
                <div className="flex justify-end items-center">
                    <img className="opacity-40 object-cover md:hidden  w-full h-60 " src={BannerIMG} alt="background" />
                    <img className="opacity-40 hidden md:block object-cover  w-full h-56 lg:h-52 " src={BannerIMG} alt="background" />
                    <div className=" flex xl:px-20 justify-start items-start flex-col absolute">


                    </div>
                </div>
            </div>
            <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
                <div className="xl:w-1/2 w-11/12">
                    <h1 role="heading" tabIndex={0} className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
                        Carreras Universitarias y Posgrados                    </h1>
                </div>
            </div>
            <div className="detail-container 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
                <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                    {/* <!-- Description Div --> */}

                    <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                        <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">Acerca del programa
                        </h2>
                        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">Si estás pensando en estudiar una licenciatura o posgrado en Europa, desde Vaga-Mundo te ofrecemos una sesión de couch para ayudarte a organizar tus ideas, jerarquizar tus desafíos y elegir la especialización que te ayude a conseguirlos. Ponemos a tu disposición nuestros conocimientos y experiencia para que elijas la mejor opción para ti y te acompañamos en todo el proceso.<br />
                            <br />
                            – Trabajamos con universidades en Irlanda, Malta, Alemania, Canadá y España<br />
                            – Conocemos los programas de preparación para que adquieras las competencias necesarias para el mundo universitario europeo<br />
                            – Te asesoramos para que puedas trabajar y solicitar financiación, ya sea bancaria o propia de las universidades, becas, descuentos y más.<br />
                        </p>

                        <h3 className="font-semibold lg:text-3xl text-2xl lg:leading-9 leading-7 text-gray-800 mt-4">Requisitos
                        </h3>
                        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">Último diploma alcanzado, Certificado oficial de nivel de inglés, Examen o entrevista</p>
                        <h3 className="font-semibold lg:text-3xl text-2xl lg:leading-9 leading-7 text-gray-800 mt-4">Importante
                        </h3>
                        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">▪ En algunos casos para matricularte deberás presentar un certificado oficial que demuestre tu conocimiento del idioma (como el IELTS, TOEFL o Cambridge en inglés).<br />
                            ▪ En otros, deberás rendir un examen local o pasar una entrevista.<br />
                        </p>


                        <div className='py-5'>
                            <button className=" py-3 elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                                Solicita mas informacion
                            </button>
                        </div>
                    </div>


                    {/* <!-- Preview Images Div For larger Screen--> */}

                    <div className=" w-3/4 sm:w-96 md:w-8/12  lg:w-10/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                        <img src={OFERTA} alt="Imagen ilustrativa del pais" />





                    </div>
                </div>
            </div>



            <Footer />
        </div>
    )
}

export default Universidades