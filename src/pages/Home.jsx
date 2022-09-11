import React from 'react';
import { Promo } from '../Layouts/Promo';
import { Posts } from '../Layouts/Posts';

export const Home = () => {
    return (
        <>
            <Promo title={'Blog'} />
            <Posts />
        </>
    );
};
