import { REQUEST_START, REQUEST_FINISH, REQUEST_SUCCESS, REQUEST_ERROR } from './actions';

const defaultState = {
    postsList: [],
    serverError: false,
    isPending: false,
};

export const mainPostsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_START:
            return { ...state, isPending: true };
        case REQUEST_FINISH:
            return { ...state, isPending: false };
        case REQUEST_SUCCESS:
            return { ...state, postsList: action.payload };
        case REQUEST_ERROR:
            return { ...state, serverError: true };
        default:
            return state;
    }
};
