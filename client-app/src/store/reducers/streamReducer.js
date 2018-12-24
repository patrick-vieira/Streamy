import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS} from "../actions/streams";
import _ from "lodash";

const INITIAL_STATE = {

};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_STREAM:
        case EDIT_STREAM:
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            let mapKeys = _.mapKeys(action.payload, 'id');
            return {...state, ...mapKeys};

        default:
            return state;
    }
};