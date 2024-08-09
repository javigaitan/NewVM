import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Icon1 from '../../assets/Facts/Fact1.png';
import Icon2 from '../../assets/Facts/Fact2.png';
import Icon3 from '../../assets/Facts/Fact3.png';
import Icon4 from '../../assets/Facts/Fact4.png';
import Icon5 from '../../assets/Facts/Fact5.png';
import IconPass from '../../assets/Facts/pasaporte.png';
import './VMFacts.css'; 

const VMFacts = () => {
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
        <div className="dark:bg-gray-900 facts-container relative">
            <div className="pb-20">
                <div className="mx-auto bg-gradient-to-l from-primaryVio to-primaryVio h-96 relative">
                    <div className="mx-auto container w-full flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center flex-col">
                            <div className="mt-20">
                                <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white mt-5 text-center">¿Por qué Vaga-Mundo?</h2>
                            </div>
                        </div>
                    </div>
                    <img src={IconPass} alt="Icon Pass" className="absolute top-4 right-16 w-28 h-auto transform transition-transform duration-300 hover:scale-110" />
                </div>
                <div className="mx-auto container md:-mt-40 -mt-30 flex justify-center items-center"> {/* Ajustar márgenes superiores aquí */}
                    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-3 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
                        <div className="flex justify-center flex-col items-center">
                            <img src={Icon1} alt="Icon 1" className="w-full h-auto transform transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="flex justify-center flex-col items-center relative">
                            <img src={Icon2} alt="Icon 2" className=" text-bold w-full h-auto transform transition-transform duration-300 hover:scale-110" />
                            
                        </div>
                        <div className="flex justify-center flex-col items-center">
                            <img src={Icon3} alt="Icon 3" className="w-full h-auto transform transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="flex justify-center flex-col items-center">
                            <img src={Icon4} alt="Icon 4" className="w-full h-auto transform transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="flex justify-center flex-col items-center">
                            <img src={Icon5} alt="Icon 5" className="w-full h-auto transform transition-transform duration-300 hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VMFacts;
