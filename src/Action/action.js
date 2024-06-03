import { ActionTypes } from "../ActionType/action-types";

export const listProductsFn =(products)=>{
    return{
        type:ActionTypes.LIST_PRODUCTS,
        payload:products
    }
}

export const selectedProducts =(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product
    }
}

export const removeSelectedProducts =(product)=>{
    return{
        type:ActionTypes.REMOVED_SELECTED_PRODUCTS
    }
}