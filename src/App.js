import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { rootStore } from './store';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { SinglePost } from './pages/SinglePost';
import { Search } from './pages/Search';
import { NotFound } from './pages/404';
import { Layout } from './Layouts/Layout';
import { DarkTheme } from './Layouts/DarkTheme';
import { ROOT, SIGNUP, POST_BY_ID, SEARCH } from './utils/constants/routs';

function App() {
    return (
        <DarkTheme>
            <Provider store={rootStore}>
                <BrowserRouter>
                    <Routes>
                        <Route path={ROOT} element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path={SIGNUP} element={<SignUp />} />
                            <Route path={POST_BY_ID} element={<SinglePost />} />
                            <Route path={SEARCH} element={<Search />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </DarkTheme>
    );
}

export default App;
