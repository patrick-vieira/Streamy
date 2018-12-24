import streams from "../../../apis/streams";
import history from '../../../history'

export const CREATE_STREAM = 'CREATE_STREAM';
export const FETCH_STREAMS = 'FETCH_STREAMS';
export const FETCH_STREAM = 'FETCH_STREAM';
export const DELETE_STREAM = 'DELETE_STREAM';
export const EDIT_STREAM = 'EDIT_STREAM';

export const createStream = (formValues) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId: userId });

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });

    history.push('/');
};


export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get('/streams');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })

};

export const fetchStream = (id) => async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
};


export const deleteStream = (id) => async (dispatch) => {
    const response = await streams.delete(`/streams/${id}`);

    console.log(response);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    });

    history.push('/');
};


export const editStream = (streamId, formValues) => async (dispatch) => {
    const response = await streams.patch(`/streams/${streamId}`, formValues);

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });

    // history.push(`/streams/show/${response.data.id}`);

    history.push('/');
};