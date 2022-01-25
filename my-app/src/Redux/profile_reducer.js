const ADD_POST = "ADD-POST"
const UPDATE_POST = "UPDATE-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        { id: "1", message: "Hello, how are you", like: "4" },
        { id: "2", message: "Fine, and you?", like: "7" },
        { id: "3", message: "Im fine.", like: "15" },
    ],
    newPost: "",
    userProfile: null

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
        case SET_USER_PROFILE:
            return {
                ...state, userProfile: action.IncomeUserProfile
            }
        default:
            return state
    }
}

export const addPost = () => ({ type: ADD_POST })

export const updatePost = (text) => (
    { type: UPDATE_POST, newText: text }
)
export const setUserProfile = (IncomeUserProfile) => (
    { type: SET_USER_PROFILE, IncomeUserProfile }
)

export default profileReducer