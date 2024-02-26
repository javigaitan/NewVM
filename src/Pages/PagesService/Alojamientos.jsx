import React from 'react'
import Navbar from '../../Componentes/Navbar/Navbar'
import Footer from '../../Componentes/Footer/Footer'
import BannerIMG from '../../assets/Img/experiencia.jpg'
import Resi from '../../assets/Img/ResiD6.jpg'
import Resi2 from '../../assets/Img/Resi2.jpg'
import Resi3 from '../../assets/Img/Resi3.jpg'



const Alojamientos = () => {
    return (
        <div>
            <Navbar />
            <div className>
                <div className="flex justify-end items-center">
                    <img className="object-cover md:hidden  w-full h-60 opacity-50" src={BannerIMG} alt="background" />
                    <img className="hidden md:block object-cover  w-full h-56 lg:h-52 opacity-50" src={BannerIMG} alt="background" />
                    <div className=" flex xl:px-20 justify-start items-start flex-col absolute">
                        <h1 className="text0-xl xl:text-2xl font-medium leading-5 xl:leading-normal text-gray-800">Te ayudamos a elegir tu alojamiento</h1>
                        <p className="w-44 sm:w-64 lg:w-2/3 mt-4 text-base leading-6 xl:leading-5 text-gray-800">Desde residencias propias hasta voluntariados

                        </p>

                    </div>
                </div>
                <div className="detail-container 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
                    <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                        {/* <!-- Description Div --> */}

                        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">Conoce nuestras
                                residencias y partners</h2>



                            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">Un gran miedo que enfrentamos al vivir una experiencia en el exterior es ¿dónde nos alojaremos?
                                Por eso en VM contamos con  alojamiento propio en Dublín en donde nos esforzamos para que nuestra comunidad tenga una gran recibida en destino.
                                <br /><br />
                                ¿Y en los demás destinos?
                                Tenemos convenios con alojamientos estudiantiles, con Host Family y la mayoría de las escuelas cuentan con sus propias residencias para estudiantes.</p>


                            <div className='py-5'>
                                <button className=" py-3 elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                                    Solicita mas informacion
                                </button>
                            </div>
                        </div>


                        {/* <!-- Preview Images Div For larger Screen--> */}

                        <div className=" w-3/4   sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">

                            <div className=" w-full lg:w-8/12 bg-white flex justify-center items-center">
                                <img src={Resi} alt="Imagen ilustrativa del pais" />
                            </div>
                            <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                                <div className="bg-white flex justify-center items-center py-4">
                                    <img src={Resi2} alt="Wooden chair - preview 1" />
                                </div>
                                <div className="bg-white flex justify-center items-center py-4">
                                    <img src={Resi3} alt="Wooden chair - preview 2" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <Footer />
        </div>
    )
}

export default Alojamientos