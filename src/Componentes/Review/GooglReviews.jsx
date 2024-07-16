import React from 'react';
import reviewsData from './reviews.json';
import { Typography, Avatar, Rating } from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackTest from '../../assets/Textura/Group 120.png';


const GoogleReviews = () => {
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
        <div className="relative pb-10 px-4 md:px-8 min-h-screen">
            {/* Imagen de fondo */}
            <img src={BackTest} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="relative z-10">

            {/* Título "Testimonios" */}
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-white mt-5 text-center">
                Testimonios
            </h2>

                <div className="flex justify-start mt-8" style={{ paddingLeft: '110px', paddingTop: '150px' }}>


                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-96 items-center">
                        

                        <Slider {...settings}>
                            {reviewsToShow.map((review, index) => (
                                <div className="flex flex-col items-center text-center pt-12" key={index}>
                                    <Avatar
                                        src={review.avatar}
                                        alt="image"
                                        size="md"
                                        className="mb-4"
                                    />
                                    <Typography variant="p" className="mb-4 text-colorText font-m md:text-lg lg:text-base">
                                        &quot;{review.comment}&quot;
                                    </Typography>
                                    <Rating value={review.rating} readonly />
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
