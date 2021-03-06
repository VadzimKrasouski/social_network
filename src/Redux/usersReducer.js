import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_MORE_USERS = 'SET_MORE_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_SHOW_MORE_CURRENT_PAGE = 'SET_SHOW_MORE_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_SEARCH_NAME = 'SET_SEARCH_NAME';

let initialState = {
    users: [],
    searchName: '',
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    showMoreCurrentPage: 2,
    portionSize: 10,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_MORE_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
                showMoreCurrentPage: action.currentPage + 1
            }
        }
        case SET_SHOW_MORE_CURRENT_PAGE: {
            return {...state, showMoreCurrentPage: state.showMoreCurrentPage + 1}
        }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_SEARCH_NAME:
            return {...state, searchName: action.searchName}
        default:
            return state;
    }
}

//Actions
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setMoreUsers = (users) => ({type: SET_MORE_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setSowMoreCurrentPage = () => ({type: SET_SHOW_MORE_CURRENT_PAGE})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
})
export const setSearchName = (searchName) => ({type: SET_SEARCH_NAME, searchName})

//Thunks
export const getUsers = (currentPage, pageSize, searchName) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize, searchName)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        })
        .catch(error => {
            console.log(error)
            dispatch(toggleIsFetching(false));
        })
}
export const moreGetUsers = (showMoreCurrentPage, pageSize, searchName) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(showMoreCurrentPage, pageSize, searchName)
        .then(data => {
            dispatch(setMoreUsers(data.items));
            dispatch(toggleIsFetching(false));
        })
        .catch(error => {
            console.log(error)
            dispatch(toggleIsFetching(false));
        })
}
export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
        .then(resultCode => {
            if (resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
}
export const unFollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unFollow(userId)
        .then(resultCode => {
            if (resultCode === 0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
}
export default usersReducer;

