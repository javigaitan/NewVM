import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import NotFound from './Componentes/NotFound';
import Nosotras from "./Pages/Nosotras/Nosotras";
import Landing from "./Pages/Landing/Landing";
import  ExperienciasHome  from "./Pages/Experiencias/ExperienciasHome";
import WorkStudy from "./Componentes/Experienciasvm/WorkStudy/WorkStudy";
import Insercion from "./Componentes/Experienciasvm/Insercion/Insercion";
import Hoteleria from "./Componentes/Experienciasvm/Hoteleria/Hoteleria";
import Contactanos from "./Pages/Contactanos/Contactanos";
import CursosIdiomas from "./Pages/CursosIdiomas/CursosIdiomas";
import Universidades from "./Pages/Universidad/Universidades";
import ComunidadVm from "./Pages/Comunidad/Comunidad";
import ViajesGrupales from "./Pages/ViajesGrupales/ViajesGrupales";
import Ahorro from "./Pages/Ahorro/Ahorro";
import PagesBlogs from "./Pages/Blogs/PagesBlogs";
import PagesService from "./Pages/PagesService/PagesService";
import Alojamientos from "./Pages/PagesService/Alojamientos";
import Seguros from "./Pages/PagesService/Seguros";
import Arrival from "./Pages/PagesService/Arrival";


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
        <Route path="/carreras-universitarias" element={<Universidades />} />
        <Route path="/comunidad" element={<ComunidadVm />} />
        <Route path="/viajes-grupales" element={<ViajesGrupales />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/ahorro" element={<Ahorro />} />
        <Route path="/blogs" element={<PagesBlogs />} />
        <Route path="/servicios" element={<PagesService />} />
        <Route path="/servicios-alojamientos" element={<Alojamientos />} />
        <Route path="/servicios-seguros" element={<Seguros />} />
        <Route path="/servicios-arrival-packages" element={<Arrival />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
