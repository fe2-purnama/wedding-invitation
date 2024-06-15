// src/contexts/useTheme.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Pastikan path sudah sesuai

export const useTheme = () => useContext(ThemeContext);
