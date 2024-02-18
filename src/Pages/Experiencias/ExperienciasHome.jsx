import React from 'react'
import Navbar from '../../Componentes/Navbar/Navbar'
import BannerIMG from '../../assets/Img/experiencia.jpg'
import Experienciasvm from '../../Componentes/Experienciasvm/Experienciasvm'
import Footer from '../../Componentes/Footer/Footer'


const ExperienciasHome = () => {
  return (
    <>
      <Navbar />
      <div className>
        <div className="flex justify-end items-center">
          <img className="object-cover md:hidden  w-full h-60 opacity-50" src={BannerIMG} alt="background" />
          <img className="hidden md:block object-cover  w-full h-56 lg:h-52 opacity-50" src={BannerIMG} alt="background" />
          <div className=" flex xl:px-20 justify-start items-start flex-col absolute">
            <h1 className="text0-xl xl:text-2xl font-medium leading-5 xl:leading-normal text-gray-800">Trabaja en el exterior</h1>
            <p className="w-44 sm:w-64 lg:w-2/3 mt-4 text-base leading-6 xl:leading-5 text-gray-800">Enterate como empezar tu experiencias junto con nosotres!</p>
            <button className="mt-5 xl:mt-6 hover:underline underline-offset-4 transition duration-300 ease-in-out flex justify-start items-center space-x-2">
              <button className="elementor-button bg-primaryVio text-white rounded-full text-base font-medium py-1 px-6 transition-all duration-300">
                Solicita tu cotización
              </button>            <svg width={6} height={12} viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.78033 5.46967C6.07322 5.76256 6.07322 6.23744 5.78033 6.53033L1.28033 11.0303C0.987437 11.3232 0.512563 11.3232 0.21967 11.0303C-0.0732233 10.7374 -0.0732233 10.2626 0.21967 9.96967L4.18934 6L0.21967 2.03033C-0.0732233 1.73744 -0.0732233 1.26256 0.21967 0.96967Z" fill="#242424" />
              </svg>
            </button>
          </div>
        </div>

        <Experienciasvm/>

        

      </div>
      <Footer/>


    </>
  )
}

export default ExperienciasHome