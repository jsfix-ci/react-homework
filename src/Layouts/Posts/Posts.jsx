import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TabPanel } from '../../components/TabPanel';
import { PostsList } from '../../components/PostsList';
import { a11yProps } from '../../utils/helpers/a11yProps';
import loadingSpinnerImg from '../../assets/images/svg-icons/loading-spinner.svg';
import { getPostsAsync } from '../../asyncActions/getPostsAsync';

export const Posts = () => {
    const [activeTab, setActiveTab] = useState(0);
    const dispatch = useDispatch();
    const { postsList, serverError, isPending } = useSelector((store) => store.mainPosts);

    const favoritePostsList = postsList.filter(({ isFavorite }) => isFavorite);

    useEffect(() => {
        dispatch(getPostsAsync());
    }, [dispatch]);

    const handleChange = (_event, newValue) => {
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
                    {isPending && <img style={{ margin: '0 auto', width: 60 }} src={loadingSpinnerImg} alt="loading" />}
                    {serverError && <p>Reload page please, failed to load data</p>}
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
