import { apiClient , apiClientWithToken } from "./Axios";

const token = localStorage.getItem("token");


export const getCommentByProductId = (id) => apiClientWithToken.get(`/comments/product/${id}`)

export const postComment = (comment) => apiClientWithToken.post(`/comment/user/product`, comment)