const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE = "UPDATE-MESSAGE"

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageText = {
                id: "4",
                message: state.newMessage,
                like: "0"
            }
            state.messages.push(newMessageText)
            state.newMessage = ""
            return state
        case UPDATE_MESSAGE:
            state.newMessage = action.newText
            return state
        default:
            return state
    }
}

export const AddMessageActionCreater = () => ({ type: ADD_MESSAGE })

export const updateMessageActionCreater = (text) => (
    { type: UPDATE_MESSAGE, newText: text }
)

export default dialogsReducer

