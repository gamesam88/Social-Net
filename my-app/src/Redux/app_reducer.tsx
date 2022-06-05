
import { ThunkAction } from "redux-thunk"
import { authoriseThunkCreator } from "./auth_reducer"
import { AppStateType } from "./redux-store"

const SET_INITIALISE = "app_SET_INITIALISE"

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: initializeSuccessType) => {
    switch (action.type) {
        case SET_INITIALISE:
            return {
                ...state, initialized: true
            }
        default:
            return state
    }
}

type initializeSuccessType = {
    type: typeof SET_INITIALISE
}

type ThunkTypes = ThunkAction<Promise<void>, AppStateType, unknown, initializeSuccessType>

export const initializeSuccess = (): initializeSuccessType => ({ type: SET_INITIALISE })

export const initializeAppThunk = (): ThunkTypes => async (dispatch) => {
    await dispatch(authoriseThunkCreator());
    dispatch(initializeSuccess());
}

export default appReducer

