// libraries
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// components
import { TabPanel } from '../../components/TabPanel';
import { MediaCard } from '../../components/MediaCard';
// mock
import { POSTS_LIST } from '../../mockData/postsList';
// helpers
import { a11yProps } from '../../helpers/a11yProps';

export const Posts = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section>
            <Container>
                <Box sx={{ minHeight: '70vh' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="posts list">
                            <Tab label="All" {...a11yProps(0)} />
                            <Tab label="My favorites" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={2}>
                            {POSTS_LIST.map(({ id, image, text, date, isFavorite }) => (
                                <Grid xs={4}>
                                    <MediaCard
                                        key={id}
                                        image={image}
                                        title={text}
                                        date={date}
                                        isFavorite={isFavorite}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={2}>
                            {POSTS_LIST.filter(({ isFavorite }) => isFavorite).map(
                                ({ id, image, text, date, isFavorite }) => (
                                    <Grid xs={4}>
                                        <MediaCard
                                            key={id}
                                            image={image}
                                            title={text}
                                            date={date}
                                            isFavorite={isFavorite}
                                        />
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </TabPanel>
                </Box>
            </Container>
        </section>
    );
};
