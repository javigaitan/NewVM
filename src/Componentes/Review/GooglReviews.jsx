import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import reviewsData from './reviews.json';
import { Typography, Avatar, Rating } from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackTest from '../../assets/Textura/texturadetestimonios.png';
import Recuadrotesti from '../../assets/Textura/recuadrofeed.png';

const GoogleReviews = () => {

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const reviewsToShow = reviewsData.slice(0, 3);

    return (
        <div className="relative lg:pb-10  min-h-screen items-center">
            {/* Imagen de fondo para la versión lg */}
            <img src={BackTest} alt="Background" className="absolute items-center inset-0 w-full h-full object-cover z-0 lg:block hidden" />

            {/* Contenedor para la versión móvil */}
            <div className="bg-secondaryTur min-h-screen flex flex-col justify-center lg:hidden relative items-top bg-none">
                {/* Título "Testimonios" */}
                <h2 className="text-4xl font-semibold text-white  text-center">
                    Testimonios
                </h2>

                {/* Imagen Recuadrotesti debajo del título */}
                <img 
                    src={Recuadrotesti} 
                    alt="Recuadro Testimonios" 
                    className="mt-2 w-6/7 h-auto mx-auto pl-7 " 
                />
            </div>

            {/* Contenedor para la versión lg */}
            <div className="relative z-10 items-center lg:block hidden">
                {/* Título "Testimonios" */}
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-colorWhite mt-5 text-center">
                    .
                </h2>

                <div className="facts-container flex justify-start mt-8" style={{ paddingLeft: '110px', paddingTop: '150px' }}>
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-96 items-center">
                        <Slider {...settings}>
                            {reviewsToShow.map((review, index) => (
                                <div className="flex flex-col items-center text-center pt-12" key={index}>
                                    <div>
                                        <Avatar
                                            src={review.avatar}
                                            alt="image"
                                            size="md"
                                            className="mb-4"
                                        />
                                        <Typography variant="p" className="mb-4 text-colorText font-m md:text-lg lg:text-base">
                                            &quot;{review.author}&quot;
                                        </Typography>
                                    </div>

                                    <Typography variant="p" className="mb-4 text-colorText font-m md:text-lg lg:text-base">
                                        &quot;{review.comment}&quot;
                                    </Typography>
                                    <Rating
                                        value={review.rating}
                                        readonly
                                        onClick={() => window.location.href = 'https://maps.app.goo.gl/8gQ39Ri2W3u1G31v7'}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleReviews;
