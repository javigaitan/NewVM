import React from 'react'
import Navbar from '../../Componentes/Navbar/Navbar'
import Footer from '../../Componentes/Footer/Footer'
import BannerIMG from '../../assets/Img/malta.avif'


const Seguros = () => {
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
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">La asistencia en viaje más completa y económica
            </h2>
            <h3>¡Nos importa que estés bien dónde y quiera que estés!
</h3>



            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">¡PARA NO TENER QUE AFRONTAR GASTOS INESPERADOS EN TU VIAJE, ES FUNDAMENTAL VIAJAR CON ASISTENCIA MÉDICA!
            <br /><br />


Planes para viajes por turismo, en familia, sole, acompañade, a estudiar, a trabajar o con visas Work & Holidays. 

Cobertura médica por enfermedad o accidente y/o cobertura de enfermedades preexistentes. Atención en Español!</p>


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

export default Seguros