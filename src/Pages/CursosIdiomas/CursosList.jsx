import React from 'react';

const CursosList = ({ requisitos }) => {
    return (
        <div className="flex justify-center items-center w-full">
            <ul className="flex flex-col justify-center items-center w-full sm:w-96 md:w-8/12 lg:w-full gap-2 sm:mt-14 mt-10">
                {requisitos.map((requisito, index) => (
                    <li key={index} className="text-center">
                        <p className="font-semibold text-l leading-5 text-gray-800 lg:mt-10 mt-9">▪ {requisito}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CursosList;
