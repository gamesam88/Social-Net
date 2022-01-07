let state = {
    profilePage: {
        posts: [
            { id: "1", message: "Hello, how are you", like: "4" },
            { id: "2", message: "Fine, and you?", like: "7" },
            { id: "3", message: "Im fine.", like: "15" },
        ],
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
    },
    sideBar: {
        friends: [
            { id: "1", name: "Aleks", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-88.jpg" },
            { id: "2", name: "Nazar", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-5.jpeg" },
            { id: "3", name: "Anton", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-15.jpg" },
        ]
    }
}
export let addPost = (postMessage) => {
    let newPost = {
        id: "4",
        message: postMessage,
        like: "0"
    }
    state.profilePage.posts.push(newPost)
}

export default state;