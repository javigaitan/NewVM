import React from "react";
import { Link } from "react-router-dom";
import Error404 from '../assets/Textura/404error.jpg';


const NotFound = () => {

    return (
        <div>
           <div className="card dark:bg-[#F2F2F2] pt-12 pb-10 rounded-lg">
    <div className="h-screen pb-8 mb-32 rounded-lg"> {/* Ajusté mb-32 para más espacio */}
        <div className="flex items-center justify-center py-12">
            <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
                <div className="flex flex-col items-center py-16 ">
                    <img className="px-4 hidden md:block" src={Error404} alt="" />
                    <img className="md:hidden" src={Error404} alt="" />
                    <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS!</h1>
                    <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">¡Ni Google Maps nos encuentra aquí! ¿Intentamos de nuevo?</p>
                    <Link to='/'>
                    <button className="elementor-button border-2 border-primaryVio text-primaryVio rounded-full text-xl font-medium font-semibold py-3 px-8 transition-all duration-300">
                                Volver a Home
                            </button>             
                            </Link> </div>
            </div>
        </div>
        </div>
        </div>
        </div>

    );
};

export default NotFound;
