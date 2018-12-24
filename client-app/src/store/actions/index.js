
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const signIn = (user) => {
    return {
        type: SIGN_IN,
        userId: user.Eea,
        userFullName: user.ig,
        userFirstName: user.ofa,
        userLastName: user.wea,
        userEmail: user.U3,
        userProfileImage: user.Paa


    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};


