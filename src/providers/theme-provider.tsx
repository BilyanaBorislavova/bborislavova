import * as React from 'react';
import ThemeContext from '../context/theme-context';

const DEFAULT_THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
};

const { LIGHT, DARK } = DEFAULT_THEMES;

const ThemeProvider: React.FC = ({ children }) => {
    const [ theme, setTheme ] = React.useState(localStorage.getItem('theme') || '');

    const toggleTheme = () => {
        if (theme === LIGHT) {
            setTheme(DARK);
        } else {
            setTheme(LIGHT);
        }
    };

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [ theme ]);

    const themeContextValue = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    )
};

export { DEFAULT_THEMES };

export default ThemeProvider;
