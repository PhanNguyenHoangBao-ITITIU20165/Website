import { apiClient } from "./Axios";
import {apiClientWithToken} from "./Axios";


const token = localStorage.getItem("token");

export const postBooking = (object) => apiClientWithToken.post('/bookingdate/post')

export const getBookingHistoryByUsername = (username) => apiClientWithToken.get(`/bookingdate/all/user/${username}`)