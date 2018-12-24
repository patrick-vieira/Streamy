import {SIGN_IN, SIGN_OUT} from "../actions";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userFullName: null,
    userProfileImage: null
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.userId,
                userFullName: action.userFullName,
                userProfileImage: action.userProfileImage
            };
        case SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                userId: null,
                userFullName: null,
                userProfileImage: null
            };

        default:
            return state;
    }
};