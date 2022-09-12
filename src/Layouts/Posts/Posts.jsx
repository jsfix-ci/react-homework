import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TabPanel } from '../../components/TabPanel';
import { PostsList } from '../../components/PostsList';
import { a11yProps } from '../../helpers/a11yProps';
import loadingSpinnerImg from '../../assets/images/svg-icons/loading-spinner.svg';

export const Posts = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [errorOnLoad, setErrorOnLoad] = useState(false);
    const [loading, setLoading] = useState(false);
    const [postsList, setPostsList] = useState([]);

    const favoritePostsList = postsList.filter(({ isFavorite }) => isFavorite);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=20');
            const postsData = await response.json();
            setPostsList(postsData.results);
        } catch (err) {
            setErrorOnLoad(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <section>
            <Container>
                <Box>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                        <Tabs value={activeTab} onChange={handleChange} aria-label="posts list">
                            <Tab label="All" {...a11yProps(0)} />
                            <Tab label="My favorites" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    {loading && <img style={{ margin: '0 auto', width: 60 }} src={loadingSpinnerImg} alt="loading" />}
                    {errorOnLoad && <p>Reload page please, failed to load data</p>}
                    <TabPanel value={activeTab} index={0}>
                        <PostsList elements={postsList} />
                    </TabPanel>
                    <TabPanel value={activeTab} index={1}>
                        <PostsList elements={favoritePostsList} />
                    </TabPanel>
                </Box>
            </Container>
        </section>
    );
};
