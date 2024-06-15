/* eslint-disable no-unused-vars */
// src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
    color: '#000000',
    cardBackground: '#FFFFFF',
    cardColor: '#000000',
    gradient: 'linear-gradient(to right, #FFCECE, #FFFFFF)',
    backgroundGradient: 'linear-gradient(to bottom, white, #E9B2B2)',
    designGradient1: 'linear-gradient(to right, #FFF2F2, #FFF)',
    designGradient2: 'linear-gradient(to right, #FFCECE, #FFF)',
    sectionDesign: 'linear-gradient(to left, #FFF2F2, #FFF)',
    textColor: '#fff',
    sectionReview: '#fff',
    textColorReview: 'grey'
};

const darkTheme = {
    background: '#000000',
    navBackground: '#333333',
    color: '#ffffff',
    cardBackground: '#333333',
    cardColor: '#FFFFFF',
    gradient: 'linear-gradient(to right, #000, #333)',
    backgroundGradient: 'linear-gradient(to bottom, #000, #333)',
    designGradient1: 'linear-gradient(to right, #000, #333)',
    designGradient2: 'linear-gradient(to right, #333, #000)',
    sectionDesign: 'linear-gradient(to left, #333, #000)',
    textColor: '#fff',
    sectionReview: '#000',
    textColorReview: '#fff'
};

export const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme ? storedTheme : 'light';
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={themeMode}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeContext };
