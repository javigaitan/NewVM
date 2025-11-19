import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Componentes/Navbar/Navbar";
import Banner from "../../Componentes/BannerCTA/Banner";
import Footer from "../../Componentes/Footer/Footer";
import Partners from "../../Componentes/Partners/Partners";
import Blogs from "../../Pages/Blogs/Blogs";
import ServiciosNew from "../../Componentes/ServiciosNew/ServiciosNew";
import VMFacts from "../../Componentes/VMFacts/VMFacts";
import GoogleReviews from '../../Componentes/Review/GooglReviews';
import LoaderAvionPopUp from '../../Componentes/LoaderAvion/LoaderAvionPopUp';
import FooterActual from "../../Componentes/Footer/FooterActual";
import BGF from "../../assets/Textura/backdeskprueba.svg";
import INTA from '../../assets/iconsRedes/ig.png';
import FB from '../../assets/iconsRedes/fb.png';
import LINK from '../../assets/iconsRedes/link.png';
import YT from '../../assets/iconsRedes/yt.png';
import TIK from '../../assets/iconsRedes/tiktok.png';
import BGFG from '../../assets/Textura/Footermovile1 1.png';
import ICEF from '../../Componentes/ICEF/iceflogo.svg';
import Logo2 from "../../assets/Textura/English Education logo.svg";
import Logo3 from "../../assets/Textura/ST_ReferenceChecked-CMYK 1.svg";
import { useTranslation } from "react-i18next";
import WhatsAppButton from '../../Componentes/BtnWs/WhatsAppButton'
import PopupImage from "../../Componentes/PopUpBanner/PopupImage";


const Landing = () => {
  const [t, i18n] = useTranslation("navbar");

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowLoader(false);
  };

  return (
    <>
    
      <Navbar />
<PopupImage />     
 <WhatsAppButton />

      <Banner />

      <ServiciosNew />{/*
           
            {showLoader && <LoaderAvionPopUp onClose={handleClosePopup} />}*/}
      <VMFacts />
      <GoogleReviews />
      <Blogs />
      <Partners />
      <Footer/>
      

    </>
  );
};

export default Landing;
