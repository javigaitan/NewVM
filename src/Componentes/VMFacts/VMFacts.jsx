import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';


const VMFacts = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);


    useEffect(() => {
        const interval1 = setInterval(() => {
            if (count1 < 5000) {
                setCount1(count1 + 10);
            }
        }, 10);

        const interval2 = setInterval(() => {
            if (count2 < 360) {
                setCount2(count2 + 1);
            }
        }, 10);

        const interval3 = setInterval(() => {
            if (count2 < 10) {
                setCount3(count3 + 1);
            }
        }, 10);

        const interval4 = setInterval(() => {
            if (count2 < 7) {
                setCount4(count4 + 1);
            }
        }, 10);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
        };
    }, [count1, count2, count3, count4]);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        // Configuración de ScrollReveal
        ScrollReveal().reveal('.facts-container', {
            delay: 300,
            distance: '50px',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });
    }, []);

    return (

        <>
            <div className="dark:bg-gray-900 facts-container">
                <div className="pb-20">
                    <div className="mx-auto bg-gradient-to-l from-primaryVio to-primaryVio h-96">
                        <div className="mx-auto container w-full flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center flex-col">
                                <div className="mt-20">
                                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white mt-6 text-center">¿Por qué Vaga-Mundo?
                                    </h2>
                                </div>
                                <div className="mt-6 mx-2 md:mx-0 text-center">
                                    <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">Para nosotres el acompañamiento es clave, vamos a estar con vos para todas tus consultas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
                            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">{count1}+</h2>
                                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-colorText">Experiencias realizadas</p>
                            </div>
                            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">{count2}°</h2>
                                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-colorText">Soporte de inicio a fin</p>
                            </div>
                            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">{count3}+</h2>
                                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-colorText">Destinos para ofrecerte</p>
                            </div>
                            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">{count4}+</h2>
                                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-colorText">A;os de experiencia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default VMFacts