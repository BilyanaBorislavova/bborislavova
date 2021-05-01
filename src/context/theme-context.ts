import { createContext } from 'react';

type ThemeContextTypes = {
    theme: string,
    toggleTheme: () => void,
};

const themeContextDefaultValues: ThemeContextTypes = {
    theme: '',
    toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextTypes>(themeContextDefaultValues);

export default ThemeContext;
