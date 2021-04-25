import './toggle-theme-button.scss';

import * as React from 'react';
import ThemeContext from '../context/theme-context';
import { DEFAULT_THEMES } from '../providers/theme-provider';
import { getClassName } from '../utils/string-utils';

const { LIGHT, DARK } = DEFAULT_THEMES;

const ToggleThemeButton: React.FC = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    const isThemeLight = theme === LIGHT;
    const isThemeDark = theme === DARK;

    const customClassName = getClassName({
        'toggle-theme-button': true,
        'toggle-theme-button-light': isThemeLight,
        'toggle-theme-button-dark': isThemeDark,
    });

    return (
        <button
          className={customClassName}
          onClick={toggleTheme}
        >
           
        </button>
    );
};

export default ToggleThemeButton;
