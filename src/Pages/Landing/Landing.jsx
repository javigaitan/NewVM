import React, { useState, useEffect } from "react";
import Navbar from "../../Componentes/Navbar/Navbar";
import Banner from "../../Componentes/BannerCTA/Banner";
import Footer from "../../Componentes/Footer/Footer";
import Partners from "../../Componentes/Partners/Partners";
import Blogs from "../../Pages/Blogs/Blogs";
import ServiciosNew from "../../Componentes/ServiciosNew/ServiciosNew";
import VMFacts from "../../Componentes/VMFacts/VMFacts";
import GoogleReviews from '../../Componentes/Review/GooglReviews';
import LoaderAvionPopUp from '../../Componentes/LoaderAvion/LoaderAvionPopUp';

const Landing = () => {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(true);
        }, 5000); // 5000 ms = 5 seconds

        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    const handleClosePopup = () => {
        setShowLoader(false); // Hide the popup when closed
    };

    return (
        <>
          <Navbar />
             <Banner />
            
            <ServiciosNew />
            {/*<{showLoader && <LoaderAvionPopUp onClose={handleClosePopup} />} */}
            <VMFacts />
            <GoogleReviews /> 
            <Blogs />
            <Partners />
             <Footer />
            
        </>
    );
};

export default Landing;
