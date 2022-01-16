const ADD_POST = "ADD-POST"
const UPDATE_POST = "UPDATE-POST"

let initialState = {
    posts: [
        { id: "1", message: "Hello, how are you", like: "4" },
        { id: "2", message: "Fine, and you?", like: "7" },
        { id: "3", message: "Im fine.", like: "15" },
    ],
    newPost: "",
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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updatePostActionCreater = (text) => (
    { type: UPDATE_POST, newText: text }
)

export default profileReducer