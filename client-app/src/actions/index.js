import JsonPlaceHolder from "../apis/JsonPlaceHolder";

export const fetchPostsOldSintax = () => {
    return async function(dispatch, getState) {
        const response = await JsonPlaceHolder.get('/posts');
        return dispatch ({ type: 'FETCH_POSTS', payload: response })       
    }
};

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await JsonPlaceHolder.get('/posts');
    dispatch ({ type: 'FETCH_POSTS', payload: response })        
};
