import React from 'react';
import Irlanda3 from '../../assets/Img/DUBLIN (6).jpg';
import Blog from '../../assets/Fotos/Blog-atehan.jpg';
import IrlandaInd from '../../assets/Fotos/Blog-introduc.jpeg';

const Blogs = () => {
    return (
        <div className="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold leading-9 text-gray-800">Blog VM</h1>
                <p className="text-base leading-6 text-center text-colorText sm:w-96 md:w-9/12 lg:w-5/12 mt-4">Entérate de las últimas noticias que nos trae la comunidad</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
                <div className="relative flex items-center justify-center">
                    <img src={IrlandaInd} className='opacity-80' alt="Grupo de VM en Irlanda listo para el día de introducción" />
                    <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                        <div className="flex items-center justify-center flex-col h-full">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-black">Induction Day</h2>
                            <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-black mt-4">Desde VM hacemos las cosas diferentes porque queremos asegurarnos de que tu experiencia sea la mejor.</p>
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Leer más</button>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <img src={Irlanda3}  className='opacity-80' alt="Grupo de 4 chicas de VM sosteniendo una bandera de la marca VM" />
                    <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                        <div className="flex items-center justify-center flex-col h-full">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-7 lg:leading-7 text-center text-black">Experiencia de Majo</h2>
                            <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-black mt-4">Te contamos de primera mano cómo fue la experiencia de Majo con VM.</p>
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Leer más</button>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <img src={Blog} className='opacity-80' alt="Foto de playa con 2 chicas charlando" />
                    <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                        <div className="flex items-center justify-center flex-col h-full">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold sm:w-auto leading-normal text-center text-black">Nuevo destino en Irlanda: Athlone</h2>
                            <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-black mt-4">¿Qué te ofrece Athlone para vivir tu "Experiencia Irlanda en el centro de la Isla?"</p>
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Leer más</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;
