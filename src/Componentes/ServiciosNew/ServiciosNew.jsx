import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Trabajo from '../../assets/Img/DUBLIN (5).jpg';
import Marru from '../../assets/Fotos/Marru.jpg';
import Estudio from '../../assets/Fotos/becca-tapert-GnY_mW1Q6Xc-unsplash.jpg';
import Cafe from '../../assets/Fotos/brooke-cagle-9fHMo1-5Io8-unsplash.jpg';
import Uni from '../../assets/Fotos/priscilla-du-preez-XkKCui44iM0-unsplash.jpg';



const ServiciosNew = () => {

    const [hovered, setHovered] = useState(false);

    return (
        <div>
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">Servicios</h1>

            <CarouselProvider isIntrinsicHeight={true} totalSlides={5}>
                <div className="lg:hidden px-5 xl:px-0 overflow-y-hidden">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:items-center justify-center w-full  py-1">
                        </div>
                        <div className="w-full flex flex-col items-end justify-center">
                            <p className="text-lg text-gray-100">
                                <span id="current"></span>
                                <span className="text-gray-800"></span>
                            </p>
                            <div className="my-4 flex items-center">
                                <ButtonBack>
                                    <button aria-controls="slide" aria-label="slide back" className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer mr-4 p-2 flex items-center justify-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="5" y1="12" x2="9" y2="16" />
                                            <line x1="5" y1="12" x2="9" y2="8" />
                                        </svg>
                                    </button>
                                </ButtonBack>
                                <ButtonNext>
                                    <div aria-controls="slide" aria-label="slide forward" className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer flex items-center justify-center  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="15" y1="16" x2="19" y2="12" />
                                            <line x1="15" y1="8" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </ButtonNext>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <Slider>
                                <Slide index={0}>
                                    <div className="w-full px-5">
                                        <div className="w-full flex justify-center items-center flex-col rounded-md">
                                            <div className="relative bg-cover w-full flex justify-center flex-col rounded-md">
                                                <div className="relative">
                                                    <img src={Cafe} alt="Trabajo" className="w-full h-auto rounded-md opacity-80" />
                                                    <div className="absolute bottom-0 right-0 m-4">
                                                        <button className="focus:outline-none bg-black rounded-full p-2 hover:purple-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <h1 className="w-40 text-black font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Trabajo en el exterior</h1>

                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className="w-full px-5">
                                        <div className="w-full flex justify-center items-center flex-col rounded-md">
                                            <div className="relative">
                                                <img src={Uni} alt="Trabajo" className="w-full h-auto rounded-md opacity-80" />
                                                <div className="absolute bottom-0 right-0 m-4">
                                                    <button className="focus:outline-none bg-black rounded-full p-2 hover:opacity-75">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                        <h1 className="w-40 text-black font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Cursos de Idiomas</h1>



                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className="w-full px-5">
                                        <div className="w-full flex justify-center items-center flex-col rounded-md">
                                            <div className="relative">
                                                <img src={Estudio} alt="Trabajo" className="w-full h-auto rounded-md opacity-80" />
                                                <div className="absolute bottom-0 right-0 m-4">
                                                    <button className="focus:outline-none bg-black rounded-full p-2 hover:opacity-75">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <h1 className="w-40 text-black font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Carreras Universitarias y Posgrados</h1>

                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="w-full px-5">
                                        <div className="w-full flex justify-center items-center flex-col rounded-md">
                                            <div className="relative">
                                                <img src={Marru} alt="Trabajo" className="w-full h-auto rounded-md opacity-80" />
                                                <div className="absolute bottom-0 right-0 m-4">
                                                    <button className="focus:outline-none bg-black rounded-full p-2 hover:opacity-75">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <h1 className="w-40 text-black font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Viajes Grupales</h1>

                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={4}>
                                    <div className="w-full px-5">
                                        <div className="w-full flex justify-center items-center flex-col rounded-md">
                                            <div className="relative">
                                                <img src={Trabajo} alt="Trabajo" className="w-full h-auto rounded-md opacity-80" />
                                                <div className="absolute bottom-0 right-0 m-4">
                                                    <button className="focus:outline-none bg-black rounded-full p-2 hover:opacity-75">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <h1 className="w-40 text-black font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Comunidad Viajera</h1>

                                        </div>
                                    </div>
                                </Slide>
                            </Slider>
                        </div>
                    </div>
                </div>
            </CarouselProvider>




            <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
                <div className="hidden lg:block px-6 xl:px-0 ">
                    <div className="container mx-auto">
                        <div className="flex flex-row">
                            <div role="article" className="flex flex-col items-left justify-center w-full py-10">
                            </div>
                            <div className="w-full flex flex-col items-end justify-end pr-24 my-3">
                                <p className="text-lg text-gray-100">
                                    <span id="current3"></span>
                                    <span className="text-gray-800"></span>
                                </p>
                            </div>
                            <div className="my-4 flex items-center">
                                <ButtonBack>
                                    <button aria-controls="slide" aria-label="slide back" className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer mr-4 p-2 flex items-center justify-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="5" y1="12" x2="9" y2="16" />
                                            <line x1="5" y1="12" x2="9" y2="8" />
                                        </svg>
                                    </button>
                                </ButtonBack>
                                <ButtonNext>
                                    <div aria-controls="slide" aria-label="slide forward" className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer flex items-center justify-center  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="15" y1="16" x2="19" y2="12" />
                                            <line x1="15" y1="8" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </ButtonNext>
                            </div>
                        </div>
                        <div id="slide" aria-roledescription="carousel" aria-label="about healt care" className="slider3">
                            <div className="slide-ana3">
                                <Slider>
                                    <Slide index={0}>
                                        <div className="grid grid-cols-3 gap-6">
                                            <div
                                                className="relative bg-cover w-full flex justify-center flex-col rounded-md">
                                                <div className="relative flex items-center justify-center">
                                                    <img src={Cafe} alt="Trabajo" className="w-full h-auto rounded-md opacity-80" />
                                                    <div className="absolute bottom-0 right-0 m-4">
                                                        <Link to='/work&study'>
                                                            <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Leer más</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <h1 className="w-40 text-black font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Trabaja en el exterior</h1>
                                            </div>
                                            <div className="">
                                                <div aria-live="off" aria-roledescription="slide2" className=" w-full flex justify-center items-center flex-colrounded-md ">
                                                    <div className="relative">
                                                    <img src={Uni} alt="Trabajo" className="w-full h-auto rounded-md opacity-80" />
                                                    <div className="absolute bottom-0 right-0 m-4">
                                                        <Link to='/work&study'>
                                                            <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Leer más</button>
                                                        </Link>
                                                    </div>
                                                    </div>

                                                </div>
                                                <h1 className="w-40 text-black font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Cursos de Idiomas</h1>

                                            </div>
                                            <div className="">
                                                <div aria-live="off" aria-roledescription="slide3" className=" w-full flex justify-center items-center flex-colrounded-md ">
                                                    <div className="relative">
                                                    <img src={Estudio} alt="Trabajo" className="w-full h-auto rounded-md opacity-80" />
                                                    <div className="absolute bottom-0 right-0 m-4">
                                                        <Link to='/work&study'>
                                                            <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Leer más</button>
                                                        </Link>
                                                    </div>
                                                    </div>

                                                </div>
                                                <h1 className="w-40 text-black font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Carreras Universitarias y Posgrados</h1>

                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="">
                                                <div aria-live="off" aria-roledescription="slide4" className=" w-full flex justify-center items-center flex-colrounded-md ">
                                                    <div className="relative">
                                                    <img src={Marru} alt="Trabajo" className="w-full h-auto rounded-md opacity-80" />
                                                    <div className="absolute bottom-0 right-0 m-4">
                                                        <Link to='/work&study'>
                                                            <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Leer más</button>
                                                        </Link>
                                                    </div>
                                                   

                                                    </div>

                                                </div>
                                                <h1 className="w-40 text-black font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Viajes Grupales</h1>

                                            </div>
                                            <div className="">
                                                <div aria-live="off" aria-roledescription="slide4" className=" w-full flex justify-center items-center flex-colrounded-md ">
                                                    <div className="relative">
                                                    <img src={Trabajo} alt="Trabajo" className="w-full h-auto rounded-md opacity-80" />
                                                    <div className="absolute bottom-0 right-0 m-4">
                                                        <Link to='/work&study'>
                                                            <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Leer más</button>
                                                        </Link>
                                                    </div>
                                                   

                                                    </div>

                                                </div>
                                                <h1 className="w-40 text-black font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Comunidad Viajera</h1>

                                            </div>

                                        </div>
                                    </Slide>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </CarouselProvider>




        </div>


    )
}

export default ServiciosNew