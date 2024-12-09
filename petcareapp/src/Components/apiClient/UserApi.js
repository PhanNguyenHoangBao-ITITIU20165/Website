

import { apiClient , apiClientWithToken } from "./Axios"

const token = localStorage.getItem("token");


export const checkLogin = (user) => apiClient.post('/login', user)
export const checkRegister = (user) => apiClient.post('/register', user)
//OTP
export const verifyOTP = (OTP) => apiClient.post('/verify', OTP)
export const resendOTP = (user) => apiClient.post('/resendOtp', user)


export const getUsers = () => apiClientWithToken.get('/jpa/users')

export const getUserByUsername = (username) => apiClientWithToken.get(`/users/${username}`)

export const getOrderedProduct = (username) => apiClientWithToken.get(`/users/${username}/orederedProducts`)

export const getUserInformation = (username) => apiClientWithToken.get(`/users/${username}`)

export const getUserChangeInformation = (username) => apiClientWithToken.get(`/user/userChangeInformation/${username}`)

export const changeUserInformation = (user) => apiClientWithToken.put('/user/userChangeInformation/update', user)
