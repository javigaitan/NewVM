import React from "react";

const Error10 = () => {
    return (
        <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <img className="hidden lg:block" src="https://static.vecteezy.com/system/resources/previews/012/988/805/non_2x/gear-icon-style-vector.jpg" alt="" />
                <img className="hidden md:block lg:hidden" src="https://static.vecteezy.com/system/resources/previews/012/988/805/non_2x/gear-icon-style-vector.jpg" alt="" />
                <img className="md:hidden" src="https://static.vecteezy.com/system/resources/previews/012/988/805/non_2x/gear-icon-style-vector.jpg" alt="" />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">¡Nos estamos renovando!</h1>
                <p className="py-4 text-base text-gray-800">Te pedimos disculpas por no estar disponibles para que nos visites</p>
                <p className="py-2 text-base text-gray-800">Pero te dejamos este enlace para que puedas consultarnos lo que necesites</p>
                <button
                    onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=1138750336"}
                    className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                    Contáctanos
                </button>
            </div>
        </div>
    );
};

export default Error10;
