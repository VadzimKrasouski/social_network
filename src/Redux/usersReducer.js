const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

let initialState = {
    users: [ ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 4

}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case FOLLOW:
            return {
                ...state,
            users: state.users.map( u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;
            })}
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalusersCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})


export default usersReducer;

/*{id: 1, followed: true, fullName: 'Dmitry', status: "I'm a programmer", location: {city: 'Minsk', country: 'Belarus'}},
       {id: 2, followed: false, fullName: 'Victor', status: 'We will rock you', location: {city: 'Moscow', country: 'Russia'}},
       {id: 3, followed: true, fullName: 'Ann', status: "I'm a programmer, too", location: {city: 'Vitebsk', country: 'Belarus'}},
       {id: 4, followed: false, fullName: 'Fill', status: 'I like it', location: {city: 'Warsaw', country: 'Poland'}},
       {id: 5, followed: true, fullName: 'Inna', status: "Cooool", location: {city: 'Minsk', country: 'Belarus'}},*/