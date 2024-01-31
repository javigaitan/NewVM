import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import destinos from './destinosData'; // Importa el array desde el archivo externo

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DestinosCarrucel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-100">
      <div className="mx-auto container py-8">
        <Slider {...settings}>
          {destinos.map((destino, index) => (
            <div key={index} className="mx-2 w-7 lg:mb-0 mb-8">
              <Card
                imageSrc={destino.imageSrc}
                team={destino.team}
                country={destino.country}
                description={destino.description}
                link={destino.link}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DestinosCarrucel;