import { AppStateType } from "./redux-store"


export const getUsers = (state: AppStateType) => {
    return state.usersReducer.users
}

export const getPageSize = (state: AppStateType) => {
    return state.usersReducer.pageSize
}

export const getTotalCounts = (state: AppStateType) => {
    return state.usersReducer.totalCounts
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersReducer.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersReducer.isFetching
}

export const getInProgress = (state: AppStateType) => {
    return state.usersReducer.inProgress
}

export const getIsAuth = (state: AppStateType) => {
    return state.authReducer.isAuth
}

export const getPortionSize = (state: AppStateType) => {
    return state.usersReducer.portionSize
}