
type friendsType = {
    id: number
    name: string
    ava: string
}

let initialState = {
    friends: [
        { id: 1, name: "Aleks", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-88.jpg" },
        { id: 2, name: "Nazar", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-5.jpeg" },
        { id: 3, name: "Anton", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-15.jpg" },
    ] as Array<friendsType>
}

const sidebarReducer = (state = initialState, action: any) => {
    return state
}

export default sidebarReducer