import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ASSIST from '../../assets/Partners/Group (1).png';
import ASSISTCARD from '../../assets/Partners/Group (2).png';
import MAPA from '../../assets/Partners/Group (3).png';
import PLANET from '../../assets/Partners/Group (4).png';
import IMG2 from '../../assets/Partners/Group (5).png';
import IMG3 from '../../assets/Partners/Group (6).png';
import IMG4 from '../../assets/Partners/Group (7).png';
import IMG5 from '../../assets/Partners/Group (8).png';
import IMG6 from '../../assets/Partners/Group (9).png';
import IMG7 from '../../assets/Partners/Group (10).png';
import IMG8 from '../../assets/Partners/Group (11).png';
import IMG9 from '../../assets/Partners/Group (12).png';

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Cantidad de imágenes mostradas en pantalla
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Intervalo de cambio de imágenes en milisegundos
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-30 pb-50">

      <div className="mb-35">
        <h2 className="text-3xl font-semibold leading-9 text-center text-colorText lg:text-4xl">
          Nuestros Partners
        </h2>
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <Slider {...settings}>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={ASSIST} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={ASSISTCARD} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={PLANET} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={MAPA} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={IMG2} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={IMG3} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={IMG4} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={IMG5} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={IMG6} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={IMG7} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={IMG8} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
          <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex justify-center items-center">
              <img src={IMG9} className="max-w-[200px] max-h-[200px] object-contain" alt="/" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Partners;
