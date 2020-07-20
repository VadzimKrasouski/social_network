import {authAPI} from "../api/api";

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

//Actions
export const setAuthUserData = (data) => ({
    type: SET_USER_DATA,
    data
})
export const setAuthProfile = (profile) => ({
    type: SET_AUTH_PROFILE,
    profile
})

//Thunks
export const getAuthUserData = () => (dispatch, getState) => {
    authAPI.getAuthUserData()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data));
            }
            let currentId = getState().auth.id
            authAPI.getAuthProfile(currentId)
                .then(data => {
                    dispatch(setAuthProfile(data));
                })
        })
}

export default authReducer;

