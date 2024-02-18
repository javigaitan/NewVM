import React from 'react'
import IrlandaBGR from '../../../assets/BannerExper/Monosnap Estudiar y Trabajar en Irlanda .png'

const WorkDetail = () => {
    return (
        <div>
   

            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
                <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                    {/* <!-- Description Div --> */}

                    <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                        <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">IRLANDA</h2>



                        <p className=" font-normal text-base leading-6 text-gray-600 mt-7">Irlanda tiene una de las mejores visas para personas que quieren estudiar y trabajar en Europa. Contratando un curso de inglés de un mínimo de 25 semanas, podés trabajar y seguir practicando el idioma mientras solventás tus gastos. Durante el tiempo de cursada, podés trabajar part time (20 horas) y luego full time en las 8 semanas de vacaciones (40 horas).

                            Además, por si ocho meses te parecen poco, la visa con permiso de trabajo puede extenderse uno o dos años y te autoriza trabajar full time en el caso de hacer cursos universitarios.

                            ¿Te gustaría sumergirte en la cultura irlandesa, certificar tu nivel de inglés y trabajar en Europa? ¡Entonces esta experiencia es para vos!</p>


                        <div className='py-5'>
                            <button className=" py-3 elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                                Solicita mas informacion
                            </button>
                        </div>
                    </div>


                    {/* <!-- Preview Images Div For larger Screen--> */}

                    <div className=" w-3/4 border-t-2 border-gray-400w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">

                        <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                            <img src="https://i.ibb.co/bRg2CJj/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png" alt="Wooden Chair Previw" />
                        </div>
                        <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                            <div className="bg-gray-100 flex justify-center items-center py-4">
                                <img src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png" alt="Wooden chair - preview 1" />
                            </div>
                            <div className="bg-gray-100 flex justify-center items-center py-4">
                                <img src="https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png" alt="Wooden chair - preview 2" />
                            </div>

                        </div>
                    </div>
                </div>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">Requisitos </h1>

                <div className="flex justify-center items-center w-full">
                    <ul className="flex flex-col justify-center items-center w-full sm:w-96 md:w-8/12 lg:w-full gap-2 sm:mt-14 mt-10">
                        <li className="text-center">

                            <p className="font-semibold text-l leading-5 text-gray-800 lg:mt-10 mt-9">▪ No es necesario tener pasaporte o ciudadanía europea</p>
                        </li>
                        <li className="text-center">

                            <p className="font-semibold text-l leading-5 text-gray-800 lg:mt-10 mt-9">▪ No hay que esperar a una fecha determinada para aplicar</p>
                        </li>
                        <li className="text-center">

                            <p className="font-semibold text-l leading-5 text-gray-800 lg:mt-10 mt-9">▪ No permite traer personas a cargo (hijes/familiares)</p>
                        </li>
                        <li className="text-center">

                            <p className="font-semibold text-l leading-5 text-gray-800 lg:mt-10 mt-9">▪ Meses de vacaciones: mayo, junio, julio y agosto y del 15 de diciembre al 15 de enero</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default WorkDetail