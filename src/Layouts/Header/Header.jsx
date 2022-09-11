import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import { Box } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';

export const Header = () => {
    return (
        <Box component="header" pt={3} pb={3} mb={5}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/">
                        <img
                            style={{ width: '100px' }}
                            src="https://uploads-ssl.webflow.com/625528df065c53d23c2bc83b/62723bdfb1a3dd1ccbf9f1ec_pepsi.png"
                            alt="logo"
                        />
                    </Link>
                    <Button component={Link} to={'/sign-up'} endIcon={<LoginIcon />}>
                        Login
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
