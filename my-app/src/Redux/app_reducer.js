
import { authoriseThunkCreator } from "./auth_reducer"

const SET_INITIALISE = "app_SET_INITIALISE"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALISE:
            return {
                ...state, initialized: true
            }

        default:
            return state
    }
}

export const initializeSuccess = () => ({ type: SET_INITIALISE })

export const initializeAppThunk = () => async (dispatch) => {
    await dispatch(authoriseThunkCreator());
    dispatch(initializeSuccess());

}


export default appReducer

