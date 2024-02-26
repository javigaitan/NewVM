import React from 'react';
import Navbar from '../../Componentes/Navbar/Navbar';
import Footer from '../../Componentes/Footer/Footer';
import BannerIMG from '../../assets/Img/universidades-reino-unido-queens-university-belfast-1024x512.jpg';
import OFERTA from '../../assets/ofrecemos.png';

const ViajesGrupales = () => {
  return (
    <div>
            <Navbar />
            
            <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
                <div className="xl:w-1/2 w-11/12">
                    <h1 role="heading" tabIndex={0} className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
                        Viajes Grupales                    </h1>
                </div>
            </div>
            <div className="detail-container 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
                <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                    {/* <!-- Description Div --> */}

                    <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                        <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">Acerca del programa
                        </h2>
                        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">Si sueñas con conocer el mundo y eres de esas personas que aman hacerlo en buena compañía, los viajes que planeamos y organizamos en el equipo VM te van a gustar. Armamos cada viaje buscando divertirnos, acercarnos respetuosamente a la cultura y descubrir los tesoros de cada destino.</p>

                        <h3 className="font-semibold lg:text-3xl text-2xl lg:leading-9 leading-7 text-gray-800 mt-4">Requisitos
                        </h3>
                        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">Ser mayor de 18 años, Pasaporte vigente, Billetes de avión de ingreso y salida del país</p>
                        <h3 className="font-semibold lg:text-3xl text-2xl lg:leading-9 leading-7 text-gray-800 mt-4">Importante
                        </h3>
                        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">▪ En algunos casos para matricularte deberás presentar un certificado oficial que demuestre tu conocimiento del idioma (como el IELTS, TOEFL o Cambridge en inglés).<br />
                            ▪ No hay límite de edad.<br />
                            ▪ Viajar soles es muy bueno, viajar en grupo con la Comunidad VM ¡puede ser mejor!<br />
                        </p>


                        <div className='py-5'>
                            <button className=" py-3 elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                                Solicita mas informacion
                            </button>
                        </div>
                    </div>


                    {/* <!-- Preview Images Div For larger Screen--> */}

                   
                </div>
            </div>



            <Footer />
        </div>
  )
}

export default ViajesGrupales