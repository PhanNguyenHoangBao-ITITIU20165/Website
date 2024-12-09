
import { apiClient , apiClientWithToken } from "./Axios";



export const getProductOnCart = (username) => apiClientWithToken.get(`/cart/getItemOnCart/${username}`)

export const updateQuantityCartItem = (cartDTO) => apiClientWithToken.put('/cart/update/quantity', cartDTO)

export const deleteCartItem = (cartDTOId) => apiClientWithToken.delete(`/cart/${cartDTOId}`)

export const addProductOnCart = (addToCartRequest) => apiClientWithToken.post('/cart', addToCartRequest)

export const flushCartItemToOrderedProduct = (cartDTOList) => apiClientWithToken.patch('/orderedproduct/checkout', cartDTOList)

