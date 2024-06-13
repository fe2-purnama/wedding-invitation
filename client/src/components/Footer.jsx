/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
return (
<footer className="relative w-full bg-[#868484] px-4 py-12">
    <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-7xl">
    <div className="w-full lg:w-[250px] mb-8 lg:mb-0">
        <p className="font-istok-web font-bold text-4xl text-white text-center mb-4">Links</p>
        <p className="font-montserrat font-normal text-base text-white text-center"> 
        <Link to="/" className="text-white hover:text-yellow-600">Home</Link>
        </p>
        <p className="font-montserrat font-normal text-base text-white text-center"> 
        <Link to="/product" className="text-white hover:text-yellow-600">Product</Link>
        </p>
        <p className="font-montserrat font-normal text-base text-white text-center"> 
        <Link to="/about" className="text-white hover:text-yellow-600">About</Link>
        </p>
    </div>
    <div className="w-full lg:w-[250px] mb-8 lg:mb-0">
        <p className="font-istok-web font-bold text-4xl text-white text-center mb-4">Contact</p>
        <p className="font-montserrat font-normal text-base text-white text-center">email@gmail.com</p>
        <p className="font-montserrat font-normal text-base text-white text-center">Sleman, Yogyakarta</p>
        <p className="font-montserrat font-normal text-base text-white text-center">(62) 89525401248</p>
    </div>
    <div className="w-full lg:w-[500px] mb-8 lg:mb-0">
        <p className="font-istok-web font-bold text-4xl text-white text-center mb-4">Follow us on social media</p>
        {/* Add social media icons here */}
        <div className="flex justify-center space-x-4">
        <a href="#" className="text-white hover:text-blue-400"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
        <a href="#" className="text-white hover:text-blue-600"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        <a href="#" className="text-white hover:text-pink-500"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        </div>
    </div>
    </div>
    <p className="font-istok-web font-normal text-2xl text-white text-center mt-8">
    Copyright &copy; 
    <span className="text-white"> Ini Wedding</span> 
    All rights reserved
    </p>
</footer>
);
};

export default Footer;

