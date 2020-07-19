import {profileAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    profile: null,
    posts: [
        {id: 1, post: 'This is my first post.', likesCount: 11},
        {id: 2, post: 'You will know React and Redux perfectly.', likesCount: 10},
        {id: 3, post: 'But It is not for sure.', likesCount: 1},
        {id: 4, post: "So, let's work hard.", likesCount: 4},
        {id: 5, post: "BLA, bla, bLa.", likesCount: 0},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                post: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText
            }
            case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

//actions

export const updatePost = (postText) => ({
    type: UPDATE_NEW_POST_TEXT, postText
})
export const addPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

//Thunks

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}
export default profileReducer;