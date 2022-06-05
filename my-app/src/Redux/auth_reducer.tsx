import { ThunkAction } from "redux-thunk"
import { authoriseAPI } from "../api/api"
import { AppStateType } from "./redux-store"
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

enum ResultCodes {
    Success = 0,
    Error = 1
}

const authReducer = (state = initialState, action: setMyDataActionType): initialStateType => {
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

type ThunkTypes = ThunkAction<Promise<void>, AppStateType, unknown, setMyDataActionType>

export const authoriseThunkCreator = (): ThunkTypes => async (dispatch) => {
    let response = await authoriseAPI.authMe()
    if (response.resultCode === ResultCodes.Success) {
        let { id, login, email } = response.data
        dispatch(setMyData(id, email, login, true))
    }
}

type loginThunkType = {
    email: string | string
    password: string | null
    rememberMe: boolean
}

export const loginThunk = ({ email, password, rememberMe }: loginThunkType): ThunkTypes => async (dispatch) => {
    let response = await authoriseAPI.authPostLogin(email, password, rememberMe)
    if (response === ResultCodes.Success) {
        dispatch(authoriseThunkCreator())
    }
}

export const logOutThunk = (): ThunkTypes => async (dispatch) => {
    let response = await authoriseAPI.authDeleteLogin()
    if (response === ResultCodes.Success) {
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