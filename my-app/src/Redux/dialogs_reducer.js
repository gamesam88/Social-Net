const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE = "UPDATE-MESSAGE"

let initialState = {
    friends: [
        { id: "1", name: "Aleks", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-88.jpg" },
        { id: "2", name: "Nazar", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-5.jpeg" },
        { id: "3", name: "Anton", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-15.jpg" },
    ],

    messages: [
        { id: "1", message: "Hellow!" },
        { id: "2", message: "Go walk!" },
        { id: "3", message: "Hellow! Of course!" },
    ],

    newMessage: "",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessage: action.newText
            }

        case ADD_MESSAGE: {
            let textBody = state.newMessage
            return {
                ...state, newMessage: "", messages: [...state.messages, {
                    id: "4",
                    message: textBody,
                    like: "0"
                }]
            }

            //      let newMessageText = {
            //        id: "4",
            //       message: state.newMessage,
            //         like: "0"
            //      }
            //       let stateCopy = { ...state }
            //       stateCopy.messages = [...state.messages]
            //        stateCopy.messages.push(newMessageText)
            //       stateCopy.newMessage = ""
            //       return stateCopy
        }
        default:
            return state
    }
}

export const AddMessageActionCreater = () => ({ type: ADD_MESSAGE })

export const updateMessageActionCreater = (text) => (
    { type: UPDATE_MESSAGE, newText: text }
)

export default dialogsReducer

