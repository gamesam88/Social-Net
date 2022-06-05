import axios from "axios"
import { PhotosType, ProfileType } from "../Redux/profile_reducer"

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
    unfollowUser(userId: number | null) {
        return instance.delete(`follow/${userId}`)
    },
    followUser(userId: number | null) {
        return instance.post(`follow/${userId}`)
    },
}

type MeType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

export const authoriseAPI = {
    authMe() {
        return instance.get<MeType>(`auth/me`).then(response => response.data)
    },
    authPostLogin(email: string | null, password: string | null, rememberMe = false) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe
        }).then(response => response.data.resultCode)
    },
    authDeleteLogin() {
        return instance.delete(`auth/login`).then(response => response.data.resultCode)
    }

}



export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId: number | null) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status })
    },
    updateMyPhoto(filePhoto: any) {
        const formData = new FormData()
        formData.append("image", filePhoto)
        return instance.put(`profile/photo`, formData)
    },
    updateProfileInfo(profile: ProfileType) {
        return instance.put(`profile`, profile)
    }

}

