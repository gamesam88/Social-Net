const ADD_POST = "ADD-POST"
const UPDATE_POST = "UPDATE-POST"

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostText = {
                id: "4",
                message: state.newPost,
                like: "0"
            }
            state.posts.push(newPostText)
            state.newPost = ""
            return state
        case UPDATE_POST:
            state.newPost = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updatePostActionCreater = (text) => (
    { type: UPDATE_POST, newText: text }
)

export default profileReducer