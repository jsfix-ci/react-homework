import React, { useState } from 'react';
import { ThemeContext } from '../../utils/context/themeContext';

export const DarkTheme = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    return <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>{children}</ThemeContext.Provider>;
};
