export const REQUEST_START = 'REQUEST_START';
export const REQUEST_FINISH = 'REQUEST_FINISH';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const setRequestStart = () => ({ type: REQUEST_START });
export const setRequestFinish = () => ({ type: REQUEST_FINISH });
export const setRequestSuccess = (data) => ({ type: REQUEST_SUCCESS, payload: data });
export const setRequestError = () => ({ type: REQUEST_ERROR });
