import React, { useState, useEffect } from 'react';
import Navbar from '../../Componentes/Navbar/Navbar';
import Footer from '../../Componentes/Footer/Footer';

const ContactanosNew = () => {
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
            setLoading(false); 
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showForm) {
            const script = document.createElement('script');
            script.charset = 'utf-8';
            script.type = 'text/javascript';
            script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
            document.head.appendChild(script);
        
            script.onload = () => {
                if (window.hbspt) {
                    window.hbspt.forms.create({
                        region: "eu1",
                        portalId: "26265942",
                        formId: "d6f4e4f2-54c7-491d-b121-9c55701e02f6",
                        target: '#hubspotForm'
                    });
                }
            };
            return () => {
                document.head.removeChild(script);
            };
        }
    }, [showForm]);

    return (
        <>
            <Navbar />
            <div className="relative">
                <div className="2xl:mx-auto 2xl:container mx-4 py-16">
                    <div className="w-full relative flex items-center justify-center">
                        {loading ? (
                            <div className="absolute top-10 left-0 right-0 bottom-0 flex justify-center items-center bg-white opacity-75">
                                <div className="w-full h-50  flex justify-center items-center">
                                    <img src="https://comviajes.com/images/loader.gif" alt="Loader" />
                                </div>
                            </div>
                        ) : ( 
                            <div className="bg-opacity-80 md:my-10 lg:py-10 py-5 w-full md:mx-24 md:px-2 px-4 flex flex-col items-center justify-center relative z-40">
                                <h1 className="text-4xl font-semibold leading-9 text-black text-center">Dejanos tu consulta </h1>
                                <p className="text-base leading-normal text-center text-black mt-6">
                                    En la brevedad te estaremos respondiendo tus dudas 
                                </p>
                                <div id="hubspotForm" className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                                    
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {!loading && <Footer />} 
        </>
    );
}

export default ContactanosNew;
