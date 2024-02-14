import React from "react"
import  Navbar  from "./Componentes/Navbar/Navbar"
import NotFound from './Componentes/NotFound'
import Banner from "./Componentes/BannerCTA/Banner"
import Footer from "./Componentes/Footer/Footer"
import Newsletter from "./Componentes/NewsletterPopUp/Newsletter"
import Partners from "./Componentes/Partners/Partners"
import Review from "./Componentes/Review/Review"
import DestinosCarrucel from "./Componentes/DestinosCarrucel/DestinosCarrucel"
import WhatsAppButton from "./Componentes/BtnWs/WhatsAppButton"
import Service from "./Componentes/Service/Service"
import Nosotras from "./Pages/Nosotras/Nosotras"
import PorqueVM from "./Componentes/Porque VM/PorqueVM"
import Blogs from "./Pages/Blogs/Blogs"
import ServiciosNew from "./Componentes/ServiciosNew/ServiciosNew"


function App() {
  

  return (
    <>
    <Navbar/>
    <Banner/>
    <ServiciosNew/>
    <Review/>
    <Blogs/>



    <Partners/>
    <Footer/>
    <WhatsAppButton/>



    </>
  )
}

export default App
