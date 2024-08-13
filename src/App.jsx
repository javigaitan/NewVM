import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import NotFound from './Componentes/NotFound';
import Nosotras from "./Pages/Nosotras/Nosotras";
import Landing from "./Pages/Landing/Landing";
import  ExperienciasHome  from "./Pages/Experiencias/ExperienciasHome";
import CursoDeIdiomas from "./Componentes/Experienciasvm/WorkStudy/CursoDeIdiomas";
import Insercion from "./Componentes/Experienciasvm/Insercion/Insercion";
import Hoteleria from "./Componentes/Experienciasvm/Hoteleria/Hoteleria";
import Contactanos from "./Pages/Contactanos/Contactanos";
import CursosIdiomas from "./Pages/CursosIdiomas/CursosIdiomas";
import Universidades from "./Pages/Universidad/Universidades";
import ComunidadVm from "./Pages/Comunidad/Comunidad";
import WorkandStudy from "./Pages/Work&StudyNew/Work&StudyNew";
import Ahorro from "./Pages/Ahorro/Ahorro";
import PagesBlogs from "./Pages/Blogs/PagesBlogs";
import PagesService from "./Pages/PagesService/PagesService";
import Alojamientos from "./Pages/PagesService/Alojamientos";
import Seguros from "./Pages/PagesService/Seguros";
import Arrival from "./Pages/PagesService/Arrival";
import Rifas from "./Pages/Ahorro/Rifas";
import MeCaso from "./Pages/Ahorro/MeCaso";
import Referidos from "./Pages/Ahorro/Referidos";
import ContactanosNew from "./Pages/Contactanos/ContactanosNew";
import DestinoIrlanda from "./Componentes/Destinos/DestinoIrlanda";
import DestinoMalta from "./Componentes/Destinos/DestinoMalta";




function App() {


  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/nosotras" element={<Nosotras />} />
        <Route path="/experiencias" element={<ExperienciasHome />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/curso-de-idiomas" element={<CursoDeIdiomas />} />
        <Route path="/work&study" element={<WorkandStudy />} />
        <Route path="/insercionlaboral" element={<Insercion />} />
        <Route path="/hoteleria" element={<Hoteleria />} />
        <Route path="/contacto" element={<Contactanos />} />
        <Route path="/carreras-universitarias" element={<Universidades />} />
        <Route path="/comunidad" element={<ComunidadVm />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/ahorro" element={<Ahorro />} />
        <Route path="/blogs" element={<PagesBlogs />} />
        <Route path="/servicios" element={<PagesService />} />
        <Route path="/servicios-alojamientos" element={<Alojamientos />} />
        <Route path="/servicios-seguros" element={<Seguros />} />
        <Route path="/servicios-arrival-packages" element={<Arrival />} />
        <Route path="/financia-con-rifas" element={<Rifas />} />
        <Route path="/me-caso-con-viajar" element={<MeCaso />} />
        <Route path="/programa-referidos" element={<Referidos />} />
        <Route path="/contactanos" element={<ContactanosNew />} />
        <Route path="/destino-irlanda" element={<DestinoIrlanda />} />
        <Route path="/destino-malta" element={<DestinoMalta />} />


        </Routes>
      </Router>
    </>
  )
}

export default App
