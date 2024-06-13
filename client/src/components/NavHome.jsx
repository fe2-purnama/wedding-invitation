/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSignInAlt } from 'react-icons/fa';

const NavHome = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};

return (
<>
    <nav className="relative w-full h-20 flex items-center justify-between bg-white shadow-md">
    <div className="ml-8 mr-20">
        <h1 className="font-normal text-2xl text-black">
        <Link to="/">Logo</Link>
        </h1>
    </div>
    <div className="mr-8 lg:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
        {isMenuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
        </button>
    </div>
    <div className="hidden lg:flex mr-8 items-center space-x-8">
        <ul className="flex space-x-6">
        <li className="font-normal text-lg text-black">
            <Link to="/design">Design</Link>
        </li>
        <li className="font-normal text-lg text-black">
            <Link to="/review">Portfolio</Link>
        </li>
        <li className="font-normal text-lg text-black">
            <Link to="/about">About</Link>
        </li>
        </ul>
    </div>
    <div className="hidden lg:flex mr-8">
        <div className="flex items-center justify-center bg-[#C66B6B] rounded-full w-32 h-12">
        <p className="font-montserrat font-semibold text-white text-sm">
            <Link to="/register">Sign Up</Link>
        </p>
        </div>
    </div>
    </nav>

    <div
    className={`absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center text-black z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
    <button onClick={toggleMenu} className="absolute top-5 right-8 text-black text-3xl focus:outline-none">
        <FaTimes />
    </button>
    <ul className="flex flex-col space-y-6 text-center">
        <li className="font-normal text-2xl">
        <Link to="/design" onClick={toggleMenu}>
            Design
        </Link>
        </li>
        <li className="font-normal text-2xl">
        <Link to="/review" onClick={toggleMenu}>
            Portfolio
        </Link>
        </li>
        <li className="font-normal text-2xl">
        <Link to="/about" onClick={toggleMenu}>
            About
        </Link>
        </li>
        <li className="font-normal text-2xl flex items-center justify-center space-x-2">
        <FaSignInAlt />
        <Link to="/login" onClick={toggleMenu}>Sign-Up</Link>
        </li>
    </ul>
    </div>
</>
);
};

export default NavHome;
