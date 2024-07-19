import React from 'react';
import BGF from "../../assets/Textura/bg-footer.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div 
            className="w-[1869px] h-[1453px] bg-no-repeat bg-center bg-cover sm:w-full sm:h-auto"
            style={{ backgroundImage: `url(${BGF})` }}
        >
            <div className="p-6 text-center">
                <h2 className="text-2xl text-white font-bold mb-4">Footer Title</h2>
                <p className="text-white mb-4">Some footer text goes here.</p>
                <Link to="/some-path" className="text-white underline">
                    Some Link
                </Link>
            </div>
        </div>
    );
}

export default Footer;
