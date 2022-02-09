

export const getUsers = (state) => {
    return state.usersReducer.users
}

export const getPageSize = (state) => {
    return state.usersReducer.pageSize
}

export const getTotalCounts = (state) => {
    return state.usersReducer.totalCounts
}

export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage
}

export const getIsFetching = (state) => {
    return state.usersReducer.isFetching
}

export const getInProgress = (state) => {
    return state.usersReducer.inProgress
}

export const getIsAuth = (state) => {
    return state.authReducer.isAuth
}