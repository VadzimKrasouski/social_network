const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_PROFILE = 'SET_AUTH_PROFILE';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    authProfile: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        case SET_AUTH_PROFILE: {
            return {...state, authProfile: action.profile}
        }
        default:
            return state;
    }
}

export const setAuthUserData = (data) => ({
    type: SET_USER_DATA,
    data
})
export const setAuthProfile = (profile) => ({
    type: SET_AUTH_PROFILE,
    profile
})


export default authReducer;

