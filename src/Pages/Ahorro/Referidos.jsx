import React from 'react'
import Navbar from '../../Componentes/Navbar/Navbar'
import Footer from '../../Componentes/Footer/Footer'
import BannerIMG from '../../assets/Img/experiencia.jpg'

const Referidos = () => {
  return (
    <div>
    <Navbar />
    <div className>
        <div className="flex justify-end items-center">
            <img className="object-cover md:hidden  w-full h-60 opacity-50" src={BannerIMG} alt="background" />
            <img className="hidden md:block object-cover  w-full h-56 lg:h-52 opacity-50" src={BannerIMG} alt="background" />
            <div className=" flex xl:px-20 justify-start items-start flex-col absolute">
                <h1 className="text0-xl xl:text-2xl font-medium leading-5 xl:leading-normal text-gray-800">Programa de Referides</h1>
                

            </div>
        </div>
        <div className="detail-container 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                {/* <!-- Description Div --> */}

                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">Refiere a tus amigues y ahorra para tu próxima aventura

                    </h2>
                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
                    Viviste la experiencia de viajar y vivir en el exterior con nosotras, lo sabemos, ¡estás encanta@!
                                            <br /><br />
                                            Creamos este programa con el objetivo de recompensar a nuestra comunidad. Queremos ayudarte a ahorrar en euros para que puedas afrontar más fácilmente tus primeros gastos.                        <br /><br />

                        <br /><br />

                        Una vez contratado un curso con Vaga-Mundo, ya puedes participar del programa. Siempre puedes formar parte, aunque hayas terminado tu experiencia.                    </p>



                </div>



                <div className=" w-3/4   sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    {/* <!-- Aqui lo necesito al componente nuevo --> */}
                    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-2">¿A qué beneficios vas a poder acceder?

                        </h3>
                        <ul className="list-disc pl-5">
                            <li className="my-2 flex items-center"><span className="text-primaryVio mr-2">&#10003;</span>Tarjetas de regalo
</li>
                            <li className="my-2 flex items-center"><span className="text-primaryVio mr-2">&#10003;</span>Descuentos en otros cursos
</li>
                            <li className="my-2 flex items-center"><span className="text-primaryVio mr-2">&#10003;</span>Asistencia al viajero
</li>
                            <li className="my-2 flex items-center"><span className="text-primaryVio mr-2">&#10003;</span>Excursiones dentro de Irlanda
</li>


                        </ul>
                        <div className='py-5'>
                            <button className=" py-3 elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                                Solicita mas informacion
                            </button>
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

export default Referidos