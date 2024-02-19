import React from "react"
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Navbar from "./Componentes/Navbar/Navbar"
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
import Blogs from "./Pages/Blogs/Blogs"
import ServiciosNew from "./Componentes/ServiciosNew/ServiciosNew"
import VMFacts from "./Componentes/VMFacts/VMFacts"
import Landing from "./Pages/Landing/Landing";
import  ExperienciasHome  from "./Pages/Experiencias/ExperienciasHome";
import WorkStudy from "./Componentes/Experienciasvm/WorkStudy/WorkStudy";
import Insercion from "./Componentes/Experienciasvm/Insercion/Insercion";
import Hoteleria from "./Componentes/Experienciasvm/Hoteleria/Hoteleria";
import Contactanos from "./Pages/Contactanos/Contactanos";
import CursosIdiomas from "./Pages/CursosIdiomas/CursosIdiomas";


function App() {


  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/nosotras" element={<Nosotras />} />
        <Route path="/experiencias" element={<ExperienciasHome />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/work&study" element={<WorkStudy />} />
        <Route path="/insercionlaboral" element={<Insercion />} />
        <Route path="/hoteleria" element={<Hoteleria />} />
        <Route path="/contacto" element={<Contactanos />} />
        <Route path="/cursos-idiomas" element={<CursosIdiomas />} />






        </Routes>
      </Router>
    </>
  )
}

export default App
