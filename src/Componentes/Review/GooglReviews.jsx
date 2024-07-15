import React from 'react';
import reviewsData from './reviews.json';
import { Typography, Avatar, Rating } from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const reviewsToShow = reviewsData.slice(0, 3); // Limitamos a 3 testimonios

    return (
        <div className="bg-turquesa pb-10 px-4 md:px-8">
            <h1 className="py-5 lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">Testimonios</h1>
            <div className="flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                    <Slider {...settings}>
                        {reviewsToShow.map((review, index) => (
                            <div className="flex flex-col items-center text-center" key={index}>
                                <Avatar
                                    src={review.avatar}
                                    alt="image"
                                    size="md"
                                    className="mb-4"
                                />
                                <Typography variant="p" className="mb-4 text-gray-700 md:text-lg lg:text-base">
                                    &quot;{review.comment}&quot;
                                </Typography>
                                <Rating value={review.rating} readonly />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default GoogleReviews;
