// libraries
import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// components
import { TabPanel } from '../../components/TabPanel';
import { MediaCard } from '../../components/MediaCard';
// helpers
import { a11yProps } from '../../helpers/a11yProps';
// static
import loadingSpinnerImg from '../../assets/images/svg-icons/loading-spinner.svg';

const renderPosts = (posts) =>
    posts.length ? (
        posts.map(({ id, image, text, date, isFavorite }) => (
            <Grid xs={12} sm={6} lg={4} key={id}>
                <MediaCard image={image} title={text} date={date} isFavorite={isFavorite} />
            </Grid>
        ))
    ) : (
        <Grid xs={12}>
            <p>no posts :(</p>
        </Grid>
    );

export const Posts = () => {
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [postsList, setPostsList] = useState([]);

    const favoritPostsList = postsList.filter(({ isFavorite }) => isFavorite);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://60f699f318254c00176e0362.mockapi.io/posts');
            const postsData = await response.json();
            setPostsList(postsData);
        } catch (err) {
            alert(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section>
            <Container>
                <Box sx={{ minHeight: '70vh' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                        <Tabs value={value} onChange={handleChange} aria-label="posts list">
                            <Tab label="All" {...a11yProps(0)} />
                            <Tab label="My favorites" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    {loading && <img style={{ margin: '0 auto', width: 60 }} src={loadingSpinnerImg} alt="loading" />}
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={3}>
                            {renderPosts(postsList)}
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={3}>
                            {renderPosts(favoritPostsList)}
                        </Grid>
                    </TabPanel>
                </Box>
            </Container>
        </section>
    );
};
