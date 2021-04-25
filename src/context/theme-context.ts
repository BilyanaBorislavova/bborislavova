import { createContext } from 'react';
import { ThemeContextTypes } from '../types/theme-context-types';

const themeContextDefaultValues: ThemeContextTypes = {
    theme: 'light',
    toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextTypes>(themeContextDefaultValues);

export default ThemeContext;
