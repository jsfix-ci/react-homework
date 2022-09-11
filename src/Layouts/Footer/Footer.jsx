// libraries
import React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        mt: 5,
                        pb: 3,
                        pt: 3,
                        borderTop: 1,
                        borderColor: 'divider',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography component="span">©{new Date().getFullYear()} Blogfolio</Typography>
                    <Typography component="span">All rights reserved</Typography>
                </Box>
            </Container>
        </footer>
    );
};
