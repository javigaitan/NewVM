import React from 'react';
import Navbar from '../../Componentes/Navbar/Navbar';
import CURSO from '../../assets/ServiciosVM/estudioytrabajoexterior.png';
import WyS from '../../assets/ServiciosVM/curso idioma.png';
import universitarios from '../../assets/ServiciosVM/posgrados.png';
import { Link } from 'react-router-dom';
import FormContactanos from '../../Componentes/FormContactanos/FormContactanos';

const Contactanos = () => {


    return (
        <div>
            <Navbar />
            <div className=' mt-14'>
                <FormContactanos />

            </div>





        </div>
    )
}

export default Contactanos;
