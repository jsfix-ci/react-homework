import { createSearchParams } from 'react-router-dom';
import { setRequestStart, setRequestFinish, setRequestSuccess, setRequestError } from '../store/posts/actions';
import { GET_POSTS } from '../utils/constants/endpoints';

export const getPostsAsync = (params) => {
    let queryParams = {
        limit: 20,
    };

    if (params) {
        queryParams = { ...queryParams, ...params };
    }

    return async (dispatch) => {
        dispatch(setRequestStart());
        try {
            const response = await fetch(`${GET_POSTS}/?${createSearchParams(queryParams)}`);
            const postsData = await response.json();
            dispatch(setRequestSuccess(postsData.results));
        } catch (err) {
            dispatch(setRequestError());
        } finally {
            dispatch(setRequestFinish());
        }
    };
};
