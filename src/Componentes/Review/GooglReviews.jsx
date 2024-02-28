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

    return (
        <div className=" pb-10 px-4 text-center md:px-8">
                <h1 className="  py-5 lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">Testimonios</h1>

            <Slider {...settings}>
                {reviewsData.map((review, index) => (
                    <div className="px-4 text-sm" key={index}>
                        <Typography variant="p" className="mb-5 text-sm text-colorText md:text-5xl text-1xl">
                            &quot;{review.comment}&quot;
                        </Typography>
                        <div className="flex justify-center">
                            <Avatar
                                src={review.avatar}
                                alt="image"
                                size="md"
                                className="mb-2 mx-auto"
                            />
                        </div>
                        <Typography variant="h6" className="mt-2 text-colorText">
                            {review.author}
                        </Typography>
                        <Rating value={review.rating} readonly />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default GoogleReviews;
