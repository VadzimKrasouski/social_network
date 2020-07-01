const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_ISFETCHING = 'TOGGLE-ISFETCHING';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case TOGGLE_ISFETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case SET_CURRENT_PAGE: {
            debugger
            return {...state, currentPage: action.currentPage}
        }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_ISFETCHING, isFetching})


export default usersReducer;

/*{id: 1, followed: true, fullName: 'Dmitry', status: "I'm a programmer", location: {city: 'Minsk', country: 'Belarus'}},
       {id: 2, followed: false, fullName: 'Victor', status: 'We will rock you', location: {city: 'Moscow', country: 'Russia'}},
       {id: 3, followed: true, fullName: 'Ann', status: "I'm a programmer, too", location: {city: 'Vitebsk', country: 'Belarus'}},
       {id: 4, followed: false, fullName: 'Fill', status: 'I like it', location: {city: 'Warsaw', country: 'Poland'}},
       {id: 5, followed: true, fullName: 'Inna', status: "Cooool", location: {city: 'Minsk', country: 'Belarus'}},*/