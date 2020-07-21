import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '050a8d41-9f35-43de-9492-051e4cb1b78a'
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data.resultCode)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data.resultCode)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data.resultCode)
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getAuthProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    }
}

