import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { GET_POSTS } from '../../utils/constants/endpoints';
import { NOT_FOUND } from '../../utils/constants/routs';

export const PostDetails = () => {
    const navigate = useNavigate();
    const [errorOnLoad, setErrorOnLoad] = useState(false);
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const { postId } = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch(`${GET_POSTS}/${postId}`);
            const postsData = await response.json();
            if (response.status !== 200) {
                navigate(NOT_FOUND);
            }
            setPost(postsData);
        } catch (err) {
            setErrorOnLoad(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (errorOnLoad) {
        return 'server error, reload page please';
    }

    return (
        <section>
            <Container>
                <Grid container spacing={2}>
                    {!loading ? (
                        <>
                            <Grid xs={4}>
                                <img src="https://api.lorem.space/image/movie?w=400&h=400" alt="" />
                            </Grid>
                            <Grid xs={8}>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {new Date(post.date).toDateString()}
                                </Typography>
                                <Typography variant="h1" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography>{post.text}</Typography>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid xs={4}>
                                <Skeleton variant="rounded" height={400} />
                            </Grid>
                            <Grid xs={8}>
                                <Skeleton variant="rounded" width={100} />
                                <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            </Grid>
                        </>
                    )}
                </Grid>
            </Container>
        </section>
    );
};
