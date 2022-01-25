import { createStore, combineReducers } from "redux"
import profileReducer from "./profile_reducer"
import dialogsReducer from "./dialogs_reducer"
import sidebarReducer from "./sidebar_reducer"
import usersReducer from "./users_reducer"
import authReducer from "./auth_reducer"

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer
})

let store = createStore(reducers)

window.store = store

export default store