import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = () => {
    return (
        <>
            <Header />
            <main style={{ minHeight: '70vh' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
