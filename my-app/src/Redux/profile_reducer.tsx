import { ThunkAction } from "redux-thunk"
import { profileAPI } from "../api/api"
import { AppStateType } from "./redux-store"

const ADD_POST = "profile_ADD-POST"
const SET_USER_PROFILE = "profile_SET_USER_PROFILE"
const SET_STATUS = "profile_SET_STATUS"
const SET_MY_PHOTO = "profile_SET_MY_PHOTO"

export type postsType = {
    id: number
    message: string
    like: number
}

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    id: number
    followed: boolean
    name: string
    status: string
}

export type initialStateType = typeof initialState

const initialState = {
    posts: [
        { id: 1, message: "Hello, how are you", like: 4 },
        { id: 2, message: "Fine, and you?", like: 7 },
        { id: 3, message: "Im fine.", like: 15 },
    ] as Array<postsType>,
    userProfile: null as ProfileType | null,
    status: ""
}

const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPostBody = {
                id: 4,
                message: action.newPost,
                like: 0
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
                ...state, userProfile: { ...state.userProfile, photos: action.photos } as ProfileType
            }
        }

        default:
            return state
    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const profileThunkCreator = (userId: number | null): ThunkType => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}

export const getStatusThunk = (userId: number | null): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatusThunk = (status: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export const savePhotoThunk = (filePhoto: PhotosType): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateMyPhoto(filePhoto)
    if (response.data.resultCode === 0) {
        dispatch(setMyPhoto(response.data.data.photos))
    }
}



export const saveProfileInfoThunk = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().authReducer.userId
    const response = await profileAPI.updateProfileInfo(profile)
    if (response.data.resultCode === 0) {
        dispatch(profileThunkCreator(userId))
    }
}


type setMyPhotoType = {
    type: typeof SET_MY_PHOTO
    photos: PhotosType
}
type setStatusType = {
    type: typeof SET_STATUS
    status: string
}
type addPostType = {
    type: typeof ADD_POST
    newPost: string
}
type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    IncomeUserProfile: ProfileType
}

type ActionsTypes = setMyPhotoType | setStatusType | addPostType | setUserProfileType

export const setMyPhoto = (photos: PhotosType): setMyPhotoType => ({ type: SET_MY_PHOTO, photos })
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status: status })
export const addPost = (newPost: string): addPostType => ({ type: ADD_POST, newPost })
export const setUserProfile = (IncomeUserProfile: ProfileType): setUserProfileType => (
    { type: SET_USER_PROFILE, IncomeUserProfile }
)

export default profileReducer