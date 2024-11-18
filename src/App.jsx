import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import NotFound from './Componentes/NotFound';
import Nosotras from "./Pages/Nosotras/Nosotras";
import Landing from "./Pages/Landing/Landing";
import CursoDeIdiomas from "./Componentes/Experienciasvm/WorkStudy/CursoDeIdiomas";
import Contactanos from "./Pages/Contactanos/Contactanos";
import Universidades from "./Pages/Universidad/Universidades";
import WorkandStudy from "./Pages/Work&StudyNew/Work&StudyNew";
import Ahorro from "./Pages/Ahorro/Ahorro";
import PagesBlogs from "./Pages/Blogs/PagesBlogs";
import PagesService from "./Pages/PagesService/PagesService";
import ContactanosNew from "./Pages/Contactanos/ContactanosNew";
import AdaptadorDestinos from "./Componentes/Destinos/AdaptadorDestinos";
import AdaptadorDestinosMalta from "./Componentes/Destinos/AdaptadorDestinoMalta";
import AdaptadorDestinosEspana from "./Componentes/Destinos/AdaptadorDestinoEspana";
import Gastronomy from "./Pages/ExperienceEspana/Gastronomy/Gastronomy";
import Doctorates from "./Pages/ExperienceEspana/Doctorates/Doctorates";
import AdvancedDiplomas from "./Pages/ExperienceEspana/Advanced Diplomas/AdvancedDiplomas";






function App() {


  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/nosotros" element={<Nosotras />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/curso-de-idiomas" element={<CursoDeIdiomas />} />
        <Route path="/work&study" element={<WorkandStudy />} />
        <Route path="/contacto" element={<Contactanos />} />
        <Route path="/carreras-universitarias" element={<Universidades />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/ahorro" element={<Ahorro />} />
        <Route path="/blogs" element={<PagesBlogs />} />
        <Route path="/servicios" element={<PagesService />} />
        <Route path="/contactanos" element={<ContactanosNew />} />
        <Route path="/destino-irlanda" element={<AdaptadorDestinos />} />
        <Route path="/destino-malta" element={<AdaptadorDestinosMalta />} />
        <Route path="/destino-espana" element={<AdaptadorDestinosEspana />} />
        <Route path="/gastronomia" element={<Gastronomy />} />
        <Route path="/doctorados" element={<Doctorates />} />
        <Route path="/diplomaturas" element={<AdvancedDiplomas />} />


        </Routes>
      </Router>
    </>
  )
}

export default App
