import { ActionTypes } from "../ActionType/action-types";

const initialState = {
    products : []
}

export const listProductsReducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.LIST_PRODUCTS:
            return {...state, products: payload};    
        default:
            return state
    }
}

export const selectProductsReducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};
        case ActionTypes.REMOVED_SELECTED_PRODUCTS:
            return {};       
        default:
            return state
    }
}