import { rerenderEntireTree } from "../render"

let state = {
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
}

{/* -------   Add_new_Post  -----        */ }

export let addPost = () => {
    let newPost = {
        id: "4",
        message: state.profilePage.newPost,
        like: "0"
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPost = "";
    rerenderEntireTree(state);
}

export let updateNewPost = (newText) => {
    state.profilePage.newPost = newText;
    rerenderEntireTree(state);
}

{/* -------   Add_new_Message  -----        */ }

export let addMessage = () => {
    let newMessageText = {
        id: "4",
        message: state.dialogsPage.newMessage
    }
    state.dialogsPage.messages.push(newMessageText);
    state.dialogsPage.newMessage = "";
    rerenderEntireTree(state);
}

export let updateMessage = (newText) => {
    state.dialogsPage.newMessage = newText;
    rerenderEntireTree(state);
}

export default state;