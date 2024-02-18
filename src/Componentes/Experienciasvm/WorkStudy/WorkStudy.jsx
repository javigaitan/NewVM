import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar'
import Footer from '../../../Componentes/Footer/Footer'
import WorkDetail from './WorkDetail'
import BannerIMG from '../../../assets/Img/malta.avif'
import countriesData from './countries.json';



const WorkStudy = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <div>
            <Navbar />
            <div className>
                <div className="flex justify-end items-center">
                    <img className="object-cover md:hidden  w-full h-60 " src={BannerIMG} alt="background" />
                    <img className="hidden md:block object-cover  w-full h-56 lg:h-52 " src={BannerIMG} alt="background" />
                    <div className=" flex xl:px-20 justify-start items-start flex-col absolute">
                      

                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
                <div className="xl:w-1/2 w-11/12">
                    <h1 role="heading" tabIndex={0} className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
                        Dinos tu destino y te diremos que necesitas
                    </h1>
                    <h2 role="contentinfo" tabIndex={0} className="text-base leading-normal text-center text-gray-600 mt-5">
                        A continuacion tenes un resumen de lo que necesitas , pero se aconsejamos consultar con nuetros asesores para despejar mas dudas.
                    </h2>

                </div>
                <div className='py-6'>

                <select  onChange={handleChange} value={selectedCountry}>
                <option value="">Selecciona un país</option>
                {countriesData.map((country, index) => (
                    <option key={index} value={country.Name}>{country.Name}</option>
                ))}
            </select>
            </div>

            </div>
            

            <div>
            
            {selectedCountry && <WorkDetail country={selectedCountry} />}

            </div>





            <Footer />
        </div>
    )
}

export default WorkStudy