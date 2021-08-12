import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
};

let axiosInstance = axios.create(config);

const getUsers = () => {
    return axiosInstance.get('users');
};

const getUsersPost = (id) => {
    return axiosInstance.get(`users/${id}/posts`)
}

const getPostComments = (id) => {
    return axiosInstance.get(`posts/${id}/comments`)
}

export {getUsers, getUsersPost, getPostComments}