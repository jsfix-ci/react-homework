// libraries
import React from 'react';
// components
import { Layout } from './Layouts/Layout';
import { Promo } from './Layouts/Promo';
import { Posts } from './Layouts/Posts';

function App() {
    return (
        <Layout>
            <Promo />
            <Posts />
        </Layout>
    );
}

export default App;
