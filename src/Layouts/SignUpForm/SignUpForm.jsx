import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';
import { VALIDATION_SCHEME } from '../../helpers/validationScheme';
import { Input } from '../../components/UI/Input';

export const SignUpForm = () => {
    const [serverError, setServerError] = useState({ status: false, errors: {} });
    const [successfulSend, setSuccessfulSend] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const schema = object({
        email: VALIDATION_SCHEME.email,
        username: VALIDATION_SCHEME.name,
        password: VALIDATION_SCHEME.password,
    }).required();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const resetSubmitMessages = () => {
        setServerError({ status: false, errors: {} });
        setSuccessfulSend(false);
    };

    const postData = async (data) => {
        try {
            let response = await fetch('https://studapi.teachmeskills.by/auth/users/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (response.status === 201) {
                setSuccessfulSend(true);
                reset();
            } else {
                setServerError({ status: true, errors: result });
            }
        } catch (error) {
            setServerError({ status: true, errors: { common: 'error on server! reload page please!' } });
        } finally {
            setIsSubmitting(false);
        }
    };

    const onSubmit = (data) => {
        setIsSubmitting(true);
        postData(data);
    };

    return (
        <section>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register('username')}
                        error={errors?.username?.message}
                        label="username"
                        maxLength="100"
                    />
                    <Input label="email" error={errors?.email?.message} {...register('email')} maxLength="100" />
                    <Input
                        label="password"
                        error={errors?.password?.message}
                        {...register('password')}
                        maxLength="100"
                    />
                    <input
                        type="submit"
                        disabled={isSubmitting}
                        onClick={resetSubmitMessages}
                        value={isSubmitting ? 'is submitting...' : 'Sign Up'}
                    />
                    {serverError.status &&
                        Object.values(serverError.errors).map((value, index) => {
                            return (
                                <p style={{ color: 'red' }} key={index}>
                                    {value}
                                </p>
                            );
                        })}
                    {successfulSend && (
                        <p style={{ color: 'green' }}>Письмо для активации отправлено на ваш email адрес</p>
                    )}
                </form>
            </Container>
        </section>
    );
};
