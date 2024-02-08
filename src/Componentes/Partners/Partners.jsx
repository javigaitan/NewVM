import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ASSIST from '../../assets/Partners/365assist.png';
import ASSISTCARD from '../../assets/Partners/assist-card.png';
import MAPA from '../../assets/Partners/cropped-Mapa-Irlanda3.png';
import PLANET from '../../assets/Partners/dNK6iZ3U_400x400.png';
import IMG2 from '../../assets/Partners/IV-WORDPRESS-Banner-V4_Chico.png';
import IMG3 from '../../assets/Partners/logo-erasmusu-1024x256.png';
import IMG4 from '../../assets/Partners/logo-nuevo.png';
import IMG5 from '../../assets/Partners/logo_wmlx-x4-1024x288.png';
import IMG6 from '../../assets/Partners//Logo_WP-1024x256.png';
import IMG7 from '../../assets/Partners/Screen-Shot-2021-06-10-at-12.11.09-PM.png';



const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Cantidad de imágenes mostradas en pantalla
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Intervalo de cambio de imágenes en milisegundos
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
    <div className="my-25">

      <div className="mb-10">
        <h2 className="text-3xl font-semibold leading-9 text-center text-gray-800 lg:text-4xl">
          Nuestros Partners
        </h2>
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <Slider {...settings}>
          <div className="p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={ASSIST} width="150px" height="150px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
              </div>
            </div>
          </div>
          <div className="p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={ASSISTCARD} width="150px" height="150px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
              </div>
            </div>
          </div>
          <div className="p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={MAPA} width="150px" height="150px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
              </div>
            </div>
          </div>
          <div className="p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={PLANET} width="150px" height="150px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
              </div>
            </div>
          </div>

          <div className="p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={IMG2} width="200px" height="200px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
              </div>
            </div>
          </div>

          <div className="p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={IMG3} width="150px" height="150px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
              </div>
            </div>
          </div>

          <div className="p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={IMG4} width="150px" height="150px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
              </div>
            </div>
          </div>
          <div className="p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={IMG5} width="200px" height="200px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
              </div>
            </div>
          </div>


          <div className="p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={IMG6} width="200px" height="200px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
              </div>
            </div>
          </div>

          <div className="p-6  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={IMG7} width="200px" height="200px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">

              </div>
            </div>
          </div>


        </Slider>
      </div>
    </div>

  );

}

export default Partners