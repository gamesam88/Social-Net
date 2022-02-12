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
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },

}

export const authoriseAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    authPostLogin(email, password, rememberMe) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe
        })
    },
    authDeleteLogin() {
        return instance.delete(`auth/login`)
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    updateMyPhoto(filePhoto) {
        const formData = new FormData()
        formData.append("image", filePhoto)
        return instance.put(`profile/photo`, formData)
    },
    updateProfileInfo(profile) {
        return instance.put(`profile`, profile)
    }

}

