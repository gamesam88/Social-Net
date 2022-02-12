import { profileAPI } from "../api/api"

const ADD_POST = "profile_ADD-POST"
const SET_USER_PROFILE = "profile_SET_USER_PROFILE"
const SET_STATUS = "profile_SET_STATUS"
const SET_MY_PHOTO = "profile_SET_MY_PHOTO"

let initialState = {
    posts: [
        { id: "1", message: "Hello, how are you", like: "4" },
        { id: "2", message: "Fine, and you?", like: "7" },
        { id: "3", message: "Im fine.", like: "15" },
    ],
    userProfile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPostBody = {
                id: "4",
                message: action.newPost,
                like: "0"
            }
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPostBody)
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
        case SET_MY_PHOTO: {
            return {
                ...state, userProfile: { ...state.userProfile, photos: action.photos }
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

export const savePhotoThunk = (filePhoto) => {
    return (dispatch) => {
        profileAPI.updateMyPhoto(filePhoto).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setMyPhoto(response.data.data.photos))
            }
        })
    }
}

export const saveProfileInfoThunk = (profile) => async (dispatch, getState) => {
    debugger
    const userId = getState().authReducer.userId
    const response = await profileAPI.updateProfileInfo(profile)
    if (response.data.resultCode === 0) {
        dispatch(profileThunkCreator(userId))
    }
}


export const setMyPhoto = (photos) => ({ type: SET_MY_PHOTO, photos })
export const setStatus = (status) => ({ type: SET_STATUS, status: status })
export const addPost = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (IncomeUserProfile) => (
    { type: SET_USER_PROFILE, IncomeUserProfile }
)

export default profileReducer