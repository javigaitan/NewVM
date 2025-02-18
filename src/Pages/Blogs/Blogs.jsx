import React from 'react';
import { Link } from 'react-router-dom';
import Irlanda3 from '../../assets/Img/DUBLIN (6).jpg';
import Blog from '../../assets/Fotos/Blog-atehan.jpg';
import IrlandaInd from '../../assets/Fotos/Blog-introduc.jpeg';
import BlogBg from '../../assets/Textura/Group 120 (1).png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogData = [
    {
      title: "Descubre Irlanda: El Destino Perfecto para Aprender Inglés",
      description: "Si estás buscando un destino que combine educación de calidad, una cultura fascinante y una experiencia de vida única, Irlanda es tu lugar ideal....",
      image: IrlandaInd
    },
    {
      title: "Nuevo destino ATHLONE",
      description: "Athlone es una histórica ciudad medieval irlandesa que atrae a muchos turistas. Al estar en un punto estratégico...",
      image: Blog
    },
    {
      title: "Guía Completa para Estudiar y Trabajar en Irlanda",
      description: "Si estás buscando una experiencia única para mejorar tu inglés o realizar estudios superiores, Irlanda es el destino perfecto para ti",
      image: Irlanda3
    }
  ];
  
  const Blogs = () => {
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          centerMode: true,
          centerPadding: '20%',
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
  
      return (
        <div className="relative">
          {/* Componente visible en lg y superior */}
          <div className="hidden md:block lg:flex items-center">
            <div className="flex items-center justify-start">
              <img src={BlogBg} className="w-[80%] max-h-[677px] object-cover" alt="Background" />
            </div>
      
            <div className="flex flex-col justify-end ml-5 w-1/2 pb-20 pt-30 mt-20">
              <Slider {...settings}>
                {blogData.map((blog, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <div className="relative flex items-center justify-center h-[677px]">
                      <img src={blog.image} className="w-[90%] max-h-[677px] object-cover rounded-3xl opacity-80" alt={`Blog ${index}`} />
                      <div className="absolute top-0 flex flex-col w-full h-full items-center justify-between py-10">
                        <div className="flex items-center justify-center flex-col h-full">
                          <h2 className="text-2xl font-semibold leading-normal text-center text-colorWhite">{blog.title}</h2>
                          <p className="text-base leading-normal text-center text-colorWhite mt-4 p-7">{blog.description}</p>
                          <Link to="/blogs">
                            <div className="pt-20">
                              <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-base font-bold leading-none text-center rounded-full text-primaryVio border border-primaryVio border-solid py-4 px-12 bg-colorWhite focus:outline-none">
                                Leer más
                              </button>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
      
          {/* Fondo verde visible solo en md */}
          <div className="bg-secondariVerde h-screen w-full flex items-center justify-center md:block lg:hidden">
            <div className="flex flex-col justify-center w-full h-full">
              <h1 className="text-primaryVio text-4xl font-bold text-center mb-7">Blog VM</h1>
              <div className="w-full px-4">
                <Slider
                  {...settings}
                  slidesToShow={1} // Mostrar solo una imagen a la vez
                  centerPadding="0" // Eliminar el padding lateral
                >
                  {blogData.map((blog, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <div className="relative flex items-center justify-center h-[400px]"> {/* Ajustar el tamaño del contenedor */}
                        <img src={blog.image} className="w-full h-full object-cover rounded-3xl opacity-80" alt={`Blog ${index}`} />
                        <div className="absolute top-0 flex flex-col w-full h-full items-center justify-between py-10">
                          <div className="flex items-center justify-center flex-col h-full">
                            <h2 className="text-3xl font-semibold leading-normal text-center text-colorWhite">{blog.title}</h2>
                            <p className="text-sm leading-normal text-center text-colorWhite mt-4 px-4">{blog.description}</p>
                            <Link to="/blogs">
                              <div className="pt-12">
                                <button className="w-full hover:bg-secondaryTur2 transition duration-150 text-lg font-bold leading-none text-center rounded-full text-primaryVio border border-primaryVio border-solid py-3 px-6 bg-colorWhite focus:outline-none">
                                  Leer más
                                </button>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      );
      
  };
  
  export default Blogs;
