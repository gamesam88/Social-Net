const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const CHANGE_PAGE = "CHANGE_PAGE"
const SET_TOGGE = "SET_TOGGE"
const SET_PROGRESS = "SET_PROGRESS"

let initialState = {
    users: [],
    pageSize: 4,
    totalCounts: 20,
    currentPage: 1,
    isFetching: false,
    inProgress: [],
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case CHANGE_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOGGE:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_PROGRESS:
            return {
                ...state, inProgress: action.isFetching ? [...state.inProgress, action.userId] : [state.inProgress.filter(user => user !== action.userId)]
            }
        default:
            return state
    }
}

export const follow = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const changePage = (currentPage) => ({ type: CHANGE_PAGE, currentPage })
export const changeToggle = (isFetching) => ({ type: SET_TOGGE, isFetching })
export const changeProgress = (isFetching, userId) => ({ type: SET_PROGRESS, isFetching, userId })

export default usersReducer