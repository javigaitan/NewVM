import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import BannerIMG from '../../../assets/Img/malta.avif'


const Insercion = () => {
  return (
    <div>
      <Navbar/>
      <div className>
                <div className="flex justify-end items-center">
                    <img className="object-cover md:hidden  w-full h-60 " src={BannerIMG} alt="background" />
                    <img className="hidden md:block object-cover  w-full h-56 lg:h-52 " src={BannerIMG} alt="background" />
                    <div className=" flex xl:px-20 justify-start items-start flex-col absolute">
                      

                    </div>
                </div>
            </div>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
                <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                    {/* <!-- Description Div --> */}

                    <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                        <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">¿Cómo podemos ayudarte?
</h2>

    

                        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">Nuestro objetivo como comunidad Vaga-Mundo es acompañar y asesorar de forma personalizada en todo el proceso de inserción laboral en el país de selección.

La propuesta consiste en un diagnóstico situacional de quien se acerque a nosotras, netamente ajustado a las condiciones, requisitos y realidad de quien contrata nuestros servicios, para poder ofrecer una eficiente proximidad con el mercado laboral postulante.

El proceso inicia con el interés de la persona y finaliza concretando entrevistas con empresas del rubro seleccionado.</p>


                        <div className='py-5'>
                            <button className=" py-3 elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                                Solicita mas informacion
                            </button>
                        </div>
                    </div>
                    </div>

                    </div>



      <Footer/>
    </div>
  )
}

export default Insercion