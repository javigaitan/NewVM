import React from 'react'
import Navbar from "../../Componentes/Navbar/Navbar"
import Banner from "../../Componentes/BannerCTA/Banner"
import Footer from "../../Componentes/Footer/Footer"
import Partners from "../../Componentes/Partners/Partners"
import Blogs from "../../Pages/Blogs/Blogs"
import ServiciosNew from "../../Componentes/ServiciosNew/ServiciosNew"
import VMFacts from "../../Componentes/VMFacts/VMFacts"
import GoogleReviews from '../../Componentes/Review/GooglReviews'

const Landing = () => {
    return (
        <>
            {/*<Navbar />
            <Banner />
            <ServiciosNew />
            <VMFacts />*/}
            <GoogleReviews/>
            <Blogs />
            <Partners />
            <Footer />
        </>
    )
}

export default Landing