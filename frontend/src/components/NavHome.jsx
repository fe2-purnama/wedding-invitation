/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";
import { useTheme } from "./Theme/useTheme";
import styled from "styled-components";

const NavHome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const controlNavbar = useCallback(() => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setShowNav(false);
        } else if (window.scrollY < lastScrollY) {
            setShowNav(true);
        }
        setLastScrollY(window.scrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [controlNavbar]);

    const Nav = styled.div`
        background-color: ${({ theme }) => theme.navBackground};
        color: ${({ theme }) => theme.color};
        transition: background-color 0.5s ease, top 0.3s ease-in;
        z-index: 5;

        h2, h1, p {
            color: ${({ theme }) => theme.color};
            transition: color 0.5s ease;
        }

        &.hidden {
            transition: top 0.3s ease-in-out;
        }

        &.visible {
            top: 0;
            transition: top 0.3s ease-in-out;
        }
    `;

    const ThemeToggleButton = styled.button`
        background: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
        color: ${({ theme }) => theme.color};
        background-color: ${({ theme }) => theme.background};
    `;

    return (
        <>
            <Nav
                className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between shadow-md transition-transform duration-300 ${showNav ? "visible" : "hidden"}`}
            >
                <div className="ml-8 mr-20">
                    <h1 className="font-normal text-2xl">
                        <Link to="/">Logo</Link>
                    </h1>
                </div>
                <div className="mr-8 lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? (
                            <FaTimes className="text-3xl" />
                        ) : (
                            <FaBars className="text-3xl" />
                        )}
                    </button>
                </div>
                <div className="hidden lg:flex mr-8 items-center space-x-8">
                    <ul className="flex space-x-6">
                        <h1 className="font-normal text-lg">
                            <Link to="/design">Design</Link>
                        </h1>
                        <h1 className="font-normal text-lg">
                            <Link to="/review">Portfolio</Link>
                        </h1>
                        <h1 className="font-normal text-lg">
                            <Link to="/about">About</Link>
                        </h1>
                    </ul>
                </div>
                <div className="hidden lg:flex mr-8 items-center space-x-4">
                    <ThemeToggleButton onClick={toggleTheme}>
                        {theme === "light" ? "Dark Mode" : "Light Mode"}
                    </ThemeToggleButton>
                    <div className="flex items-center justify-center bg-[#C66B6B] rounded-full w-32 h-12">
                        <p className="font-montserrat font-semibold text-sm">
                            <Link className="text-white " to="/register">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </Nav>

            <Nav
                className={
                    `absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50 transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
                style={{ overflowY: 'auto', height: '100vh' }}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute top-5 right-8 text-3xl focus:outline-none"
                >
                    <FaTimes />
                </button>
                <ul className="flex flex-col space-y-6 text-center">
                    <h1 className="font-normal text-2xl">
                        <Link to="/design" onClick={toggleMenu}>
                            Design
                        </Link>
                    </h1>
                    <h1 className="font-normal text-2xl">
                        <Link to="/review" onClick={toggleMenu}>
                            Portfolio
                        </Link>
                    </h1>
                    <h1 className="font-normal text-2xl">
                        <Link to="/about" onClick={toggleMenu}>
                            About
                        </Link>
                    </h1>
                    <li className="font-normal text-2xl flex items-center justify-center space-x-2">
                        <FaSignInAlt />
                        <Link to="/login" onClick={toggleMenu}>
                            Sign In
                        </Link>
                    </li>
                    <li className="font-normal text-2xl flex items-center justify-center space-x-2">
                        <ThemeToggleButton onClick={toggleTheme}>
                            {theme === "light" ? "Dark Mode" : "Light Mode"}
                        </ThemeToggleButton>
                    </li>
                </ul>
            </Nav>
        </>
    );
};

export default NavHome;

