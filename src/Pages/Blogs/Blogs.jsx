import React from 'react';
import Irlanda3 from '../../assets/Img/DUBLIN (6).jpg';
import Blog from '../../assets/Fotos/Blog-atehan.jpg';
import IrlandaInd from '../../assets/Fotos/Blog-introduc.jpeg';
import BlogBg from '../../assets/Textura/Group 120 (1).png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '20%', // Adjusts the visible part of the next slide
        customPaging: (i) => (
            <button
                style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'grey',
                }}
            />
        ),
        appendDots: (dots) => (
            <div
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '10px',
                }}
            >
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
    };

    const blogImages = [IrlandaInd, Irlanda3, Blog];

    return (
        <div className="flex">
            {/* Imagen de fondo */}
            <div className="flex items-center justify-start" style={{ paddingTop: '75px', paddingBottom: '30px' }}>
                <img src={BlogBg} className="w-[80%] max-h-[677px] object-cover" alt="Background" />
            </div>

            {/* Carrusel de imágenes */}
            <div className="flex flex-col justify-end ml-5 w-1/2 pb-20 pt-30">
                <Slider {...settings}>
                    {blogImages.map((image, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <div className="relative flex items-center justify-center h-[677px]">
                                <img src={image} className='w-[90%] max-h-[677px] object-cover rounded-3xl opacity-80' alt={`Blog ${index}`} />
                                <div className="absolute top-0 flex flex-col w-full h-full items-center justify-between py-10">
                                    <div className="flex items-center justify-center flex-col h-full">
                                        <h2 className="text-2xl font-semibold leading-normal text-center text-colorWhite">Blog Title {index + 1}</h2>
                                        <p className="text-base leading-normal text-center text-colorWhite mt-4">Description for Blog {index + 1}.</p>
                                        <div className='pt-20'>
                                            <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-base font-bold leading-none text-center rounded-full text-primaryVio border border-primaryVio border-solid py-4 px-12 bg-colorWhite focus:outline-none">Leer más</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Blogs;