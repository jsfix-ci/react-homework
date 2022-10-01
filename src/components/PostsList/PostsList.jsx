import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { MediaCard } from '../MediaCard';

export const PostsList = ({ elements }) => {
    return (
        <Grid container spacing={3}>
            {elements.length ? (
                elements.map(({ id, _image, title, date, isFavorite }) => (
                    <Grid xs={12} sm={6} lg={4} key={id}>
                        <MediaCard
                            image={'https://api.lorem.space/image/movie?w=220&h=150'}
                            title={title}
                            date={date}
                            isFavorite={isFavorite}
                            id={id}
                        />
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
