const ADD_MESSAGE = "dialogs_ADD-MESSAGE"

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state, messages: [...state.messages, {
                    id: "4",
                    message: action.message,
                    like: "0"
                }]
            }
        }
        default:
            return state
    }
}

export const AddMessageActionCreater = (message) => ({ type: ADD_MESSAGE, message })

export default dialogsReducer

