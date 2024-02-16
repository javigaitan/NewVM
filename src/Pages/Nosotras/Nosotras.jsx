import React from 'react';
import FOTO from '../../assets/Img/Marruecos.jpg';
import CARI from '../../assets/Avatars/Cari.png';
import JaviG from '../../assets/Avatars/JaviG.png';
import Carlos from '../../assets/Avatars/Carlos.png';
import Frida from '../../assets/Avatars/Frida.png';
import Gime from '../../assets/Avatars/Gime.png';
import Javier from '../../assets/Avatars/Javier.png';
import Jor from '../../assets/Avatars/Jor.png';
import Juan from '../../assets/Avatars//Juan Cruz.png';
import Katherine from '../../assets/Avatars/Katherine.png';
import Lolo from '../../assets/Avatars/Lolo.png';
import Emilia from '../../assets/Avatars/M. Emilia.png';
import Victoria from '../../assets/Avatars/M.Victoria.png';
import Majo from '../../assets/Avatars/Majo.png';
import Vic from '../../assets/Avatars/Vicky.png'
import Rober from '../../assets/Avatars/Roberta.png'
import Marian from '../../assets/Avatars/AVATAR MARIAN.png'

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
                                <img src={FOTO} alt="Purple flowers on a book" className="md:w-full sm:w-1/2 w-full" />

                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container flex justify-center mx-auto pt-16">
                            <div>
                                <h1 className="xl:text-4xl text-3xl text-center text-primaryVio font-bold pb-6 sm:w-4/6 w-5/6 mx-auto">Vaga-Mundo es equipo
                                </h1>
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 px-10 pt-10">
                            <div className="container mx-auto">
                                <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Lolo} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Gloria Bobo</div>
                                                <p className="text-gray-800 text-sm text-center">COO de VAGAMUNDO</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Mi gran pasión es viajar, estar en movimiento y vivir experiencias nuevas.

                                                    Vaga-Mundo es el espacio que me permite ayudar a más personas a que vivan lo mismo y se animen a más.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={CARI} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Carina Artus</div>
                                                <p className="text-gray-800 text-sm text-center">CEO de VAGAMUNDO</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Luego de pensarlo mucho tiempo, viajé a Irlanda y no pude resistirme al encanto de este país. Así nació Vaga-Mundo, un proyecto que continúa creciendo y trascendió las fronteras de la isla.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Jor} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Jorge Barros</div>
                                                <p className="text-gray-800 text-sm text-center">Communications Manager</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Explorar el mundo, moverme constantemente y sumergirme en nuevas vivencias es mi mayor fascinación. Vaga-Mundo representa el rincón desde el cual puedo inspirar a otros a experimentar lo mismo y a atreverse a más.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Carlos} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Carlos Flores</div>
                                                <p className="text-gray-800 text-sm text-center">Sales Manager</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Siempre voy en busca de la transformación a través de nuevas experiencias, la naturaleza y el desarrollo de habilidades. Hoy, quiero inspirarte a buscar tus propias aventuras y a nunca dejar de crecer y aprender. ¡Vamos juntos en este viaje!.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Marian} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Mariana Guzzi</div>
                                                <p className="text-gray-800 text-sm text-center">Sales Manager B2B</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Desarrollador, practicante de artes marciales y amante de los viajes. Expectante de saber cuál será mi nuevo destino para conocer nuevas culturas.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Rober} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Roberta Garcia</div>
                                                <p className="text-gray-800 text-sm text-center">Administration Manager</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Después de terminar mis estudios, decidí emprender vuelo, conocer lugares y distintas culturas para enriquecerme de sabiduría y conocimiento. Vaga-Mundo me acompaña en este hermoso viaje.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Vic} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>

                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Victoria Castro</div>
                                                <p className="text-gray-800 text-sm text-center">Designer</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={JaviG} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Javier Gaitan</div>
                                                <p className="text-gray-800 text-sm text-center">Support IT</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Desarrollador, practicante de artes marciales y amante de los viajes. Expectante de saber cuál será mi nuevo destino para conocer nuevas culturas.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Javier} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Javier Dantas</div>
                                                <p className="text-gray-800 text-sm text-center">Paid Media</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Cada viaje es único e irrepetible. Viajo para conectar con el lugar que visito, las personas y en definitiva, es un viaje que conecto conmigo mismo y aprendo más sobre el mundo»
                                                    Porteño, redactor publicitario, escritor y especialista en marketing.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Majo} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>

                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Maria Jose Rivero </div>
                                                <p className="text-gray-800 text-sm text-center">Sales</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Pospuse por muchos años mi sueño de recorrer el mundo y la pandemia me hizo caer en la realidad de que ya no podía esperar más. Me enamoré de mi primer destino, que fue Malta, y hoy no puedo pensar en mi vida futura  sin verme recorriendo el mundo.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Juan} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Juan Cruz</div>
                                                <p className="text-gray-800 text-sm text-center">Sales</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Te propongo formar parte de una comunidad compañera, inclusiva y viajera y juntos planear una experiencia que te llene de vivencia maravillosas, acompañadas con amor, libertad y profesionalismo.
                                                    De mi parte vas a tener la el mejor asesoramiento; estoy comprometido con brindar informaciòn real, para que puedas tomar tu desicion con libertad e inteligencia.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" className="mx-5">

                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Katherine} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Catherine Castro</div>
                                                <p className="text-gray-800 text-sm text-center">Sales</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Colombiana, enamorada de la vida y apasionada por los viajes. Viajar es una maravillosa experiencia que permite abrir la mente, no soy la misma que dejo su país en búsqueda de un sueño ahora entiendo lo enriquecedor que es. Un viaje cambio mi vida y desde ese momento comprendi que un viaje se vive 3 veces, cuando se planea, cuando se vive y cuando se recuerda.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Victoria} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>

                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Maria Coria </div>
                                                <p className="text-gray-800 text-sm text-center">Sales</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Pospuse por muchos años mi sueño de recorrer el mundo y la pandemia me hizo caer en la realidad de que ya no podía esperar más. Me enamoré de mi primer destino, que fue Malta, y hoy no puedo pensar en mi vida futura  sin verme recorriendo el mundo.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Emilia} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Emilia Montenegro</div>
                                                <p className="text-gray-800 text-sm text-center">Sales</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Te propongo formar parte de una comunidad compañera, inclusiva y viajera y juntos planear una experiencia que te llene de vivencia maravillosas, acompañadas con amor, libertad y profesionalismo.
                                                    De mi parte vas a tener la el mejor asesoramiento; estoy comprometido con brindar informaciòn real, para que puedas tomar tu desicion con libertad e inteligencia.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" className="mx-5">

                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={Katherine} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">Catherine Castro</div>
                                                <p className="text-gray-800 text-sm text-center">Sales</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">Colombiana, enamorada de la vida y apasionada por los viajes. Viajar es una maravillosa experiencia que permite abrir la mente, no soy la misma que dejo su país en búsqueda de un sueño ahora entiendo lo enriquecedor que es. Un viaje cambio mi vida y desde ese momento comprendi que un viaje se vive 3 veces, cuando se planea, cuando se vive y cuando se recuerda.</p>
                                                <div className="w-full flex justify-center pt-5 pb-5">

                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>






                                </div>
                            </div>

                        </div>
                        <Footer />


                    </div>

                </div>

            </div>




        </>

    )
}

export default Nosotras