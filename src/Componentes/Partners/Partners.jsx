import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ALAN from '../../assets/Partners/Alanxelmundo.svg'
import ASSIST from '../../assets/Partners/Assist365.svg';
import ASSISTCARD from '../../assets/Partners/AssistCard.svg';
import ERASMUSU from '../../assets/Partners/Erasmusu.svg';
import HOLAFLY from '../../assets/Partners/Holafly.svg';
import HOLASIM from '../../assets/Partners/Holasim.svg';
import MONEY from '../../assets/Partners/Moneyjar.svg';
import PAMPA from '../../assets/Partners/pampadirecto.svg';
import PAX from '../../assets/Partners/pax.svg';
import PLANET01 from '../../assets/Partners/planet01.svg';
import AMERICANSHOP from '../../assets/Partners/SAS.svg';
import SPOTHOME from '../../assets/Partners/SPOT.svg';
import TWC from '../../assets/Partners/TWC.svg';
import WORD from '../../assets/Partners/WP.svg';


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
    <div className="my-30  pb-50 "> 

      <div className="mb-35 ">
        <h2 className="text-3xl font-semibold leading-9 text-center text-colorText lg:text-4xl mt-20 lg:mt-0">
          Nuestros Partners
        </h2>
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <Slider {...settings}>

          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>
            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={ALAN} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>

          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={ASSIST} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={ASSISTCARD} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={ERASMUSU} className="max-w-[250px] max-h-[250px] object-contain" alt="Hola Sim" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={HOLAFLY} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={HOLASIM} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={MONEY} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={PAMPA} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={PAX} className="max-w-[250px] max-h-[250px] object-contain" alt="Hola Sim" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={PLANET01} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={AMERICANSHOP} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={SPOTHOME} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>


            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={TWC} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>
          <Link to={'https://blog.vaga-mundo.com/es/comunidad-vm?hs_preview=HAzPBfKZ-89982037197'}>

            <div className="p-8  rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center">
                <img src={WORD} className="max-w-[250px] max-h-[250px] object-contain" alt="/" />
              </div>
            </div>
          </Link>



        </Slider>
      </div>
    </div>
  );
}

export default Partners;
