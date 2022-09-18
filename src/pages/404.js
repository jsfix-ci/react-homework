import React from 'react';
import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";

export const NotFound = () => {
    return (
        <section>
            <Container>
                <h1>404 page</h1>
                <p>
                    Back to <Link to="/">Home</Link>
                </p>
            </Container>
        </section>
    );
};
