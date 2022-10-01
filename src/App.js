import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { SinglePost } from './pages/SinglePost';
import { NotFound } from './pages/404';
import { Layout } from './Layouts/Layout';
import { DarkTheme } from './Layouts/DarkTheme';
import { SIGNUP, POST_BY_ID } from './utils/constants/routs';

function App() {
    return (
        <DarkTheme>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path={SIGNUP} element={<SignUp />} />
                        <Route path={POST_BY_ID} element={<SinglePost />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DarkTheme>
    );
}

export default App;
