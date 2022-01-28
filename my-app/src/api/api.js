import * as axios from "axios"

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: { "API-KEY": "62312a9a-a929-4e46-958b-5ad51b27d180" }
    }
)


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data.resultCode)
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data.resultCode)
    }
}

export const authMe = () => {
    return instance.get(`auth/me`).then(response => response.data)
}

export const getProfile = (id) => {
    return instance.get(`profile/${id}`).then(response => response.data)
}

