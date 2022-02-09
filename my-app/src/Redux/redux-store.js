import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import profileReducer from "./profile_reducer"
import dialogsReducer from "./dialogs_reducer"
import sidebarReducer from "./sidebar_reducer"
import usersReducer from "./users_reducer"
import authReducer from "./auth_reducer"
import appReducer from "./app_reducer"


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer,
    appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store

export default store