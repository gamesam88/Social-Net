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
    addPost() {
        let newPostText = {
            id: "4",
            message: this._state.profilePage.newPost,
            like: "0"
        }
        this._state.profilePage.posts.push(newPostText);
        this._state.profilePage.newPost = "";
        this._callSubscriber(this._state);
    },
    updateNewPost(newText) {
        this._state.profilePage.newPost = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessageText = {
            id: "4",
            message: this._state.dialogsPage.newMessage
        }
        this._state.dialogsPage.messages.push(newMessageText);
        this._state.dialogsPage.newMessage = "";
        this._callSubscriber(this._state);
    },
    updateMessage(newText) {
        this._state.dialogsPage.newMessage = newText;
        this._callSubscriber(this._state);
    },
    _callSubscriber() {
        console.log("")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;