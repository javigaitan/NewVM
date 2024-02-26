import React from 'react'
import Navbar from '../../Componentes/Navbar/Navbar'
import Footer from '../../Componentes/Footer/Footer'
import BannerIMG from '../../assets/Img/experiencia.jpg'


const Arrival = () => {
  return (
    <div>
        <Navbar/>
        <div className>
                <div className="flex justify-end items-center">
                    <img className="object-cover md:hidden  w-full h-60 opacity-50" src={BannerIMG} alt="background" />
                    <img className="hidden md:block object-cover  w-full h-56 lg:h-52 opacity-50" src={BannerIMG} alt="background" />
                    <div className=" flex xl:px-20 justify-start items-start flex-col absolute">
                        <h1 className="text0-xl xl:text-2xl font-medium leading-5 xl:leading-normal text-gray-800">Paquetes de bienvenida</h1>
                        <p className="w-44 sm:w-64 lg:w-2/3 mt-4 text-base leading-6 xl:leading-5 text-gray-800">Te ayudamos desde tu llegada



                        </p>

                    </div>
                </div>
                <div className="detail-container 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
                    <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                        {/* <!-- Description Div --> */}

                        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">Arrival Packages para Irlanda
</h2>



                            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">Los primeros días en un destino nuevo pueden presentar muchas dudas e inquietudes. Por eso te ofrecemos un paquete de bienvenida y te acompañamos en tu llegada a Irlanda.</p>


                            <div className='py-5'>
                                <button className=" py-3 elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                                    Solicita mas informacion
                                </button>
                            </div>
                        </div>


                        {/* <!-- Preview Images Div For larger Screen--> */}

                        <div className=" w-3/4   sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">

                            
                        </div>
                    </div>

                </div>

            </div>


        <Footer/>
    </div>
  )
}

export default Arrival