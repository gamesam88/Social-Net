import { ThunkAction } from "redux-thunk"
import { usersAPI } from "../api/api"
import { ProfileType } from "./profile_reducer"
import { AppStateType } from "./redux-store"

const FOLLOW_USER = "users_FOLLOW_USER"
const UNFOLLOW_USER = "users_UNFOLLOW_USER"
const SET_USERS = "users_SET_USERS"
const CHANGE_PAGE = "users_CHANGE_PAGE"
const SET_TOGGE = "users_SET_TOGGE"
const SET_PROGRESS = "users_SET_PROGRESS"
const TOTAL_COUNTS = "users_TOTAL_COUNTS"


const initialState = {
    users: [] as Array<ProfileType>,
    pageSize: 20,
    totalCounts: 50,
    portionSize: 10,
    currentPage: 1,
    isFetching: false,
    inProgress: [] as Array<number>,
}

type initialState = typeof initialState

const usersReducer = (state = initialState, action: ActionsUsersTypes): initialState => {
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
                ...state, inProgress: action.isFetching ? [...state.inProgress, action.userId] : state.inProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsUsersTypes>

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(changeToggle(true))
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(changeToggle(false))
    dispatch(setUsers(response.items))
    dispatch(changePage(currentPage))
    dispatch(setTotalCounts(response.totalCount))
}

export const followThunkCreator = (userId: number): ThunkType => async (dispatch) => {
    dispatch(changeProgress(true, userId))
    let response = await usersAPI.followUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(changeProgress(false, userId))
}

export const unfollowThunkCreator = (userId: number): ThunkType => async (dispatch) => {
    dispatch(changeProgress(true, userId))
    let response = await usersAPI.unfollowUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(unfollow(userId))
    }
    dispatch(changeProgress(false, userId))
}

type ActionsUsersTypes = Follow | Unfollow | SetTotalCounts | SetUsers | ChangePage | ChangeToggle | ChangeProgress

type Follow = {
    type: typeof FOLLOW_USER
    userId: number
}
export const follow = (userId: number): Follow => ({ type: FOLLOW_USER, userId })

type Unfollow = {
    type: typeof UNFOLLOW_USER
    userId: number
}
export const unfollow = (userId: number): Unfollow => ({ type: UNFOLLOW_USER, userId })

type SetTotalCounts = {
    type: typeof TOTAL_COUNTS
    totalCounts: number
}
export const setTotalCounts = (totalCounts: number): SetTotalCounts => ({ type: TOTAL_COUNTS, totalCounts })

type SetUsers = {
    type: typeof SET_USERS
    users: Array<ProfileType>
}
export const setUsers = (users: Array<ProfileType>): SetUsers => ({ type: SET_USERS, users })

type ChangePage = {
    type: typeof CHANGE_PAGE
    currentPage: number
}
export const changePage = (currentPage: number): ChangePage => ({ type: CHANGE_PAGE, currentPage })

type ChangeToggle = {
    type: typeof SET_TOGGE
    isFetching: boolean
}
export const changeToggle = (isFetching: boolean): ChangeToggle => ({ type: SET_TOGGE, isFetching })

type ChangeProgress = {
    type: typeof SET_PROGRESS
    userId: number
    isFetching: boolean
}
export const changeProgress = (isFetching: boolean, userId: number): ChangeProgress => ({ type: SET_PROGRESS, isFetching, userId })


export default usersReducer