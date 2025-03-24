import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, HashRouter, } from "react-router-dom";
import NotFound from "./Componentes/Notfound/NotFound";
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
import BlogDetail1 from "./Pages/Blogs/BlogDetail/BlogDetail1";
import BlogDetail2 from "./Pages/Blogs/BlogDetail/BlogDetail2";
import BlogDetail3 from "./Pages/Blogs/BlogDetail/BlogDetail3";
import BlogDetail4 from "./Pages/Blogs/BlogDetail/BlogDetail4";
import BlogDetail5 from "./Pages/Blogs/BlogDetail/BlogDetail5";
import BlogDetail6 from "./Pages/Blogs/BlogDetail/BlogDetail6";
import BlogDetail7 from "./Pages/Blogs/BlogDetail/BlogDetail7";





import TPBLOG from "./Pages/TP-Blog/tpblog"







function App() {


  return (
    <>
    <HashRouter>

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

        <Route path="/irlanda-el-destino-perfecto" element={<BlogDetail1/>} />
        <Route path="/estudia-trabaja-irlanda" element={<BlogDetail2/>} />
        <Route path="/irlanda-gratuito" element={<BlogDetail3/>} />
        <Route path="/gastronomia-irlanda" element={<BlogDetail4/>} />
        <Route path="/lugares-increibles" element={<BlogDetail5/>} />
         <Route path="/conduccion-autos-irlanda" element={<BlogDetail6/>} />
         <Route path="/deportes-irlanda" element={<BlogDetail7/>} />






        <Route path="/gracias-formulario-web" element={<TPBLOG/>} />



        </Routes>
      </HashRouter>
    </>
  )
}

export default App
