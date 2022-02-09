import { authoriseAPI } from "../api/api"
const SET_USER_DATA = "auth_SET_USER_DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const authoriseThunkCreator = () => async (dispatch) => {
    let response = await authoriseAPI.authMe()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setMyData(id, email, login, true))
    }
}

export const loginThunk = ({ email, password, rememberMe }) => async (dispatch) => {
    let response = await authoriseAPI.authPostLogin(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(authoriseThunkCreator())
    }
}

export const logOutThunk = () => {
    return (dispatch) => {
        authoriseAPI.authDeleteLogin().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setMyData(null, null, null, false))
            }
        })
    }
}



export const setMyData = (userId, email, login, isAuth) => (
    { type: SET_USER_DATA, data: { userId, email, login, isAuth } }
)


export default authReducer