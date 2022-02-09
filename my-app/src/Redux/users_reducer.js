import { usersAPI } from "../api/api"

const FOLLOW_USER = "users_FOLLOW_USER"
const UNFOLLOW_USER = "users_UNFOLLOW_USER"
const SET_USERS = "users_SET_USERS"
const CHANGE_PAGE = "users_CHANGE_PAGE"
const SET_TOGGE = "users_SET_TOGGE"
const SET_PROGRESS = "users_SET_PROGRESS"
const TOTAL_COUNTS = "users_TOTAL_COUNTS"

const initialState = {
    users: [],
    pageSize: 20,
    totalCounts: 50,
    currentPage: 1,
    isFetching: false,
    inProgress: [],
}

const usersReducer = (state = initialState, action) => {
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
                ...state, users: action.users,
            }
        case CHANGE_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOGGE:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOTAL_COUNTS:
            return {
                ...state, totalCounts: action.totalCounts
            }
        case SET_PROGRESS:
            return {
                ...state, inProgress: action.isFetching ? [...state.inProgress, action.userId] : [state.inProgress.filter(user => user !== action.userId)]
            }
        default:
            return state
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(changeToggle(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(changeToggle(false))
                dispatch(setUsers(response.items))
                dispatch(changePage(currentPage))
                dispatch(setTotalCounts(response.totalCount))

            })
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(changeProgress(true, userId))
        usersAPI.followUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(changeProgress(false, userId))
        })
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(changeProgress(true, userId))
        usersAPI.unfollowUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(changeProgress(false, userId))
        })
    }
}

export const follow = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setTotalCounts = (totalCounts) => ({ type: TOTAL_COUNTS, totalCounts })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const changePage = (currentPage) => ({ type: CHANGE_PAGE, currentPage })
export const changeToggle = (isFetching) => ({ type: SET_TOGGE, isFetching })
export const changeProgress = (isFetching, userId) => ({ type: SET_PROGRESS, isFetching, userId })

export default usersReducer