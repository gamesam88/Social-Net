
import { authoriseThunkCreator } from "./auth_reducer"

const SET_INITIALISE = "app_SET_INITIALISE"

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any) => {
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

export const initializeSuccess = (): initializeSuccessType => ({ type: SET_INITIALISE })

export const initializeAppThunk = () => async (dispatch: any) => {
    await dispatch(authoriseThunkCreator());
    dispatch(initializeSuccess());

}


export default appReducer

