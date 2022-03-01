import { profileAPI } from "../api/api"

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
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}

export type PhotosType = {
    small: null | string
    large: null | string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    userId: number
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

const profileReducer = (state = initialState, action: any): initialStateType => {
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

export const profileThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        })
    }
}

export const getStatusThunk = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatusThunk = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export const savePhotoThunk = (filePhoto: PhotosType) => {
    return (dispatch: any) => {
        profileAPI.updateMyPhoto(filePhoto).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setMyPhoto(response.data.data.photos))
            }
        })
    }
}

export const saveProfileInfoThunk = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    debugger
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

export const setMyPhoto = (photos: PhotosType): setMyPhotoType => ({ type: SET_MY_PHOTO, photos })
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status: status })
export const addPost = (newPost: string): addPostType => ({ type: ADD_POST, newPost })
export const setUserProfile = (IncomeUserProfile: ProfileType): setUserProfileType => (
    { type: SET_USER_PROFILE, IncomeUserProfile }
)

export default profileReducer