const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"

let initialState = {
    users: [
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followState: true }
                    }
                    return u
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followState: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }

        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW_USER, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW_USER, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer