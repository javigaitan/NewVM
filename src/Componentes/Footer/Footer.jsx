import React from 'react';
import BGF from "../../assets/Textura/Group 127.png";
import INTA from '../../assets/iconsRedes/ig.png';
import FB from '../../assets/iconsRedes/fb.png';
import LINK from '../../assets/iconsRedes/link.png';
import YT from '../../assets/iconsRedes/yt.png';
import TIK from '../../assets/iconsRedes/tiktok.png';

const Footer = () => {
  return (
    <div className="relative w-full h-[750px]"> 
      <img
        src={BGF}
        alt="Footer background image"
        className="object-cover w-full h-[850px] absolute inset-0 z-0 "
      />
      <div className="p-6 text-center absolute inset-0 z-10 flex flex-col items-center"> 
      <div className="flex space-x-4 pt-30">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={INTA} alt="Instagram icon" className="w-16 h-16" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={FB} alt="Facebook icon" className="w-16 h-16" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={LINK} alt="Link icon" className="w-16 h-16" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={YT} alt="YouTube icon" className="w-16 h-16" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
            <img src={TIK} alt="TikTok icon" className="w-16 h-16" />
          </a>
        </div>
        <div className="text-center relative">
  <div className="flex flex-col items-center mt-20">
    <div className="text-white text-center">
      <p className="text-2xl font-bold">Opción 1</p>
      <hr className="w-11/12 border-t border-green-500" />
      <p className="text-2xl font-semibold">Opción 2</p>
      <hr className="w-11/12 border-t border-green-500" />
      {/* ... otras opciones ... */}
    </div>
  </div>
      
  </div>

      </div>
    </div>
  );
};

export default Footer;
