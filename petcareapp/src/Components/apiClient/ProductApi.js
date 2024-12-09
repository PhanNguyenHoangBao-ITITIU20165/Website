
import { apiClient, apiClientWithToken } from "./Axios";



export const getProducts = () => apiClientWithToken.get('/products')



export const getProductDetail = (id) => apiClientWithToken.get(`/product/${id}`)

// export const getProductByConstraint = (token, Constraint) => {
//     return apiClient.get(`/products/constraints/${Constraint}`, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     })

// }

export const getProductByConstraint = (Constraint) => apiClientWithToken.get(`/products/constraints/${Constraint}`)
         

export const getProductByInStock = () => apiClientWithToken.get('/products/inStock')
