import { authoriseAPI } from "../api/api"
const SET_USER_DATA = "auth_SET_USER_DATA"

export type initialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
}

let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,

}

const authReducer = (state = initialState, action: any): initialStateType => {
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

export const authoriseThunkCreator = () => async (dispatch: any) => {
    let response = await authoriseAPI.authMe()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setMyData(id, email, login, true))
    }
}

type loginThunkType = {
    email: string
    password: string
    rememberMe: boolean
}

export const loginThunk = ({ email, password, rememberMe }: loginThunkType) => async (dispatch: any) => {
    let response = await authoriseAPI.authPostLogin(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(authoriseThunkCreator())
    }
}

export const logOutThunk = () => async (dispatch: any) => {
    let response = await authoriseAPI.authDeleteLogin()
    if (response.data.resultCode === 0) {
        dispatch(setMyData(null, null, null, false))
    }
}


type setMyDataActionType = {
    type: typeof SET_USER_DATA
    data: {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}

export const setMyData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setMyDataActionType => (
    { type: SET_USER_DATA, data: { userId, email, login, isAuth } }
)


export default authReducer