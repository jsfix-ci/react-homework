// libraries
import React from 'react';
// components
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Promo = ({ title }) => {
    return (
        <section>
            <Container>
                <Typography variant="h1" gutterBottom>
                    {title}
                </Typography>
            </Container>
        </section>
    );
};
