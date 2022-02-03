import { profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const UPDATE_POST = "UPDATE-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    posts: [
        { id: "1", message: "Hello, how are you", like: "4" },
        { id: "2", message: "Fine, and you?", like: "7" },
        { id: "3", message: "Im fine.", like: "15" },
    ],
    newPost: "",
    userProfile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPostText = {
                id: "4",
                message: state.newPost,
                like: "0"
            }
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPostText)
            stateCopy.newPost = ""
            return stateCopy
        }
        case UPDATE_POST: {
            let stateCopy = { ...state }
            stateCopy.newPost = action.newText
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {
                ...state, userProfile: action.IncomeUserProfile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state
    }
}

export const profileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        })
    }
}

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export const setStatus = (status) => ({ type: SET_STATUS, status: status })
export const addPost = () => ({ type: ADD_POST })
export const updatePost = (text) => ({ type: UPDATE_POST, newText: text })
export const setUserProfile = (IncomeUserProfile) => (
    { type: SET_USER_PROFILE, IncomeUserProfile }
)

export default profileReducer