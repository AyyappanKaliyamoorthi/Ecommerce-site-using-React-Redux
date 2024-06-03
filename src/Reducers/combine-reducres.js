import { listProductsReducer,selectProductsReducer } from "./Product-reducers";
import {combineReducers} from 'redux'


export const reducers = combineReducers({
    listProducts : listProductsReducer,
    product : selectProductsReducer
})