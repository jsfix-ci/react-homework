import React from 'react';
import { Promo } from '../Layouts/Promo';
import { SignUpForm } from '../Layouts/SignUpForm';

export const SignUp = () => {
    return (
        <>
            <Promo title="Sign Up" />
            <SignUpForm />
        </>
    );
};
