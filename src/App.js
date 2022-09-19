import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { Layout } from './Layouts/Layout';
import { DarkTheme } from './Layouts/DarkTheme';

function App() {
    return (
        <DarkTheme>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="signup" element={<SignUp />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DarkTheme>
    );
}

export default App;
