import { privateAxios, publicAxios } from "../components/config/AxiosConfig";
import { STATUS_PAID } from "../components/config/Constant";

//Create Orders for a User
export const createOrder = async (orderData) => {
    const result = await privateAxios.post("/orders", orderData);
    return result.data;
}

//Get Orders by User ID
export const getOrdersByUserId = async (userId) => {
    const result = await publicAxios.get(`/orders/user/${userId}`);
    return result.data;
}

//Get Order
export const getOrder =async () =>{
    const result = await publicAxios.get(`/orders`);
    return result.data;
}
//Verify Payment
export const verifypayments =async (paymentDetails) =>{
    const result = await privateAxios.post(`/orders/verify`, paymentDetails);
    return result.data;
}

//Get Order by userId and Status
export const getOrderByUserIdAndStatus = async (userId, status=STATUS_PAID) => {
    const result = await privateAxios.get(`/orders/user/${userId}/status/${status}`);
    return result.data;
}



