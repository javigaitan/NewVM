import React, { useState } from 'react';
import TRABAJO from '../../assets/Img/brooke-cagle-9fHMo1-5Io8-unsplash-1-2-1536x1151.png';
import CARRERA from '../../assets/Img/brooke-cagle-9fHMo1-5Io8-unsplash-1.png';
import CURSOS from '../../assets/Img/brooke-cagle-9fHMo1-5Ioo8-unsplash-1-1536x1151.png';
import VIAJES from '../../assets/Img/Viajes-Grupales-Home-1536x1151.jpg';


import './Service.css';

const Service = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    return (
        <>
            <div className="mx-auto container py-9">
                <div className="flex flex-wrap items-center lg:justify-between justify-center">
                    {/* Card 1 */}
                    <div className="mx-2 w-72 lg:mb-0 mb-8 service-card" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                        <div>
                            <img src={TRABAJO} className={`w-full h-48 ${hoveredIndex === 0 ? 'zoom' : ''}`} />

                            <div className="overlay">
                                <button className="bg-purple-900 py-1.5 px-6 rounded-full text-white">Trabajo en el exterior</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 Ends */}
                    {/* Card 1 */}
                    <div className="mx-2 w-72 lg:mb-0 mb-8 service-card" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                        <div>
                            <img src={CARRERA} className={`w-full h-48 ${hoveredIndex === 0 ? 'zoom' : ''}`} />

                            <div className="overlay">
                                <button className="bg-purple-900 py-1.5 px-6 rounded-full text-white">Carreras Universitarias y Posgrados</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 Ends */}
                    {/* Card 1 */}
                    <div className="mx-2 w-72 lg:mb-0 mb-8 service-card" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                        <div>
                            <img src={CURSOS} className={`w-full h-48 ${hoveredIndex === 0 ? 'zoom' : ''}`} />

                            <div className="overlay">
                                <button className="bg-purple-900 py-1.5 px-6 rounded-full text-white">Cursos de Idiomas
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 Ends */}
                    {/* Card 1 */}
                    <div className="mx-2 w-72 lg:mb-0 mb-8 service-card" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                        <div>
                            <img src={VIAJES} className={`w-full h-48 ${hoveredIndex === 0 ? 'zoom' : ''}`} />

                            <div className="overlay">
                                <button className="bg-purple-900 py-1.5 px-6 rounded-full text-white">Viajes en grupo
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 Ends */}
                </div>
            </div>
        </>
    );

}

export default Service