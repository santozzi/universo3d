import { getOrderById, saveOrderModel } from '../models/firebase/orders.model'

export const saveOrderService = (order) => {
    return saveOrderModel(order);
}

export const getOrderByIdService=(id)=>{

    return getOrderById(id);
}