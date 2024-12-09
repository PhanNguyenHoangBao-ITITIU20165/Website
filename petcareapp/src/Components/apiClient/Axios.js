import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://146.190.195.162/is/v1',
});

export const apiClientWithToken = axios.create({
    baseURL: 'http://146.190.195.162/is/v1',
})

apiClientWithToken.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Replace with your method of storing the token
        console.log(token)
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);