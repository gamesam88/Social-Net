import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";




let store = {
    _state: {
        profilePage: {
            posts: [
                { id: "1", message: "Hello, how are you", like: "4" },
                { id: "2", message: "Fine, and you?", like: "7" },
                { id: "3", message: "Im fine.", like: "15" },
            ],
            newPost: "",
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                { id: "1", name: "Aleks", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-88.jpg" },
                { id: "2", name: "Nazar", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-5.jpeg" },
                { id: "3", name: "Anton", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-15.jpg" },
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
    }

}

export default store;