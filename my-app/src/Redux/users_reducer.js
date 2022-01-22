const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const CHANGE_PAGE = "CHANGE_PAGE"

let initialState = {
    users: [],
    pageSize: 4,
    totalCounts: 20,
    currentPage: 1,

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
                ...state, users: [...action.users]
            }
        case CHANGE_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW_USER, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW_USER, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export const changePageAC = (currentPage) => ({ type: CHANGE_PAGE, currentPage })

export default usersReducer