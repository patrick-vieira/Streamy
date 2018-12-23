import {SIGN_IN, SIGN_OUT} from "../actions";

const INITIAL_STATE = {
    isSignedIn: null,
    user: null
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, user: action.user };
        case SIGN_OUT:
            return {...state, isSignedIn: false, user: null};

        default:
            return state;
    }
};