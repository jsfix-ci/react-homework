import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { MediaCard } from '../MediaCard';

export const PostsList = ({ elements }) => {
    return (
        <Grid container spacing={3}>
            {elements.length ? (
                elements.map(({ id, image, text, date, isFavorite }) => (
                    <Grid xs={12} sm={6} lg={4} key={id}>
                        <MediaCard image={image} title={text} date={date} isFavorite={isFavorite} />
                    </Grid>
                ))
            ) : (
                <Grid xs={12}>
                    <p>no posts :(</p>
                </Grid>
            )}
        </Grid>
    );
};
