import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import { Box } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../../utils/context/themeContext';
import { SIGNUP } from '../../utils/constants/routs';
import styles from './style.module.css';

export const Header = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.classList.toggle('dark');
    }, [darkTheme]);

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
                    <button onClick={() => setDarkTheme(!darkTheme)} className={styles.themeSwitcher}>
                        <DarkModeIcon />
                    </button>
                    <Button component={Link} to={SIGNUP} endIcon={<LoginIcon />}>
                        Login
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
