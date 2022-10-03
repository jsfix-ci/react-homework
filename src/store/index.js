import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchPostsReducer } from './posts/searchPostsReducer';
import { mainPostsReducer } from './posts/mainPostsReducer';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers({
    searchPosts: searchPostsReducer,
    mainPosts: mainPostsReducer,
});

export const rootStore = createStore(combinedReducers, applyMiddleware(thunk));
