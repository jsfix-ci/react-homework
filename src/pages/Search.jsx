import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { useSearchParams } from 'react-router-dom';
import { PostsList } from '../components/PostsList';
import { getPostsAsync } from '../asyncActions/getPostsAsync';
import loadingSpinnerImg from '../assets/images/svg-icons/loading-spinner.svg';

export const Search = () => {
    const dispatch = useDispatch();
    let [searchParams] = useSearchParams();
    const { postsList, serverError, isPending } = useSelector((store) => store.searchPosts);

    const searchString = searchParams.get('q');

    useEffect(() => {
        if (!!searchString) {
            dispatch(getPostsAsync({ search: searchString }));
        }
    }, [dispatch, searchString]);

    return (
        <section>
            <Container>
                <p>search posts by "{searchString}"</p>
                {isPending && <img style={{ margin: '0 auto', width: 60 }} src={loadingSpinnerImg} alt="loading" />}
                {serverError && <p>Reload page please, failed to load data</p>}
                <PostsList elements={postsList} />
            </Container>
        </section>
    );
};
