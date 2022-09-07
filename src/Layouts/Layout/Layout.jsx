import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import {ThemeContext} from "../../context/themeContext";

export const Layout = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    
    return (
        <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
            <Header />
            <main style={{ minHeight: '70vh' }}>
                <Outlet />
            </main>
            <Footer />
        </ThemeContext.Provider>
    );
};
