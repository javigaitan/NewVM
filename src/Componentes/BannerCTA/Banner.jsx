import React from 'react'
import MALTA from '../../assets/Img/yomalta.png'
import IRLANDA from '../../assets/Img//yoirlanda.png'


const Banner = () => {
  return (

<div className="sm:mx-auto sm:container px-6 xl:px-0">
            <div className="flex items-center justify-between md:flex-row flex-col py-12 space-y-6 md:space-y-0 w-full">
                <div className="hidden md:block">
                    <img className="hidden xl:block w-full" src={MALTA} alt="Foto ilustrativa de malta " />
                    <img className="xl:hidden w-full" src={MALTA} alt="Foto ilustrativa de malta " />
                </div>
                <div className="flex justify-center items-center flex-col xl:w-2/5 md:px-6 sm:w-3/4 md:w-2/4">
                    <div className="">
                        <h1 className="xl:text-4xl text-3xl font-semibold leading-9 text-gray-800 text-center">Estas a un paso de comenzar tu viaje!</h1>
                    </div>
                    <div className="mt-4">
                        <p className="xl:text-xl text-base leading-7 text-center text-gray-600">Si no saber por donde comenzar podes hacerlo desde aca</p>
                    </div>
                    <div className="mt-8 flex justify-center items-center w-full">
                        <button className="hover:opacity-75 flex justify-center bg-purple-800 sm:w-32 w-full h-10 py-3">
                            <p className="text-base font-medium leading-none text-white">Comenzar!</p>
                        </button>
                    </div>
                </div>
                <div className="flex md:w-auto w-full justify-center flex-row space-x-4 md:space-x-0">
                    <div className="w-full">
                        <img className="hidden xl:block w-full" src={IRLANDA} alt="Foto ilustrativa de IRLANDA" />
                        <img className="xl:hidden w-full" src={IRLANDA} alt="Foto ilustrativa de IRLANDA" />
                    </div>
                    <div className="md:hidden w-full">
                        <img className="hidden xl:block w-full" src={MALTA} alt="Foto ilustrativa de malta "  />
                        <img className="xl:hidden w-full" src={MALTA} alt="Foto ilustrativa de malta "  />
                    </div>
                </div>
            </div>
        </div>  )
}

export default Banner