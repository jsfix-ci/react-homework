// libraries
import React from 'react';
// components
import { Container } from '@mui/material';
import { Box } from '@mui/system';

export const Header = () => {
    return (
        <Box component="header" pt={3} pb={3} mb={5}>
            <Container>
                <img
                    style={{ width: '100px' }}
                    src="https://uploads-ssl.webflow.com/625528df065c53d23c2bc83b/62723bdfb1a3dd1ccbf9f1ec_pepsi.png"
                    alt=""
                />
            </Container>
        </Box>
    );
};
