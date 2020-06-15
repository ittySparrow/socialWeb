import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "3a3c4494-211d-45d0-8327-6662b7db7236",
    },
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data);
    },
};

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(({ data }) => data.resultCode);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(({ data }) => data.resultCode);
    },
};

export const authAPI = {
    getUserData() {
        return instance.get('auth/me').then(response => response.data);
    }
}

export const profileAPI = {
    getUserProfile(userId = '2') {
        return instance.get(`profile/${userId}`).then(response => response.data);
    }
}