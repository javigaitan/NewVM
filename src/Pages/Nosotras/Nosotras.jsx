import React from 'react';
import FOTO from '../../assets/Img/Marruecos.jpg';
import Navbar from '../../Componentes/Navbar/Navbar';
import Footer from '../../Componentes/Footer/Footer';


const Nosotras = () => {
    return (
        <>

            <Navbar />
            <div>

                <div className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50" style={{ height: 1000 }}>
                    <div className="md:flex items-center justify-between w-full bg-gray-50">
                        <div className="xl:w-1/3 md:w-1/2 w-full">
                            <h1 role="heading" className="focus:outline-none md:w-60 font- md:text-6xl text-4xl leading-tight text-primaryVio">
                                De corazón viajero y aventurero

                            </h1>

                            <div className="mt-10">
                                <p className="flex items-center md:p-3 p-1 focus:outline-none text-l font- leading-5 text-colorText focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                    Quienes formamos Vaga-Mundo vivimos la experiencia de emigrar, viajar y capacitarnos en el exterior, para ahora poner a tu alcance todo nuestro conocimiento.

                                    Somos la agencia de intercambios que te acompañará desde ahora a cumplir tu sueño de viajar, estudiar y trabajar en el exterior.

                                    Desde nuestra sede en Irlanda y con representantes en distintos países, asesoramos gratuitamente a personas de todo el mundo 24/7 con más de 7 años de experiencia.

                                    ¿Estás liste?
                                </p>

                                <div className="inline-block py-5">
                                    <button className="elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                                        Solicita tu cotización
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">

                            <div className="w-full">
                                <img src={FOTO} alt="Equipo de VM en marruecos" className="md:w-full sm:w-1/2 w-full rounded-lg " />

                            </div>
                        </div>
                    </div>

                 


                        <Footer />

                    </div>


                </div>





        </>

    )
}

export default Nosotras