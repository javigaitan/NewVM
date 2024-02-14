import React from 'react'
import Comuni from '../../assets/Img/communication.png'
import Expe from '../../assets/Img/excursion.png'
import Visa from '../../assets/Img/passport.png'
import Place from '../../assets/Img/place.png'
import Tips from '../../assets/Img/list.png'



const PorqueVM = () => {
    return (
        <>

            <div class="mx-auto container my-20 lg:mt-48 lg:mb-24">
                <div className="mb-10">
                    <h2 className="text-4xl font-semibold leading-8 text-center text-gray-800 lg:text-5xl">
                        ¿Por qué Vaga-Mundo?
                    </h2>
                </div>
                <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    <div class="flex justify-center w-full  py-4">
                        <img src={Comuni} class="w-32 h-auto transform scale-50" alt="Imagen de Comuni" >
                        </img>
                        <div class="text-gray-800 pl-6 w-1/2">
                            <h2 class="text-base lg:text-lg mt-3 leading-5 tracking-wide">Te escuchamos
                                atentamente</h2>
                        </div>

                    </div>
                    <div class="flex justify-center w-full  py-6">
                    <img src={Expe} class="w-32 h-auto transform scale-50" alt="Imagen de Comuni" >
                        </img>
                        <div class="text-gray-800 pl-6 w-1/2">
                            <h2 class="text-base lg:text-lg mt-3 leading-5 tracking-wide">Seleccionamos experiencias</h2>
                        </div>
                    </div>
                    <div class="flex justify-center w-full   py-6">
                    <img src={Visa} class="w-32 h-auto transform scale-50" alt="Imagen de Comuni" >
                        </img>
                        <div class="text-gray-800 pl-6 w-1/2">
                            <h2 class="text-base lg:text-lg mt-3 leading-5 tracking-wide">Acompañamiento en visados</h2>
                        </div>
                    </div>
                    <div class="flex justify-center w-full   py-6">
                    <img src={Place} class="w-32 h-auto transform scale-50" alt="Imagen de Comuni" >
                        </img>
                        <div class="text-gray-800 pl-6 w-1/2">
                            <h2 class="text-base lg:text-lg mt-3 leading-5 tracking-wide">Las mejores instituciones</h2>
                        </div>
                    </div>

                    <div class="flex justify-center w-full   py-6">
                    <img src={Tips} class="w-32 h-auto transform scale-50" alt="Imagen de Comuni" >
                        </img>
                        <div class="text-gray-800 pl-6 w-1/2">
                            <h2 class="text-base lg:text-lg mt-3 leading-5 tracking-wide">Todos los tips</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default PorqueVM