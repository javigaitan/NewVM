import React from 'react'
import Navbar from '../../Componentes/Navbar/Navbar'
import Footer from '../../Componentes/Footer/Footer'
import CardBlog from './CardBlog'
import blogsData from './Blogs.json'
import BannerIMG from '../../assets/Img/experiencia.jpg'
import MajoBlog from '../../assets/Img/DUBLIN (6).jpg'


const PagesBlogs = () => {
  return (
    <div>
      <Navbar />
      <div className>
        <div className="flex justify-end items-center">
          <img className="object-cover md:hidden  w-full h-60 opacity-50" src={BannerIMG} alt="background" />
          <img className="hidden md:block object-cover  w-full h-56 lg:h-52 opacity-50" src={BannerIMG} alt="background" />
          <div className=" flex xl:px-20 justify-start items-start flex-col absolute">
            <h1 className="text0-xl xl:text-2xl font-medium leading-5 xl:leading-normal text-gray-800">Blog</h1>
          </div>
        </div>

      </div>
      <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Enterate de las mejores novedades</h1>
          <div className="mt-12 lg:mt-24">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <div>
                <img className="w-full" src={MajoBlog} alt="computer" />
                <div className="py-4 px-8 w-full flex justify-between bg-primaryVio">
                  <p className="text-sm text-white font-semibold tracking-wide">Malta</p>
                  <p className="text-sm text-white font-semibold tracking-wide">29 de Marzo 2021</p>
                </div>
                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                  <h1 className="text-4xl text-gray-900 font-semibold tracking-wider">Experiencia Majo</h1>
                  <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">Soy Majo Rivero, uruguaya, de la ciudad fronteriza de Artigas. Gracias a la influencia brasileña aprendí mi segunda lengua...</p>
                  <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                    <p className="text-base tracking-wide text-primaryVio">Leer mas</p>
                    <svg className="ml-3 lg:ml-6" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                      <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4B0077" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 8.53662H19" stroke="#4B0077" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="h-5 w-2" />
                </div>
              </div>
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  {/* Renderiza los blogs */}
                  {blogsData.map((blog, index) => (
                    <div key={index}>
                      {/* Renderiza el componente CardBlog para cada entrada en blogs.json */}
                      <CardBlog
                        foto={blog.Foto}
                        destino={blog.Destino}
                        fecha={blog.Fecha}
                        titulo={blog.Titulo}
                        resumen={blog.Resumen}
                      />
                    </div>
                  ))}
                </div>



                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">

                  {/* <!-- Aqui va el--> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>)
}

export default PagesBlogs