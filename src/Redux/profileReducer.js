import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    profile: null,
    status: '',
    posts: [
        {id: 1, post: 'This is my first post.', likesCount: 11},
        {id: 2, post: 'You will know React and Redux perfectly.', likesCount: 10},
        {id: 3, post: 'But It is not for sure.', likesCount: 1},
        {id: 4, post: 'So, let\'s work hard.', likesCount: 4},
        {id: 5, post: 'BLA, bla, bLa.', likesCount: 0},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                post: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default: return state;
    }
}

//actions
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

//Thunks
export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data));
        })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(resultCode => {
            if (resultCode === 0)
                dispatch(setUserStatus(status));
        })
}

export default profileReducer;